-- Spelhörnan: delad topplista mellan enheter.
-- Klistra in allt i Supabase > SQL Editor och tryck Run. Det går att köra flera gånger.

create table if not exists spelare (
  id text primary key,
  namn text not null check (char_length(namn) between 1 and 16),
  sym text,
  borttagen boolean not null default false,
  andrad timestamptz not null default now()
);

create table if not exists rekord (
  spelare_id text not null references spelare(id) on delete cascade,
  spel text not null check (char_length(spel) <= 40),
  gren text not null check (char_length(gren) <= 80),
  poang numeric not null,
  max numeric,
  tid integer,
  namn text check (char_length(namn) <= 80),
  t timestamptz not null default now(),
  primary key (spelare_id, spel, gren)
);

alter table spelare enable row level security;
alter table rekord enable row level security;

-- Alla som besöker sidan får läsa topplistan.
drop policy if exists "läsa spelare" on spelare;
create policy "läsa spelare" on spelare for select to anon using (true);
drop policy if exists "läsa rekord" on rekord;
create policy "läsa rekord" on rekord for select to anon using (true);

-- Skapa och ändra spelare (ta bort = borttagen sätts till true).
drop policy if exists "ny spelare" on spelare;
create policy "ny spelare" on spelare for insert to anon with check (true);
drop policy if exists "ändra spelare" on spelare;
create policy "ändra spelare" on spelare for update to anon using (true) with check (true);

-- Rekord skrivs bara via den här funktionen, som aldrig ersätter ett bättre resultat.
create or replace function spara_rekord(
  p_spelare text, p_spel text, p_gren text, p_poang numeric,
  p_max numeric, p_tid integer, p_namn text
) returns void
language sql security definer set search_path = public as $$
  insert into rekord as r (spelare_id, spel, gren, poang, max, tid, namn, t)
  values (p_spelare, p_spel, p_gren, p_poang, p_max, p_tid, p_namn, now())
  on conflict (spelare_id, spel, gren) do update
    set poang = excluded.poang, max = excluded.max, tid = excluded.tid, namn = excluded.namn, t = now()
    where excluded.poang > r.poang
       or (excluded.poang = r.poang and excluded.tid is not null and (r.tid is null or excluded.tid < r.tid));
$$;
revoke all on function spara_rekord(text, text, text, numeric, numeric, integer, text) from public;
grant execute on function spara_rekord(text, text, text, numeric, numeric, integer, text) to anon;
