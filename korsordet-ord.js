/* Ordbanken för Korsordet (korsordet.html).
   Barnteman: en rad per ord, ORD|bild|ledtråd. bild är en emoji och får vara tom.
   Raderna #1, #2 och #3 talar om från vilken nivå orden under dem får användas:
     #1 Lätt och uppåt (behöver en bild), #2 Medel och uppåt, #3 Svår.
   Rader före första #-raden räknas som #1 om de har bild, annars #3.
   VUXENORD används bara på Extra svår: ORD|ledtråd. Ledtrådarna är egna formuleringar. */
const ORDBANK=[
 {id:"djur", namn:"Djur", ikon:"🐱", rader:`
KATT|🐱|Säger mjau och spinner
HUND|🐶|Säger voff och viftar på svansen
GRIS|🐷|Rosa djur som säger nöff
HÄST|🐴|Man kan rida på den
FÅR|🐑|Har ull och säger bä
MUS|🐭|Litet djur som gillar ost
UGGLA|🦉|Fågel som är vaken på natten
ORM|🐍|Lång och har inga ben
GRODA|🐸|Grön och hoppar i dammen
FISK|🐟|Simmar och andas med gälar
APA|🐒|Klättrar i träd och äter bananer
BJÖRN|🐻|Stort djur som sover hela vintern
RÄV|🦊|Röd och listig med yvig svans
LEJON|🦁|Kallas djurens kung
ZEBRA|🦓|Randig häst från Afrika
GIRAFF|🦒|Djuret med längst hals
ELEFANT|🐘|Stort grått djur med snabel
KANIN|🐰|Har långa öron och skuttar
IGELKOTT|🦔|Har taggar på ryggen
FJÄRIL|🦋|Flyger med färgglada vingar
SNIGEL|🐌|Bär sitt hus på ryggen
PINGVIN|🐧|Fågel som inte kan flyga men simmar fort
VAL|🐳|Det största djuret i havet
TIGER|🐯|Randigt kattdjur
KROKODIL|🐊|Har stora käkar och bor i floder
BLÄCKFISK|🐙|Har åtta armar och bor i havet
ANKA|🦆|Säger kvack och simmar i dammen
HÖNA|🐔|Värper ägg på bondgården
KAMEL|🐫|Har puckel och bor i öknen
HAJ|🦈|Fisk med vassa tänder
MYRA|🐜|Liten och stark, bor i en stack
SPINDEL|🕷️|Har åtta ben och spinner nät
EKORRE|🐿️|Samlar nötter och klättrar i träd
DELFIN|🐬|Smart och lekfull, hoppar i havet
PAPEGOJA|🦜|Färgglad fågel som kan härma ord
KÄNGURU|🦘|Hoppar och har en pung på magen
SVAN|🦢|Vit fågel med lång hals
KRABBA|🦀|Går i sidled och har klor
NYCKELPIGA|🐞|Röd skalbagge med svarta prickar
ÄLG||Skogens konung, har stora horn
KALV||Kons unge
LAMM||Fårets unge
VALP||Hundens unge
FJÄDER||Fåglar har många sådana
INSEKT||Djur med sex ben
ROVDJUR||Djur som äter andra djur
BONDGÅRD||Där kor, grisar och höns bor
#2
FÅGEL||Har fjädrar och kan oftast flyga
GET||Djur med skägg som bräker
TUPP||Hönans make som gal på morgonen
VARG||Vilt djur som ylar mot månen
HJORT||Skogsdjur med stora grenade horn
RÅDJUR||Litet hjortdjur i skogen
HARE||Liknar en kanin men har längre ben
GÄDDA||Rovfisk i sjön med vassa tänder
ABBORRE||Randig fisk med taggig ryggfena
LAX||Rosa fisk som simmar uppför älvar
SÄL||Simmar i havet och vilar på klippor
VALROSS||Stort havsdjur med långa betar
ISBJÖRN||Vit björn som bor vid nordpolen
PANDA||Svartvit björn som äter bambu
KOALA||Grått djur som sover i eukalyptusträd
LODJUR||Vildkatt med tofsar på öronen
UTTER||Simmar i bäckar och äter fisk
BÄVER||Fäller träd och bygger dammar
NÄSHORN||Stort djur med horn på nosen
FLODHÄST||Tjockt djur som bor i floder i Afrika
GORILLA||Den största apan
GEPARD||Världens snabbaste landdjur
LEOPARD||Prickigt kattdjur som klättrar i träd
STRUTS||Världens största fågel, kan inte flyga
FLAMINGO||Rosa fågel som står på ett ben
PÅFÅGEL||Fågel med jättestor färgglad stjärt
MÅS||Vit fågel vid havet som skriker
KRÅKA||Svart och grå fågel som kraxar
SKATA||Svartvit fågel som gillar glittriga saker
SPARV||Liten brun fågel
DUVA||Fågel som kuttrar i parken
ÖRN||Stor rovfågel med skarp syn
STORK||Fågel med långa ben som sägs komma med bebisar
GÅS||Stor fågel som gärna väser
ÅSNA||Liknar en häst men säger i-a
PONNY||Liten häst
KATTUNGE||Kattens unge
KYCKLING||Hönans unge
MARSVIN||Litet husdjur som piper
HAMSTER||Litet husdjur som samlar mat i kinderna
UNDULAT||Liten färgglad fågel i bur
GULDFISK||Orange fisk i akvariet
ÖDLA||Litet kräldjur som solar på stenar
MANET||Genomskinligt havsdjur som kan bränna
HUMMER||Stort skaldjur med klor
RÄKA||Litet rosa skaldjur
MASK||Lång och mjuk, bor i jorden
GETING||Gul och svart, kan sticka
HUMLA||Rund och luden, surrar bland blommorna
FLUGA||Surrar runt maten på sommaren
MYGGA||Sticker så att det kliar
LARV||Blir till en fjäril
LAMA||Ulligt djur i Sydamerika som kan spotta
REN||Drar tomtens släde
SVANS||Hunden viftar med den
TASS||Kattens fot
NOS||Hundens näsa
FENA||Fisken simmar med den
HORN||Växer på huvudet på kor och getter
KLO||Vass nagel på katten
SNABEL||Elefantens långa näsa
PÄLS||Djurens hårrock
VINGE||Fåglar flyger med den
NÄBB||Fågelns mun
STALL||Hästarnas hus
HAGE||Inhägnad där hästarna betar
#3
GRÄVLING||Randig i ansiktet och gräver gångar
FLADDERMUS||Flyger på natten och hänger upp och ner
SCHIMPANS||Smart apa som kan använda verktyg
HYENA||Afrikanskt djur som låter som om det skrattar
HACKSPETT||Fågel som hackar hål i träd
FALK||Snabb rovfågel
KALKON||Stor fågel som äts på tacksägelsedagen
SKÖLDPADDA||Har ett hårt skal och går långsamt
KOBRA||Giftig orm som kan resa sig
SJÖSTJÄRNA||Havsdjur med fem armar
GRÄSHOPPA||Grön insekt som hoppar och spelar
DROMEDAR||Kamel med bara en puckel
ALPACKA||Ulligt djur som liknar en lama
PLANKTON||Pyttesmå varelser i havet som valar äter
ROVFÅGEL||Fågel som jagar andra djur
FLYTTFÅGEL||Fågel som flyger söderut på hösten
IDE||Björnens vinterbo
KLÖVAR||Hästens och kons fötter
GÄLAR||Fisken andas med dem
BETAR||Elefantens långa tänder
PUCKEL||Kamelen har en på ryggen
DJURPARK||Där man kan se djur från hela världen
VETERINÄR||Doktor för djur
LADUGÅRD||Där korna bor
HÖNSHUS||Där hönorna bor
AKVARIUM||Glaslåda med vatten för fiskar
TERRARIUM||Glaslåda för ödlor och ormar
NATTDJUR||Djur som är vakna på natten
UTROTAD||Ett djur som inte finns kvar längre är det
DINOSAURIE|🦖|Jätteödla som levde för länge sedan
MAMMUT|🦣|Ullig elefant från istiden
KOLIBRI||Pytteliten fågel som kan flyga baklänges
PELIKAN||Fågel med stor påse under näbben
SJÖLEJON||Havsdjur som kan balansera en boll på nosen
TRANA||Stor grå fågel som dansar på våren
KORP||Stor svart fågel, släkt med kråkan
GRÅSUGGA||Litet grått kryp som rullar ihop sig
FÄSTING||Litet kryp som suger blod
DAGGMASK||Mask som kommer upp när det regnar
SNOK||Ofarlig orm med gula fläckar bakom huvudet
HUGGORM||Sveriges enda giftorm
VESSLA||Litet smidigt rovdjur
MÅRD||Rovdjur som klättrar i träd, släkt med vesslan
JÄRV||Starkt rovdjur i fjällen
FJÄLLRÄV||Liten räv som blir vit på vintern
LÄMMEL||Liten gnagare i fjällen
SORK||Liten gnagare med kort svans
GNAGARE||Möss, råttor och ekorrar är sådana
KRÄLDJUR||Ormar och ödlor är sådana
SKALDJUR||Räkor och krabbor är sådana
`},
 {id:"mat", namn:"Mat", ikon:"🍎", rader:`
ÄPPLE|🍎|Rund frukt, röd eller grön
BANAN|🍌|Gul och böjd frukt som apor gillar
OST|🧀|Görs av mjölk och läggs på mackan
GLASS|🍦|Kall och söt, äts på sommaren
MOROT|🥕|Orange grönsak som kaniner gillar
BRÖD|🍞|Bakas av mjöl i ugnen
ÄGG|🥚|Hönan värper det
PIZZA|🍕|Rund, med ost och tomat från Italien
KORV|🌭|Lång och äts i ett bröd
TÅRTA|🎂|Äts på kalas, gärna med ljus
KAKA|🍪|Liten och söt, bakas i ugnen
MELON|🍉|Stor frukt, röd inuti med kärnor
CITRON|🍋|Gul frukt som är väldigt sur
PÄRON|🍐|Grön frukt som är smal upptill
TOMAT|🍅|Röd och rund, finns i ketchup
GURKA|🥒|Lång grön grönsak
MAJS|🌽|Gula korn på en kolv
MJÖLK|🥛|Vit dryck från kon
DRUVOR|🍇|Små runda bär som växer i klasar
JORDGUBBE|🍓|Rött sommarbär med små frön utanpå
POTATIS|🥔|Växer i jorden och kan bli pommes frites
POPCORN|🍿|Poppar i grytan och äts på bio
CHOKLAD|🍫|Brun och söt, görs av kakao
MUNK|🍩|Rund bakelse med hål i mitten
RIS|🍚|Små vita korn som kokas
SOPPA|🍲|Äts varm med sked ur en skål
HONUNG|🍯|Bina gör den, söt och gul
PANNKAKA|🥞|Tunn och äts med sylt
APELSIN|🍊|Orange frukt full av saft
KÖRSBÄR|🍒|Små röda bär som hänger två och två
SALLAD|🥗|Grön och fräsch, blandas i en skål
SVAMP|🍄|Plockas i skogen på hösten
KOKOSNÖT|🥥|Hård nöt som växer på en palm
ANANAS|🍍|Taggig frukt som är gul inuti
FRUKOST||Dagens första måltid
MIDDAG||Måltid man äter på kvällen
RECEPT||Talar om hur man lagar maten
SYLT||Kokas av bär och socker
KANEL||Krydda som finns i bullar
GRÖNSAK||Morot och gurka är sådana
#2
FRUKT||Äpple, banan och päron är sådana
BÄR||Blåbär och lingon är sådana
BLÅBÄR||Blått bär i skogen
LINGON||Rött bär som äts till köttbullar
HALLON||Rött bär som är ihåligt inuti
PLOMMON||Lila frukt med en kärna
PERSIKA||Luden frukt med stor kärna
KIWI||Brun och luden utanpå, grön inuti
MANGO||Söt gul frukt från varma länder
AVOKADO||Grön frukt med stor kärna
LÖK||Grönsak som får en att gråta
VITLÖK||Kryddig lök som skrämmer vampyrer
ÄRTOR||Små gröna kulor i en balja
BÖNOR||Växer i baljor, kan vara bruna eller vita
KÅL||Rund grönsak med många blad
SPENAT||Gröna blad som sägs göra en stark
PUMPA||Stor orange grönsak på halloween
RÄDISA||Liten röd rotfrukt som är stark
VÅFFLA||Gräddas i ett järn, äts med sylt och grädde
BULLE||Bakas med kanel eller kardemumma
SEMLA||Bulle med mandelmassa och grädde
GRÖT||Kokas av havregryn och äts till frukost
FLINGOR||Äts med mjölk till frukost
YOGHURT||Syrlig och tjock, gjord av mjölk
GRÄDDE||Vispas och läggs på tårtan
SMÖR||Breds på mackan
SAFT||Söt dryck gjord på bär
JUICE||Pressas av frukt
VATTEN||Det man dricker när man är törstig
KAKAO||Varm chokladdryck
LÄSK||Söt dryck med bubblor
SALT||Vitt och strös på maten, finns i havet
PEPPAR||Svart krydda som får en att nysa
SOCKER||Gör maten söt
MJÖL||Vitt pulver man bakar med
JÄST||Får degen att jäsa
DEG||Det man bakar av innan det gräddas
KETCHUP||Röd sås av tomater
SENAP||Gul sås till korven
SÅS||Hälls över maten
SPAGETTI||Långa tunna pastastrån
PASTA||Makaroner och spagetti
LASAGNE||Pastaplattor i lager med köttfärs
TACO||Mexikansk mat i ett krispigt skal
SUSHI||Japansk mat med ris och rå fisk
CHIPS||Tunna friterade potatisskivor i påse
GODIS||Lösgodis köps gärna på lördagar
KLUBBA||Godis på en pinne
TUGGUMMI||Man tuggar men sväljer inte
LAKRITS||Svart och segt godis
BIFF||Stekt köttbit
SKINKA||Pålägg från grisen, äts på julbordet
OMELETT||Stekta uppvispade ägg
LUNCH||Måltiden mitt på dagen
KOCK||Lagar mat på en restaurang
UGN||Där man bakar kakor
SLEV||Stor sked för soppa
VISP||Används för att vispa grädde
KAVEL||Rullar ut degen med den
GRILL||Där man lagar mat utomhus på sommaren
MENY||Där står vad man kan äta på restaurangen
#3
KÖTTBULLE||Rund, äts med potatismos och lingon
FISKPINNE||Fisk i form av en pinne med panering
PEPPARKAKA||Tunn kaka som bakas till jul
KNÄCKEBRÖD||Hårt och platt bröd som knastrar
FILMJÖLK||Syrlig mjölk man äter med flingor
HAMBURGARE|🍔|Köttbiff i ett runt bröd
MELLANMÅL||Lite mat mellan måltiderna
EFTERRÄTT||Det söta man äter efter maten
FÖRRÄTT||Det man äter före huvudrätten
JULBORD||Stor måltid med skinka och sill i december
SILL||Fisk som äts inlagd på midsommar
KRÄFTOR||Röda skaldjur man äter i augusti
POTATISMOS||Mosad potatis
GRYTA||Mat som puttrar länge i en kastrull
STEK||Stor köttbit som tillagas i ugnen
KÖTTFÄRS||Malet kött som blir köttbullar
VEGETARIAN||Person som inte äter kött
PROTEIN||Byggstenar för musklerna i maten
KOLHYDRAT||Finns i bröd och pasta och ger energi
KALORI||Mått på hur mycket energi maten ger
KRYDDA||Gör maten godare eller starkare
KARDEMUMMA||Krydda i bullar som doftar gott
VANILJ||Krydda som ger smak åt glass
SAFFRAN||Gul krydda i lussebullar
OREGANO||Krydda på pizza
BASILIKA||Grön krydda som passar till tomater
KANELBULLE||Bulle som har en egen dag den 4 oktober
LUSSEKATT||Saffransbulle som äts i december
PRALIN||Liten fylld chokladbit
MARMELAD||Sylt gjord på apelsiner eller citroner
SMOOTHIE||Mixad dryck av frukt och bär
KASTRULL||Man kokar maten i den på spisen
STEKPANNA||Man steker ägg i den
MIKRO||Värmer maten snabbt
RESTAURANG||Där man går och äter ute
SERVITÖR||Bär ut maten på restaurangen
`},
 {id:"hemma", namn:"Hemma", ikon:"🏠", rader:`
HUS|🏠|Där man bor
SÄNG|🛏️|Här sover man på natten
STOL|🪑|Man sitter på den vid bordet
BOK|📖|Har sidor att läsa i
LAMPA|💡|Ger ljus när det är mörkt
NYCKEL|🔑|Låser upp dörren
KLOCKA|⏰|Visar vad tiden är
SAX|✂️|Klipper papper
PENNA|✏️|Man skriver och ritar med den
KOPP|☕|Man dricker varmt ur den
SKED|🥄|Man äter soppa med den
DÖRR|🚪|Man öppnar den för att gå in
TVÅL|🧼|Man tvättar händerna med den
PARAPLY|☂️|Skyddar mot regnet
RYGGSÄCK|🎒|Bärs på ryggen till skolan
PRESENT|🎁|Man får den på födelsedagen
BALLONG|🎈|Fylls med luft på kalaset
TELEFON|📱|Man ringer och skickar bilder med den
GITARR|🎸|Instrument med sex strängar
TRUMMA|🥁|Man slår på den med pinnar
HAMMARE|🔨|Man slår i spikar med den
LJUS|🕯️|Brinner med en liten låga
SKO|👟|Sätts på foten
VANTE|🧤|Värmer handen på vintern
HALSDUK|🧣|Värmer halsen när det är kallt
BYXOR|👖|Klädesplagg med två ben
TRÖJA|👕|Man drar den över huvudet
KRONA|👑|Kungen bär den på huvudet
KEPS|🧢|Mössa med skärm
NALLE|🧸|Mjuk leksak att krama
TANDBORSTE|🪥|Man borstar tänderna med den
BADKAR|🛁|Man badar i det
KUDDE||Mjuk att lägga huvudet på
TÄCKE||Håller dig varm i sängen
KYLSKÅP||Håller maten kall
SPIS||Där man kokar maten
GARDIN||Hänger framför fönstret
MATTA||Ligger på golvet
#2
RUM||Del av ett hus, har fyra väggar
KÖK||Där man lagar mat
TOALETT||Dit går man när man är nödig
DUSCH||Man tvättar sig under den
BORD||Man äter vid det
SOFFA||Man sitter i den och tittar på tv
FÅTÖLJ||Mjuk stol med armstöd
HYLLA||Där man ställer böcker
GARDEROB||Där man hänger kläderna
BYRÅ||Möbel med lådor för kläder
LÅDA||Man drar ut den ur byrån
TRAPPA||Man går upp till övervåningen i den
TAK||Det som är högst upp i ett rum
GOLV||Man går på det
VÄGG||Rummets sidor
FÖNSTER||Man tittar ut genom det
BALKONG||Uteplats högt upp på huset
TRÄDGÅRD||Där blommorna växer runt huset
STAKET||Står runt trädgården
BREVLÅDA||Där posten hamnar
TALLRIK||Man lägger maten på den
GLAS||Man dricker ur det
KNIV||Man skär med den
GAFFEL||Har tre eller fyra spetsar, man äter med den
SERVETT||Man torkar munnen med den
HANDDUK||Man torkar sig med den efter duschen
TANDKRÄM||Läggs på tandborsten
SCHAMPO||Man tvättar håret med det
KAM||Man kammar håret med den
SPEGEL||Där ser man sig själv
LEKSAK||Något man leker med
DOCKA||Leksak som ser ut som en människa
PUSSEL||Bitar man lägger ihop till en bild
TÄRNING||Kastas i spel, har sex sidor
KLOSSAR||Man bygger torn med dem
KRITA||Man ritar på tavlan eller asfalten med den
LINJAL||Man ritar raka streck med den
LIM||Klistrar ihop saker
TEJP||Klistrig remsa på rulle
PAPPER||Man skriver och ritar på det
KUVERT||Man skickar brev i det
FRIMÄRKE||Klistras på brevet
KLÄNNING||Klädesplagg med kjol och överdel i ett
KJOL||Plagg som hänger runt midjan
JACKA||Har man på sig ute
MÖSSA||Värmer huvudet
STRUMPA||Har man på foten inuti skon
STÖVEL||Hög sko för regn
TOFFEL||Mjuk sko inomhus
PYJAMAS||Man sover i den
BADDRÄKT||Har man på sig när man simmar
OVERALL||Varm klädsel i ett stycke för snö
SKJORTA||Plagg med knappar och krage
KNAPP||Håller ihop skjortan
FICKA||Man stoppar saker i den
GLASÖGON||Hjälper en att se bättre
FILT||Värmer en i soffan
LAKAN||Ligger över madrassen
SÅG||Man sågar trä med den
SPIK||Slås i med hammare
STEGE||Man klättrar upp på den
HINK||Man bär vatten i den
SPADE||Man gräver med den
KRATTA||Man samlar ihop löv med den
NÅL||Man syr med den, den har ett öga
#3
SOVRUM||Rummet där man sover
VARDAGSRUM||Rummet där soffan står
HALL||Där man tar av sig skorna när man kommer in
KÄLLARE||Våningen under marken
GARAGE||Där bilen står
ELEMENT||Värmer rummet under fönstret
KAMIN||Eldstad där man eldar ved
SKORSTEN||Röken går ut genom den
GRANNE||Bor i huset bredvid
ADRESS||Gata och nummer där man bor
LÄGENHET||Bostad i ett flerfamiljshus
VILLA||Eget hus med trädgård
STUGA||Litet hus på landet
TAPET||Papper med mönster på väggen
SLADD||Kopplar sakerna till eluttaget
BATTERI||Ger ström till leksaker
GLÖDLAMPA||Lyser i taklampan
FRYS||Där glassen håller sig fryst
DISKBÄNK||Där man diskar
KRAN||Vattnet kommer ur den
AVLOPP||Vattnet rinner ner i det
MADRASS||Mjukt underlag i sängen
PLÅSTER||Sätts på ett sår
TERMOMETER||Mäter temperaturen
STRYKJÄRN||Gör kläderna släta
SYMASKIN||Man syr kläder med den
TRÅD||Träs i nålen
VERKTYG||Hammare och såg är sådana
SKRUV||Skruvas in med en skruvmejsel
TÅNG||Verktyg som nyper tag
SUDDGUMMI||Tar bort det man skrivit med blyerts
DRAGKEDJA||Dras upp och ner på jackan
DISKMASKIN||Diskar tallrikarna åt en
DAMMSUGARE||Suger upp damm från golvet
SOPOR||Det man slänger
BLOMKRUKA||Där krukväxten står
HÅRBORSTE||Man borstar håret med den
KLÄDNYPA||Håller fast tvätten på strecket
`},
 {id:"natur", namn:"Natur", ikon:"🌳", rader:`
SOL|☀️|Lyser på himlen på dagen
MÅNE|🌙|Lyser på himlen på natten
STJÄRNA|⭐|Blinkar på natthimlen
MOLN|☁️|Vitt och fluffigt på himlen
REGN|🌧️|Vatten som faller från molnen
SNÖ|❄️|Vit och kall, faller på vintern
BLIXT|⚡|Lyser till när det åskar
TRÄD|🌳|Har stam, grenar och löv
BLOMMA|🌸|Växer i trädgården och doftar gott
ROS|🌹|Röd blomma med taggar
LÖV|🍁|Faller från träden på hösten
BERG|⛰️|Mycket högt, man kan klättra upp
VULKAN|🌋|Berg som kan spruta lava
VÅG|🌊|Rullar in mot stranden
REGNBÅGE|🌈|Färgglad båge på himlen efter regnet
ELD|🔥|Varm och brinner
KAKTUS|🌵|Taggig växt i öknen
PALM|🌴|Träd på stranden i varma länder
JORDEN|🌍|Planeten vi bor på
SNÖGUBBE|⛄|Byggs av snö med morot som näsa
VIND||Luft som blåser
ISBIT|🧊|Fryst vatten i glaset
TULPAN|🌷|Vårblomma i många färger
SOLROS|🌻|Hög gul blomma
GRAN|🌲|Barrträd som är grönt hela året
PLANET|🪐|Jorden och Saturnus är sådana
KOMET|☄️|Isklump med lång svans i rymden
ÖKEN|🏜️|Torrt och sandigt, nästan inget regn
STRAND|🏖️|Där havet möter sanden
DIMMA||Som ett moln nere vid marken
ÅSKA||Mullrar på himlen vid oväder
VÅR||Årstiden när snön smälter
HÖST||Årstiden när löven faller
VINTER||Den kallaste årstiden
SOMMAR||Den varmaste årstiden
SKOG||Många träd tillsammans
GROTTA||Hål in i ett berg
FRÖ||Blir en växt om man sår det
#2
HIMMEL||Där molnen och fåglarna är
SJÖ||Mycket vatten, men mindre än havet
HAV||Stort och salt vatten
ÄLV||Stor flod i Sverige
BÄCK||Liten å som porlar
FORS||Vatten som strömmar fort
SAND||Finns på stranden, man bygger slott av den
GRÄS||Grönt på marken som klipps
MOSSA||Mjukt och grönt på stenar i skogen
KOTTE||Faller från granen
EKOLLON||Ekens frukt
BJÖRK||Träd med vit stam
TALL||Barrträd med lång rak stam
LÖNN||Träd vars blad finns på Kanadas flagga
ROT||Trädets del under jorden
GREN||Löven sitter på den
STAM||Trädets tjocka del
BLAD||Ett annat ord för löv
KNOPP||Blomma som inte har slagit ut
NÄSSLA||Bränns om man rör vid den
MASKROS||Gul blomma som blir en boll av frön
LILJA||Vacker blomma med stora kronblad
MORGON||Tiden när man vaknar
KVÄLL||Tiden efter eftermiddagen
NATT||När det är mörkt och man sover
DAG||När solen lyser
STORM||Mycket kraftig vind
ORKAN||Väldigt farlig storm
HAGEL||Små iskulor som faller från himlen
FROST||Is på gräset en kall morgon
ISTAPP||Hänger från taket på vintern
DAGG||Vattendroppar på gräset på morgonen
PÖL||Vatten på marken efter regnet
LERA||Kladdig jord
JORD||Där växterna växer
KLIPPA||Stor sten vid havet
GRUS||Små stenar på vägen
DAL||Lågt mellan bergen
KULLE||Litet berg
HALVÖ||Land med vatten på tre sidor
KUST||Där landet möter havet
VÄDER||Sol, regn och blåst
LAVA||Het smält sten från en vulkan
MARS||Den röda planeten
ÄNG||Gräsmark full med blommor
ÅKER||Där bonden odlar
FJÄLL||Höga berg i norra Sverige
SKUGGA||Mörk fläck där solen inte når
#3
BLÅKLOCKA||Blå blomma som ser ut som en klocka
VITSIPPA||Vit vårblomma i skogen
SNÖDROPPE||Den första vita vårblomman
TUSENSKÖNA||Liten vit blomma med gul mitt
SOLNEDGÅNG||När solen försvinner på kvällen
VATTENFALL||Vatten som störtar ner för ett stup
SKÄRGÅRD||Många öar utanför kusten
TEMPERATUR||Hur varmt eller kallt det är
ÅRSTID||Vår, sommar, höst och vinter
KLIMAT||Vädret under lång tid
TORKA||När det inte regnar på länge
ASTEROID||Stenklump i rymden
GALAX||Miljarder stjärnor tillsammans
UNIVERSUM||Allt som finns i rymden
ASTRONAUT||Åker ut i rymden
VENUS||Planeten som är närmast jorden
JUPITER||Solsystemets största planet
SATURNUS||Planeten med stora ringar
NORRSKEN||Gröna ljus på himlen i norr
HORISONT||Där himmel och jord verkar mötas
KOMPOST||Där matrester blir till jord
MILJÖ||Naturen omkring oss som vi ska vara rädda om
FÖRORENING||Smuts i luften eller vattnet
MYR||Blöt mark med mossa
TUNDRA||Kall slätt utan träd
DJUNGEL||Tät och varm skog
REGNSKOG||Skog i tropikerna där det regnar mycket
GLACIÄR||Stor flod av is
ISBERG||Stort isblock som flyter i havet
POLLEN||Gult damm från blommor som får en att nysa
NEKTAR||Söt saft i blommor som bina hämtar
FOTOSYNTES||Hur växter gör mat av solljus
SKÖRD||När man tar in det man odlat
`},
 {id:"fart", namn:"Fordon och sport", ikon:"🚗", rader:`
BIL|🚗|Har fyra hjul och kör på vägen
BUSS|🚌|Många åker med den till skolan
TÅG|🚆|Åker på räls
BÅT|⛵|Åker på vattnet
CYKEL|🚲|Har två hjul och man trampar
RAKET|🚀|Flyger ut i rymden
TRAKTOR|🚜|Bonden kör den på åkern
FLYGPLAN|✈️|Flyger högt med vingar
LASTBIL|🚚|Kör stora och tunga saker
TAXI|🚕|Man betalar för att åka med den
HELIKOPTER|🚁|Flyger med en propeller på taket
BRANDBIL|🚒|Kör till bränder
POLISBIL|🚓|Polisen åker i den
AMBULANS|🚑|Kör sjuka till sjukhuset
SKRIDSKO|⛸️|Man åker på isen med den
SKIDOR|🎿|Man åker på snön med dem
FOTBOLL|⚽|Man sparkar den mot målet
POKAL|🏆|Vinnaren får den
MEDALJ|🥇|Hängs runt halsen på den som vinner
DRAKE|🪁|Flyger i vinden på ett snöre
SPARKCYKEL|🛴|Har ett styre och man sparkar fram
MOPED|🛵|Liten motorcykel
ANKARE|⚓|Släpps ner så att båten ligger still
UBÅT||Båt som åker under vattnet
MOTOR||Får bilen att gå
RATT||Man svänger bilen med den
PILOT||Flyger planet
KAPTEN||Bestämmer på ett skepp
HAMN||Där båtarna lägger till
STAFETT||Lopp där laget lämnar över en pinne
HJUL||Runt och snurrar under bilen
BENSIN||Bilar kan tanka det
#2
SPÅRVAGN||Åker på räls genom staden
FÄRJA||Båt som tar bilar över vattnet
KANOT||Smal båt som man paddlar
ROBÅT||Båt med åror
KAJAK||Smal båt för en person med dubbelpaddel
SLÄDE||Dras över snön
PULKA||Man åker nerför backen i den
HJÄLM||Skyddar huvudet när man cyklar
VÄG||Bilarna kör på den
BRO||Går över vattnet
TUNNEL||Går genom ett berg
RONDELL||Cirkel där bilarna kör runt
STATION||Där tåget stannar
PERRONG||Där man väntar på tåget
BILJETT||Behövs för att åka buss eller tåg
RESA||Att åka iväg någonstans
SEMESTER||Ledighet då man ofta reser bort
RESVÄSKA||Man packar kläderna i den
PASS||Visar vem man är när man reser utomlands
KARTA||Visar vägen
KOMPASS||Nålen pekar mot norr
IDROTT||Ett annat ord för sport
LAG||Spelar tillsammans
BOLL||Rund sak man kastar och sparkar
MÅL||Där bollen ska in
DOMARE||Blåser i visselpipan på matchen
MATCH||När två lag spelar mot varandra
PUCK||Svart platt sak i ishockey
TENNIS||Spel med racket och gul boll över ett nät
RACKET||Man slår bollen med det i tennis
BASKET||Bollen ska ner i en korg
HANDBOLL||Bollspel där man kastar bollen mot mål
SIMNING||Sport i vattnet
LÖPNING||Att springa som sport
GYMPA||Idrott i skolan
RIDNING||Sporten med hästar
GOLF||Man slår en liten boll ner i ett hål
JUDO||Japansk kampsport med kast
KARATE||Kampsport med slag och sparkar
DANS||Att röra sig till musik
SLALOM||Skidåkning mellan portar
FYR||Lyser för båtarna i mörkret
SEGEL||Vinden blåser i det på båten
MAST||Seglet sitter på den
ÅRA||Man ror med den
PADDEL||Man paddlar kanoten med den
DÄCK||Gummi runt hjulet
SKEPP||Stort fartyg
BROMS||Får bilen att stanna
#3
SEGELBÅT||Båt som drivs av vinden
TUNNELBANA||Tåg som går under jorden
SKATEBOARD||Bräda med fyra hjul
TRAFIKLJUS||Visar rött, gult och grönt
PARKERING||Där man ställer bilen
VISSELPIPA||Domaren blåser i den
ISHOCKEY||Spelas på is med klubbor och puck
GYMNASTIK||Sport med hopp, rullningar och bommar
BOXNING||Sport med handskar i en ring
SKIDBACKE||Där man åker slalom
SKIDLIFT||Drar en uppför backen
REKORD||Bästa resultatet någonsin
TRÄNARE||Leder laget på träningen
SUPPORTER||Hejar på sitt lag
ARENA||Stor byggnad för sport och konserter
STADION||Stor idrottsplats med läktare
LÄKTARE||Där publiken sitter
MÅLVAKT||Står i målet och räddar
ANFALLARE||Spelaren som ska göra mål
FINAL||Sista matchen i en turnering
TURNERING||Tävling med många matcher
GULDMEDALJ||Priset till den som vinner
MARATON||Löplopp på över fyra mil
TRIATLON||Simning, cykling och löpning i ett lopp
HÖJDHOPP||Hopp över en ribba
LÄNGDHOPP||Hopp så långt som möjligt
FALLSKÄRM||Bromsar när man hoppar från ett flygplan
PROPELLER||Snurrar och drar flygplanet framåt
KONDUKTÖR||Kontrollerar biljetterna på tåget
LOKFÖRARE||Kör tåget
CHAUFFÖR||Kör bil eller buss som jobb
TRAFIK||Alla bilar på vägen
MOTORVÄG||Bred väg där man får köra fort
KÖRKORT||Behövs för att få köra bil
BÄLTE||Spänns fast i bilen
KROCK||När två bilar kör ihop
GASPEDAL||Får bilen att åka fortare
FLYTVÄST||Håller en flytande i vattnet
LIVBOJ||Kastas till den som ramlat i vattnet
FLYGPLATS||Där flygplanen landar
RYMDSKEPP||Farkost som åker i rymden
SATELLIT||Snurrar runt jorden och skickar signaler
`},
 {id:"kropp", namn:"Kroppen", ikon:"💪", rader:`
#1
ÖGA|👁️|Man ser med det
ÖRA|👂|Man hör med det
NÄSA|👃|Man luktar med den
MUN|👄|Man äter och pratar med den
HAND|✋|Har fem fingrar
FOT|🦶|Man står på den
TAND|🦷|Man tuggar med den
TUNGA|👅|Man smakar med den
HJÄRNA|🧠|Man tänker med den
HJÄRTA|❤️|Pumpar runt blodet i kroppen
MUSKEL|💪|Gör en stark
GLAD|😀|Så känner man sig när man ler
ARG|😠|Så känner man sig när man är sur
LEDSEN|😢|Så känner man sig när man gråter
RÄDD|😨|Så känner man sig när man ser ett spöke
TRÖTT|😴|Så känner man sig på kvällen
SJUK|🤒|Har feber och ligger i sängen
BEBIS|👶|Ett nyfött barn
POJKE|👦|Liten kille
FLICKA|👧|Liten tjej
SKÄGG|🧔|Växer på hakan
SKELETT|💀|Alla ben i kroppen
#2
ARM||Sitter mellan axeln och handen
KNÄ||Mitt på benet
ARMBÅGE||Mitt på armen
AXEL||Där armen sitter fast
NACKE||Baksidan av halsen
HALS||Mellan huvudet och kroppen
MAGE||Där maten hamnar
RYGG||Baksidan av kroppen
NAVEL||Liten grop mitt på magen
FINGER||Handen har fem
TUMME||Det tjockaste fingret
NAGEL||Hård på fingertoppen
HÄL||Bakersta delen av foten
TÅR||Kommer ur ögonen när man gråter
PANNA||Sitter ovanför ögonen
KIND||Blir röd när man skäms
HAKA||Längst ner i ansiktet
LÄPP||Munnen har två
ÖGONBRYN||Hår ovanför ögonen
FRÄKNAR||Små bruna prickar i ansiktet
BLOD||Rött och flyter runt i kroppen
LUNGOR||Man andas med dem
HUD||Täcker hela kroppen
SVETT||Kommer när man är varm
FEBER||Hög temperatur när man är sjuk
HOSTA||Man gör det när man är förkyld
SNUVA||Rinnande näsa
SÅR||Gör ont och kan blöda
DOKTOR||Hjälper en när man är sjuk
SJUKHUS||Dit ambulansen åker
MAMMA||Ens mor
PAPPA||Ens far
SYSTER||Tjej med samma föräldrar som en
BROR||Kille med samma föräldrar som en
MORMOR||Mammas mamma
FARFAR||Pappas pappa
KUSIN||Barn till ens moster eller farbror
MOSTER||Mammas syster
FARBROR||Pappas bror
FAMILJ||Föräldrar och barn tillsammans
KOMPIS||En vän
VÄN||Någon man tycker om och leker med
#3
NERVÖS||Pirrigt i magen före ett prov
STOLT||När man är nöjd med något man gjort
AVUNDSJUK||När man vill ha det någon annan har
BLYG||Vågar inte prata med nya människor
MODIG||Vågar fast det är läskigt
NYFIKEN||Vill veta mer
ENSAM||Har ingen att vara med
TACKSAM||Glad över det man har fått
GLÄDJE||Känslan när man är glad
ILSKA||Känslan när man är arg
SORG||Känslan när man är ledsen
SMAK||Sinnet som sitter i tungan
LUKT||Sinnet som sitter i näsan
HÖRSEL||Sinnet som sitter i öronen
SYN||Sinnet som sitter i ögonen
KÄNSEL||Sinnet som sitter i huden
REVBEN||Skyddar lungorna
SKALLE||Skyddar hjärnan
RYGGRAD||Ben längs ryggen
NJURE||Organ som renar blodet
LEVER||Stort organ i magen
TARM||Lång slang där maten smälts
VITAMINER||Finns i frukt och gör en frisk
MEDICIN||Tas när man är sjuk
VACCIN||Spruta som skyddar mot sjukdom
BAKTERIE||Pytteliten levande varelse
VIRUS||Kan göra en förkyld
TANDLÄKARE||Tittar på ens tänder
PULS||Hur fort hjärtat slår
SÖMN||Man behöver mycket för att orka
DRÖM||Det man ser när man sover
MARDRÖM||Läskig dröm
`},
 {id:"fritid", namn:"Lek och fritid", ikon:"🎨", rader:`
#1
SPÖKE|👻|Säger bu och svävar genom väggar
ROBOT|🤖|Maskin som kan gå och prata
SLOTT|🏰|Där kungen och prinsessan bor
TÄLT|⛺|Man sover i det när man campar
PIANO|🎹|Instrument med svarta och vita tangenter
FIOL|🎻|Instrument man spelar på med stråke
TRUMPET|🎺|Blåsinstrument av mässing
KAMERA|📷|Man tar foton med den
TOMTE|🎅|Kommer med julklappar
ÄNGEL|👼|Har vingar och gloria
CIRKUS|🎪|Där clowner och akrobater uppträder
CLOWN|🤡|Har röd näsa och får en att skratta
TROLLKARL|🧙|Kan trolla och har en spetsig hatt
ENHÖRNING|🦄|Häst med ett horn i pannan
PENSEL|🖌️|Man målar med den
JOJO|🪀|Snurrar upp och ner på ett snöre
BUMERANG|🪃|Kommer tillbaka när man kastar den
TROLLSPÖ|🪄|Trollkarlen viftar med det
MIKROFON|🎤|Man sjunger i den så att det hörs
DIAMANT|💎|Glittrande ädelsten
KALAS|🎉|Fest på födelsedagen
FYRVERKERI|🎆|Smäller och lyser på nyårsafton
#2
LEK||Det barn gör när de har roligt
LEKPLATS||Ställe med gungor och rutschkana
GUNGA||Man gungar på den på lekplatsen
SANDLÅDA||Där man bygger sandslott
HOPPREP||Man hoppar över det
SAGA||Berättelse som börjar med "Det var en gång"
PRINS||Son till en kung
KUNG||Bär krona och styr landet
RIDDARE||Har rustning och svärd
SVÄRD||Riddarens vapen
SKÖLD||Riddaren skyddar sig med den
TROLL||Sagoväsen som bor i skogen
JÄTTE||Mycket stor sagofigur
HÄXA||Flyger på en kvast
KVAST||Man sopar golvet med den
PIRAT||Seglar på haven och letar skatter
SKATT||Gömd kista med guld
SÅNG||Musik man sjunger
MUSIK||Låtar och melodier
KÖR||Grupp som sjunger tillsammans
TEATER||Där skådespelare uppträder
BIO||Där man ser film på stor duk
FILM||Rörliga bilder med en berättelse
SERIE||Tidning med pratbubblor
TECKNING||Bild som man har ritat
FÄRG||Rött, blått och gult
SPEL||Kortspel och brädspel
SCHACK||Brädspel med kung, dam och torn
DATOR||Man skriver och spelar på den
PICKNICK||Att äta matsäck ute i det gröna
MATSÄCK||Mat man tar med på utflykt
UTFLYKT||Kort resa för att ha kul
LÄGER||Man bor i tält några dagar
KOLLO||Sommarläger för barn
PÅSK||Högtid med ägg och påskharar
JUL||Högtid i december med tomten
NYÅR||Firas med fyrverkerier
#3
PRINSESSA||Dotter till en kung
DROTTNING||Kungens fru
BIBLIOTEK||Där man lånar böcker
RUTSCHKANA||Man åker ner för den på lekplatsen
KURRAGÖMMA||Lek där man gömmer sig
BLOCKFLÖJT||Instrument man ofta lär sig spela i skolan
KORTSPEL||Spel med en kortlek
SURFPLATTA||Platt dator med pekskärm
MIDSOMMAR||Man dansar runt stången i juni
HALLOWEEN||Man klär ut sig och säger bus eller godis
FÖDELSEDAG||Dagen då man fyller år
HOBBY||Något man gärna gör på fritiden
INSTRUMENT||Fiol och trumma är sådana
ORKESTER||Många musiker som spelar tillsammans
DIRIGENT||Leder orkestern
MELODI||Tonerna i en låt
KONSERT||När ett band spelar för publik
PUBLIK||De som tittar på en föreställning
SCEN||Där artisterna står
APPLÅD||Klapp i händerna
FÖRFATTARE||Skriver böcker
KAPITEL||Del av en bok
ROMAN||Lång berättelse i en bok
DIKT||Rader som ofta rimmar
RIM||Ord som låter lika i slutet
GÅTA||Fråga som är klurig att lösa
MYSTERIUM||Något gåtfullt som ska lösas
DETEKTIV||Löser brott och mysterier
MUSEUM||Där man tittar på gamla och fina saker
SKULPTUR||Konstverk av sten eller lera
KONSTNÄR||Målar tavlor
MÅLNING||Tavla som är målad
ORIGAMI||Japansk konst att vika papper
TRÄDKOJA||Litet hus uppe i ett träd
`}
];

const VUXENORD=`
ABDIKERA|Avsäga sig tronen
ABSURD|Orimlig, meningslös
ADEKVAT|Lämplig, passande
ADLA|Upphöja till adelsman
AGITATOR|Den som hetsar och propagerar
AKRIBI|Noggrannhet in i minsta detalj
AKTER|Bakre delen av ett fartyg
AKTERUT|Bakåt på fartyget
ALIBI|Bevis på att man var någon annanstans
ALLMOGE|Gammalt ord för bondebefolkningen
ALMANACKA|Kalender med namnsdagar
ALSTER|Skapat verk, produkt
AMBITIÖS|Strävsam, ärelysten
AMULETT|Föremål som sägs skydda mot olycka
ANAKRONISM|Något som inte hör hemma i sin tid
ANALFABET|Person som inte kan läsa
ANDAKT|Stilla gudstjänst eller fromhet
ANEKDOT|Kort och rolig berättelse
ANFÄKTELSE|Inre tvivel eller frestelse
ANLETE|Högtidligt ord för ansikte
ANSA|Sköta om och putsa, till exempel en häck
ANSTALT|Inrättning, institution
ANTIK|Gammal och värdefull
APATISK|Likgiltig och håglös
APLOMB|Självsäkerhet i uppträdandet
ARKAD|Valvgång med pelare
ARKIPELAG|Ögrupp
ARROGANT|Högdragen, överlägsen
ARVODE|Ersättning för ett uppdrag
ASKES|Självförsakelse, sträng livsföring
ASPIRANT|Sökande till en tjänst
ATTRAPP|Falsk kopia, imitation
AUKTION|Försäljning till högstbjudande
AVHANDLING|Vetenskapligt verk för doktorsgrad
AVSIDES|Undanskymd, långt bort
AVOG|Ovänligt inställd
BABORD|Fartygets vänstra sida
BAGATELL|Struntsak, småsak
BAJONETT|Kniv fäst på geväret
BALUSTRAD|Räcke med små pelare
BANAL|Alldaglig, utnött
BARACK|Enkel byggnad för soldater
BARLAST|Tyngd i fartygets botten
BARRIKAD|Hinder uppbyggt på gatan
BASUN|Blåsinstrument, trombon
BATALJ|Strid, slag
BEDRÄGERI|Svindel, lurendrejeri
BEFÄST|Försvarad med murar
BEGÅVNING|Talang, anlag
BEHAG|Tjusning, charm
BENÄGEN|Villig, böjd för
BERÅD|Förberedd, redo
BESINNING|Eftertanke, självbehärskning
BESTYR|Göromål, sysslor
BETUTTAD|Förlägen, ställd
BEVEKA|Förmå genom att röra hjärtat
BIGOTT|Överdrivet from, skenhelig
BIKT|Syndabekännelse inför präst
BISAK|Oviktig fråga vid sidan av
BISARR|Underlig, egendomlig
BISTER|Sträng, barsk
BLASERAD|Övermätt och oberörd
BLIDKA|Göra mild, lugna
BORGEN|Säkerhet för någon annans lån
BOTGÖRING|Ånger och gottgörelse för synd
BRAVAD|Djärv bedrift
BRINK|Brant sluttning
BROKAD|Mönstrat sidentyg med guldtrådar
BYRÅKRAT|Paragrafryttare, ämbetsman
BÅLGETING|Mycket stor geting
BÅNGSTYRIG|Svårhanterlig, olydig
BÄRGA|Rädda, till exempel ett fartyg
BÖDEL|Den som verkställer dödsstraff
CELIBAT|Ogift stånd, avhållsamhet
CENSUR|Granskning och förbud av texter
CHARLATAN|Bluffmakare, kvacksalvare
CHIKAN|Trakasseri, förtretlighet
CYNISK|Hånfull, misstrogen
CEREMONI|Högtidlig handling
DEKADENT|I förfall
DEKORUM|Det som anstår, anständighet
DELIKAT|Ömtålig, eller läcker
DEMAGOG|Folkuppviglare
DESPOT|Envåldshärskare
DIGNA|Böja sig under tyngd
DILEMMA|Svårt val mellan två alternativ
DISKRET|Försiktig, inte påfallande
DOGM|Fast och obestridlig lärosats
DOMÄN|Område, ägor
DRÄGG|Bottensats, avskum
DRÄKTIG|Bär på ungar, om djur
DUBIÖS|Tvivelaktig
DUNKEL|Halvmörker
DYGD|God egenskap
DYNASTI|Härskarsläkt
DÅRE|Galning, narr
DÄST|Övermätt och självbelåten
DÖDSBO|En avliden persons egendom
EFEMÄR|Kortvarig, flyktig
ELEGI|Sorgedikt
ELIXIR|Trolldryck, livsvatten
EMALJ|Glasartad beläggning
EMBARGO|Handelsförbud
EMFAS|Eftertryck
EMIGRANT|Utvandrare
ENFALD|Naivitet, dumhet
ENIGMA|Gåta
EPIDEMI|Utbredd smitta
EPILOG|Efterskrift
EPOK|Tidsålder
ERINRAN|Påminnelse, anmärkning
ESKAPAD|Upptåg, flykt från vardagen
ESPLANAD|Bred allé, promenadgata
ESTRAD|Upphöjd plats för talare
ETIKETT|Umgängesregler
EXIL|Landsflykt
EXKLUSIV|Förnäm, utvald
EXPEDITION|Forskningsresa
FADDER|Gudförälder vid dop
FAKIR|Indisk asket som ligger på spikar
FALANG|Gruppering inom ett parti
FANFAR|Trumpetsignal
FARAO|Forntida egyptisk kung
FARSOT|Epidemi, pest
FASAD|Husets framsida
FATAL|Ödesdiger
FEJD|Långvarig strid
FIASKO|Misslyckande
FINESS|Förfining, list
FJÄSK|Inställsamhet
FLANERA|Promenera makligt
FLEGMATISK|Trög och oberörd
FLÄRD|Lyx, fåfänga
FNURRA|Hårknut, eller liten oenighet
FOGLIG|Medgörlig
FRAKT|Last, eller avgift för transport
FRESTELSE|Lockelse
FRÄLSE|Det skattefria adelsståndet förr
FURIR|Underofficersgrad
FUTTIG|Ynklig, obetydlig
FÄGRING|Skönhet
FÄKTA|Strida med värja
FÖRDOLD|Gömd, hemlig
FÖRGYLLA|Belägga med guld
FÖRKUNNA|Predika, tillkännage
FÖRMYNDARE|Ställföreträdare för en omyndig
FÖRSKRÄMD|Uppskrämd
FÖRSMÅ|Ringakta, avvisa
FÖRSUMLIG|Slarvig, oaktsam
FÖRTRÖSTAN|Tillit, hopp
GALA|Högtidlig fest
GALEJ|Roddfartyg med slavar vid årorna
GALLER|Spjälverk
GARVA|Bereda hudar till läder
GEDIGEN|Solid, äkta
GEMAK|Ståtligt rum
GENANT|Pinsam
GENIAL|Snillrik
GESTALT|Figur, skepnad
GILLE|Fest, eller sammanslutning
GLOSA|Ord på ett främmande språk
GNÄLLSPIK|Ständigt klagande person
GODTYCKE|Egenmäktighet
GRANNLAGA|Känslig, kräver takt
GROGG|Sprit blandad med läsk
GROTESK|Vanskapt, löjeväckande
GRUVLIG|Förskräcklig
GRÄND|Smal gata
GRÄSLIG|Förfärlig
GYLLENE|Av guld, guldfärgad
GÄLD|Skuld
GÄSTABUD|Festmåltid
HABIL|Skicklig
HARANG|Lång utläggning
HASARD|Slumpspel
HEDNING|Icke-kristen, enligt äldre språk
HEGEMONI|Övermakt, ledarställning
HEMVIST|Boning, hemort
HERRGÅRD|Större gård med ståtligt bostadshus
HIERARKI|Rangordning
HJÄLTEDÅD|Modig bedrift
HOVMÄSTARE|Ansvarig servitör på restaurang
HUMBUG|Bluff
HUSTRU|Fru
HYBRIS|Övermod
HYCKLARE|Skenhelig person
HYDDA|Enkel stuga
HÅGLÖS|Utan lust
HÄGRING|Synvilla i öknen
HÄRBÄRGE|Enkelt nattlogi
HÄRAD|Gammal förvaltningsenhet på landet
HÖGFÄRD|Högmod
HÖVDING|Stamledare
HÖVLIG|Artig
IDOG|Flitig, trägen
IDYLL|Fridfull plats
IGNORANT|Okunnig
ILLASINNAD|Elak, fientlig
IMPOSANT|Imponerande
INDOLENT|Lat, slö
INFAM|Skändlig
INFERNO|Helvete
INKOGNITO|Under falskt namn
INKVISITION|Kyrklig domstol mot kättare
INNERLIG|Hjärtlig, djupt känd
INSINUERA|Antyda något negativt
INSTÄLLSAM|Fjäskig
INTRIG|Hemligt ränksmideri
IRONI|Att säga motsatsen till vad man menar
JARGONG|Gruppspråk
JOLLE|Liten segelbåt
JUBILAR|Den som fyller jämnt
JUVEL|Ädelsten
JÄMMER|Klagan
JÄRTECKEN|Förebud, omen
KABAL|Intrig, sammansvärjning
KADAVER|Djurlik
KAFTAN|Lång och vid rock
KAJUTA|Rum på fartyg
KALABALIK|Oordning, tumult
KAMRER|Ekonomiansvarig tjänsteman förr
KANONAD|Ihållande kanoneld
KAPRIS|Nyck, eller blomknopp som krydda
KARAFF|Glasflaska för vin eller vatten
KARANTÄN|Isolering vid smittorisk
KARDINAL|Hög katolsk präst i rött
KARIKATYR|Överdriven skämtteckning
KARMOSIN|Klarröd färg
KASERN|Militärbyggnad för förläggning
KATEDRAL|Domkyrka
KAVAT|Morsk, käck
KÄTTERI|Avvikelse från den rätta läran
KITSLIG|Småaktig, petig
KLENOD|Dyrgrip
KLIENT|Kund hos advokat
KLIMAX|Höjdpunkt
KLINGA|Blad på kniv eller svärd
KLOSTER|Hem för munkar eller nunnor
KLÄMTA|Ringa långsamt i kyrkklocka
KNEKT|Soldat förr, eller kortfigur
KNOT|Missnöje, klagan
KOMPLOTT|Sammansvärjning
KONFEKT|Små sötsaker
KONSUL|Landets representant i en utländsk stad
KONTRABAND|Smuggelgods
KORPULENT|Fetlagd
KORRUPT|Mutbar
KOTTERI|Klick, slutet sällskap
KRAKEL|Gräl
KRUMELUR|Slinga, krusidull
KRYPTA|Gravkammare under en kyrka
KUJON|Feg person
KULISS|Scendekor
KURIR|Budbärare
KURTIS|Uppvaktning
KVÄDE|Dikt, sång
KÅSERI|Lätt och skämtsam artikel
LABIL|Instabil
LAKEJ|Betjänt i livré
LAKONISK|Kortfattad
LANTERNA|Lykta på fartyg
LATRIN|Avträde
LEGAT|Testamenterad gåva
LEJD|Fri sådan betyder garanterat säker passage
LEVERNE|Levnadssätt, ofta vilt
LIKVID|Betalning
LITANIA|Utdragen klagan
LOJAL|Trogen
LUFSA|Gå klumpigt
LUKULLISK|Överdådig, om måltid
LUMSK|Försåtlig, illistig
LYRISK|Känslosam, poetisk
LYSTEN|Girig, begärlig
LÄRKA|Sångfågel som stiger högt
MAGNAT|Mäktig affärsman
MAJESTÄT|Kunglig titel
MAKLIG|Långsam, bekväm
MALIS|Elakt skämt
MANIFEST|Programförklaring
MANTEL|Ärmlöst ytterplagg, kappa
MARODÖR|Plundrare
MARSKALK|Ledare för en fest eller procession
MASKOPI|Hemligt samförstånd
MATRONA|Ståtlig äldre kvinna
MAXIM|Levnadsregel
MECENAT|Gynnare av konst
MEDGÖRLIG|Foglig
MENED|Falsk ed
METAFOR|Bildligt uttryck
MILITANT|Stridslysten
MISSTRO|Tvivel
MONARK|Kung eller drottning
MONOLOG|Tal av en enda person
MORALIST|Den som predikar moral
MOROS|Dyster, butter
MOSAIK|Bild av små stenar
MOTTO|Valspråk
MUNTER|Glad, uppsluppen
MUSTIG|Kraftig, mäktig, om mat
MYGEL|Fiffel, oegentligheter
MÄKLARE|Förmedlar köp och försäljning
MÖDA|Besvär, slit
NARR|Hovets skämtare
NATTVARD|Kristen sakramentsmåltid
NEMESIS|Vedergällning, ärkefiende
NEPOTISM|Gynnande av släktingar
NESA|Skam
NIHILIST|Den som förnekar alla värden
NIMBUS|Glans, aura
NISCH|Specialområde, eller fördjupning i vägg
NOMAD|Kringvandrande herde
NONCHALANT|Vårdslös, likgiltig
NOSTALGI|Längtan tillbaka
NOTARIE|Juridisk tjänsteman
NOVELL|Kort berättelse
NOVIS|Nybörjare
NYCK|Infall
NÄPEN|Söt, nätt
NÄSVIS|Uppkäftig
OBEVEKLIG|Omedgörlig
OBLIGAT|Oundviklig, självklar
OBSKYR|Dunkel, okänd
ODIUM|Förhatlighet
OKTAV|Åtta toner
OMEN|Förebud
ONYX|Halvädelsten, ofta randig
OPAK|Ogenomskinlig
OPPORTUNIST|Den som vänder kappan efter vinden
ORAKEL|Spådomsplats, eller vis person
ORDALAG|Uttryckssätt
ORNAT|Prästens skrud
OTYG|Ofog, fuffens
OVATION|Stående applåder
PAKT|Fördrag, förbund
PALATS|Slott
PAMFLETT|Smädeskrift
PARABEL|Liknelse, eller kurva
PARADOX|Självmotsägelse
PARASOLL|Solskydd
PARIA|Utstött person
PARODI|Förlöjligande efterapning
PASTISCH|Efterbildning av en stil
PATOS|Starkt känslomässigt engagemang
PEDANT|Petimäter
PENIBEL|Pinsam
PERGAMENT|Skrivmaterial av djurhud
PETITESS|Småsak
PIETET|Vördnad
PILGRIM|Vallfärdande person
PLAGIAT|Stöld av andras verk
PLEBEJ|Ohyfsad person
POMPÖS|Överdådig, högtravande
POTENTAT|Mäktig härskare
PREDIKAN|Prästens tal i kyrkan
PRELUDIUM|Förspel i musik
PRESTIGE|Anseende
PROFAN|Världslig, inte helig
PROFET|Siare, förutsägare
PROLOG|Inledning
PROSA|Obunden text
PROVIANT|Matförråd för en resa
PRÅL|Grann utsmyckning
PSEUDONYM|Antaget författarnamn
PUNSCH|Svensk arraklikör
PURITAN|Moraliskt sträng person
PUTSLUSTIG|Lustig, komisk
PÅFUND|Infall, idé
PÄRLEMOR|Glänsande insida i snäckskal
RABULIST|Bråkmakare
RAMSA|Rytmisk vers
RANSON|Tilldelad portion
RAPSODI|Fritt musikstycke
RASERI|Vrede
REDLIG|Hederlig
REFRÄNG|Återkommande del i en sång
REGENT|Härskare
RELIK|Helig kvarleva
REPLIK|Svar, yttrande i en pjäs
RESIDENS|Officiell bostad
RESPIT|Anstånd
RETORIK|Talekonst
REVY|Underhållning med sketcher och sång
RIDÅ|Teaterns förhänge
RIVAL|Konkurrent
ROTUND|Rund, fetlagd
RYSLIG|Hemsk
RÅDBRÅKA|Tala ett språk mycket illa
RÄNKER|Intriger
RÄTTRÅDIG|Rättvis
SABEL|Krökt svärd
SAKRAMENT|Helig handling i kyrkan
SALUT|Hälsning med skott
SALVA|Smörjmedel, eller serie skott
SANKTION|Bestraffning, eller godkännande
SARKASM|Bitande ironi
SATIR|Hånande skildring
SCHABLON|Mall, stereotyp
SEDESAM|Anständig, pryd
SEKRETESS|Hemlighållande
SENIL|Glömsk av hög ålder
SERENAD|Kvällssång under fönstret
SERVIL|Inställsam
SINEKUR|Bekväm syssla med god lön
SKALD|Diktare
SKOJARE|Bedragare
SKRUPLER|Samvetsbetänkligheter
SKRYMSLE|Gömställe, vrå
SKUMRASK|Skymning, eller ljusskygg verksamhet
SKVALLER|Förtal
SLÄNTRA|Gå långsamt
SMICKER|Inställsamt beröm
SMÄDELSE|Förolämpning
SNOBB|Viktigpetter
SOBER|Nykter, stilren
SOCKEN|Församling på landet
SOLITÄR|Ensam infattad ädelsten
SONETT|Dikt med fjorton rader
SPEKTAKEL|Uppseendeväckande skådespel
SPIRA|Kunglig stav
STATUR|Kroppsbyggnad
STEGRA|Öka, höja
STOISK|Lugn och oberörd
STRAPATS|Mödosam färd
STYVNACKAD|Envis
SUBTIL|Hårfin
SUPERB|Utmärkt
SVADA|Talförhet
SVEPSKÄL|Förevändning
SVINDEL|Bedrägeri, eller yrsel
SYMBIOS|Samlevnad till ömsesidig nytta
SYNDABOCK|Den som får skulden
SYNDAFLOD|Den bibliska översvämningen
SÅLEDES|Alltså
SÄLLSAM|Underlig
TABLÅ|Översikt, eller scenbild
TAFATT|Klumpig
TAKTFULL|Hänsynsfull
TALISMAN|Lyckobringare
TANTIEM|Vinstandel
TARVLIG|Simpel
TERRASS|Uteplats
TESTAMENTE|Sista vilja
TIRAD|Ordflöde
TOGA|Romersk dräkt
TOLERANS|Fördragsamhet
TORFTIG|Fattig, enkel
TORSO|Bål utan huvud och lemmar
TRAKTAT|Avhandling, eller fördrag
TRIUMF|Seger
TRIVIAL|Banal
TRUBADUR|Visdiktare med gitarr
TRUMF|Avgörande fördel
TUMULT|Oordning
TYRANN|Förtryckare
UNDFALLANDE|Eftergiven
UNDERSÅTE|Medborgare under en monark
UPPSTUDSIG|Trotsig
URMAKARE|Lagar klockor
UTOPI|Drömsamhälle
VAGABOND|Luffare
VALLFÄRD|Pilgrimsresa
VANKELMOD|Obeslutsamhet
VANSINNE|Galenskap
VASALL|Lydkung
VEDERLAG|Ersättning
VEDERVÄRDIG|Motbjudande
VEMOD|Stilla sorg
VERITABEL|Riktig, äkta
VESTIBUL|Förhall
VIDLYFTIG|Omfattande, utsvävande
VIGILANT|Vaksam
VIRTUOS|Mästare på ett instrument
VISIR|Hjälmens ansiktsskydd
VOLONTÄR|Frivillig
VRESIG|Butter
VÅDA|Fara, olycka
VÄRJA|Smalt stickvapen
VÄRNPLIKT|Skyldighet att göra militärtjänst
VÖRDNAD|Respekt
YNKRYGG|Feg person
YRVAKEN|Förvirrad efter att just ha vaknat
YSTER|Uppsluppen, vild i lek
ZENIT|Högsta punkten på himlen
ZOOLOGI|Läran om djur
ÅBÄKE|Klumpig och otymplig sak
ÅKLAGARE|Väcker åtal
ÅLDERMAN|Ledare för ett skrå
ÅNGER|Samvetskval
ÅTBÖRD|Gest
ÅTLÖJE|Löjlighet
ÄDLING|Adelsman
ÄMBETE|Officiell tjänst
ÄNGSLAN|Oro
ÄNTRA|Borda ett fartyg
ÄREVARV|Segervarv
ÖDMJUK|Anspråkslös
ÖGONTJÄNARE|Är bara flitig när chefen ser på
ÖVERHET|Makthavare
ÖVERMOD|Förmätenhet
ÖDSLIG|Tom, övergiven
FÖRSTÄV|Fartygets främre kant
RODER|Styr fartyget
STYRBORD|Fartygets högra sida
RELING|Fartygets övre kant
HYTT|Sovrum på fartyg
LÄNSA|Ösa ut vatten ur båten
KNOP|Fartmått till sjöss
TAMP|Repstump
SKOT|Lina som reglerar seglet
PEJLA|Bestämma riktning eller djup
LOTS|Vägvisare in i hamn
SKONARE|Segelfartyg med två master
FREGATT|Krigsfartyg
KORVETT|Mindre krigsfartyg
BRIGG|Tvåmastat segelfartyg
KOGG|Medeltida handelsskepp
SKUTA|Mindre segelfartyg
ESKADER|Grupp av krigsfartyg
ARMADA|Krigsflotta
KAPARE|Statligt godkänd sjörövare
MYTERI|Uppror ombord
SKEPPARE|Befälhavare på mindre fartyg
MATROS|Sjöman
JUNGMAN|Ung sjöman
SMED|Bearbetar järn i en ässja
BÖDKARE|Tillverkar tunnor
KOLARE|Gör träkol i en mila
SKRÄDDARE|Syr kläder på beställning
SKOMAKARE|Lagar skor
KRÖGARE|Driver ett värdshus
GLASMÄSTARE|Sätter in fönsterglas
GARVARE|Bereder hudar till läder
REPSLAGARE|Tillverkar rep
KLOCKARE|Kyrkans tjänare som ringer i klockorna
FOGDE|Kronans tjänsteman förr
LÄNSMAN|Polis på landet förr
TORPARE|Brukade ett torp
DRÄNG|Manlig gårdsarbetare förr
PIGA|Kvinnlig tjänare förr
STATARE|Lantarbetare med lön i natura
GESÄLL|Hantverkare mellan lärling och mästare
LÄRLING|Lär sig ett hantverk
MAMSELL|Ansvarig för köket på en gård förr
AMMA|Kvinna som ammar andras barn
BARNMORSKA|Hjälper till vid förlossningar
FÄLTSKÄR|Militär kirurg förr
APOTEKARE|Driver ett apotek
FLOTTARE|Flottade timmer på älvarna
ALLEGRO|Livligt tempo
ADAGIO|Långsamt tempo
FORTE|Starkt, i musik
PIANISSIMO|Mycket svagt, i musik
KADENS|Ackordföljd vid ett slut
ACKORD|Flera toner som klingar samtidigt
ARIA|Solosång i opera
KANTAT|Körverk för en högtid
FUGA|Musikform där stämmorna härmar varandra
SONAT|Instrumentalverk i flera satser
SYMFONI|Stort orkesterverk
OPERETT|Lättsam opera
LIBRETTO|Text till en opera
TENOR|Hög mansröst
SOPRAN|Hög kvinnoröst
BARYTON|Mellanhög mansröst
OBOE|Träblåsinstrument med dubbelt rörblad
FAGOTT|Djupt träblåsinstrument
KLARINETT|Svart träblåsinstrument
CELLO|Stort stråkinstrument
KONTRABAS|Det största stråkinstrumentet
HARPA|Instrument med många strängar
LUTA|Gammalt stränginstrument
NYCKELHARPA|Svenskt folkmusikinstrument
ORGEL|Kyrkans instrument med pipor
CEMBALO|Klaverinstrument där strängarna knäpps
TAKTPINNE|Dirigentens lilla stav
METRONOM|Taktmätare
STÄMGAFFEL|Ger tonen A
PARTITUR|Notbild för hela orkestern
REPERTOAR|Inövade stycken
REQUIEM|Dödsmässa
PSALM|Kyrkosång
HYMN|Lovsång
LÄRKTRÄD|Barrträd som fäller sina barr
HASSEL|Buske med nötter
HAGTORN|Taggig buske
SLÅN|Taggbuske med blå bär
NYPON|Rosens frukt
HJORTRON|Gult bär på myren
KRÅKBÄR|Svart bär i fjällen
ODON|Bär som liknar blåbär
ENBUSKE|Taggig barrbuske
IDEGRAN|Giftigt barrträd
AVENBOK|Lövträd med hårt virke
LIND|Lövträd med doftande blommor
RÖNN|Träd med röda bär
SÄLG|Vide med vårens tidiga hängen
VIDE|Buskartad pil
VASS|Högt gräs vid stranden
NÄCKROS|Flytande blomma i sjön
KABBLEKA|Gul blomma vid stranden
LJUNG|Lila växt på heden
GULLVIVA|Gul vårblomma
PRÄSTKRAGE|Vit sommarblomma
RÖLLEKA|Vit ört som använts som läkemedel
KAMOMILL|Blomma som blir te
MALÖRT|Bitter ört
TIMJAN|Krydda
DRAGON|Krydda med anisaktig smak
KUMMIN|Krydda i bröd och ost
ANIS|Krydda med lakritssmak
FÄNKÅL|Grönsak med anissmak
KÅLROT|Rotfrukt i rotmos
TJÄDER|Stor skogsfågel
ORRE|Skogsfågel som spelar på våren
JÄRPE|Liten skogshöna
RIPA|Hönsfågel som blir vit på vintern
STORLOM|Stor dykfågel
KNIPA|Dykand
EJDER|Havsand med fina dun
GRÄSAND|Vanlig and
VIGG|Dykand med tofs i nacken
HÄGER|Lång grå vadarfågel
BOFINK|Vanlig finkfågel
DOMHERRE|Röd vinterfågel
SIDENSVANS|Fågel med tofs som äter rönnbär
STEGLITS|Färgglad fink
NÄKTERGAL|Sångfågel som sjunger om natten
RÖDHAKE|Fågel med rött bröst
TALGOXE|Vanlig mes
BLÅMES|Liten blågul fågel
STARE|Svart glänsande fågel
KAJA|Liten kråkfågel
KUNGSÖRN|Stor rovfågel i fjällen
HAVSÖRN|Örn vid kusten
FISKGJUSE|Rovfågel som fångar fisk
VRÅK|Vanlig rovfågel
GLADA|Rovfågel med kluven stjärt
BERGUV|Den största ugglan
SPOV|Vadarfågel med böjd näbb
TOFSVIPA|Vadarfågel med tofs
GÄRDSMYG|Pytteliten fågel
SÄDESÄRLA|Fågel som vippar på stjärten
BRAXEN|Platt sötvattensfisk
MÖRT|Vanlig karpfisk
LÖJA|Liten silvrig fisk
SIMPA|Fisk med stort huvud
TORSK|Matfisk i havet
KOLJA|Torskfisk
MAKRILL|Randig havsfisk
STRÖMMING|Sill från Östersjön
FLUNDRA|Plattfisk
RÖDING|Laxfisk i fjällsjöar
HARR|Laxfisk med stor ryggfena
LAKE|Torskfisk i sötvatten
SIKLÖJA|Fisk vars rom är en delikatess
STÖR|Fisk som ger kaviar
SKALBAGGE|Insekt med hårda täckvingar
TORDYVEL|Svart skalbagge
OLLONBORRE|Skalbagge som surrar i maj
KNOTT|Små stickande flugor
MOTT|Liten fjäril som äter kläder
DAGSLÄNDA|Insekt som lever en enda dag
HARKRANK|Lång och skör mygga
KACKERLACKA|Skadeinsekt i köket
VIKING|Fornnordisk sjöfarare
RUNSTEN|Sten med inristade runor
RUNOR|Fornnordiska tecken
VALHALL|Odens hall för stupade krigare
MIDGÅRD|Människornas värld i nordisk myt
RAGNARÖK|Världens undergång i nordisk myt
VALKYRIA|Mö som hämtar stupade krigare
KORSTÅG|Medeltida krigståg mot Jerusalem
FEODAL|Gäller länsväsendet på medeltiden
SKRÅ|Hantverkarnas sammanslutning förr
HANSAN|Medeltida handelsförbund
TIONDE|Skatt till kyrkan förr
DUKAT|Gammalt guldmynt
RIKSDALER|Gammalt svenskt mynt
SKILLING|Gammalt mynt
FÄSTNING|Befäst anläggning
VALLGRAV|Vattengrav runt en borg
VINDBRYGGA|Fällbar bro vid en borg
KASTELL|Borg, fäste
RUIN|Rester av en byggnad
KATAKOMB|Underjordisk gravplats
MAUSOLEUM|Påkostad gravbyggnad
SARKOFAG|Kista av sten
MUMIE|Balsamerat lik
HIEROGLYF|Egyptiskt bildtecken
PAPYRUS|Forntida skrivmaterial
AMFITEATER|Rund teater med stigande läktare
GLADIATOR|Romersk fäktare på arenan
LEGION|Romersk truppstyrka
SENAT|Rådsförsamling i Rom
TRIBUN|Romersk ämbetsman
AKVEDUKT|Vattenledning buren av valvbågar
FORUM|Torg i ett romerskt samhälle
ATOM|Minsta delen av ett grundämne
MOLEKYL|Förening av atomer
ISOTOP|Variant av ett grundämne
KATALYSATOR|Påskyndar en reaktion
ENZYM|Biologisk katalysator
KROMOSOM|Bär arvsmassan
EVOLUTION|Arternas utveckling
FOSSIL|Förstenad lämning
SEDIMENT|Avlagring
MAGMA|Smält berg under jordskorpan
MERIDIAN|Längdcirkel
EKVATOR|Jordens mittlinje
NEBULOSA|Gasmoln i rymden
KVASAR|Ljusstark avlägsen himlakropp
SUPERNOVA|Exploderande stjärna
HYPOTES|Antagande
TEOREM|Bevisad sats
AXIOM|Grundsats som inte bevisas
LOGARITM|Exponent i matematiken
INTEGRAL|Area under en kurva
VEKTOR|Storhet med riktning
ROMB|Fyrhörning med lika långa sidor
TRAPETS|Fyrhörning med två parallella sidor
PROMILLE|Tusendel
SYNONYM|Ord med samma betydelse
ANTONYM|Motsatsord
HOMONYM|Ord som låter likadant men betyder olika
PALINDROM|Ord som är likadant baklänges
ANAGRAM|Ord med omkastade bokstäver
AKRONYM|Ord bildat av begynnelsebokstäver
EPITET|Tillnamn
EPOS|Hjältedikt
FABEL|Djurberättelse med sensmoral
ALLEGORI|Sinnebild
HYPERBOL|Överdrift som stilfigur
IDIOM|Fast uttryck
DIALEKT|Lokal variant av ett språk
KALLIGRAFI|Skönskrift
GRAFFITI|Klotter som konst
FOLIANT|Stor och tjock bok
LEXIKON|Ordbok
ANTOLOGI|Samling texter
ESSÄ|Resonerande text
KRÖNIKA|Berättande text, kolumn
REFERAT|Sammanfattning
CITAT|Ordagrann återgivning
FOTNOT|Not längst ner på sidan
MARGINAL|Kantutrymme
RUBRIK|Överskrift
INGRESS|Inledningen i en artikel
ÅTAL|Anklagelse i domstol
BALK|Del av lagboken
PARAGRAF|Lagstycke
NÄMNDEMAN|Lekmannadomare
BÖTER|Straffavgift
AMNESTI|Allmän benådning
BENÅDNING|Efterskänkt straff
ARVINGE|Den som ärver
LAGFART|Inskrivning av ägande till fastighet
SERVITUT|Rätt att nyttja annans mark
ARRENDE|Hyra av mark
INTECKNING|Pant i en fastighet
KONKURS|Obestånd
REVISOR|Granskar räkenskaper
BOKSLUT|Årlig redovisning
TULL|Avgift vid gränsen
ACCIS|Punktskatt förr
MOMS|Mervärdesskatt
VOTERING|Omröstning
MOTION|Förslag i riksdagen
REMISS|Begäran om utlåtande
KOALITION|Samarbete mellan partier
KUPP|Plötsligt maktövertagande
JUNTA|Militärregering
REGIM|Styre
ANARKI|Laglöshet
MONARKI|Kungadöme
REPUBLIK|Stat utan kung
AMBASSAD|Beskickning i ett annat land
DEKRET|Påbud
EDIKT|Kungligt påbud
FÖRORDNING|Föreskrift
DELIKATESS|Läckerhet
GOURMET|Matkännare
APERITIF|Drink före maten
DIGESTIF|Dryck efter maten
BULJONG|Klar soppa, spad
FOND|Koncentrerat spad
REDNING|Mjöl och fett som binder en sås
GRATÄNG|Ugnsrätt med ost på ytan
TERRIN|Kall pastej, eller soppskål
PASTEJ|Ugnsbakad färs i form
MARÄNG|Bakverk av vispad äggvita
KOLA|Seg sötsak
MARSIPAN|Mandelmassa
KONDITORI|Kafé med bakverk
BAKELSE|Litet tårtliknande bakverk
KAVRING|Mörkt och sött bröd
TUNNBRÖD|Platt nordsvenskt bröd
ISTER|Fett från gris
FLÄSK|Griskött
SYLTA|Kallskuret av grishuvud
LUTFISK|Julfisk behandlad med lut
GRAVLAX|Saltgravad lax
GLÖGG|Kryddat varmt vin
MJÖD|Honungsvin
RABARBER|Syrlig stjälk till paj
KRUSBÄR|Grönt syrligt bär
VINBÄR|Röda eller svarta bär i klasar
BJÖRNBÄR|Mörkt bär på taggig buske
KRASSE|Skarp grön krydda
PURJOLÖK|Lång och mild lök
KORIANDER|Krydda som många tycker smakar tvål
GURKMEJA|Gul krydda
INGEFÄRA|Stark rot
MUSKOT|Krydda till potatismos
NEJLIKA|Krydda, eller blomma
LAGERBLAD|Torkat blad i grytor
KRINOLIN|Vid kjolstomme
KORSETT|Snört livstycke
KRAVATT|Slips
FRACK|Högtidsdräkt med skört
SMOKING|Aftondräkt
KÄPP|Promenadstav
MONOKEL|Glas för ett öga
LORNJETT|Glasögon på skaft
SOLFJÄDER|Man viftar sval med den
PERUK|Lösa hår
SNUSDOSA|Liten ask för snus
KANDELABER|Flerarmad ljusstake
LJUSKRONA|Takarmatur med ljus
GOBELÄNG|Vävd bildtapet
DRAPERI|Tygförhänge
DIVAN|Låg soffa utan ryggstöd
SCHÄSLONG|Vilsoffa
SEKRETÄR|Skrivbyrå med nedfällbar lucka
KOMMOD|Låg byrå
TABURETT|Pall
KAKELUGN|Kakelklädd ugn för uppvärmning
MANGEL|Pressar tvätt
FRIMODIG|Öppen och oförskräckt
FÖRSYNT|Hänsynsfull, blyg
FÖRDOMSFRI|Öppen för nya tankar
SPRÄTTIG|Fåfäng om kläder
TRÄTGIRIG|Grälsjuk
LÅNGSINT|Glömmer inte oförrätter
HÄTSK|Fientlig
SLUG|Listig
FÖRSLAGEN|Listig
KÄCK|Pigg och modig
RAPP|Snabb
STRÄV|Hård, kärv
KÄRV|Sträv
BUTTER|Sur
TRUMPEN|Sur, tvär
SNARSTUCKEN|Lättstött
LÄTTRÖRD|Gråter lätt
ÖMSINT|Kärleksfull
HULD|Vänlig, nådig
BLID|Mild
LJUV|Behaglig
SKIR|Tunn och genomskinlig
SPRÖD|Ömtålig
BRÄCKLIG|Skör
MULEN|Molnig
DISIG|Lätt dimmig
RUSKIG|Otäck, om väder
LJUM|Svagt varm
GENUIN|Äkta
OTYMPLIG|Klumpig
KLUMPEDUNS|Klumpig person
TÖLP|Ohyfsad person
DRUMMEL|Klantig person
STOFIL|Gammal tråkig man
KNÖL|Ohyfsad person
FILUR|Lurifax
LURIFAX|Skälm
SKÄLM|Skämtsam person
SPEFULL|Hånfull
GÄCKANDE|Retsam, undanglidande
SPYDIG|Elak, syrlig
FRÄCK|Oförskämd
KAXIG|Mallig
MALLIG|Högfärdig
DRYG|Högdragen, eller räcka länge
BESPISA|Förse med mat
BEVILJA|Tillåta
BEDYRA|Försäkra högtidligt
FÖRSKINGRA|Stjäla betrodda pengar
FÖRVÄRVA|Skaffa
GÄCKA|Lura, håna
HÄDA|Tala vanvördigt om det heliga
INSKÄRPA|Betona
KÅSERA|Prata lättsamt
LISMA|Fjäska
NEDKOMMA|Föda barn
PLÄDERA|Tala för
RANSAKA|Genomsöka
SKONA|Spara, låta bli
SNYLTA|Leva på andra
STÅTA|Skryta
SVASSA|Gå mallig
TILLSKANSA|Skaffa sig orättmätigt
TRAKTERA|Bjuda på
UNDSÄTTA|Komma till hjälp
UPPVIGLA|Hetsa
VACKLA|Tveka, vingla
VÅNDA|Plåga, ångest
VÅLLA|Orsaka
YRKA|Kräva
ÄMBAR|Hink, gammalt ord
STORSLAGEN|Imponerande, grandios
SVÅRMODIG|Dyster, melankolisk
LÄTTSINNIG|Obetänksam
TROSKYLDIG|Naiv
GODTROGEN|Lättlurad
ABONNEMANG|Löpande prenumeration
ADVOKAT|Juridiskt ombud
AFORISM|Kort och träffande tänkespråk
AKADEMI|Lärt samfund eller högskola
AKVARELL|Målning i vattenfärg
ALKEMI|Medeltidens försök att göra guld
ALMOSA|Gåva till fattiga
AMBROSIA|Gudarnas föda
ANAKONDA|Stor orm i Sydamerika
ANTIKVARIAT|Butik för gamla böcker
APOSTEL|Lärjunge som sprider läran
ARKEOLOG|Gräver fram fornlämningar
ARKIV|Samling av gamla handlingar
ARMBORST|Pilbåge med skaft och avtryckare
ASKETISK|Försakande, sträng
ASYL|Fristad
AVGRUND|Djupt svalg
AVSKY|Stark motvilja
BALLAD|Berättande visa
BANDIT|Rövare
BASTANT|Kraftig, stadig
BEDAGAD|Gammal och sliten
BEFOGAD|Berättigad
BEGRUNDA|Tänka efter noga
BEKLÄMD|Nedstämd, ängslig
BELÅTEN|Nöjd
BENÄMNING|Namn, beteckning
BESTICK|Kniv, gaffel och sked
BESVÄRLIG|Krånglig
BETRODD|Pålitlig, anförtrodd
BOHEM|Obunden konstnärsnatur
BRASKANDE|Uppseendeväckande
BRYSK|Tvär, ohövlig
BURLESK|Grovt komisk
DEBATT|Ordväxling, diskussion
DEBUTANT|Den som framträder första gången
DEFENSIV|Försvarsinriktad
DELIRIUM|Förvirringstillstånd
DEVIS|Valspråk
DIADEM|Smycke som bärs i håret
DIGERDÖDEN|Pesten på 1300-talet
DILETTANT|Amatör
DIMENSION|Utsträckning, mått
DISPYT|Ordstrid
DOKTRIN|Lära, princip
EGOIST|Självisk person
EKIPAGE|Vagn med hästar
EKVILIBRIST|Balanskonstnär
ELOKVENS|Vältalighet
EMBRYO|Foster i tidigt stadium
EMIR|Arabisk furste
ENSTÖRING|Person som drar sig undan andra
EREMIT|Ensam asket
ESTET|Den som sätter skönhet främst
EUFORI|Stark lycka, rus
FABRIKAT|Tillverkning, märke
FALSARIUM|Förfalskning
FAMN|Gammalt längdmått, eller öppna armar
FANATIKER|Blint hängiven person
FARSKAP|Det att vara far
FEMININ|Kvinnlig
FIGURANT|Statist
FILANTROP|Människovän som skänker pengar
FJÄTTRA|Binda i bojor
FLAGRANT|Uppenbar
FLOSKEL|Tom fras
FORMIDABEL|Väldig, imponerande
FRASERING|Musikaliskt uttryck
FRIBYTARE|Sjörövare
FÖRFÄDER|Anor
FÖRMÄTEN|Övermodig
FÖRNUMSTIG|Brådmogen och viktig
FÖRSONING|Återställd vänskap
FÖRÄDLA|Förbättra
GENEALOGI|Släktforskning
GLORIA|Ljusring kring helgonets huvud
GRAVITATION|Tyngdkraft
GUVERNANT|Privatlärarinna i hemmet
HERALDIK|Läran om vapensköldar
HIPPODROM|Kapplöpningsbana
HORDE|Svärm, skara
HUMANIST|Kännare av humaniora
HURTIG|Rask och glad
HYPOKONDER|Inbillningssjuk person
IMMIGRANT|Invandrare
IMPERIUM|Rike, välde
INTERMEZZO|Mellanspel
JUBILEUM|Högtidlighållande av jämnt år
KAKOFONI|Disharmoni, oljud
KALIBER|Rörvidd, eller kvalitet
KALLSINNIG|Likgiltig, kylig
KANNIBAL|Människoätare
KAPITULERA|Ge upp
KARNEVAL|Utklädningsfest
KASTANJETT|Spanskt klickinstrument
KATARSIS|Själslig rening
KAVALJER|Bordsherre
KLADD|Utkast
KOMPONIST|Tonsättare
KONDOLERA|Beklaga sorgen
KONTRAST|Motsats
KONVOJ|Följe av fordon
KORPORAL|Militär grad
KURAGE|Mod
KVINTETT|Grupp om fem
LABYRINT|Irrgång
LAMPFEBER|Scenskräck
LEGENDARISK|Sagolik, ryktbar
LITOGRAFI|Stentryck
LOJALITET|Trohet
MAGISTER|Akademisk titel
MANUSKRIPT|Handskrift
MARGINELL|Obetydlig
MELODRAM|Överdrivet känslosamt drama
MEMOARER|Levnadsminnen
MENAGERI|Samling vilda djur
MINIATYR|Förminskad avbildning
MISANTROP|Människohatare
MONUMENT|Minnesmärke
MÄRKESDAG|Minnesvärd dag
NOMINELL|Till namnet
OBELISK|Fyrkantig stenpelare
OLIGARKI|Fåmannavälde
OMNIBUS|Hästdragen buss förr
OMSTÄNDLIG|Utförlig och krånglig
OSTENTATIV|Demonstrativ
PANORAMA|Vidsträckt utsikt
PANTOMIM|Stumt skådespel
PARAFRAS|Fri omskrivning
PASSAGERARE|Resande
PATRIARK|Släktöverhuvud
PAVILJONG|Lätt byggnad i park
PENDANG|Motstycke
PERIFERI|Ytterkant
PIONJÄR|Banbrytare
PITTORESK|Målerisk
POLEMIK|Ordstrid i skrift
PORTFÖLJ|Dokumentväska
POSTUM|Efter döden
PRAKTFULL|Ståtlig
PRÄRIE|Grässlätt i Nordamerika
PUBERTET|Övergång till vuxen
PYROMAN|Den som tvångsmässigt anlägger bränder
REBELL|Upprorsmakare
REFORM|Förändring till det bättre
REGALIER|Kungliga värdighetstecken
RENEGAT|Överlöpare
RESIGNERA|Ge upp, finna sig
RETIRERA|Dra sig tillbaka
REVOLT|Uppror
RIDDARSAL|Ståtlig sal i ett slott
ROTUNDA|Rund byggnad med kupol
SABOTAGE|Avsiktlig förstörelse
SAKKUNNIG|Expert
SAMVETE|Inre röst för rätt och fel
SANATORIUM|Vårdhem för vila
SEKTERISM|Inskränkt grupptänkande
SENTENS|Tänkespråk
SIESTA|Middagsvila
SKEPTISK|Tvivlande
SOLIDARISK|Lojal, sammanhållen
SPIRITUELL|Kvick
STAFFLI|Ställning för målarduk
STIPENDIUM|Penningbidrag till studier
SUVENIR|Minnessak från resa
SYNAGOGA|Judisk gudstjänstlokal
TABERNAKEL|Skåp för sakramentet
TEMPERAMENT|Lynne
TERMINOLOGI|Fackord
TRAGEDI|Sorgespel
TRIBUNAL|Domstol
UNIFORM|Enhetlig dräkt
VALUTA|Myntslag
VEDERMÖDA|Lidande
VERANDA|Inglasad uteplats
VERNISSAGE|Öppning av konstutställning
VIADUKT|Bro över en dal
VIGNETT|Liten bild i boktryck
`;
