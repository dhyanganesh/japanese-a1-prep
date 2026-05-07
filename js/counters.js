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
      {n:1,ja:"いっこ",r:"ikko"},{n:2,ja:"にこ",r:"niko"},{n:3,ja:"さんこ",r:"sanko"},
      {n:4,ja:"よんこ",r:"yonko"},{n:5,ja:"ごこ",r:"goko"},{n:6,ja:"ろっこ",r:"rokko"},
      {n:7,ja:"ななこ",r:"nanako"},{n:8,ja:"はっこ",r:"hakko"},{n:9,ja:"きゅうこ",r:"kyūko"},
      {n:10,ja:"じゅっこ",r:"jukko"},{n:20,ja:"にじゅっこ",r:"nijukko"},
      {n:30,ja:"さんじゅっこ",r:"sanjukko"},{n:100,ja:"ひゃっこ",r:"hyakko"},{n:1000,ja:"せんこ",r:"senko"}
    ]
  },
  {
    suffix:"〜にん", label:"People", romaji:"~nin",
    note:"IRREGULAR: 1 person = ひとり, 2 persons = ふたり. From 3 onwards, use さんにん etc.",
    example:"かぞく (family), ともだち (friends)",
    rows:[
      {n:1,ja:"ひとり ⚠",r:"hitori — IRREGULAR"},{n:2,ja:"ふたり ⚠",r:"futari — IRREGULAR"},
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
      {n:1,ja:"いっぽん",r:"ippon"},{n:2,ja:"にほん",r:"nihon"},{n:3,ja:"さんぼん",r:"sanbon"},
      {n:4,ja:"よんほん",r:"yonhon"},{n:5,ja:"ごほん",r:"gohon"},{n:6,ja:"ろっぽん",r:"roppon"},
      {n:7,ja:"ななほん",r:"nanahon"},{n:8,ja:"はっぽん",r:"happon"},{n:9,ja:"きゅうほん",r:"kyūhon"},
      {n:10,ja:"じゅっぽん",r:"juppon"},{n:20,ja:"にじゅっぽん",r:"nijuppon"},
      {n:30,ja:"さんじゅっぽん",r:"sanjuppon"},{n:100,ja:"ひゃっぽん",r:"hyappon"},{n:1000,ja:"せんぼん",r:"senbon"}
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
      {n:1,ja:"いっさつ",r:"issatsu"},{n:2,ja:"にさつ",r:"nisatsu"},{n:3,ja:"さんさつ",r:"sansatsu"},
      {n:4,ja:"よんさつ",r:"yonsatsu"},{n:5,ja:"ごさつ",r:"gosatsu"},{n:6,ja:"ろくさつ",r:"rokusatsu"},
      {n:7,ja:"ななさつ",r:"nanasatsu"},{n:8,ja:"はっさつ",r:"hassatsu"},{n:9,ja:"きゅうさつ",r:"kyūsatsu"},
      {n:10,ja:"じゅっさつ",r:"jussatsu"},{n:20,ja:"にじゅっさつ",r:"nijussatsu"},
      {n:30,ja:"さんじゅっさつ",r:"sanjussatsu"},{n:100,ja:"ひゃくさつ",r:"hyakusatsu"},{n:1000,ja:"せんさつ",r:"sensatsu"}
    ]
  },
  {
    suffix:"〜ひき", label:"Small Animals", romaji:"~hiki",
    note:"Sound changes: 1→いっぴき, 3→さんびき, 6→ろっぴき, 8→はっぴき, 10→じゅっぴき.",
    example:"ねこ (cat), いぬ (dog), さかな (fish), うさぎ (rabbit)",
    rows:[
      {n:1,ja:"いっぴき",r:"ippiki"},{n:2,ja:"にひき",r:"nihiki"},{n:3,ja:"さんびき",r:"sanbiki"},
      {n:4,ja:"よんひき",r:"yonhiki"},{n:5,ja:"ごひき",r:"gohiki"},{n:6,ja:"ろっぴき",r:"roppiki"},
      {n:7,ja:"ななひき",r:"nanahiki"},{n:8,ja:"はっぴき",r:"happiki"},{n:9,ja:"きゅうひき",r:"kyūhiki"},
      {n:10,ja:"じゅっぴき",r:"juppiki"},{n:20,ja:"にじゅっぴき",r:"nijuppiki"},
      {n:30,ja:"さんじゅっぴき",r:"sanjuppiki"},{n:100,ja:"ひゃっぴき",r:"hyappiki"},{n:1000,ja:"せんびき",r:"senbiki"}
    ]
  },
  {
    suffix:"〜さい", label:"Age (Years Old)", romaji:"~sai",
    note:"20 years old is SPECIAL: はたち. Sound changes at 1→いっさい, 8→はっさい, 10→じゅっさい.",
    example:"おいくつですか？ (How old are you?)",
    rows:[
      {n:1,ja:"いっさい",r:"issai"},{n:2,ja:"にさい",r:"nisai"},{n:3,ja:"さんさい",r:"sansai"},
      {n:4,ja:"よんさい",r:"yonsai"},{n:5,ja:"ごさい",r:"gosai"},{n:6,ja:"ろくさい",r:"rokusai"},
      {n:7,ja:"ななさい",r:"nanasai"},{n:8,ja:"はっさい",r:"hassai"},{n:9,ja:"きゅうさい",r:"kyūsai"},
      {n:10,ja:"じゅっさい",r:"jussai"},{n:20,ja:"はたち ⭐",r:"hatachi — SPECIAL WORD"},
      {n:30,ja:"さんじゅっさい",r:"sanjussai"},{n:100,ja:"ひゃくさい",r:"hyakusai"}
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
      <tr class="counter-row" onclick="speakCounter('${row.ja.replace(/[⚠⭐]/g,'')}')">
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
