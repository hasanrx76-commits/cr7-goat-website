/* ============================================================
   GOAT · CR7 — Poori Kahani (A se Z)
   Year-by-year 3D timeline with floating era photos
   Photos: Wikimedia Commons (free licenses) — credits in README
   ============================================================ */

/* ---------- Chapters: 1985 → 2026 ---------- */
const CHAPTERS = [
{
  year:"1985", tag:"Madeira · Funchal", c1:"#2dd4bf", c2:"#0f766e",
  img:"funchal_sunset.jpg", alt:"Funchal, Madeira — Cristiano Ronaldo ka janm shehar",
  title:"Ek chhota island, ek bada sapna",
  stats:{club:"—", age:"0", goals:"—", key:"5 February · Funchal"},
  story:[
    "5 February 1985 ko <b>Cristiano Ronaldo dos Santos Aveiro</b> ka janm hua — Funchal, Madeira. Portugal ka ek chhota island, Atlantic Ocean ke beech, mainland se kaafi door.",
    "Pita <b>Jose Dinis Aveiro</b> municipality ke mali the aur local club Andorinha mein kit man bhi. Maa <b>Maria Dolores</b> gharon aur restaurants mein khana banane aur safai ka kaam karti thi. Ghar mein paisa bahut kam tha — char bachchon ka pet paalna mushkil tha.",
    "Cristiano parivaar ka sabse chhota bachcha tha. Dolores ne baad mein bataya ki chauthi baar maa banne waqt halat itni kharab thi ki woh pareshan thi — lekin baat aage nahi badhi, aur 5 Feb 1985 ko Cristiano ka janm hua.",
    "Naam ka doosra hissa <span class='hl'>'Ronaldo'</span> uske pita ke pasandida actor <b>Ronald Reagan</b> (baad mein America ke president) ke naam par rakha gaya. Ek garib ghar, ek mali pita, ek mehnatkash maa — kahani yahin se shuru hoti hai."
  ]
},
{
  year:"1993", tag:"Bachpan · Andorinha", c1:"#2dd4bf", c2:"#0f766e",
  img:"funchal_old.jpg", alt:"Purane zamane ka Funchal — Ronaldo ka bachpan",
  title:"8 saal ki umar: pehla club",
  stats:{club:"Andorinha", age:"8", goals:"—", key:"Nickname: Abelhinha"},
  story:[
    "Sirf <b>8 saal ki umar mein</b> (aaspaas 1993) Cristiano ne Andorinha ki youth team ke liye officially khelna shuru kiya. Wahan ke coach aur saathi ekmat the — is ladke ki <span class='hl'>speed aur ball par control</span> alag hi hai.",
    "Tezi ki wajah se use <b>'Abelhinha'</b> (chhoti makkhi) bulaya jaata tha — woh makkhi ki tarah idhar-udhar bhaagta rehta tha. Jeet ki bhookh itni thi ki har haar par ro padta tha, isliye kuch log <b>'Chorao'</b> (rone wala) bhi kehte the.",
    "Bachpan mein sab bachche ek hi kamre mein sote the. Khilone ya naye kapde ek luxury jaisi baat the — lekin Cristiano ke paas ek cheez thi jo kisi bhi garibi se bada sapna bana sakti thi: <span class='hl'>football</span>."
  ]
},
{
  year:"1997", tag:"Lisbon · Sporting CP", c1:"#10b981", c2:"#065f46",
  img:"cr7_sporting_museum.jpg", alt:"Sporting CP ki purani memorabilia — C. Ronaldo ki #28 jersey",
  title:"12 saal ka bachcha, akele Lisbon",
  stats:{club:"Sporting CP academy", age:"12", goals:"—", key:"Fee: ~£1,500"},
  story:[
    "Lagbhag 10 saal ki umar mein Cristiano <b>Nacional</b> (Madeira ke bade club) chala gaya, jahan do saal khela. Phir 1997 mein <b>Sporting CP</b> ki academy ne trial ke baad chuna — reports ke mutabik fee sirf <span class='hl'>1,500 pounds</span>.",
    "12 saal ki umar mein, jab bachche aksar maa ke saath sote hain, Cristiano <b>akele hawai jahaz mein baithkar Lisbon pahuncha</b>. Sporting ke hostel mein rehna pada. Shuruaat ke dino mein woh raat ko ghar ki yaad mein roya karta tha.",
    "Hostel mein saathiyon ne uske <b>Madeira wale accent</b> ka mazaak udaya. Ek baar school mein teacher se jhagda hua — use school se nikal diya gaya. Uske baad maa Dolores ne samjha ki ab raasta sirf football hai.",
    "Academy mein uska graph tezi se chadha — kaha jaata hai ki ek hi season mein woh U-16, U-17, U-18, B team aur senior team tak pahunch gaya. Scouts jaise <b>Aurelio Pereira</b> pehchan chuke the — ye ladka kuch alag hai."
  ]
},
{
  year:"2000", tag:"Dil ki bimari", c1:"#f43f5e", c2:"#881337",
  img:"cr7_cr7jpl.jpg", alt:"Museu CR7, Funchal — Cristiano Ronaldo ki pehchaan",
  title:"Jab sapna khatre mein aa gaya",
  stats:{club:"Sporting academy", age:"15", goals:"—", key:"Tachycardia operation"},
  story:[
    "Lagbhag <b>15 saal ki umar mein</b> (saal 2000 ke aaspaas) hard training ke dauran doctors ne dekha ki Cristiano ka dil aaram ki halat mein bhi bahut tez dhadakta hai. Jaanch ke baad pata chala: <span class='hl'>tachycardia</span> — 'racing heart'.",
    "Normal dil 60-100 baar dhadakta hai; is bimari mein galat electrical signals ki wajah se dhadkan isse upar chali jaati hai — chakkar, ghabrahat, saans phoolna. Ek athlete ke liye ye gambhir baat thi.",
    "Sporting ke doctors ne <b>chhote operation</b> ki salaah di (catheter ablation — jise 'laser operation' bhi kaha jaata hai). Sawaal ye tha ki kya ye ladka professional football khel paayega ya nahi.",
    "Maa Dolores ko bada jhatka laga, lekin khud Cristiano utna ghabraya nahi. <span class='hl'>Operation successful raha</span> — kuch hi dino mein woh training par laut aaya. Is ke baad uski dil ki problem ne kabhi career nahi roka. Aaj 41 saal ki umar mein bhi uski fitness misaal hai."
  ]
},
{
  year:"2002", tag:"Sporting · Senior debut", c1:"#10b981", c2:"#065f46",
  img:"cr7_statue.jpg", alt:"Cristiano Ronaldo ki statue, Madeira",
  title:"17 saal ki umar, pehla hi match do goals",
  stats:{club:"Sporting CP", age:"17", goals:"5", key:"Moreirense: 2 goals"},
  story:[
    "2002-03 season mein Cristiano ne <b>Sporting ki senior team</b> ke liye debut kiya. Coach <b>Laszlo Boloni</b> ne mauka diya, aur October 2002 mein league match mein <b>Moreirense ke khilaf do goals</b> maar diye — umar sirf 17.",
    "Ek bachcha jo kuch saal pehle ghar ki yaad mein ro raha tha, ab Portugal ki league mein goals maar raha tha. Sporting ke liye us season usne 31 matches mein 5 goals maare.",
    "Poore Madeira ko ab us par garv tha. Aage asli test tha — England ki tez aur physical Premier League, aur uske liye ek bulava aane wala tha."
  ]
},
{
  year:"2003", tag:"Manchester United", c1:"#ef4444", c2:"#7f1d1d",
  img:"cr7_utmchel.jpg", alt:"Cristiano Ronaldo — Manchester United ka red era",
  title:"Number 7 ka bojh, ya takat?",
  stats:{club:"Man United", age:"18", goals:"6", key:"£12M · Jersey 7"},
  story:[
    "August 2003: Sporting ne apna naya stadium <b>Estadio Jose Alvalade</b> khola. Opening match ke liye Manchester United ko bulaya — Sporting <b>3-1 se jeeta</b> aur Cristiano ne United ke khiladiyon ko dribbling aur tezi se pareshan kar diya.",
    "Kaha jaata hai ki match ke baad United ke players ne khud <b>Sir Alex Ferguson</b> se kaha ki is ladke ko sign karna chahiye. Ferguson ne deri nahi ki — <span class='hl'>12 million pounds</span> mein deal pakki, jo uss waqt kisi teenager ke liye England ka bada record tha.",
    "Cristiano ko mili <b>jersey number 7</b> — wahi jersey jo kabhi David Beckham ki thi. 18 saal ki umar mein ye bada dabaav tha, lekin usne dabaav ko takat bana liya.",
    "16 August 2003 ko Bolton ke khilaf Premier League debut (substitute). Pehla goal November 2003 mein <b>Portsmouth ke khilaf free kick</b> se. Ek videsh se aaya ladka jo gend ghumata, step-overs karta — England ke fans ke liye naya anubhav. August 2003 mein <b>Portugal ke liye bhi debut</b> ho gaya."
  ]
},
{
  year:"2004", tag:"FA Cup · Euro aansu", c1:"#ef4444", c2:"#7f1d1d",
  img:"cr7_2008_celtic.jpg", alt:"Jawan Cristiano Ronaldo — Manchester United red kit",
  title:"Pehli badi trophy, pehle bade aansu",
  stats:{club:"Man United", age:"19", goals:"9", key:"FA Cup · Euro final"},
  story:[
    "2004 mein Cristiano ne <b>FA Cup final</b> mein Millwall ke khilaf goal maara aur trophy jeeti — United career ki pehli badi trophy. England mein uske aane ke sirf ek season mein hi ye saabit ho gaya ki woh badi trophies ke liye bana hai.",
    "Usi saal <b>Euro 2004 Portugal</b> mein hi ho raha tha. Poora desh apni team ke saath tha. Portugal final tak pahuncha — lekin <b>Greece ne final 1-0 se jeet liya</b>.",
    "19 saal ka Cristiano maidan par <span class='hl'>phoot-phoot kar roya</span>. Ye aansu Portugal ke har fan ko yaad hain — ek adhoora sapna, jo 12 saal baad poora hoga."
  ]
},
{
  year:"2005", tag:"Pita ka dehant", c1:"#64748b", c2:"#1e293b",
  img:"cr7_utd_chelsea2.jpg", alt:"Jawan Cristiano Ronaldo — Manchester United red kit",
  title:"20 saal ki umar mein sabse bada dard",
  stats:{club:"Man United", age:"20", goals:"12", key:"League Cup jeeta"},
  story:[
    "September 2005 mein Cristiano ke pita <b>Jose Dinis Aveiro</b> ka 52 saal ki umar mein dehant ho gaya — jigar ki bimari aur sharab ki lat ka zikr aksar kiya jaata hai. Us waqt Cristiano 20 saal ka tha aur United ke liye khel raha tha.",
    "Pita ko ye dekhne ka mauka nahi mila ki unka bete ka <b>Real Madrid</b> mein ya Portugal ke trophy jeetne ke samay sapna poora hua. Cristiano ne kai baar kaha hai ki use is baat ka dukh hai.",
    "Isi daur mein usne <b>League Cup</b> jeeta aur <b>Wayne Rooney</b> ke saath jodi banne lagi — jo baad mein England ki sabse khatarnaak jodiyon mein se ek bani."
  ]
},
{
  year:"2006", tag:"Wink · World Cup", c1:"#ef4444", c2:"#7f1d1d",
  img:"cr7_wc2006.jpg", alt:"Cristiano Ronaldo — 2006 World Cup, Portugal celebration",
  title:"Vivaad se zyada, himmat",
  stats:{club:"Man United", age:"21", goals:"12", key:"WC: 4th place"},
  story:[
    "2006 World Cup ke quarter-final mein Portugal ka muqabla England se tha. Cristiano ke United ke saathi <b>Wayne Rooney</b> ko red card mila, aur uske baad Ronaldo ne bench ki taraf dekhkar <span class='hl'>wink</span> kar diya.",
    "England mein gussa fail gaya — kuch dino tak laga ki woh United chhod de. Lekin <b>Ferguson aur club ne poora saath diya</b>. Wapas aane ke baad booing mili, lekin Cristiano ne usse apni takat bana li.",
    "Portugal semi-final tak pahuncha (France se haar), chauthe sthan par raha. Cristiano ke liye ek bada tournament, lekin trophy se door. Club mein wo ab bada star ban raha tha."
  ]
},
{
  year:"2007", tag:"Premier League title", c1:"#ef4444", c2:"#7f1d1d",
  img:"cr7_2007_shev.jpg", alt:"Cristiano Ronaldo — Manchester United, 2007",
  title:"Ladke se superstar banne ka saal",
  stats:{club:"Man United", age:"22", goals:"23", key:"PFA double · PL title"},
  story:[
    "2006-07 season — Cristiano <span class='hl'>23 goals</span> maare, aur United ne <b>Premier League title</b> 3 saal baad jeeta. Ab woh sirf tricks wala ladka nahi raha — goal machine ban chuka tha.",
    "Usi saal ke <b>PFA Players' Player</b> aur <b>Young Player</b> dono awards mile — pehla khiladi jo ye double jeeta. Free kicks, headers aur long shots — uske hathiyar ab poore the.",
    "Rooney ke saath uski jodi khatarnaak thi. Duniya ab maan chuki thi — Madeira ka ladka football ke sabse upar ja raha hai. Agle saal sabse bada sabit hone wala tha."
  ]
},
{
  year:"2008", tag:"Ballon d'Or · Moscow", c1:"#fbbf24", c2:"#b45309",
  img:"cr7_2008_utd.jpg", alt:"Cristiano Ronaldo — Manchester United, 2008",
  title:"Moscow ki raat, aur pehla taj",
  stats:{club:"Man United", age:"23", goals:"42", key:"UCL · Ballon d'Or"},
  story:[
    "2007-08 Cristiano ke career ka ab tak ka sabse bada season: <b>42 goals</b> (31 Premier League mein), <span class='hl'>European Golden Shoe</span>, aur United ne <b>Premier League + Champions League dono</b> jeete.",
    "<b>21 May 2008, Moscow:</b> Champions League final, muqabla Chelsea se. Cristiano ne header se goal kiya, Lampard ne barabari ki, match penalties tak gaya. Shootout mein <span class='hl'>Ronaldo ka penalty chuk gaya</span> — lagne laga United haar jayega.",
    "Lekin Chelsea ke captain <b>John Terry</b> ka penalty phisal gaya, aur goalkeeper <b>Van der Sar</b> ne Anelka ka penalty rok liya. United jeet gaya — Cristiano ka pehla Champions League.",
    "December 2008 mein <b>pehla Ballon d'Or</b> — 23 saal ki umar mein. Madeira ke garib ladke ke liye football ka sabse bada individual award. Usne kaha ki ye uski maa aur parivaar ki mehnat ka natija hai."
  ]
},
{
  year:"2009", tag:"Real Madrid", c1:"#f8fafc", c2:"#7c3aed",
  img:"cr7_2009_kaka.jpg", alt:"Cristiano Ronaldo aur Kaka — Real Madrid, 2009",
  title:"80 million pounds ka duniya record",
  stats:{club:"Real Madrid", age:"24", goals:"33", key:"Bernabéu: 80,000 fans"},
  story:[
    "2008-09: teesra lagataar Premier League title, Club World Cup — lekin Champions League final mein <b>Barcelona se Rome mein 0-2 haar</b>. Cristiano ke liye ek naya mod aa gaya.",
    "Jul 2009 mein <b>Real Madrid</b> ne lagbhag <span class='hl'>80 million pounds (94 million euros)</span> mein khareeda — uss waqt world record. Presentation ke din Bernabéu stadium mein lagbhag <b>80,000 fans</b> pahunche.",
    "Ferguson ne 2008 mein bechne se saaf mana kar diya tha, lekin 2009 mein Cristiano ne khud naya challenge chahiye. Ab uski jang <b>Lionel Messi</b> aur Barcelona se thi — football ki sabse badi rivalry."
  ]
},
{
  year:"2012", tag:"Calma · 100 points", c1:"#f8fafc", c2:"#7c3aed",
  img:"cr7_2012.jpg", alt:"Cristiano Ronaldo — Real Madrid, 2012",
  title:"La Liga ka naya record",
  stats:{club:"Real Madrid", age:"27", goals:"60", key:"100 points · 46 league goals"},
  story:[
    "2010-11 mein Cristiano ne La Liga mein <b>40 goals</b> maare, aur 2011 ke Copa del Rey final mein Barcelona ke khilaf <b>extra time mein header</b> se jeet dilayi.",
    "Phir aaya <b>2011-12</b> — Real Madrid ne La Liga <span class='hl'>record 100 points</span> ke saath jeeta, aur Cristiano ke us season La Liga mein <b>46 goals</b> the.",
    "April 2012: Camp Nou mein Barcelona ke khilaf jeet ka goal Cristiano ne maara, aur uska <b>'calma, calma'</b> celebration — haath se Barcelona fans ko shaant hone ka ishara — Real-Barcelona rivalry ka ek amar pal ban gaya."
  ]
},
{
  year:"2014", tag:"La Decima", c1:"#fbbf24", c2:"#b45309",
  img:"cr7_4609.jpg", alt:"Cristiano Ronaldo — Real Madrid white kit closeup",
  title:"12 saal ka intezaar khatam",
  stats:{club:"Real Madrid", age:"29", goals:"51", key:"17 UCL goals · B d'Or #3"},
  story:[
    "Real Madrid ko <b>12 saal se Champions League nahi mili</b> thi. 24 May 2014 ko Lisbon mein Atletico Madrid ke khilaf final: aakhri minute mein Ramos ke header ne Real ko extra time tak pahunchaya, aur phir <span class='hl'>4-1 se jeet</span> — Cristiano ne penalty se aakhiri goal maara. Ye tha <b>'La Decima'</b> — 10va Champions League.",
    "Usi season mein usne ek hi Champions League season mein <b>17 goals</b> maare — jo aaj tak ek record hai.",
    "December 2014 mein usne <b>teesra Ballon d'Or</b> jeeta (Messi aur Neuer ko peeche chhodkar). Cristiano ab football ki duniya ka raja tha."
  ]
},
{
  year:"2016", tag:"Euro + Champions League", c1:"#fbbf24", c2:"#15803d",
  img:"cr7_2016.jpg", alt:"Cristiano Ronaldo — Portugal red kit, Euro 2016",
  title:"Sabse bada saal — dono taraf trophy",
  stats:{club:"Real + Portugal", age:"31", goals:"51", key:"Euro 2016 champion"},
  story:[
    "<b>Champions League (Milan):</b> Atletico ke khilaf penalties tak gaya match, aur Real Madrid jeet gaya — lagataar doosri baar Cristiano ke saath.",
    "<b>Euro 2016 (France):</b> Portugal group stage mein koi match nahi jeeta, lekin knockout mein team badal gayi. Final mein France ke saamne shuruaati minutes mein tackle mein <span class='hl'>ghutne mein chot</span> — 25ve minute woh rote hue maidan se baahar gaya. Sapna phir toot'ta dikh raha tha.",
    "Phir jo hua — character. Woh touchline ke paas khada hokar <b>ek coach ki tarah</b> team ko chillakar nirdesh deta raha. Extra time mein <b>Eder ke 109ve minute</b> ke goal se Portugal 1-0 se jeet gaya — <span class='hl'>pehli baar European champion</span>.",
    "Isi saal usne <b>chautha Ballon d'Or</b> jeeta. Cristiano ke career ka sabse bada saal."
  ]
},
{
  year:"2017", tag:"Paanchva Ballon d'Or", c1:"#fbbf24", c2:"#b45309",
  img:"cr7_2017.jpg", alt:"Cristiano Ronaldo — Real Madrid, 2017",
  title:"Double, Cardiff, aur Messi ke barabar",
  stats:{club:"Real Madrid", age:"32", goals:"42", key:"B d'Or #5 · Twins"},
  story:[
    "2016-17 mein Real Madrid ne <b>La Liga aur Champions League dono</b> jeete. Cardiff ke final mein <b>Juventus ke khilaf 4-1</b> — Cristiano ne do goals maare, aur us season UCL mein 12 goals maare.",
    "December 2017: <span class='hl'>paanchva Ballon d'Or</span> — Lionel Messi ke barabar. 2008 se lagatar top par rehna kisi sapne se kam nahi.",
    "Isi saal uske jode bachche <b>Eva aur Mateo</b> ka janm hua, aur Georgina ne <b>Alana Martina</b> ko janm diya. Jeet aur parivaar — dono taraf khushiyan."
  ]
},
{
  year:"2018", tag:"Kyiv · Bicycle kick · Juventus", c1:"#f1f5f9", c2:"#334155",
  img:"cr7_2018.jpg", alt:"Cristiano Ronaldo — 2018, Real Madrid ke aakhri din",
  title:"Teen lagataar Champions League, phir alvida",
  stats:{club:"Real → Juventus", age:"33", goals:"44", key:"€100M · Turin bicycle kick"},
  story:[
    "<b>Kyiv mein Liverpool ke khilaf 2018 final</b> — Real Madrid 3-1 se jeet gaya, aur Cristiano ne <span class='hl'>lagataar teesri Champions League</span> apne naam ki. Itihaas mein bahut kam log aisa kar sake.",
    "April 2018, Turin: Juventus ke khilaf quarter-final mein uska <b>bicycle kick</b> itna khoobsurat tha ki <b>Juventus ke apne fans ne bhi taaliyan bajayi</b>. Kuch mahine baad wahi club uska ban gaya.",
    "Jul 2018 mein usne Real Madrid chhod diya — 9 saal, <b>438 matches, 450 goals</b>, Real ka sabse bada goalscorer, 4 Champions League. Reports mein tax ke mamle aur bhaav ki kami ka zikr raha. Juventus ne <span class='hl'>100 million euros</span> mein khareeda.",
    "Isi saal Russia World Cup mein Spain ke khilaf <b>hat-trick</b> (aakhri free kick 88ve minute), lekin round of 16 mein Portugal Uruguay se haar gaya."
  ]
},
{
  year:"2019", tag:"Serie A + Nations League", c1:"#f1f5f9", c2:"#334155",
  img:"cr7_2019_juve.jpg", alt:"Cristiano Ronaldo — Juventus ki black-white kit",
  title:"Italy mein bhi chhaap",
  stats:{club:"Juventus", age:"34", goals:"28", key:"Serie A · NL champion"},
  story:[
    "Shuruaat mein Serie A mein goal karne mein thoda waqt laga, phir goals ki jhadi lag gayi. <b>2018-19 mein Juventus champion</b> — Cristiano ka chautha desh, chauthi league.",
    "March 2019: Atletico Madrid ke khilaf Juventus 2-0 se pichhad raha tha (pehle leg mein). Dusre leg mein Cristiano ne <span class='hl'>hat-trick</span> maarkar 3-0 se jeet dilayi — uske career ke sabse behtareen performances mein se ek.",
    "June 2019: <b>Nations League</b> — semi-final mein Switzerland ke khilaf hat-trick, aur final mein Netherlands ko 1-0 se haraya. Portugal ka doosra bada khitaab, Cristiano ke naam."
  ]
},
{
  year:"2021", tag:"Old Trafford wapsi", c1:"#ef4444", c2:"#7f1d1d",
  img:"cr7_2021_wapsi.jpg", alt:"Cristiano Ronaldo — Manchester United wapsi, 2021",
  title:"12 saal baad ghar wapsi",
  stats:{club:"Man United", age:"36", goals:"24", key:"Euro Golden Boot"},
  story:[
    "2020-21 mein Cristiano <b>Serie A ka top scorer</b> bana (29 league goals, 37 overall), lekin Juventus ka asli sapna Champions League poora nahi hua. Euro 2020 mein <b>5 goals ke saath Golden Boot</b>, lekin Portugal round of 16 mein bahar.",
    "Aug 2021: Man City jaane ki khabron ke beech achanak khabar aayi — <span class='hl'>woh wapas Manchester United ja raha hai</span>. 12 saal baad Old Trafford mein number 7 dobara uske paas. Wapsi ke pehle hi match mein Newcastle ke khilaf do goals — poora stadium jhoom utha.",
    "April 2022: Cristiano aur Georgina ke ghar ek bahut dukhad ghatna — jode bachche mein se ek ladke ka janm ke samay dehant. <b>Anfield mein Liverpool fans ne 7ve minute (uska number) mein taaliyan</b> bajakar samvedna dikhai."
  ]
},
{
  year:"2022", tag:"Qatar ka dard · Al-Nassr", c1:"#eab308", c2:"#713f12",
  img:"cr7_wc2022.jpg", alt:"Cristiano Ronaldo — 2022 Qatar World Cup, Portugal",
  title:"Ek bade daur ka dard, aur naya raasta",
  stats:{club:"United → Al-Nassr", age:"37", goals:"24", key:"5 WCs mein goal (record)"},
  story:[
    "2022-23 mein manager <b>Erik ten Hag</b> ke saath rishta bigda — bench par baithna, phir November mein <b>Piers Morgan</b> ko interview, aur 22 November ko <span class='hl'>United se contract khatam</span>. Uske career ka sabse tanaavpurn daur.",
    "<b>Qatar 2022</b> — paanchva World Cup. Ghana ke khilaf penalty goal: Cristiano <span class='hl'>paanch alag World Cups mein goal karne wala pehla male player</span>. Lekin round of 16 mein coach Santos ne use bench kiya, aur quarter-final mein Morocco ne Portugal ko 1-0 se haraya. Cristiano tunnel mein rote hue gaya.",
    "30 December 2022: <b>Al-Nassr (Saudi Arabia)</b> ne sign kiya. Europe ki top league chhodkar ek bilkul naya safar — jisme use league title bhi jeetni thi."
  ]
},
{
  year:"2023", tag:"Al-Nassr · Ronaldo effect", c1:"#eab308", c2:"#1d4ed8",
  img:"cr7_alnassr23.jpg", alt:"Cristiano Ronaldo — Al-Nassr blue kit",
  title:"Saudi Arabia ka naya adhyay",
  stats:{club:"Al-Nassr", age:"38", goals:"—", key:"Arab Club Champions Cup"},
  story:[
    "Is transfer ke baad Saudi Pro League mein <b>Benzema, Neymar, Mane</b> jaise bade khiladi aaye — log ise <span class='hl'>'Ronaldo effect'</span> kehne lage. Pehle Saudi league ko Europe ke log shayad hi dekhte the, ab poori duniya.",
    "Aug 2023: Al-Nassr ne <b>Arab Club Champions Cup</b> jeeta — final mein Al-Hilal ke khilaf Cristiano ne do goals maare.",
    "Pehla season trophy ke bina guzra — title Al-Hilal se haar gayi, King's Cup final mein bhi haar. Cristiano ro pada. Lekin usne goals maarna jaari rakha, aur aage ek naya record likhne wala tha."
  ]
},
{
  year:"2024", tag:"900 goals", c1:"#eab308", c2:"#1d4ed8",
  img:"cr7_2023.jpg", alt:"Cristiano Ronaldo — Al-Nassr, ball ke saath",
  title:"Football itihaas ka pehla 900",
  stats:{club:"Al-Nassr + Portugal", age:"39", goals:"35 (SPL record)", key:"900va career goal"},
  story:[
    "2023-24 mein Cristiano ne Saudi Pro League mein <b>35 goals</b> maare — ek season ka naya record — aur league ke top scorer bane.",
    "<b>5 September 2024:</b> Croatia ke khilaf Nations League mein usne apna <span class='hl'>900va career goal</span> maara — football itihaas ka pehla player jisne is aankde ko chhua. Usne kaha: ab target <b>1000 goals</b> hai.",
    "Euro 2024 mein woh <b>6 alag Euros khelne wala pehla khiladi</b> bana — lekin is tournament mein ek bhi goal nahi. Slovenia ke khilaf extra time penalty chuka, woh phoot-phoot kar roya; phir shootout mein goal maarkar Portugal ko aage badhaya."
  ]
},
{
  year:"2025", tag:"Nations League · Jota · Engagement", c1:"#eab308", c2:"#1d4ed8",
  img:"cr7_2026a.jpg", alt:"Cristiano Ronaldo — Portugal modern kit",
  title:"Doosra Nations League, aur ek dukh",
  stats:{club:"Al-Nassr", age:"40", goals:"—", key:"Contract 2027 tak"},
  story:[
    "<b>8 June 2025, Munich:</b> Nations League final Portugal vs Spain. Match 2-2 par gaya, aur 60ve minute ke aaspaas Cristiano ne goal maara. Shootout mein <span class='hl'>Portugal ne 5-3 se jeet liya</span> — Cristiano ka doosra Nations League khitaab, 40 saal ki umar mein.",
    "<b>3 July 2025:</b> Portugal aur Liverpool ke forward <b>Diogo Jota</b> ka car accident mein dehant — unke bhai Andre bhi. Cristiano ne funeral mein hissa liya. Portugal ki team mein sirf khiladi nahi, ek parivaar jaisa rishta.",
    "<b>26 June 2025:</b> Al-Nassr ke saath contract <span class='hl'>2027 tak</span> badha — 40 saal ki umar mein. <b>11 August 2025:</b> Georgina ne engagement ring ki photo share ki. Beta <b>Cristiano Jr.</b> ne October 2025 mein Portugal U-16 debut kiya."
  ]
},
{
  year:"2026", tag:"League · World Cup · Shaadi", c1:"#fbbf24", c2:"#b45309",
  img:"cr7_2026b.jpg", alt:"Cristiano Ronaldo — 2026 World Cup, Portugal jersey",
  title:"41 saal ki umar — league title, 6th World Cup, shaadi",
  stats:{club:"Al-Nassr", age:"41", goals:"28", key:"Saudi league champion"},
  story:[
    "<b>21 May 2026, Riyadh:</b> Al-Nassr ne Damac ko 4-1 se haraya aur <span class='hl'>2025-26 Saudi Pro League</span> jeet li. Cristiano ne do goals maare (ek late free-kick) — ye Al-Nassr ka 2018-19 ke baad pehla league title, aur Ronaldo ke liye Saudi mein pehli league trophy. Jeet ke baad woh stadium ke ultras se <b>drum lekar fans ke saath chants</b> lagata raha.",
    "<b>2026 World Cup:</b> 41 saal ki umar mein apna <b>chhatha World Cup</b> — Messi ke saath chhe World Cups khelne wala doosra male player. Group stage mein Uzbekistan ke khilaf do goals, round of 32 mein Croatia ke khilaf penalty (pehla WC knockout goal). Lekin <b>6 July ko round of 16 mein Portugal Spain se 1-0 se haar gaya</b> — Cristiano rote hue laut gaya. Match se pehle usne kaha tha: <span class='hl'>ye mera aakhri World Cup hai</span>.",
    "<b>11 August 2026, Cascais:</b> Cristiano aur <b>Georgina Rodriguez</b> ne ek chhote nijee civil ceremony mein shaadi kar li — paanchon bachche samaroh mein maujood.",
    "August 2026 mein <b>Vogue</b> ko diye interview mein: <b>'Ye shayad mera football ka aakhri saal hai'</b> — aur 1000 goals ka sapna. July 2026 tak 976 goals. Ek garib ladke ki kahani ab duniya ki sabse badi kahani ban chuki hai."
  ]
}
];

/* ---------- Badges (icons) ---------- */
const ICONS = {
  trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg>',
  ball:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7l4 3-1.5 5h-5L8 10l4-3Z"/><path d="M12 3v4M4.6 9.6 8 10M19.4 9.6 16 10M7.2 20l2.6-5M16.8 20l-2.6-5"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8L12 3Z"/></svg>'
};

/* ---------- Build timeline ---------- */
const timeline = document.getElementById('timeline');
const rail = document.getElementById('rail');
const TOTAL = String(CHAPTERS.length).padStart(2,'0');

CHAPTERS.forEach((ch, i) => {
  const sec = document.createElement('section');
  sec.className = 'chapter';
  sec.id = 'y' + ch.year;
  sec.style.setProperty('--c1', ch.c1);
  sec.style.setProperty('--c2', ch.c2);
  const num = String(i + 1).padStart(2,'0');
  sec.innerHTML = `
    <div class="ch-bg" aria-hidden="true"></div>
    <div class="ch-num" aria-hidden="true">${num}<em>/${TOTAL}</em></div>
    <div class="ch-inner">
      <div class="ch-left reveal">
        <span class="ch-tag">${ch.tag}</span>
        <h2 class="ch-year">${ch.year}</h2>
        <h3 class="ch-title">${ch.title}</h3>
        <div class="ch-story">${ch.story.map(p => `<p>${p}</p>`).join('')}</div>
      </div>
      <div class="ch-orbwrap reveal">
        <div class="orb parallax" data-depth="14">
          <div class="orb-glow" aria-hidden="true"></div>
          <div class="orb-ring" aria-hidden="true"></div>
          <div class="orb-ring r2" aria-hidden="true"></div>
          <div class="photo-float">
            <figure class="photo-frame tilt">
              <img src="assets/img/${ch.img}" alt="${ch.alt}" loading="lazy" decoding="async">
              <figcaption><b>${ch.year}</b><span>${ch.tag}</span></figcaption>
            </figure>
          </div>
          <div class="badge b1" aria-hidden="true">${ICONS.trophy}</div>
          <div class="badge b2" aria-hidden="true">${ICONS.ball}</div>
          <div class="badge b3" aria-hidden="true">${ICONS.star}</div>
        </div>
      </div>
      <aside class="ch-panel reveal">
        <div class="panel-h">Season Sheet · ${ch.year}</div>
        <div class="prow"><span>Club</span><b>${ch.stats.club}</b></div>
        <div class="prow"><span>Umar</span><b>${ch.stats.age}</b></div>
        <div class="prow"><span>Goals</span><b>${ch.stats.goals}</b></div>
        <div class="prow key"><span>Highlight</span><b>${ch.stats.key}</b></div>
      </aside>
    </div>`;
  timeline.appendChild(sec);

  const dot = document.createElement('button');
  dot.title = ch.year;
  dot.dataset.target = 'y' + ch.year;
  dot.addEventListener('click', () => sec.scrollIntoView({behavior:'smooth', block:'start'}));
  rail.appendChild(dot);
});

/* ---------- Reveal on scroll ---------- */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
}, {threshold:0.15});
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* Fallback: kuch browsers/background tabs IntersectionObserver defer karte hain —
   scroll/rAF se bhi reveal check karte rehte hain taaki animation guaranteed chale. */
function revealFallback(){
  document.querySelectorAll('.reveal:not(.in)').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.9 && r.bottom > 0) el.classList.add('in');
  });
}

/* ---------- Active chapter: header year + theme + rail dot ---------- */
const headYear = document.getElementById('headYear');
const dots = [...rail.children];
const root = document.documentElement;
const sections = [...document.querySelectorAll('.chapter')];

const activeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const idx = sections.indexOf(e.target);
    headYear.textContent = CHAPTERS[idx].year;
    root.style.setProperty('--c1', CHAPTERS[idx].c1);
    root.style.setProperty('--c2', CHAPTERS[idx].c2);
    dots.forEach((d, i) => d.classList.toggle('on', i === idx));
  });
}, {rootMargin:'-45% 0px -45% 0px'});
sections.forEach(s => activeObs.observe(s));

/* ---------- Progress bar ---------- */
const progressFill = document.getElementById('progressFill');
function activeFallback(){
  /* IO ke backup: viewport ke center me kaunsa chapter hai — scroll se hi decide karo */
  const mid = innerHeight * 0.5;
  for (let i = 0; i < sections.length; i++){
    const r = sections[i].getBoundingClientRect();
    if (r.top <= mid && r.bottom >= mid){
      headYear.textContent = CHAPTERS[i].year;
      root.style.setProperty('--c1', CHAPTERS[i].c1);
      root.style.setProperty('--c2', CHAPTERS[i].c2);
      dots.forEach((d, j) => d.classList.toggle('on', j === i));
      break;
    }
  }
}
function onScroll(){
  const max = document.documentElement.scrollHeight - innerHeight;
  progressFill.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
  revealFallback();
  activeFallback();
}
addEventListener('scroll', onScroll, {passive:true});
onScroll();

/* ---------- Mouse parallax + cursor glow ---------- */
let mx = 0, my = 0, cx = 0, cy = 0;
const cursorGlow = document.querySelector('.cursor-glow');
addEventListener('mousemove', e => {
  mx = (e.clientX / innerWidth - 0.5) * 2;
  my = (e.clientY / innerHeight - 0.5) * 2;
  if (cursorGlow) cursorGlow.classList.add('on');
});
(function loop(){
  cx += (mx - cx) * 0.06;
  cy += (my - cy) * 0.06;
  document.querySelectorAll('.parallax').forEach(el => {
    const d = parseFloat(el.dataset.depth || 10);
    el.style.transform = `translate3d(${(-cx * d).toFixed(2)}px, ${(-cy * d).toFixed(2)}px, 0)`;
  });
  if (cursorGlow && cursorGlow.classList.contains('on')){
    const gx = (cx * 0.5 + 0.5) * innerWidth;
    const gy = (cy * 0.5 + 0.5) * innerHeight;
    cursorGlow.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
  }
  requestAnimationFrame(loop);
})();

/* ---------- Photo frame 3D tilt ---------- */
function bindTilt(el){
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${(px * 14).toFixed(2)}deg) rotateX(${(-py * 14).toFixed(2)}deg) scale(1.04)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
  });
}
document.querySelectorAll('.tilt').forEach(bindTilt);

/* ---------- Starfield ---------- */
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [], shooters = [];
function sizeCanvas(){
  canvas.width = innerWidth * devicePixelRatio;
  canvas.height = innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  const n = Math.min(150, Math.floor(innerWidth / 9));
  stars = Array.from({length:n}, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 1.4 + 0.3,
    a: Math.random() * 0.6 + 0.2,
    z: Math.random() * 1 + 0.3,
    tw: Math.random() * Math.PI * 2
  }));
}
sizeCanvas();
addEventListener('resize', sizeCanvas);
setInterval(() => {
  if (document.hidden) return;
  shooters.push({x: Math.random()*innerWidth*0.7, y: Math.random()*innerHeight*0.4, vx: 6+Math.random()*4, vy: 2+Math.random()*2, life: 60});
}, 4200);

(function draw(){
  if (!document.hidden){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for (const s of stars){
      s.tw += 0.02;
      const alpha = s.a * (0.6 + 0.4 * Math.sin(s.tw));
      ctx.beginPath();
      ctx.arc(s.x - cx * 12 * s.z, s.y - cy * 12 * s.z, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
      ctx.fill();
    }
    for (let i = shooters.length - 1; i >= 0; i--){
      const sh = shooters[i];
      sh.x += sh.vx; sh.y += sh.vy; sh.life--;
      const g = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx*8, sh.y - sh.vy*8);
      g.addColorStop(0, 'rgba(255,255,255,.9)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(sh.x - sh.vx*8, sh.y - sh.vy*8); ctx.stroke();
      if (sh.life <= 0) shooters.splice(i,1);
    }
  }
  requestAnimationFrame(draw);
})();

/* ---------- Loader ---------- */
const loader = document.getElementById('loader');
const ldrNum = document.getElementById('ldrNum');
const ldrFill = document.getElementById('ldrFill');
let pct = 0;
const li = setInterval(() => {
  pct = Math.min(100, pct + Math.random() * 14 + 6);
  ldrNum.textContent = Math.floor(pct) + '%';
  ldrFill.style.width = pct + '%';
  if (pct >= 100){
    clearInterval(li);
    setTimeout(() => {
      loader.classList.add('done');
      document.body.classList.remove('loading');
    }, 250);
  }
}, 110);
