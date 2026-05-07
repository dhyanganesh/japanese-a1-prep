// ══════════════════════════════════════════
// COUNTERS PAGE
// ══════════════════════════════════════════
const COUNTER_DATA = [
  {
    suffix:"〜つ", label:"General Objects", romaji:"~tsu",
    note:"Universal counter for any object — but only works 1 to 10. Above 10, use a specific counter.",
    example:"anything without a specific counter",
    rows:[
      {n:1,ja:"ひとつ",r:"hitotsu"},{n:2,ja:"ふたつ",r:"futatsu"},{n:3,ja:"みっつ",r:"mittsu"},
      {n:4,ja:"よっつ",r:"yottsu"},{n:5,ja:"いつつ",r:"itsutsu"},{n:6,ja:"むっつ",r:"muttsu"},
      {n:7,ja:"ななつ",r:"nanatsu"},{n:8,ja:"やっつ",r:"yattsu"},{n:9,ja:"ここのつ",r:"kokonotsu"},
      {n:10,ja:"とお",r:"too"}
    ]
  },
  {
    suffix:"〜こ", label:"Small Round Objects", romaji:"~ko",
    note:"For compact items. Sound change: 1→いっこ, 6→ろっこ, 8→はっこ, 10→じゅっこ, 100→ひゃっこ.",
    example:"りんご (apple), たまご (egg), ボール (ball)",
    rows:[
      {n:1,ja:"いっこ ⚠",r:"ikko — sound change",irregular:true},{n:2,ja:"にこ",r:"niko"},{n:3,ja:"さんこ",r:"sanko"},
      {n:4,ja:"よんこ",r:"yonko"},{n:5,ja:"ごこ",r:"goko"},{n:6,ja:"ろっこ ⚠",r:"rokko — sound change",irregular:true},
      {n:7,ja:"ななこ",r:"nanako"},{n:8,ja:"はっこ ⚠",r:"hakko — sound change",irregular:true},{n:9,ja:"きゅうこ",r:"kyūko"},
      {n:10,ja:"じゅっこ ⚠",r:"jukko — sound change",irregular:true},{n:20,ja:"にじゅっこ",r:"nijukko"},
      {n:30,ja:"さんじゅっこ",r:"sanjukko"},{n:100,ja:"ひゃっこ ⚠",r:"hyakko — sound change",irregular:true},{n:1000,ja:"せんこ",r:"senko"}
    ]
  },
  {
    suffix:"〜にん", label:"People", romaji:"~nin",
    note:"IRREGULAR: 1 person = ひとり, 2 persons = ふたり. From 3 onwards, use さんにん etc.",
    example:"かぞく (family), ともだち (friends)",
    rows:[
      {n:1,ja:"ひとり ⚠",r:"hitori — IRREGULAR",irregular:true},{n:2,ja:"ふたり ⚠",r:"futari — IRREGULAR",irregular:true},
      {n:3,ja:"さんにん",r:"sannin"},{n:4,ja:"よにん",r:"yonin"},{n:5,ja:"ごにん",r:"gonin"},
      {n:6,ja:"ろくにん",r:"rokunin"},{n:7,ja:"しちにん",r:"shichinin"},{n:8,ja:"はちにん",r:"hachinin"},
      {n:9,ja:"きゅうにん",r:"kyūnin"},{n:10,ja:"じゅうにん",r:"jūnin"},
      {n:20,ja:"にじゅうにん",r:"nijūnin"},{n:30,ja:"さんじゅうにん",r:"sanjūnin"},
      {n:100,ja:"ひゃくにん",r:"hyakunin"},{n:1000,ja:"せんにん",r:"sennin"}
    ]
  },
  {
    suffix:"〜ほん", label:"Long Objects", romaji:"~hon",
    note:"Sound changes: 1→いっぽん, 3→さんぼん, 6→ろっぽん, 8→はっぽん, 10→じゅっぽん, 100→ひゃっぽん.",
    example:"ペン (pen), えんぴつ (pencil), びん (bottle), き (tree)",
    rows:[
      {n:1,ja:"いっぽん ⚠",r:"ippon — sound change",irregular:true},{n:2,ja:"にほん",r:"nihon"},{n:3,ja:"さんぼん ⚠",r:"sanbon — sound change",irregular:true},
      {n:4,ja:"よんほん",r:"yonhon"},{n:5,ja:"ごほん",r:"gohon"},{n:6,ja:"ろっぽん ⚠",r:"roppon — sound change",irregular:true},
      {n:7,ja:"ななほん",r:"nanahon"},{n:8,ja:"はっぽん ⚠",r:"happon — sound change",irregular:true},{n:9,ja:"きゅうほん",r:"kyūhon"},
      {n:10,ja:"じゅっぽん ⚠",r:"juppon — sound change",irregular:true},{n:20,ja:"にじゅっぽん",r:"nijuppon"},
      {n:30,ja:"さんじゅっぽん",r:"sanjuppon"},{n:100,ja:"ひゃっぽん ⚠",r:"hyappon — sound change",irregular:true},{n:1000,ja:"せんぼん",r:"senbon"}
    ]
  },
  {
    suffix:"〜まい", label:"Flat Things", romaji:"~mai",
    note:"For thin, flat objects. Regular pattern — no tricky sound changes.",
    example:"かみ (paper), シャツ (shirt), さら (plate), きって (stamp)",
    rows:[
      {n:1,ja:"いちまい",r:"ichimai"},{n:2,ja:"にまい",r:"nimai"},{n:3,ja:"さんまい",r:"sanmai"},
      {n:4,ja:"よんまい",r:"yonmai"},{n:5,ja:"ごまい",r:"gomai"},{n:6,ja:"ろくまい",r:"rokumai"},
      {n:7,ja:"ななまい",r:"nanamai"},{n:8,ja:"はちまい",r:"hachimai"},{n:9,ja:"きゅうまい",r:"kyūmai"},
      {n:10,ja:"じゅうまい",r:"jūmai"},{n:20,ja:"にじゅうまい",r:"nijūmai"},
      {n:30,ja:"さんじゅうまい",r:"sanjūmai"},{n:100,ja:"ひゃくまい",r:"hyakumai"},{n:1000,ja:"せんまい",r:"senmai"}
    ]
  },
  {
    suffix:"〜さつ", label:"Books / Bound Items", romaji:"~satsu",
    note:"Sound changes: 1→いっさつ, 8→はっさつ, 10→じゅっさつ, 20→にじゅっさつ.",
    example:"ほん (book), ざっし (magazine), ノート (notebook)",
    rows:[
      {n:1,ja:"いっさつ ⚠",r:"issatsu — sound change",irregular:true},{n:2,ja:"にさつ",r:"nisatsu"},{n:3,ja:"さんさつ",r:"sansatsu"},
      {n:4,ja:"よんさつ",r:"yonsatsu"},{n:5,ja:"ごさつ",r:"gosatsu"},{n:6,ja:"ろくさつ",r:"rokusatsu"},
      {n:7,ja:"ななさつ",r:"nanasatsu"},{n:8,ja:"はっさつ ⚠",r:"hassatsu — sound change",irregular:true},{n:9,ja:"きゅうさつ",r:"kyūsatsu"},
      {n:10,ja:"じゅっさつ ⚠",r:"jussatsu — sound change",irregular:true},{n:20,ja:"にじゅっさつ ⚠",r:"nijussatsu — sound change",irregular:true},
      {n:30,ja:"さんじゅっさつ",r:"sanjussatsu"},{n:100,ja:"ひゃくさつ",r:"hyakusatsu"},{n:1000,ja:"せんさつ",r:"sensatsu"}
    ]
  },
  {
    suffix:"〜ひき", label:"Small Animals", romaji:"~hiki",
    note:"Sound changes: 1→いっぴき, 3→さんびき, 6→ろっぴき, 8→はっぴき, 10→じゅっぴき.",
    example:"ねこ (cat), いぬ (dog), さかな (fish), うさぎ (rabbit)",
    rows:[
      {n:1,ja:"いっぴき ⚠",r:"ippiki — sound change",irregular:true},{n:2,ja:"にひき",r:"nihiki"},{n:3,ja:"さんびき ⚠",r:"sanbiki — sound change",irregular:true},
      {n:4,ja:"よんひき",r:"yonhiki"},{n:5,ja:"ごひき",r:"gohiki"},{n:6,ja:"ろっぴき ⚠",r:"roppiki — sound change",irregular:true},
      {n:7,ja:"ななひき",r:"nanahiki"},{n:8,ja:"はっぴき ⚠",r:"happiki — sound change",irregular:true},{n:9,ja:"きゅうひき",r:"kyūhiki"},
      {n:10,ja:"じゅっぴき ⚠",r:"juppiki — sound change",irregular:true},{n:20,ja:"にじゅっぴき",r:"nijuppiki"},
      {n:30,ja:"さんじゅっぴき",r:"sanjuppiki"},{n:100,ja:"ひゃっぴき ⚠",r:"hyappiki — sound change",irregular:true},{n:1000,ja:"せんびき",r:"senbiki"}
    ]
  },
  {
    suffix:"〜さい", label:"Age (Years Old)", romaji:"~sai",
    note:"20 years old is SPECIAL: はたち (unique word). Sound changes at 1→いっさい, 8→はっさい, 10→じゅっさい.",
    example:"おいくつですか？ (How old are you?)",
    rows:[
      {n:1,ja:"いっさい ⚠",r:"issai — sound change",irregular:true},{n:2,ja:"にさい",r:"nisai"},{n:3,ja:"さんさい",r:"sansai"},
      {n:4,ja:"よんさい",r:"yonsai"},{n:5,ja:"ごさい",r:"gosai"},{n:6,ja:"ろくさい",r:"rokusai"},
      {n:7,ja:"ななさい",r:"nanasai"},{n:8,ja:"はっさい ⚠",r:"hassai — sound change",irregular:true},{n:9,ja:"きゅうさい",r:"kyūsai"},
      {n:10,ja:"じゅっさい ⚠",r:"jussai — sound change",irregular:true},{n:20,ja:"はたち ⭐",r:"hatachi — SPECIAL WORD",irregular:true},
      {n:30,ja:"さんじゅっさい",r:"sanjussai"},{n:100,ja:"ひゃくさい",r:"hyakusai"}
    ]
  },
  {
    suffix:"〜じかん", label:"Hours (Duration)", romaji:"~jikan",
    note:"IRREGULAR: 4 hours=よじかん (not よんじかん), 9 hours=くじかん (not きゅうじかん). Don't confuse with time o'clock (〜じ)!",
    example:"いちじかんはん (1.5 hours), なんじかんですか？ (How many hours?)",
    rows:[
      {n:1, ja:"いちじかん",       r:"ichijikan"},
      {n:2, ja:"にじかん",         r:"nijikan"},
      {n:3, ja:"さんじかん",       r:"sanjikan"},
      {n:4, ja:"よじかん ⚠",      r:"yojikan — IRREGULAR (not よん)",irregular:true},
      {n:5, ja:"ごじかん",         r:"gojikan"},
      {n:6, ja:"ろくじかん",       r:"rokujikan"},
      {n:7, ja:"しちじかん",       r:"shichijikan"},
      {n:8, ja:"はちじかん",       r:"hachijikan"},
      {n:9, ja:"くじかん ⚠",      r:"kujikan — IRREGULAR (not きゅう)",irregular:true},
      {n:10,ja:"じゅうじかん",     r:"jūjikan"},
      {n:24,ja:"にじゅうよじかん", r:"nijūyojikan"}
    ]
  },
  {
    suffix:"〜ふん/ぷん", label:"Minutes", romaji:"~fun/pun",
    note:"Sound changes to ぷん before: 1→いっぷん, 3→さんぷん, 4→よんぷん, 6→ろっぷん, 8→はっぷん, 10→じゅっぷん. Highlighted rows change sound!",
    example:"なんぷんですか？ (How many minutes?), じゅうごふん (15 min)",
    rows:[
      {n:1, ja:"いっぷん ⚠",      r:"ippun — sound change (p!)",irregular:true},
      {n:2, ja:"にふん",           r:"nifun"},
      {n:3, ja:"さんぷん ⚠",      r:"sanpun — sound change (p!)",irregular:true},
      {n:4, ja:"よんぷん ⚠",      r:"yonpun — sound change (p!)",irregular:true},
      {n:5, ja:"ごふん",           r:"gofun"},
      {n:6, ja:"ろっぷん ⚠",      r:"roppun — sound change (p!)",irregular:true},
      {n:7, ja:"ななふん",         r:"nanafun"},
      {n:8, ja:"はっぷん ⚠",      r:"happun — sound change (p!)",irregular:true},
      {n:9, ja:"きゅうふん",       r:"kyūfun"},
      {n:10,ja:"じゅっぷん ⚠",    r:"juppun — sound change (p!)",irregular:true},
      {n:15,ja:"じゅうごふん",     r:"jūgofun"},
      {n:20,ja:"にじゅっぷん ⚠",  r:"nijuppun — sound change (p!)",irregular:true},
      {n:30,ja:"さんじゅっぷん ⚠",r:"sanjuppun — sound change (p!)",irregular:true},
      {n:45,ja:"よんじゅうごふん", r:"yonjūgofun"}
    ]
  },
  {
    suffix:"〜にち", label:"Days of the Month", romaji:"~nichi",
    note:"Dates 1–10 use special words (〜か form), NOT 〜にち! 14th, 20th, 24th are also IRREGULAR. 11th–31st use number + にち (except those three).",
    example:"たんじょうびはなんにちですか？ (What date is your birthday?)",
    rows:[
      {n:"1日", ja:"ついたち ⚠",       r:"tsuitachi — IRREGULAR (unique word!)",irregular:true},
      {n:"2日", ja:"ふつか ⚠",         r:"futsuka — IRREGULAR",irregular:true},
      {n:"3日", ja:"みっか ⚠",         r:"mikka — IRREGULAR",irregular:true},
      {n:"4日", ja:"よっか ⚠",         r:"yokka — IRREGULAR",irregular:true},
      {n:"5日", ja:"いつか ⚠",         r:"itsuka — IRREGULAR",irregular:true},
      {n:"6日", ja:"むいか ⚠",         r:"muika — IRREGULAR",irregular:true},
      {n:"7日", ja:"なのか ⚠",         r:"nanoka — IRREGULAR",irregular:true},
      {n:"8日", ja:"ようか ⚠",         r:"yooka — IRREGULAR",irregular:true},
      {n:"9日", ja:"ここのか ⚠",       r:"kokonoka — IRREGULAR",irregular:true},
      {n:"10日",ja:"とおか ⚠",         r:"tooka — IRREGULAR",irregular:true},
      {n:"11日",ja:"じゅういちにち",    r:"jūichinichi"},
      {n:"12日",ja:"じゅうににち",      r:"jūninichi"},
      {n:"13日",ja:"じゅうさんにち",    r:"jūsannichi"},
      {n:"14日",ja:"じゅうよっか ⚠",   r:"jūyokka — IRREGULAR (not じゅうよん)",irregular:true},
      {n:"15日",ja:"じゅうごにち",      r:"jūgonichi"},
      {n:"16日",ja:"じゅうろくにち",    r:"jūrokunichi"},
      {n:"17日",ja:"じゅうしちにち",    r:"jūshichinichi"},
      {n:"18日",ja:"じゅうはちにち",    r:"jūhachinichi"},
      {n:"19日",ja:"じゅうくにち",      r:"jūkunichi"},
      {n:"20日",ja:"はつか ⚠",         r:"hatsuka — IRREGULAR (special word!)",irregular:true},
      {n:"21日",ja:"にじゅういちにち",  r:"nijūichinichi"},
      {n:"22日",ja:"にじゅうににち",    r:"nijūninichi"},
      {n:"23日",ja:"にじゅうさんにち",  r:"nijūsannichi"},
      {n:"24日",ja:"にじゅうよっか ⚠", r:"nijūyokka — IRREGULAR",irregular:true},
      {n:"25日",ja:"にじゅうごにち",    r:"nijūgonichi"},
      {n:"26日",ja:"にじゅうろくにち",  r:"nijūrokunichi"},
      {n:"27日",ja:"にじゅうしちにち",  r:"nijūshichinichi"},
      {n:"28日",ja:"にじゅうはちにち",  r:"nijūhachinichi"},
      {n:"29日",ja:"にじゅうくにち",    r:"nijūkunichi"},
      {n:"30日",ja:"さんじゅうにち",    r:"sanjūnichi"},
      {n:"31日",ja:"さんじゅういちにち",r:"sanjūichinichi"}
    ]
  }
];

let activeCounterIdx = 0;

function initCounters() {
  const pills = document.getElementById('counterPills');
  const tableBody = document.getElementById('counterTableBody');
  const suffix = document.getElementById('counterSuffix');
  const noteEl = document.getElementById('counterNote');
  const exampleEl = document.getElementById('counterExample');

  function render(idx) {
    activeCounterIdx = idx;
    const c = COUNTER_DATA[idx];
    pills.querySelectorAll('.topic-pill').forEach((p,i) => p.classList.toggle('active', i===idx));
    suffix.textContent = c.suffix + ' ' + c.label;
    noteEl.textContent = c.note;
    exampleEl.textContent = 'Examples: ' + c.example;
    tableBody.innerHTML = c.rows.map(row => `
      <tr class="counter-row${row.irregular?' irregular':''}" onclick="speakCounter('${row.ja.replace(/[⚠⭐]/g,'')}')">
        <td class="counter-num">${row.n}</td>
        <td class="counter-ja">${row.ja}</td>
        <td class="counter-r">${row.r}</td>
        <td class="counter-play">▶</td>
      </tr>
    `).join('');
  }

  COUNTER_DATA.forEach((c, i) => {
    const p = document.createElement('button');
    p.className = 'topic-pill' + (i===0?' active':'');
    p.textContent = c.suffix;
    p.onclick = () => render(i);
    pills.appendChild(p);
  });

  render(0);
}

function speakCounter(ja) {
  speak(ja.replace(/[⚠⭐]/g,''), 'ja', 0.8);
}
