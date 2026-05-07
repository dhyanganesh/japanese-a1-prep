// ══════════════════════════════════════════
// LESSON DATA
// ══════════════════════════════════════════
const LESSONS = {
"L1: Greetings":[["en","Lesson 1. Greetings. Repeat after each Japanese word!"],["en","Hiragana — basic syllabary"],["ja","ひらがな"],["en","Katakana — for foreign words"],["ja","カタカナ"],["en","Kanji — Chinese characters"],["ja","かんじ"],["en","Japanese language"],["ja","にほんご"],["en","Good morning"],["ja","おはようございます"],["en","Hello, good afternoon"],["ja","こんにちは"],["en","Good evening"],["ja","こんばんは"],["en","Goodbye"],["ja","さようなら"],["en","See you later"],["ja","じゃあ、また"],["en","Yes"],["ja","はい"],["en","No, or no problem"],["ja","いいえ"],["en","Excuse me"],["ja","すみません"],["en","Thank you very much"],["ja","ありがとうございます"],["en","Thanks for your hard work"],["ja","おつかれさまでした"],["en","Excuse me for leaving before you"],["ja","おさきにしつれいします"],["en","Activity — 8 AM. What do you say?"],["ja","おはようございます"],["en","2 PM. Meeting teacher."],["ja","こんにちは"],["en","7 PM. Seeing a friend."],["ja","こんばんは"],["en","Leaving before your boss."],["ja","おさきにしつれいします"]],
"L2: Classroom":[["en","Lesson 2. Classroom Language."],["en","Japan"],["ja","にほん"],["en","Country"],["ja","くに"],["en","Teacher"],["ja","せんせい"],["en","Classroom"],["ja","きょうしつ"],["en","Name"],["ja","なまえ"],["en","Class, lecture"],["ja","じゅぎょう"],["en","Page"],["ja","ページ"],["en","Slowly"],["ja","ゆっくり"],["en","A little"],["ja","ちょっと"],["en","Once again"],["ja","もういちど"],["en","A little more"],["ja","もうすこし"],["en","In pairs"],["ja","ペアで"],["en","Please listen"],["ja","きいてください"],["en","Please write"],["ja","かいてください"],["en","Please look"],["ja","みてください"],["en","Please read"],["ja","よんでください"],["en","Please speak"],["ja","はなしてください"],["en","Please say it"],["ja","いってください"],["en","I understood"],["ja","わかりました"],["en","I don't understand"],["ja","わかりません"],["en","Not yet"],["ja","まだです"],["en","What does this mean?"],["ja","ってどういういみですか"],["en","Please say it again"],["ja","もういちどおねがいします"]],
"L3: Introductions":[["en","Lesson 3. Introductions and Professions."],["en","Korea"],["ja","かんこく"],["en","Korean language"],["ja","かんこくご"],["en","Korean person"],["ja","かんこくじん"],["en","China"],["ja","ちゅうごく"],["en","Chinese language"],["ja","ちゅうごくご"],["en","Germany"],["ja","ドイツ"],["en","German language"],["ja","ドイツご"],["en","Egypt"],["ja","エジプト"],["en","Arabic language"],["ja","アラビアご"],["en","Student"],["ja","がくせい"],["en","Teacher, instructor"],["ja","きょうし"],["en","Engineer"],["ja","エンジニア"],["en","Company employee"],["ja","かいしゃいん"],["en","Government employee"],["ja","こうむいん"],["en","Housewife"],["ja","しゅふ"],["en","I, me"],["ja","わたし"],["en","Business card"],["ja","めいし"],["en","Can do"],["ja","できます"],["en","A little"],["ja","すこし"],["en","Nice to meet you — first time"],["ja","はじめまして"],["en","Pleased to meet you"],["ja","どうぞよろしくおねがいします"],["en","My name is — humble form"],["ja","ともうします"],["en","Is that so? Really?"],["ja","そうですか"],["en","Um, getting attention"],["ja","あのう"],["en","Where are you from?"],["ja","どちらから？"],["en","What is your profession?"],["ja","おしごとは？"],["en","Currently studying"],["ja","べんきょうちゅう"],["en","Dhyan's full self introduction — listen and repeat!"],["ja","はじめまして。ディヤンともうします。インドじんです。エンジニアです。にほんごをべんきょうちゅうです。どうぞよろしくおねがいします。"]],
"L4: Family":[["en","Lesson 4. Family."],["en","My father"],["ja","ちち"],["en","My mother"],["ja","はは"],["en","My elder brother"],["ja","あに"],["en","My elder sister"],["ja","あね"],["en","My younger brother"],["ja","おとうと"],["en","My younger sister"],["ja","いもうと"],["en","My husband"],["ja","おっと"],["en","My wife"],["ja","つま"],["en","Children"],["ja","こども"],["en","Family"],["ja","かぞく"],["en","Who?"],["ja","だれ"],["en","1 person — IRREGULAR!"],["ja","ひとり"],["en","2 persons — IRREGULAR!"],["ja","ふたり"],["en","Cool, handsome"],["ja","かっこいい"],["en","Cute"],["ja","かわいい"],["en","Young"],["ja","わかい"],["en","Beautiful"],["ja","きれい"],["en","Years old suffix"],["ja","さい"],["en","Counter for people"],["ja","にん"],["en","How old are you?"],["ja","おいくつですか？"],["en","I live in Bengaluru."],["ja","ベンガルールにすんでいます。"],["en","My family has 4 people."],["ja","かぞくはよにんです。"]],
"L5: Food":[["en","Lesson 5. Food and Eating."],["en","Meal, cooked rice"],["ja","ごはん"],["en","Breakfast"],["ja","あさごはん"],["en","Bread"],["ja","パン"],["en","Egg"],["ja","たまご"],["en","Fish"],["ja","さかな"],["en","Meat"],["ja","にく"],["en","Vegetables"],["ja","やさい"],["en","Fruit"],["ja","くだもの"],["en","Miso soup"],["ja","みそしる"],["en","Food in general"],["ja","たべもの"],["en","Water"],["ja","みず"],["en","Green tea"],["ja","おちゃ"],["en","Black tea"],["ja","こうちゃ"],["en","Milk"],["ja","ぎゅうにゅう"],["en","Coffee"],["ja","コーヒー"],["en","Juice"],["ja","ジュース"],["en","Drinks in general"],["ja","のみもの"],["en","To eat"],["ja","たべます"],["en","To drink"],["ja","のみます"],["en","To like"],["ja","すき"],["en","Always"],["ja","いつも"],["en","Often"],["ja","よく"],["en","Said before eating"],["ja","いただきます"],["en","Said after eating"],["ja","ごちそうさまでした"],["en","Here you go"],["ja","どうぞ"],["en","No thank you"],["ja","けっこうです"],["en","I like fish. But I don't eat vegetables much."],["ja","さかながすきです。でも、やさいはあまりたべません。"]],
"L6: Ordering":[["en","Lesson 6. Ordering Food and Counting Things."],["en","Sushi"],["ja","すし"],["en","Ramen"],["ja","ラーメン"],["en","Udon"],["ja","うどん"],["en","Soba"],["ja","そば"],["en","Curry"],["ja","カレー"],["en","Pizza"],["ja","ピザ"],["en","Hamburger"],["ja","ハンバーガー"],["en","Ice cream"],["ja","アイス"],["en","Cola"],["ja","コーラ"],["en","Hot coffee"],["ja","ホットコーヒー"],["en","Delicious"],["ja","おいしい"],["en","Cheap"],["ja","やすい"],["en","The most, number one"],["ja","いちばん"],["en","Welcome to our shop!"],["ja","いらっしゃいませ"],["en","Please give me"],["ja","をください"],["en","1 thing — hitotsu"],["ja","ひとつ"],["en","2 things — futatsu"],["ja","ふたつ"],["en","3 things — mittsu"],["ja","みっつ"],["en","4 things — yottsu"],["ja","よっつ"],["en","5 things — itsutsu"],["ja","いつつ"],["en","6 things — muttsu"],["ja","むっつ"],["en","How many things?"],["ja","いくつ？"],["en","Order 2 sushi and 1 miso soup."],["ja","すしをふたつとみそしるをひとつください。"]],
"L7: Rooms":[["en","Lesson 7. Rooms and Furniture."],["en","House"],["ja","いえ"],["en","Apartment"],["ja","アパート"],["en","Condominium"],["ja","マンション"],["en","Detached house"],["ja","いっこだて"],["en","Room"],["ja","へや"],["en","Holiday"],["ja","やすみ"],["en","Bed"],["ja","ベッド"],["en","Table"],["ja","テーブル"],["en","Chair"],["ja","いす"],["en","Sofa"],["ja","ソファ"],["en","Television"],["ja","テレビ"],["en","Air conditioner"],["ja","エアコン"],["en","Park"],["ja","こうえん"],["en","Department store"],["ja","デパート"],["en","Restaurant"],["ja","レストラン"],["en","Nearby"],["ja","ちかく"],["en","There is — for objects"],["ja","あります"],["en","Bright"],["ja","あかるい"],["en","Dark"],["ja","くらい"],["en","Spacious"],["ja","ひろい"],["en","Narrow"],["ja","せまい"],["en","New"],["ja","あたらしい"],["en","Old"],["ja","ふるい"],["en","Big"],["ja","おおきい"],["en","Small"],["ja","ちいさい"],["en","Please come visit me!"],["ja","あそびにきてください"],["en","My room is spacious and bright."],["ja","わたしのへやはひろくてあかるいです。テレビとベッドがあります。"]],
"L8: Locations":[["en","Lesson 8. Location of Things."],["en","Above, on top"],["ja","うえ"],["en","Below, under"],["ja","した"],["en","Inside"],["ja","なか"],["en","Beside"],["ja","よこ"],["en","In front"],["ja","まえ"],["en","Behind"],["ja","うしろ"],["en","Here"],["ja","ここ"],["en","There"],["ja","そこ"],["en","Over there"],["ja","あそこ"],["en","Book"],["ja","ほん"],["en","Clock, watch"],["ja","とけい"],["en","Box"],["ja","はこ"],["en","Shelf"],["ja","たな"],["en","Entrance"],["ja","げんかん"],["en","Kitchen"],["ja","だいどころ"],["en","Bath"],["ja","おふろ"],["en","Toilet"],["ja","トイレ"],["en","Garden"],["ja","にわ"],["en","Excuse me, is anyone home?"],["ja","ごめんください"],["en","Welcome!"],["ja","いらっしゃい"],["en","Please come in"],["ja","どうぞあがってください"],["en","Excuse me for intruding"],["ja","おじゃまします"],["en","The book is on the table."],["ja","ほんはテーブルのうえにあります。"],["en","The clock is beside the shelf."],["ja","とけいはたなのよこにあります。"]],
"L9: Daily Life":[["en","Lesson 9. Daily Routines and Time."],["en","What time?"],["ja","なんじ"],["en","Morning"],["ja","あさ"],["en","Noon"],["ja","ひる"],["en","Night"],["ja","よる"],["en","A.M."],["ja","ごぜん"],["en","P.M."],["ja","ごご"],["en","Every day"],["ja","まいにち"],["en","Lunch"],["ja","ひるごはん"],["en","Dinner"],["ja","ばんごはん"],["en","Home"],["ja","うち"],["en","Company"],["ja","かいしゃ"],["en","School"],["ja","がっこう"],["en","Work"],["ja","しごと"],["en","Diary"],["ja","にっき"],["en","Blog"],["ja","ブログ"],["en","Lifestyle"],["ja","せいかつ"],["en","Busy"],["ja","いそがしい"],["en","Late, slow"],["ja","おそい"],["en","To wake up"],["ja","おきます"],["en","To sleep"],["ja","ねます"],["en","To go"],["ja","いきます"],["en","To return home"],["ja","かえります"],["en","To enter"],["ja","はいります"],["en","To take a shower"],["ja","シャワーをあびます"],["en","To read"],["ja","よみます"],["en","To write"],["ja","かきます"],["en","To work"],["ja","しごとをします"],["en","To exercise"],["ja","うんどうをします"],["en","To do housework"],["ja","かじをします"],["en","To take a walk"],["ja","さんぽをします"],["en","O'clock"],["ja","じ"],["en","Half past"],["ja","はん"],["en","Around, approximately"],["ja","ごろ"],["en","Full daily routine"],["ja","まいにち、6じごろおきます。シャワーをあびます。7じにかいしゃにいきます。6じごろうちにかえります。11じごろねます。"]],
"L10: Schedule":[["en","Lesson 10. Schedules, Days, and Months."],["en","Monday"],["ja","げつようび"],["en","Tuesday"],["ja","かようび"],["en","Wednesday"],["ja","すいようび"],["en","Thursday"],["ja","もくようび"],["en","Friday"],["ja","きんようび"],["en","Saturday"],["ja","どようび"],["en","Sunday"],["ja","にちようび"],["en","Yesterday"],["ja","きのう"],["en","Today"],["ja","きょう"],["en","Tomorrow"],["ja","あした"],["en","Last week"],["ja","せんしゅう"],["en","This week"],["ja","こんしゅう"],["en","Next week"],["ja","らいしゅう"],["en","When?"],["ja","いつ"],["en","Shopping"],["ja","かいもの"],["en","Dining out"],["ja","しょくじ"],["en","Tennis"],["ja","テニス"],["en","Concert"],["ja","コンサート"],["en","Party"],["ja","パーティー"],["en","Birthday"],["ja","たんじょうび"],["en","All right, okay"],["ja","だいじょうぶ"],["en","No good"],["ja","だめ"],["en","Congratulations!"],["ja","おめでとうございます"],["en","Cheers!"],["ja","かんぱい"],["en","January through June"],["ja","いちがつ、にがつ、さんがつ、しがつ、ごがつ、ろくがつ"],["en","July through December"],["ja","しちがつ、はちがつ、くがつ、じゅうがつ、じゅういちがつ、じゅうにがつ"],["en","Scheduling dialogue"],["ja","らいしゅうのどようびはどうですか？どようびはちょっと...じゃあ、にちようびはどうですか？にちようびはだいじょうぶです！"]],
"Counters":[["en","Counters — essential for viva!"],["en","1 person — IRREGULAR"],["ja","ひとり"],["en","2 persons — IRREGULAR"],["ja","ふたり"],["en","3 persons"],["ja","さんにん"],["en","4 persons"],["ja","よにん"],["en","5 persons"],["ja","ごにん"],["en","How many people?"],["ja","なんにん？"],["en","1 long object — ippon, note double P"],["ja","いっぽん"],["en","2"],["ja","にほん"],["en","3 — sanbon, note B sound!"],["ja","さんぼん"],["en","I have two pens."],["ja","ペンがにほんあります。"],["en","1 flat thing — ichimai"],["ja","いちまい"],["en","2 flat things — nimai"],["ja","にまい"],["en","3 flat things — sanmai"],["ja","さんまい"],["en","How many flat things?"],["ja","なんまい？"],["en","1 book — issatsu"],["ja","いっさつ"],["en","2 books — nisatsu"],["ja","にさつ"],["en","3 books — sansatsu"],["ja","さんさつ"],["en","1 small animal — ippiki"],["ja","いっぴき"],["en","3 small animals — sanbiki"],["ja","さんびき"],["en","20 years old — special word!"],["ja","はたち"],["en","1 hour"],["ja","いちじかん"],["en","3 minutes — sanpun, note pu"],["ja","さんぷん"],["en","10 minutes — juppun"],["ja","じゅっぷん"],["en","Class is one and a half hours."],["ja","じゅぎょうはいちじかんはんです。"]],
"Viva Prep":[["en","Viva prep! Dhyan's complete phrases — repeat each one!"],["en","Nice to meet you"],["ja","はじめまして"],["en","My name is Dhyan"],["ja","ディヤンともうします"],["en","I am Indian"],["ja","インドじんです"],["en","I live in Bengaluru"],["ja","ベンガルールにすんでいます"],["en","I am an engineer"],["ja","エンジニアです"],["en","I am currently studying Japanese"],["ja","にほんごをべんきょうちゅうです"],["en","Pleased to meet you"],["ja","どうぞよろしくおねがいします"],["en","I don't understand"],["ja","わかりません"],["en","Please say once more"],["ja","もういちどおねがいします"],["en","Please speak slowly"],["ja","ゆっくりおねがいします"],["en","A little"],["ja","すこし"],["en","Can do"],["ja","できます"],["en","Good luck!"],["ja","がんばってください！"],["en","Full self introduction"],["ja","はじめまして。ディヤンともうします。インドじんです。エンジニアです。にほんごをべんきょうちゅうです。どうぞよろしくおねがいします。"]]
};

// ══════════════════════════════════════════
// KANJI DATA — All 5 topics from PDF
// ══════════════════════════════════════════
const KANJI_DATA = [
  {k:"名前",  r:"namae",        en:"Name",                 topic:1},
  {k:"国",    r:"kuni",         en:"Country",              topic:1},
  {k:"私",    r:"watashi",      en:"I / Me",               topic:1},
  {k:"日本",  r:"nihon",        en:"Japan",                topic:1},
  {k:"父",    r:"chichi",       en:"My Father",            topic:2},
  {k:"母",    r:"haha",         en:"My Mother",            topic:2},
  {k:"子ども",r:"kodomo",       en:"Children",             topic:2},
  {k:"魚",    r:"sakana",       en:"Fish",                 topic:3},
  {k:"肉",    r:"niku",         en:"Meat",                 topic:3},
  {k:"卵",    r:"tamago",       en:"Egg",                  topic:3},
  {k:"水",    r:"mizu",         en:"Water",                topic:3},
  {k:"食べます",r:"tabemasu",   en:"To Eat",               topic:3},
  {k:"飲みます",r:"nomimasu",   en:"To Drink",             topic:3},
  {k:"好き[な]",r:"suki(na)",   en:"Like / Fond of",       topic:3},
  {k:"家",    r:"ie",           en:"House / Home",         topic:4},
  {k:"広い",  r:"hiroi",        en:"Spacious / Wide",      topic:4},
  {k:"新しい",r:"atarashii",    en:"New",                  topic:4},
  {k:"古い",  r:"furui",        en:"Old",                  topic:4},
  {k:"大きい",r:"ookii",        en:"Big",                  topic:4},
  {k:"小さい",r:"chiisai",      en:"Small",                topic:4},
  {k:"上",    r:"ue",           en:"Above / Top",          topic:4},
  {k:"下",    r:"shita",        en:"Below / Under",        topic:4},
  {k:"中",    r:"naka",         en:"Inside / Middle",      topic:4},
  {k:"～時",  r:"~ji",          en:"O'clock",              topic:5},
  {k:"～分",  r:"~fun/pun",     en:"Minutes",              topic:5},
  {k:"～半",  r:"~han",         en:"Half Past",            topic:5},
  {k:"枚",    r:"mai",          en:"Flat Object Counter",  topic:5},
  {k:"日ようび",r:"nichiyoobi", en:"Sunday",               topic:5},
  {k:"月ようび",r:"getsuyoobi", en:"Monday",               topic:5},
  {k:"火ようび",r:"kayoobi",    en:"Tuesday",              topic:5},
  {k:"水ようび",r:"suiyoobi",   en:"Wednesday",            topic:5},
  {k:"木ようび",r:"mokuyoobi",  en:"Thursday",             topic:5},
  {k:"金ようび",r:"kinyoobi",   en:"Friday",               topic:5},
  {k:"土ようび",r:"doyoobi",    en:"Saturday",             topic:5},
  {k:"朝",    r:"asa",          en:"Morning",              topic:5},
  {k:"昼",    r:"hiru",         en:"Noon / Daytime",       topic:5},
  {k:"夜",    r:"yoru",         en:"Night",                topic:5}
];

// ══════════════════════════════════════════
// SENTENCES — 35 sentences, only L1-L10 vocab
// ══════════════════════════════════════════
const SENTENCES = [
  {jp:[["私","watashi — I/me"]," はインドじんです。"],en:"I am Indian.",romaji:"Watashi wa Indo-jin desu.",hint:"私 = watashi (I/me) — Topic 1 kanji"},
  {jp:[["名前","namae — name"]," はディヤンともうします。"],en:"My name is Dhyan. (humble form)",romaji:"Namae wa Dhyan to mooshimasu.",hint:"名前 = namae — Topic 1 kanji"},
  {jp:["ベンガルールにすんでいます。"],en:"I live in Bengaluru.",romaji:"Bengaluuru ni sunde imasu.",hint:"にすんでいます = I live in ~ (L4 expression)"},
  {jp:["エンジニアです。にほんごをべんきょうちゅうです。"],en:"I am an engineer. I am studying Japanese.",romaji:"Enjinia desu. Nihongo wo benkyoo-chuu desu.",hint:"エンジニア=L3, べんきょうちゅう=L3 expression"},
  {jp:[["父","chichi — my father"]," はエンジニアです。"],en:"My father is an engineer.",romaji:"Chichi wa enjinia desu.",hint:"父 = chichi (my father) — Topic 2 kanji"},
  {jp:[["母","haha — my mother"]," はしゅふです。"],en:"My mother is a housewife.",romaji:"Haha wa shufu desu.",hint:"母 = haha (my mother) — Topic 2 kanji"},
  {jp:["かぞくはよにんです。"],en:"My family has 4 people.",romaji:"Kazoku wa yo-nin desu.",hint:"かぞく=family (L4), よにん=4 people (counter)"},
  {jp:[["子ども","kodomo — children"]," はふたりいます。"],en:"There are two children.",romaji:"Kodomo wa futari imasu.",hint:"子ども=children (T2), ふたり=2 people IRREGULAR"},
  {jp:[["魚","sakana — fish"]," がすきです。"],en:"I like fish.",romaji:"Sakana ga suki desu.",hint:"魚=fish (T3), すき=like (T3)"},
  {jp:[["肉","niku — meat"]," はあまりたべません。"],en:"I don't eat much meat.",romaji:"Niku wa amari tabemasen.",hint:"肉=meat (T3), たべません=don't eat (L5)"},
  {jp:["まいにち ", ["水","mizu — water"]," をのみます。"],en:"I drink water every day.",romaji:"Mainichi mizu wo nomimasu.",hint:"水=water (T3), のみます=to drink (T3/L5)"},
  {jp:[["卵","tamago — egg"]," はおいしいです。"],en:"Eggs are delicious.",romaji:"Tamago wa oishii desu.",hint:"卵=tamago (egg) — Topic 3 kanji"},
  {jp:["あさごはんにパンとたまごをたべます。"],en:"I eat bread and egg for breakfast.",romaji:"Asa-gohan ni pan to tamago wo tabemasu.",hint:"あさごはん=breakfast (L5), パン=bread (L5), たまご=egg"},
  {jp:[["魚","fish"]," がすきですが、", ["肉","meat"]," はあまりたべません。"],en:"I like fish but don't eat much meat.",romaji:"Sakana ga suki desu ga, niku wa amari tabemasen.",hint:"魚=fish, 肉=meat — both Topic 3 kanji"},
  {jp:["コーヒーをよくのみます。おちゃもすきです。"],en:"I often drink coffee. I also like green tea.",romaji:"Koohii wo yoku nomimasu. Ocha mo suki desu.",hint:"コーヒー=coffee (L5), おちゃ=green tea (L5), よく=often"},
  {jp:[["家","ie — house"]," はひろいです。"],en:"The house is spacious.",romaji:"Ie wa hiroi desu.",hint:"家=house (T4), ひろい=spacious (T4)"},
  {jp:[["新しい","atarashii — new"]," ", ["家","ie — house"]," がほしいです。"],en:"I want a new house.",romaji:"Atarashii ie ga hoshii desu.",hint:"新しい=new (T4), 家=house (T4)"},
  {jp:["わたしのへやはあかるくて ", ["新しい","new"]," です。"],en:"My room is bright and new.",romaji:"Watashi no heya wa akarukute atarashii desu.",hint:"へや=room (L7), あかるい=bright (L7), 新しい=new"},
  {jp:[["古い","furui — old"]," アパートです。でも ", ["大きい","ookii — big"]," です。"],en:"It is an old apartment. But it is big.",romaji:"Furui apaato desu. Demo ookii desu.",hint:"古い=old (T4), 大きい=big (T4)"},
  {jp:["テレビとソファとベッドがあります。"],en:"There is a TV, sofa, and bed.",romaji:"Terebi to sofa to beddo ga arimasu.",hint:"テレビ=TV, ソファ=sofa, ベッド=bed (L7), あります=there is"},
  {jp:["ほんはテーブルの ", ["上","ue — on top"]," にあります。"],en:"The book is on top of the table.",romaji:"Hon wa teeburu no ue ni arimasu.",hint:"上=ue (above/top) — Topic 4 kanji"},
  {jp:["はこの ", ["中","naka — inside"]," に ", ["卵","tamago — egg"]," があります。"],en:"There is an egg inside the box.",romaji:"Hako no naka ni tamago ga arimasu.",hint:"中=inside (T4), 卵=egg (T3)"},
  {jp:["ほんはテーブルの ", ["下","shita — under"]," にあります。"],en:"The book is under the table.",romaji:"Hon wa teeburu no shita ni arimasu.",hint:"下=shita (under/below) — Topic 4 kanji"},
  {jp:["とけいはたなの ", ["上","ue — top"]," にあります。"],en:"The clock is on top of the shelf.",romaji:"Tokee wa tana no ue ni arimasu.",hint:"とけい=clock (L8), たな=shelf (L8), 上=top"},
  {jp:[["朝","asa — morning"]," 6じごろおきます。"],en:"I wake up around 6 in the morning.",romaji:"Asa roku-ji goro okimasu.",hint:"朝=morning (T5), じ=o'clock (T5), ごろ=around (L9)"},
  {jp:[["昼","hiru — noon"]," ごはんはさかなとごはんです。"],en:"Lunch is fish and rice.",romaji:"Hiru-gohan wa sakana to gohan desu.",hint:"昼=noon (T5), さかな=fish, ごはん=rice/meal"},
  {jp:[["夜","yoru — night"]," 11じごろねます。"],en:"I sleep around 11 at night.",romaji:"Yoru juu-ichi-ji goro nemasu.",hint:"夜=night (T5), じ=o'clock (T5), ごろ=around"},
  {jp:["まいにちシャワーをあびて、かいしゃにいきます。"],en:"Every day I take a shower and go to the company.",romaji:"Mainichi shawaa wo abite, kaisha ni ikimasu.",hint:"まいにち=every day, シャワーをあびます=L9, かいしゃ=company L9"},
  {jp:["6じごろうちにかえります。そして、にっきをかきます。"],en:"I return home around 6. Then I write my diary.",romaji:"Roku-ji goro uchi ni kaerimasu. Soshite, nikki wo kakimasu.",hint:"うち=home (L9), かえります=return (L9), にっき=diary (L9)"},
  {jp:["きょうは ", ["月ようび","getsuyoobi — Monday"]," です。"],en:"Today is Monday.",romaji:"Kyoo wa getsuyoobi desu.",hint:"月ようび=Monday — Topic 5 kanji"},
  {jp:["あしたは ", ["土ようび","doyoobi — Saturday"]," です。"],en:"Tomorrow is Saturday — viva day!",romaji:"Ashita wa doyoobi desu.",hint:"土ようび=Saturday — Topic 5 kanji 🎌"},
  {jp:[["水ようび","suiyoobi — Wednesday"]," と ", ["金ようび","kinyoobi — Friday"]," にうんどうをします。"],en:"I exercise on Wednesday and Friday.",romaji:"Suiyoobi to kinyoobi ni undoo wo shimasu.",hint:"水ようび=Wednesday, 金ようび=Friday (T5), うんどうをします=L9"},
  {jp:[["日ようび","nichiyoobi — Sunday"]," はやすみです。かいものをします。"],en:"Sunday is a holiday. I go shopping.",romaji:"Nichiyoobi wa yasumi desu. Kaimono wo shimasu.",hint:"日ようび=Sunday (T5), やすみ=holiday (L7), かいもの=shopping (L10)"},
  {jp:[["朝","morning"]," はパンと ", ["卵","egg"]," をたべます。"],en:"In the morning I eat bread and egg.",romaji:"Asa wa pan to tamago wo tabemasu.",hint:"朝=morning (T5), 卵=egg (T3), パン=bread (L5)"},
  {jp:[["父","father"]," と ", ["母","mother"]," は ", ["古い","old"]," ", ["家","house"]," にすんでいます。"],en:"My father and mother live in an old house.",romaji:"Chichi to haha wa furui ie ni sunde imasu.",hint:"父=father, 母=mother (T2), 古い=old (T4), 家=house (T4)"}
];

// ══════════════════════════════════════════
// VIVA Q&A
// ══════════════════════════════════════════
const VIVA_QA = [
  {q:"おなまえは？ (What is your name?)",         ja:"ディヤンともうします。",                                                      en:"My name is Dhyan. (ともうします = L3 humble form)"},
  {q:"おくにはどちらから？ (Where are you from?)", ja:"インドじんです。",                                                            en:"I am Indian. (じん = nationality suffix, L3)"},
  {q:"どこにすんでいますか？ (Where do you live?)",ja:"ベンガルールにすんでいます。",                                                  en:"I live in Bengaluru. (にすんでいます = L4)"},
  {q:"おしごとは？ (What is your job?)",           ja:"エンジニアです。",                                                            en:"I am an engineer. (エンジニア = L3 profession)"},
  {q:"にほんごをべんきょうしていますか？ (Are you studying Japanese?)", ja:"はい、にほんごをべんきょうちゅうです。",                  en:"Yes, I am currently studying Japanese. (べんきょうちゅう = L3)"},
  {q:"すきなたべものはなんですか？ (What food do you like?)",           ja:"さかながすきです。たまごもすきです。",                    en:"I like fish. I also like eggs. (すき = L5, さかな/たまご = L5)"},
  {q:"まいにちなにをしますか？ (What do you do every day?)",            ja:"まいにちしごとをします。そして、にほんごをべんきょうします。",en:"Every day I work. And I study Japanese. (しごとをします = L9)"},
  {q:"かぞくはなんにんですか？ (How many people in your family?)",      ja:"かぞくはよにんです。ちちとははとわたしです。",                en:"My family has 4 people. Father, mother, and me. (L4 family vocab)"},
  {q:"いまなんじですか？ (What time is it now?)",                       ja:"～じ～ふんです。（じぶんでいってみて！）",                  en:"It is ~ o'clock ~ minutes. (じ = o'clock T5, ふん = minutes T5)"},
  {q:"わかりませんでした。もういちどおねがいできますか？ (Didn't understand — can you repeat?)", ja:"わかりません。もういちどおねがいします。ゆっくりおねがいします。", en:"I don't understand. Please once more. Please speak slowly. (L2 classroom expressions)"},
];

// ══════════════════════════════════════════
// SELF INTRO LINES
// ══════════════════════════════════════════
const INTRO = [
  "はじめまして。",
  "ディヤンともうします。",
  "インドじんです。",
  "ベンガルールにすんでいます。",
  "エンジニアです。",
  "にほんごをべんきょうちゅうです。",
  "どうぞよろしくおねがいします。"
];

// ══════════════════════════════════════════
// DIALOGUES — Can-do practice from memo notes L1-L10
// Lines with dhyan:true are Dhyan's own answers (pre-filled)
// ══════════════════════════════════════════
const DIALOGUES = [
  // ── LESSON 1 ──
  {
    lesson:1, cando:1,
    title:"Exchange Greetings",
    type:"phrases",
    lines:[
      {ja:"おはようございます",       en:"Good morning",                        note:"Use before ~10am"},
      {ja:"こんにちは",               en:"Hello / Good afternoon",              note:"~10am–6pm"},
      {ja:"こんばんは",               en:"Good evening",                        note:"After ~6pm"},
      {ja:"さようなら",               en:"Goodbye (formal)"},
      {ja:"じゃあ、また",             en:"See you later (casual)"},
      {ja:"おさきにしつれいします",   en:"Excuse me for leaving before you"},
      {ja:"おつかれさまでした",       en:"Thanks for your hard work"},
      {ja:"ありがとうございます",     en:"Thank you very much",                 response:"いいえ"},
      {ja:"すみません",               en:"Excuse me / I'm sorry",               response:"いいえ / はい"},
    ]
  },

  // ── LESSON 2 ──
  {
    lesson:2, cando:3,
    title:"Use Basic Classroom Expressions",
    type:"dialogue",
    lines:[
      {speaker:"先生", ja:"ディヤンさん、いますか？",                         en:"Dhyan, are you here?"},
      {speaker:"B",   ja:"はい、います。",                                    en:"Yes, I am here.",              dhyan:true},
      {speaker:"先生", ja:"きいてください。",                                  en:"Please listen."},
      {speaker:"先生", ja:"かいてください。",                                  en:"Please write."},
      {speaker:"先生", ja:"よんでください。",                                  en:"Please read."},
      {speaker:"先生", ja:"ページをあけてください。",                          en:"Please open to the page."},
      {speaker:"先生", ja:"いってください。",                                  en:"Please say it."},
      {speaker:"先生", ja:"みてください。",                                    en:"Please look."},
      {speaker:"先生", ja:"ペアではなしてください。",                          en:"Please talk in pairs."},
      {speaker:"先生", ja:"じゅぎょうをはじめます。",                          en:"Let's start class."},
      {speaker:"先生", ja:"じゅぎょうをおわります。",                          en:"Class is over."},
      {speaker:"B",   ja:"「きょうしつ」ってどういういみですか？",            en:"What does 'classroom' mean?",  dhyan:true},
      {speaker:"先生", ja:"えいごでclassroomですよ。",                         en:"In English it's 'classroom'."},
      {speaker:"B",   ja:"わかりました。",                                    en:"I understood.",                dhyan:true},
      {speaker:"B",   ja:"わかりません。",                                    en:"I don't understand.",          dhyan:true},
      {speaker:"B",   ja:"もういちどおねがいします。",                         en:"Please say it once more.",     dhyan:true},
      {speaker:"B",   ja:"もうすこしゆっくりいってください。",                en:"Please speak more slowly.",    dhyan:true},
      {speaker:"B",   ja:"ちょっとしつれいします。",                          en:"Excuse me for a moment.",      dhyan:true},
      {speaker:"B",   ja:"すみません。おくれます。",                          en:"I'm sorry, I'll be late.",     dhyan:true},
      {speaker:"B",   ja:"やすみます。",                                      en:"I'll be absent.",              dhyan:true},
    ]
  },

  // ── LESSON 3 ──
  {
    lesson:3, cando:5,
    title:"Give a Simple Self Introduction",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"はじめまして。ディヤンです。あのう、おなまえは？",  en:"Nice to meet you. I'm Dhyan. Your name?",          dhyan:true},
      {speaker:"B", ja:"［なまえ］です。",                                  en:"I am [name]."},
      {speaker:"A", ja:"［なまえ］さんですね。どうぞよろしく。",            en:"[name], nice to meet you.",                        dhyan:true},
      {speaker:"B", ja:"どうぞよろしく。",                                  en:"Nice to meet you too."},
      {speaker:"A", ja:"どちらから？",                                       en:"Where are you from?"},
      {speaker:"B", ja:"インドです。",                                       en:"I am from India.",                                 dhyan:true},
      {speaker:"A", ja:"そうですか。",                                       en:"Is that so?"},
      {speaker:"A", ja:"にほんごできますか？",                               en:"Can you speak Japanese?"},
      {speaker:"B", ja:"はい、すこしできます。べんきょうちゅうです。",      en:"Yes, a little. I am currently studying.",          dhyan:true},
      {speaker:"A", ja:"おしごとは？",                                       en:"What is your job?"},
      {speaker:"B", ja:"エンジニアです。",                                   en:"I am an engineer.",                                dhyan:true},
    ]
  },

  // ── LESSON 4 ──
  {
    lesson:4, cando:7,
    title:"Talk Briefly About Your Family",
    type:"dialogue",
    lines:[
      {speaker:"Q", ja:"かぞくはなんにんですか？",                          en:"How many people are in your family?"},
      {speaker:"A", ja:"わたしのかぞくはよにんです。",                      en:"My family has 4 people.",                dhyan:true},
      {speaker:"A", ja:"ちちとははとわたしです。",                          en:"My father, mother, and me.",             dhyan:true},
    ]
  },
  {
    lesson:4, cando:8,
    title:"Tell Someone About Your Family",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"このひとはだれですか？",                            en:"Who is this person?"},
      {speaker:"B", ja:"ちちです。",                                        en:"It's my father.",                        dhyan:true},
      {speaker:"A", ja:"おいくつですか？",                                  en:"How old are they?"},
      {speaker:"B", ja:"［とし］さいです。",                                en:"[age] years old."},
      {speaker:"A", ja:"どこにすんでいますか？",                            en:"Where do they live?"},
      {speaker:"B", ja:"ベンガルールにすんでいます。",                      en:"They live in Bengaluru.",                dhyan:true},
      {speaker:"A", ja:"おしごとは？",                                      en:"What is their job?"},
      {speaker:"B", ja:"エンジニアです。",                                  en:"An engineer.",                           dhyan:true},
    ]
  },

  // ── LESSON 5 ──
  {
    lesson:5, cando:9,
    title:"Talk About Your Favorite Food",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"なにがすきですか？",                                en:"What do you like?"},
      {speaker:"B", ja:"さかながすきです。",                                en:"I like fish.",                           dhyan:true},
      {speaker:"A", ja:"やさいは？",                                        en:"What about vegetables?"},
      {speaker:"B", ja:"やさいはすきじゃないです。",                        en:"I don't like vegetables.",               dhyan:true},
    ]
  },
  {
    lesson:5, cando:10,
    title:"Offer Someone a Drink",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"コーヒー、のみますか？",                            en:"Would you like coffee?"},
      {speaker:"B", ja:"はい、おねがいします。",                            en:"Yes, please.",                           dhyan:true},
      {speaker:"B", ja:"いいえ、けっこうです。",                            en:"No, thank you. (alternative)",           dhyan:true},
      {speaker:"A", ja:"はい、どうぞ。",                                    en:"Here you go."},
      {speaker:"B", ja:"すみません。",                                      en:"Thank you (when receiving).",            dhyan:true},
    ]
  },

  // ── LESSON 6 ──
  {
    lesson:6, cando:12,
    title:"Say What Your Favorite Dish Is",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"すきなりょうりはなんですか？",                      en:"What is your favorite dish?"},
      {speaker:"B", ja:"すしがいちばんすきです。",                          en:"I like sushi the most.",                 dhyan:true},
      {speaker:"A", ja:"そうですか。わたしもです。",                        en:"Is that so? Me too."},
    ]
  },
  {
    lesson:6, cando:13,
    title:"Talk About Where to Go for Lunch",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"きょうはどこでたべますか？",                        en:"Where shall we eat today?"},
      {speaker:"B", ja:"あのみせでたべましょう。",                          en:"Let's eat at that restaurant."},
      {speaker:"A", ja:"ラーメンですか？",                                  en:"Ramen?"},
      {speaker:"B", ja:"はい。あのみせはおいしいですよ。",                  en:"Yes. That place is delicious."},
      {speaker:"A", ja:"じゃあ、そうしましょう。",                          en:"Okay, let's do that!"},
    ]
  },
  {
    lesson:6, cando:15,
    title:"Order Food and Drinks",
    type:"dialogue",
    lines:[
      {speaker:"店員", ja:"いらっしゃいませ。",                             en:"Welcome!"},
      {speaker:"B",   ja:"すみません、すしをふたつください。",              en:"Excuse me, 2 sushi please.",              dhyan:true},
      {speaker:"店員", ja:"はい、すしをふたつですね。どうもありがとうございます。", en:"Yes, 2 sushi. Thank you very much."},
    ]
  },

  // ── LESSON 7 ──
  {
    lesson:7, cando:16,
    title:"Say What Kind of Home You Live In",
    type:"phrases",
    lines:[
      {ja:"ベンガルールにすんでいます。",              en:"I live in Bengaluru.",                dhyan:true},
      {ja:"わたしのいえはアパートです。",              en:"My home is an apartment.",            dhyan:true},
      {ja:"かぞくとすんでいます。",                    en:"I live with my family.",              dhyan:true},
      {ja:"わたしのいえはひろくてあかるいです。",      en:"My home is spacious and bright.",     dhyan:true},
      {ja:"わたしのいえはあたらしいです。",            en:"My home is new.",                     dhyan:true},
    ]
  },
  {
    lesson:7, cando:17,
    title:"Say What You Have in Your Home",
    type:"dialogue",
    lines:[
      {speaker:"Q", ja:"いえになにがありますか？",                          en:"What do you have at home?"},
      {speaker:"A", ja:"わたしのいえにはへやがさんつあります。",            en:"My home has 3 rooms.",                   dhyan:true},
      {speaker:"A", ja:"テレビとベッドとソファがあります。",               en:"There is a TV, bed, and sofa.",          dhyan:true},
      {speaker:"A", ja:"エアコンもあります。",                              en:"There is also an air conditioner.",      dhyan:true},
      {speaker:"A", ja:"テーブルはありません。",                            en:"There is no table.",                     dhyan:true},
    ]
  },

  // ── LESSON 8 ──
  {
    lesson:8, cando:19,
    title:"Ask / Say Where Things Are",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"ほんはどこですか？",                                en:"Where is the book?"},
      {speaker:"B", ja:"テーブルのうえにおねがいします。",                  en:"Please put it on the table.",            dhyan:true},
      {speaker:"A", ja:"テーブルのうえですね。わかりました。",              en:"On the table. Understood."},
    ]
  },
  {
    lesson:8, cando:20,
    title:"Visit / Welcome a Friend",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"ごめんください。",                                  en:"Excuse me, anyone home?"},
      {speaker:"B", ja:"いらっしゃい。どうぞあがってください。",            en:"Welcome! Please come in."},
      {speaker:"A", ja:"おじゃまします。",                                  en:"Excuse me for intruding."},
      {speaker:"A", ja:"いいへやですね。",                                  en:"What a nice room!"},
      {speaker:"B", ja:"どうもありがとう。",                                en:"Thank you."},
      {speaker:"B", ja:"おちゃどうぞ。",                                    en:"Please have some tea."},
      {speaker:"A", ja:"いただきます。おいしいですね。",                    en:"Thank you. It's delicious!"},
      {speaker:"A", ja:"あのう、トイレはどこですか？",                      en:"Um, where is the toilet?"},
      {speaker:"B", ja:"こちらへどうぞ。",                                  en:"Right this way."},
      {speaker:"A", ja:"はい、すみません。",                                en:"Thank you."},
    ]
  },
  {
    lesson:8, cando:21,
    title:"Show Someone Around Your Home",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"ここはげんかんです。",                              en:"This is the entrance."},
      {speaker:"A", ja:"ここはだいどころです。",                            en:"This is the kitchen."},
      {speaker:"A", ja:"ここはわたしのへやです。",                          en:"This is my room."},
      {speaker:"B", ja:"いいへやですね。あかるいですね。",                  en:"What a nice room! It's bright!"},
    ]
  },

  // ── LESSON 9 ──
  {
    lesson:9, cando:23,
    title:"Say the Time You Do Something",
    type:"dialogue",
    lines:[
      {speaker:"Q", ja:"まいにちなんじにおきますか？",                      en:"What time do you wake up every day?"},
      {speaker:"A", ja:"6じにおきます。",                                   en:"I wake up at 6 o'clock.",               dhyan:true},
      {speaker:"Q", ja:"なんじにねますか？",                                en:"What time do you go to sleep?"},
      {speaker:"A", ja:"11じごろねます。",                                  en:"I sleep around 11 o'clock.",            dhyan:true},
    ]
  },
  {
    lesson:9, cando:24,
    title:"Talk About Your Daily Routine",
    type:"phrases",
    lines:[
      {ja:"6じごろおきます。",                   en:"I wake up around 6.",                   dhyan:true},
      {ja:"シャワーをあびます。",                en:"I take a shower.",                      dhyan:true},
      {ja:"7じにかいしゃにいきます。",           en:"I go to the company at 7.",             dhyan:true},
      {ja:"6じごろうちにかえります。",           en:"I return home around 6.",               dhyan:true},
      {ja:"にっきをかきます。",                  en:"I write my diary.",                     dhyan:true},
      {ja:"11じごろねます。",                    en:"I sleep around 11.",                    dhyan:true},
    ]
  },

  // ── LESSON 10 ──
  {
    lesson:10, cando:25,
    title:"Talk About Your Schedule This Week",
    type:"dialogue",
    lines:[
      {speaker:"Q", ja:"らいしゅうなにをしますか？",                        en:"What will you do next week?"},
      {speaker:"A", ja:"らいしゅうのどようびにテニスをします。",            en:"I'll play tennis on Saturday next week.", dhyan:true},
      {speaker:"Q", ja:"どようびのあとでなにをしますか？",                  en:"What will you do after Saturday?"},
      {speaker:"A", ja:"にちようびはやすみます。",                          en:"I'll rest on Sunday.",                   dhyan:true},
    ]
  },
  {
    lesson:10, cando:26,
    title:"Talk About When to Have a Party",
    type:"dialogue",
    lines:[
      {speaker:"A", ja:"パーティーはいつがいいですか？",                    en:"When is good for the party?"},
      {speaker:"B", ja:"どようびがいいです。",                              en:"Saturday is good.",                      dhyan:true},
      {speaker:"A", ja:"どようびはちょっと...じゃあ、にちようびはどうですか？", en:"Saturday is tricky... how about Sunday?"},
      {speaker:"B", ja:"にちようびはだいじょうぶです！",                    en:"Sunday is fine!",                        dhyan:true},
    ]
  },
  {
    lesson:10, cando:27,
    title:"Write a Birthday Card",
    type:"phrases",
    lines:[
      {ja:"おたんじょうびおめでとう！",          en:"Happy Birthday!",                        dhyan:true},
      {ja:"おめでとうございます！",              en:"Congratulations!",                       dhyan:true},
    ]
  },
];
