// ══════════════════════════════════════════
// PARTICLE GUIDE DATA
// ══════════════════════════════════════════
const PARTICLE_GUIDE = [
  {
    p: "は", r: "wa", role: "Topic Marker",
    when: "Marks what the sentence is ABOUT. Sets the topic and replaces が or を when highlighting the topic or creating contrast.",
    ex: [
      { jp: "わたしは エンジニアです。", en: "I am an engineer. (As for me...)" },
      { jp: "さかなは すきです。", en: "Fish I like. (As for fish, I like it)" }
    ],
    tip: "Ask: 'As for ___...' — if that fits, use は."
  },
  {
    p: "が", r: "ga", role: "Subject / Existence Marker",
    when: "1. Marks the grammatical subject (especially new information).\n2. Required with あります・います (existence).\n3. Required with すき・きらい・ほしい・わかる.",
    ex: [
      { jp: "ほんが あります。", en: "There is a book. (が with あります)" },
      { jp: "さかなが すきです。", en: "I like fish. (が with すき)" }
    ],
    tip: "Use が with あります/います and すき/きらい. New info = が, known topic = は."
  },
  {
    p: "を", r: "o", role: "Direct Object Marker",
    when: "Marks the direct object — the thing being acted upon by an action verb.",
    ex: [
      { jp: "ごはんを たべます。", en: "I eat rice / a meal." },
      { jp: "にほんごを べんきょうします。", en: "I study Japanese." }
    ],
    tip: "What is being done TO? → を. (eat WHAT? drink WHAT? study WHAT?)"
  },
  {
    p: "に", r: "ni", role: "Direction / Time / Existence Location",
    when: "1. Direction of movement — go TO a place.\n2. Specific time point — AT / ON a time.\n3. Location where something EXISTS (with あります/います).\n4. Purpose of going — verb stem + に + いく.",
    ex: [
      { jp: "がっこうに いきます。", en: "I go TO school." },
      { jp: "7じに おきます。", en: "I wake up AT 7 o'clock." },
      { jp: "つくえのうえに あります。", en: "It exists ON the desk." }
    ],
    tip: "に = destination (TO), time point (AT), or existence location (WHERE it IS)."
  },
  {
    p: "で", r: "de", role: "Action Location / Means / Reason",
    when: "1. WHERE an action takes place (not where it exists — see に).\n2. By means of / using — vehicle, tool, language.\n3. Reason or cause.",
    ex: [
      { jp: "きょうしつで べんきょうします。", en: "I study IN the classroom." },
      { jp: "バスで いきます。", en: "I go BY bus." }
    ],
    tip: "で = WHERE you DO something. に = WHERE something IS. Big difference!"
  },
  {
    p: "と", r: "to", role: "And / With / Quotation",
    when: "1. Lists nouns exhaustively: A AND B (and no others implied).\n2. Doing something TOGETHER WITH someone.\n3. Quotation particle with いう・もうす.",
    ex: [
      { jp: "ちちと ははが います。", en: "My father AND mother are there." },
      { jp: "ともだちと えいがを みます。", en: "I watch a movie WITH a friend." }
    ],
    tip: "と = 'and' for nouns, or 'with' for people."
  },
  {
    p: "の", r: "no", role: "Possessive / Modifier",
    when: "Connects two nouns: A の B = 'B of A', 'A's B', or 'B that is A'. Shows possession, affiliation, or modification.",
    ex: [
      { jp: "わたしの ほん", en: "my book (lit: I's book)" },
      { jp: "にほんごの じゅぎょう", en: "Japanese-language class" }
    ],
    tip: "Noun + の + Noun. Think 's or 'of'. Works like English apostrophe-s."
  },
  {
    p: "も", r: "mo", role: "Also / Too / Either",
    when: "Replaces は or が to add 'also / too' meaning. When both items get も with a negative, it means 'neither'.",
    ex: [
      { jp: "わたしも がくせいです。", en: "I am ALSO a student." },
      { jp: "コーヒーも すきです。", en: "I like coffee TOO." }
    ],
    tip: "も replaces は. Replace は with も to add 'also / too'."
  },
  {
    p: "へ", r: "e", role: "Direction (Heading Toward)",
    when: "Direction of movement. Similar to に but emphasises the heading / direction rather than the precise endpoint.",
    ex: [
      { jp: "にほんへ いきます。", en: "I go toward Japan / I go to Japan." },
      { jp: "うちへ かえります。", en: "I return home." }
    ],
    tip: "へ ≈ に for movement. へ = 'heading toward'; に = 'arriving at'. Both OK at A1."
  },
  {
    p: "から", r: "kara", role: "From (Starting Point)",
    when: "Marks the starting point of movement in space or time.",
    ex: [
      { jp: "インドから きました。", en: "I came FROM India." },
      { jp: "9じから じゅぎょうです。", en: "Class starts FROM 9 o'clock." }
    ],
    tip: "から = 'from'. Starting point in space or time."
  },
  {
    p: "まで", r: "made", role: "Until / Up To (Ending Point)",
    when: "Marks the ending point of movement in space or time. Often paired with から (from...until).",
    ex: [
      { jp: "6じまで しごとをします。", en: "I work UNTIL 6 o'clock." },
      { jp: "えきまで あるきます。", en: "I walk up TO the station." }
    ],
    tip: "まで = 'until' or 'up to'. Ending point. から～まで = from～until."
  },
  {
    p: "か", r: "ka", role: "Question Marker",
    when: "Added to the end of any sentence to make it a yes/no question. No word-order change needed.",
    ex: [
      { jp: "がくせいですか。", en: "Are you a student?" },
      { jp: "さかなが すきですか。", en: "Do you like fish?" }
    ],
    tip: "Just add か to the end! No word order change needed in Japanese."
  }
];

// ══════════════════════════════════════════
// PARTICLE DIALOGUES — 50 fill-in-the-blank
// Blanks are marked with ___ in order.
// d = dialogue lines, b = blanks [{a: answer, e: explanation}]
// ══════════════════════════════════════════
const PARTICLE_DIALOGUES = [

  // ── SINGLE BLANK: Easy (1–20) ──

  { id:1, context:"Self Introduction — Topic Marker",
    d:["A: わたし___ エンジニアです。","B: そうですか！"],
    b:[{a:"は",e:"は = topic marker. 'As for me, I am an engineer.' は sets the sentence topic."}]
  },
  { id:2, context:"Daily Meal — Direct Object",
    d:["A: まいあさ、ごはん___ たべます。","B: わたしも！"],
    b:[{a:"を",e:"を = direct object. Marks what you eat — ごはん is the object of たべます."}]
  },
  { id:3, context:"Daily Routine — Specific Time Point",
    d:["A: なんじに おきますか。","B: 6じ___ おきます。"],
    b:[{a:"に",e:"に = time marker. 'Wake up AT 6 o'clock.' に marks a specific time point."}]
  },
  { id:4, context:"Going Places — Direction",
    d:["A: どこにいきますか。","B: かいしゃ___ いきます。"],
    b:[{a:"に",e:"に = direction. 'Go TO the company.' に marks the destination of movement."}]
  },
  { id:5, context:"Study Location — Action Location",
    d:["A: どこでべんきょうしますか。","B: きょうしつ___ べんきょうします。"],
    b:[{a:"で",e:"で = action location. 'Study IN the classroom.' で marks WHERE an action takes place (not where something exists)."}]
  },
  { id:6, context:"Possession — Possessive Marker",
    d:["A: これはだれのほんですか。","B: わたし___ ほんです。"],
    b:[{a:"の",e:"の = possessive. 'My book' = わたしのほん. Noun + の + Noun."}]
  },
  { id:7, context:"What Exists on the Desk — Existence Subject",
    d:["A: つくえのうえになにがありますか。","B: ほん___ あります。"],
    b:[{a:"が",e:"が = existence subject. 'There IS a book.' が marks the subject with あります/います."}]
  },
  { id:8, context:"Adding 'Also' — も",
    d:["A: わたしはがくせいです。","B: わたし___ がくせいです。"],
    b:[{a:"も",e:"も = also / too. 'I am ALSO a student.' も replaces は to add 'too / also'."}]
  },
  { id:9, context:"Country of Origin — From",
    d:["A: どちらからですか。","B: インド___ きました。"],
    b:[{a:"から",e:"から = from. 'I came FROM India.' から marks the starting point."}]
  },
  { id:10, context:"Doing With Someone — と",
    d:["A: だれとみましたか。","B: ともだち___ みました。"],
    b:[{a:"と",e:"と = with. 'Watched WITH a friend.' と marks who you do something together with."}]
  },
  { id:11, context:"Living Somewhere — Residence Location",
    d:["A: どこにすんでいますか。","B: ベンガルール___ すんでいます。"],
    b:[{a:"に",e:"に = existence / residence location. 'Live IN Bengaluru.' に marks where you reside with すんでいます."}]
  },
  { id:12, context:"What You're Studying — Object",
    d:["A: なにをべんきょうしていますか。","B: にほんご___ べんきょうしています。"],
    b:[{a:"を",e:"を = direct object. 'Studying Japanese.' にほんご is the object of べんきょうします."}]
  },
  { id:13, context:"How You Get There — Means of Transport",
    d:["A: なにでかいしゃにいきますか。","B: バス___ いきます。"],
    b:[{a:"で",e:"で = means / method. 'Go BY bus.' で marks the vehicle or tool used."}]
  },
  { id:14, context:"Food Preference — が with すき",
    d:["A: なにがすきですか。","B: さかな___ すきです。"],
    b:[{a:"が",e:"が = subject of すき. 'I like fish.' すき takes が (not を!) to mark what is liked."}]
  },
  { id:15, context:"Work Finish Time — Until",
    d:["A: なんじまでしごとをしますか。","B: 6じ___ しごとをします。"],
    b:[{a:"まで",e:"まで = until. 'Work UNTIL 6 o'clock.' まで marks the ending point in time."}]
  },
  { id:16, context:"Heading to the Park — Direction へ",
    d:["A: しゅうまつ、どこへいきますか。","B: こうえん___ いきます。"],
    b:[{a:"へ",e:"へ = direction / heading. 'Going TO the park.' へ and に are both used for movement direction at A1."}]
  },
  { id:17, context:"Noun Modifier — の",
    d:["A: なんじからですか。","B: にほんご___ じゅぎょうは9じです。"],
    b:[{a:"の",e:"の = modifier. 'Japanese-language class' = にほんごのじゅぎょう. Noun の Noun."}]
  },
  { id:18, context:"Exercise Habit — Object with する",
    d:["A: まいにちなにをしますか。","B: うんどう___ します。"],
    b:[{a:"を",e:"を = object. うんどうをします = 'do exercise.' Compound verb: noun + を + します."}]
  },
  { id:19, context:"Class Start Time — From",
    d:["A: じゅぎょうはなんじからですか。","B: 9じ___ です。"],
    b:[{a:"から",e:"から = from. 'Class IS FROM 9 o'clock.' から marks the starting point in time."}]
  },
  { id:20, context:"Listing Two Choices — と",
    d:["A: おちゃ___ コーヒー、どちらがすきですか。","B: コーヒーがすきです。"],
    b:[{a:"と",e:"と = and (listing). 'Tea AND coffee, which do you prefer?' と lists the two options exhaustively."}]
  },

  // ── DOUBLE BLANK: Medium (21–45) ──

  { id:21, context:"Daily Diet — Topic + Object",
    d:["A: ディヤンさん___ まいにちなに___ たべますか。","B: ごはんをたべます。"],
    b:[
      {a:"は",e:"は = topic. 'As for Dhyan-san, what do you eat every day?'"},
      {a:"を",e:"を = object. Marks what you eat — the direct object of たべます."}
    ]
  },
  { id:22, context:"Study Session — Action Location + Object",
    d:["A: どこでなにをべんきょうしますか。","B: きょうしつ___ にほんご___ べんきょうします。"],
    b:[
      {a:"で",e:"で = action location. Study IN the classroom — where the action happens."},
      {a:"を",e:"を = object. Studying Japanese — the direct object of べんきょうします."}
    ]
  },
  { id:23, context:"What's on the Table — Existence Location + Subject",
    d:["A: テーブルのうえ___ なに___ ありますか。","B: ほんがあります。"],
    b:[
      {a:"に",e:"に = existence location. 'ON TOP of the table' — に marks where things exist with あります."},
      {a:"が",e:"が = existence subject. Marks what exists with あります."}
    ]
  },
  { id:24, context:"Weekend Plans — With + Object",
    d:["A: しゅうまつ、ともだち___ えいが___ みます。","B: いいですね！"],
    b:[
      {a:"と",e:"と = with. 'WITH a friend' — doing it together."},
      {a:"を",e:"を = object. 'Watch a movie' — えいが is the direct object of みます."}
    ]
  },
  { id:25, context:"Likes Check — Topic + が with すき",
    d:["A: ディヤンさん___ さかな___ すきですか。","B: はい、だいすきです！"],
    b:[
      {a:"は",e:"は = topic. 'As for Dhyan-san, do you like fish?'"},
      {a:"が",e:"が = subject of すき. すき takes が, NOT を! 'Fish is liked' = what is liked gets が."}
    ]
  },
  { id:26, context:"Daily Commute — Time Point + Direction",
    d:["A: まいにちなんじにかいしゃにいきますか。","B: 7じ___ かいしゃ___ いきます。"],
    b:[
      {a:"に",e:"に = time. Go AT 7 o'clock — specific time point."},
      {a:"に",e:"に = direction. Go TO the company — destination of movement."}
    ]
  },
  { id:27, context:"My Room — Possessive + Existence Location",
    d:["A: わたし___ へや___ エアコンがあります。","B: いいですね！"],
    b:[
      {a:"の",e:"の = possessive. わたしのへや = 'my room' — の connects the nouns."},
      {a:"に",e:"に = existence location. 'IN my room there IS an AC' — に with あります."}
    ]
  },
  { id:28, context:"Getting Around — Means + Direction",
    d:["A: なにでどこにいきますか。","B: バス___ えき___ いきます。"],
    b:[
      {a:"で",e:"で = means. 'BY bus' — the vehicle used for transport."},
      {a:"に",e:"に = direction. 'TO the station' — destination of movement."}
    ]
  },
  { id:29, context:"Class Schedule — From + Until",
    d:["A: じゅぎょうはなんじからなんじまでですか。","B: 9じ___ 12じ___ です。"],
    b:[
      {a:"から",e:"から = from. Class starts FROM 9 o'clock."},
      {a:"まで",e:"まで = until. Class goes UNTIL 12 o'clock. から～まで = from～until."}
    ]
  },
  { id:30, context:"Same Habit — Also + Object",
    d:["A: わたしはまいにちコーヒーをのみます。","B: わたし___ コーヒー___ のみます。"],
    b:[
      {a:"も",e:"も = also. 'I ALSO drink coffee.' も replaces は to add 'too'."},
      {a:"を",e:"を = object. 'Drink coffee' — コーヒー is the direct object of のみます."}
    ]
  },
  { id:31, context:"Likes vs Dislikes — が with すき + Contrastive は",
    d:["A: さかな___ すきです。でも、やさい___ あまりたべません。","B: そうですか。"],
    b:[
      {a:"が",e:"が = subject of すき. 'I like fish.' が marks what is liked with すき."},
      {a:"は",e:"は = contrastive topic. 'But AS FOR vegetables...' — は creates contrast, especially after でも."}
    ]
  },
  { id:32, context:"Ordering Food — Object × 2",
    d:["A: すし___ ふたつと みそしる___ ひとつください。","B: はい、かしこまりました。"],
    b:[
      {a:"を",e:"を = object. 'Sushi' is what you're ordering — direct object of ください."},
      {a:"を",e:"を = object. 'Miso soup' is also ordered — same を pattern."}
    ]
  },
  { id:33, context:"Inside the Bag — Possessive + Existence Location",
    d:["A: かばん___ なか___ ほんがありますか。","B: はい、あります。"],
    b:[
      {a:"の",e:"の = possessive. 'Inside of the bag' = かばんのなか — の modifies なか."},
      {a:"に",e:"に = existence location. 'IN the inside of the bag' — に with あります."}
    ]
  },
  { id:34, context:"Home Appliance — Existence Location + Subject",
    d:["A: いえ___ パソコン___ ありますか。","B: はい、あります。"],
    b:[
      {a:"に",e:"に = existence location. 'AT / IN the house' — where the computer exists."},
      {a:"が",e:"が = existence subject. 'IS there a computer?' — が marks the subject of あります."}
    ]
  },
  { id:35, context:"Weekend Availability — Modifier + Topic",
    d:["A: らいしゅう___ どようび___ ひまですか。","B: はい、ひまです！"],
    b:[
      {a:"の",e:"の = modifier. らいしゅうのどようび = 'next week's Saturday' — の connects the nouns."},
      {a:"は",e:"は = topic. 'As for next Saturday, are you free?' — は sets the topic."}
    ]
  },
  { id:36, context:"⚠️ TRICKY — Existence (に) vs Action (で)",
    d:["A: ソファ___ ねこがいます。","B: そのソファ___ ほんをよんでいますか。"],
    b:[
      {a:"に",e:"に = existence location. The cat EXISTS ON the sofa — に with います. The cat is just there, not doing an action."},
      {a:"で",e:"で = action location. Reading ON that sofa — で because reading is an ACTION happening there."}
    ]
  },
  { id:37, context:"⚠️ TRICKY — At the Station Getting on the Bus",
    d:["A: えき___ バス___ のります。"],
    b:[
      {a:"で",e:"で = action location. 'AT the station' — the act of boarding happens at the station."},
      {a:"に",e:"に = direction / target. 'ONTO the bus' — のる (to board) takes に for the vehicle being boarded."}
    ]
  },
  { id:38, context:"Study Trip to Japan — Direction + Object",
    d:["A: にほん___ いって、にほんご___ べんきょうします。"],
    b:[
      {a:"に",e:"に = direction. 'Go TO Japan' — destination of movement."},
      {a:"を",e:"を = object. 'Study Japanese' — にほんご is the direct object of べんきょうします."}
    ]
  },
  { id:39, context:"Morning Routine — Object × 2 (compound verbs)",
    d:["A: まいあさ、さんぽ___ して、シャワー___ あびます。"],
    b:[
      {a:"を",e:"を = object. さんぽをします = 'take a walk' — compound verb with を."},
      {a:"を",e:"を = object. シャワーをあびます = 'take a shower' — compound verb with を."}
    ]
  },
  { id:40, context:"Shopping Trip — With + Direction/Purpose",
    d:["A: きょう、ともだち___ かいもの___ いきます。"],
    b:[
      {a:"と",e:"と = with. 'WITH a friend' — doing it together."},
      {a:"に",e:"に = direction / purpose. 'Go TO / FOR shopping' — に marks the destination or purpose of going."}
    ]
  },
  { id:41, context:"Wake-up and Shower — Time + Object",
    d:["A: まいにち、6じ___ おきて、シャワー___ あびます。"],
    b:[
      {a:"に",e:"に = time. 'Wake up AT 6 o'clock' — に marks the specific time point."},
      {a:"を",e:"を = object. シャワーをあびます = 'take a shower' — を marks the object."}
    ]
  },
  { id:42, context:"Movie Night — Action Location × 2",
    d:["A: えいがはどこでみましたか。","B: えいがかん___ ともだち___ みました。"],
    b:[
      {a:"で",e:"で = action location. 'AT the cinema' — the action of watching happened there."},
      {a:"と",e:"と = with. 'WITH a friend' — watched together."}
    ]
  },
  { id:43, context:"School Day — Direction + With",
    d:["A: まいにち、がっこう___ いって、ともだち___ はなします。"],
    b:[
      {a:"に",e:"に = direction. 'Go TO school' — destination of movement."},
      {a:"と",e:"と = with. 'Talk WITH friends' — と marks who you talk with."}
    ]
  },
  { id:44, context:"⚠️ TRICKY — Room Existence: Location + Subject",
    d:["A: このへや___ エアコン___ ありますか。","B: いいえ、ありません。"],
    b:[
      {a:"に",e:"に = existence location. 'IN this room' — に marks where the AC would exist (with あります)."},
      {a:"が",e:"が = existence subject. 'IS there an AC?' — が marks the subject of あります."}
    ]
  },
  { id:45, context:"Supermarket Run — Direction + Object",
    d:["A: スーパー___ いって、くだもの___ かいます。"],
    b:[
      {a:"に",e:"に = direction. 'Go TO the supermarket' — destination of movement."},
      {a:"を",e:"を = object. 'Buy fruit' — くだもの is the direct object of かいます."}
    ]
  },

  // ── TRIPLE BLANK: Hard (46–50) ──

  { id:46, context:"Full Study Description — Topic + Action Location + Object",
    d:["A: ディヤンさん___ まいにち きょうしつ___ にほんご___ べんきょうします。"],
    b:[
      {a:"は",e:"は = topic. 'As for Dhyan-san, every day...'"},
      {a:"で",e:"で = action location. 'IN the classroom' — where studying happens."},
      {a:"を",e:"を = object. 'Japanese' — the direct object of べんきょうします."}
    ]
  },
  { id:47, context:"My Home — Possessive + Existence Location + Subject",
    d:["A: わたし___ いえ___ ベッド___ あります。"],
    b:[
      {a:"の",e:"の = possessive. わたしのいえ = 'my house'."},
      {a:"に",e:"に = existence location. 'IN my house' — に with あります marks where things exist."},
      {a:"が",e:"が = existence subject. 'There IS a bed' — が marks what exists with あります."}
    ]
  },
  { id:48, context:"Family Members — と + と + が",
    d:["A: かぞくは ちち___ はは___ あに___ います。"],
    b:[
      {a:"と",e:"と = and. 'Father AND...' — と lists the first family member."},
      {a:"と",e:"と = and. '...AND elder brother' — と lists the second family member."},
      {a:"が",e:"が = existence subject. 'There ARE (father, mother, elder brother)' — が with います."}
    ]
  },
  { id:49, context:"Commute Summary — Topic + Means + Direction",
    d:["A: ディヤンさん___ まいにち バス___ かいしゃ___ いきます。"],
    b:[
      {a:"は",e:"は = topic. 'As for Dhyan-san, every day...'"},
      {a:"で",e:"で = means. 'BY bus' — the vehicle / method of transport."},
      {a:"に",e:"に = direction. 'TO the company' — destination of movement."}
    ]
  },
  { id:50, context:"About Myself — Possessive + Topic + Topic",
    d:["A: わたし___ くに___ インドで、まち___ ベンガルールです。"],
    b:[
      {a:"の",e:"の = possessive. わたしのくに = 'my country' — の connects the nouns."},
      {a:"は",e:"は = topic. 'As for my country, it is India.' — は sets the first topic."},
      {a:"は",e:"は = topic. 'As for my city, it is Bengaluru.' — は sets a second topic in the same sentence."}
    ]
  }
];

// ══════════════════════════════════════════
// PARTICLE GAME STATE
// ══════════════════════════════════════════
const ALL_PARTICLES = ['は','が','を','に','で','と','の','も','へ','か','から','まで'];
let pIdx = 0;
let pActiveBlank = 0;
let pFilled = [];
let pScore = { c: 0, w: 0 };
let pChecked = false;

function circled(i) {
  return ['①','②','③','④','⑤'][i] || String(i + 1);
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
function initParticles() {
  renderGuide();
  renderParticleButtons();
  loadDlg(0);
}

function showPTab(tab, btn) {
  document.getElementById('pGuide').style.display    = tab === 'guide'    ? 'block' : 'none';
  document.getElementById('pPractice').style.display = tab === 'practice' ? 'block' : 'none';
  document.querySelectorAll('.ptab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ══════════════════════════════════════════
// GUIDE RENDER
// ══════════════════════════════════════════
function renderGuide() {
  document.getElementById('pGuideList').innerHTML = PARTICLE_GUIDE.map(g => `
    <div class="pgcard">
      <div class="pgcard-head">
        <span class="pgp">${g.p}</span>
        <div class="pgmeta">
          <span class="pgr">${g.r}</span>
          <span class="pgrole">${g.role}</span>
        </div>
      </div>
      <div class="pgwhen">${g.when.replace(/\n/g, '<br>')}</div>
      <div class="pgexamples">
        ${g.ex.map(e => `
          <div class="pgex">
            <div class="pgex-jp">${e.jp}</div>
            <div class="pgex-en">${e.en}</div>
          </div>
        `).join('')}
      </div>
      <div class="pgtip">💡 ${g.tip}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
// PRACTICE RENDER
// ══════════════════════════════════════════
function renderParticleButtons() {
  document.getElementById('pParticleGrid').innerHTML = ALL_PARTICLES.map(p =>
    `<button class="ppart-btn" onclick="fillParticle('${p}')">${p}</button>`
  ).join('');
}

function loadDlg(idx) {
  pIdx     = idx;
  pChecked = false;
  const d  = PARTICLE_DIALOGUES[idx];
  pFilled  = new Array(d.b.length).fill(null);
  pActiveBlank = 0;

  document.getElementById('pProgress').textContent = `Dialogue ${idx + 1} of ${PARTICLE_DIALOGUES.length}`;
  document.getElementById('pContext').textContent   = d.context;
  renderDlg();
}

function renderDlg() {
  const d = PARTICLE_DIALOGUES[pIdx];
  let bi = 0;

  const html = d.d.map(line => {
    const rendered = line.replace(/___/g, () => {
      const i   = bi++;
      const val = pFilled[i];
      let cls   = 'pblank';
      if (!pChecked && i === pActiveBlank) cls += ' pblank-sel';
      if (pChecked) cls += (val === d.b[i].a) ? ' pblank-ok' : ' pblank-err';
      const label = val ? val : circled(i);
      return `<span class="${cls}" onclick="selBlank(${i})">${label}</span>`;
    });
    return `<div class="pdline">${rendered}</div>`;
  }).join('');

  document.getElementById('pDisplay').innerHTML = html;

  const allFilled = pFilled.every(f => f !== null);
  document.getElementById('pCheckBtn').style.display = (!pChecked && allFilled) ? 'block' : 'none';
  document.getElementById('pNextBtn').style.display  = pChecked ? 'block' : 'none';

  if (pChecked) {
    document.getElementById('pExp').style.display = 'block';
    document.getElementById('pExp').innerHTML = d.b.map((b, i) => {
      const ok = pFilled[i] === b.a;
      return `<div class="pexprow ${ok ? 'pexp-ok' : 'pexp-err'}">
        <span class="pexpnum">${circled(i)}</span>
        <span class="pexpans">${b.a}</span>
        <span class="pexptxt">${b.e}</span>
      </div>`;
    }).join('');
    document.getElementById('pScoreC').textContent = pScore.c;
    document.getElementById('pScoreW').textContent = pScore.w;
  } else {
    document.getElementById('pExp').style.display = 'none';
  }
}

function selBlank(i) {
  if (pChecked) return;
  pActiveBlank = i;
  renderDlg();
}

function fillParticle(p) {
  if (pChecked) return;
  pFilled[pActiveBlank] = p;
  // Advance to next unfilled blank
  const len = PARTICLE_DIALOGUES[pIdx].b.length;
  for (let i = 1; i <= len; i++) {
    const j = (pActiveBlank + i) % len;
    if (pFilled[j] === null) { pActiveBlank = j; break; }
  }
  renderDlg();
}

function checkP() {
  pChecked = true;
  PARTICLE_DIALOGUES[pIdx].b.forEach((b, i) => {
    if (pFilled[i] === b.a) pScore.c++; else pScore.w++;
  });
  renderDlg();
}

function nextP() {
  loadDlg((pIdx + 1) % PARTICLE_DIALOGUES.length);
}

function prevP() {
  loadDlg((pIdx - 1 + PARTICLE_DIALOGUES.length) % PARTICLE_DIALOGUES.length);
}
