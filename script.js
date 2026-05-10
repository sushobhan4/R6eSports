const participatingTeams = [
  "All Gamers",
  "CAG OSAKA",
  "Dark Zero",
  "Daystar",
  "Edward Gaming",
  "ENTERPRISE Esports",
  "FaZe Clan",
  "Five Fears",
  "Four Angry Men",
  "FURIA",
  "G2 Esports",
  "LOS",
  "Ninjas in Pyjamas",
  "Shopify Rebellion",
  "Team Falcons",
  "Twisted Minds",
  "Virtus.Pro",
  "Weibo Gaming",
  "Wildcard Gaming",
  "Wolves Esports",
];
const playInTeams = [
  "LOS",
  "Wolves Esports",
  "Edward Gaming",
  "ENTERPRISE Esports",
  "Daystar",
  "Team Falcons",
  "Shopify Rebellion",
  "Four Angry Men",
];
const directSwissTeams = participatingTeams.filter(
  (team) => !playInTeams.includes(team),
);
const teams = ["", ...participatingTeams];

const teamLogos = {
  "All Gamers": "asset/All_Gamers.png",
  "CAG OSAKA": "asset/CAG_Osaka.png",
  "Dark Zero": "asset/DarkZero.png",
  Daystar: "asset/Daystar.png",
  "Edward Gaming": "asset/900px-EDward_Gaming_2017_darkmode.png",
  "ENTERPRISE Esports": "asset/900px-ENTERPRISE_Esports_2023_allmode.png",
  "FaZe Clan": "asset/900px-FaZe_Esports_2026_full_darkmode.png",
  "Five Fears": "asset/900px-Five_Fears_lightmode.png",
  "Four Angry Men": "asset/Four_Angry_Men.png",
  FURIA: "asset/900px-FURIA_Esports_full_darkmode.png",
  "G2 Esports": "asset/1200px-G2_Esports_2020_full_darkmode.png",
  LOS: "asset/1199px-LOS_full_allmode.png",
  "Ninjas in Pyjamas": "asset/900px-Ninjas_in_Pyjamas_2021_full_darkmode.png",
  "Shopify Rebellion": "asset/Shopify_Rebellion_text_2023_darkmode.png",
  "Team Falcons": "asset/1200px-Team_Falcons_2022_full_darkmode.png",
  "Twisted Minds": "asset/900px-Twisted_Minds_2023_full_darkmode.png",
  "Virtus.Pro": "asset/900px-Virtus.pro_2019_allmode.png",
  "Weibo Gaming": "asset/900px-Weibo_Gaming_full_darkmode.png",
  "Wildcard Gaming": "asset/1200px-Wildcard_2024_full_darkmode.png",
  "Wolves Esports": "asset/900px-Wolves_Esports_allmode.png",
};

const logoBadgeBackground =
  "radial-gradient(circle at 28% 22%, rgba(255,255,255,0.22), transparent 20%), linear-gradient(145deg, #2b2b2b 0%, #111111 40%, #000000 100%)";

const matches = [
  {
    id: "uqf1",
    group: "upperQf",
    time: ["Fri", "8", "May", "22:00"],
    teams: ["LOS", "Wolves Esports"],
    scores: [null, null],
  },
  {
    id: "uqf2",
    group: "upperQf",
    time: ["Fri", "8", "May", "22:00"],
    teams: ["Edward Gaming", "ENTERPRISE Esports"],
    scores: [null, null],
  },
  {
    id: "uqf3",
    group: "upperQf",
    time: ["Fri", "8", "May", "23:00"],
    teams: ["Daystar", "Team Falcons"],
    scores: [null, null],
  },
  {
    id: "uqf4",
    group: "upperQf",
    time: ["Sat", "9", "May", "00:00"],
    teams: ["Four Angry Men", "Shopify Rebellion"],
    scores: [null, null],
  },
  {
    id: "usf1",
    group: "upperSf",
    time: ["Sat", "9", "May", "01:00"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "usf2",
    group: "upperSf",
    time: ["Sat", "9", "May", "04:00"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "uf1",
    group: "upperFinal",
    time: ["Next", "", "", "TBD"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "lqf1",
    group: "lowerQf",
    time: ["Sat", "9", "May", "22:00"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "lqf2",
    group: "lowerQf",
    time: ["Sat", "9", "May", "22:00"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "lsf1",
    group: "lowerSf",
    time: ["Sun", "10", "May", "01:00"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "lsf2",
    group: "lowerSf",
    time: ["Sun", "10", "May", "04:00"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "lf1",
    group: "lowerFinal",
    time: ["Next", "", "", "TBD"],
    teams: ["", ""],
    scores: [null, null],
  },
];

const swissRounds = [
  {
    title: "W:0 - L:0",
    record: "0-0",
    stageLabel: "Opening Matches",
    format: "Best of 1",
    matches: 8,
    times: [
      "Sun 10 May 22:00",
      "Sun 10 May 22:00",
      "Sun 10 May 23:00",
      "Sun 10 May 23:00",
      "Mon 11 May 00:00",
      "Mon 11 May 00:00",
      "Mon 11 May 01:00",
      "Mon 11 May 01:00",
    ],
    prerequisites: [],
    qualifier: false,
    eliminator: false,
  },
  {
    title: "W:1 - L:0",
    record: "1-0",
    stageLabel: "High Matches",
    format: "Best of 1",
    matches: 4,
    times: [
      "Mon 11 May 02:00",
      "Mon 11 May 03:00",
      "Mon 11 May 04:00",
      "Mon 11 May 05:00",
    ],
    prerequisites: [0],
    qualifier: false,
    eliminator: false,
  },
  {
    title: "W:0 - L:1",
    record: "0-1",
    stageLabel: "Low Matches",
    format: "Best of 1",
    matches: 4,
    times: [
      "Mon 11 May 02:00",
      "Mon 11 May 03:00",
      "Mon 11 May 04:00",
      "Mon 11 May 05:00",
    ],
    prerequisites: [0],
    qualifier: false,
    eliminator: false,
  },
  {
    title: "W:2 - L:0",
    label: "Winners Advance",
    status: "advance",
    record: "2-0",
    stageLabel: "Winners Advance",
    format: "Best of 3",
    matches: 2,
    times: ["Tue 12 May 01:15", "Tue 12 May 01:15"],
    prerequisites: [1],
    qualifier: true,
    eliminator: false,
  },
  {
    title: "W:1 - L:1",
    record: "1-1",
    stageLabel: "Even Record",
    format: "Best of 1",
    matches: 4,
    times: [
      "Mon 11 May 23:15",
      "Mon 11 May 23:15",
      "Tue 12 May 00:15",
      "Tue 12 May 00:15",
    ],
    prerequisites: [1, 2],
    qualifier: false,
    eliminator: false,
  },
  {
    title: "W:0 - L:2",
    label: "Elimination Game",
    status: "elimination",
    record: "0-2",
    stageLabel: "Elimination Game",
    format: "Best of 3",
    matches: 2,
    times: ["Tue 12 May 04:15", "Tue 12 May 04:15"],
    prerequisites: [2],
    qualifier: false,
    eliminator: true,
  },
  {
    title: "W:2 - L:1",
    label: "Winners Advance",
    status: "advance",
    record: "2-1",
    stageLabel: "Winners Advance",
    format: "Best of 3",
    matches: 3,
    times: ["Tue 12 May 23:15", "Tue 12 May 23:15", "Wed 13 May 02:15"],
    prerequisites: [3, 4],
    qualifier: true,
    eliminator: false,
  },
  {
    title: "W:1 - L:2",
    label: "Elimination Game",
    status: "elimination",
    record: "1-2",
    stageLabel: "Elimination Game",
    format: "Best of 3",
    matches: 3,
    times: ["Wed 13 May 02:15", "Wed 13 May 05:15", "Wed 13 May 05:15"],
    prerequisites: [4, 5],
    qualifier: false,
    eliminator: true,
  },
  {
    title: "W:2 - L:2",
    label: "Last Chance",
    status: "last-chance",
    record: "2-2",
    stageLabel: "Last Chance",
    format: "Best of 3",
    matches: 3,
    times: ["Wed 13 May 23:15", "Thu 14 May 02:15", "Thu 14 May 05:15"],
    prerequisites: [6, 7],
    qualifier: true,
    eliminator: true,
  },
];

const swissLayout = [[0], [1, 2], [3, 4, 5], [6, 7], [8]];
const swissStages = [[0], [1, 2], [3, 4, 5], [6, 7], [8]];
const swissStageByRound = Object.fromEntries(
  swissStages.flatMap((stage, index) =>
    stage.map((roundIndex) => [roundIndex, index]),
  ),
);
const swissColumnLabels = [
  "Round 1",
  "Round 2",
  "Round 3",
  "Round 4",
  "Round 5 / Results",
];

const playoffMatches = [
  {
    id: "pqf1",
    group: "playoffQf",
    time: ["Fri", "15", "May", "21:30"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "pqf2",
    group: "playoffQf",
    time: ["Fri", "16", "May", "00:30"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "pqf3",
    group: "playoffQf",
    time: ["Fri", "16", "May", "03:30"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "pqf4",
    group: "playoffQf",
    time: ["Fri", "16", "May", "06:30"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "psf1",
    group: "playoffSf",
    time: ["Sat", "17", "May", "03:30"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "psf2",
    group: "playoffSf",
    time: ["Sat", "17", "May", "04:00"],
    teams: ["", ""],
    scores: [null, null],
  },
  {
    id: "pf1",
    group: "playoffFinal",
    time: ["Sun", "18", "May", "04:00"],
    teams: ["", ""],
    scores: [null, null],
  },
];

const template = document.getElementById("matchTemplate");
const status = document.getElementById("status");
const teamStrip = document.getElementById("teamStrip");
const phaseTabs = [...document.querySelectorAll(".phase-tab")];
const phasePanels = [...document.querySelectorAll(".phase-panel")];
const swissPoolText = document.getElementById("swissPoolText");
const controls = {};
const genericControls = {};
const genericMatchTimes = {};
const lockedMatches = new Set();
const lockedGenericMatches = new Set();
const finalizedMatches = new Set();
const finalizedGenericMatches = new Set();
const matchOrder = [
  "uqf1",
  "uqf2",
  "uqf3",
  "uqf4",
  "usf1",
  "usf2",
  "lqf1",
  "lqf2",
  "uf1",
  "lsf1",
  "lsf2",
  "lf1",
];
const matchById = Object.fromEntries(matches.map((match) => [match.id, match]));
const displayOnlyMatches = new Set(["uf1", "lf1"]);
const swissQualifierMatchIds = [];
const swissEliminationMatchIds = [];
const swissConnectorPairs = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: "advanced", type: "qualifier" },
  { from: 3, to: 6 },
  { from: 4, to: 6 },
  { from: 4, to: 7 },
  { from: 5, to: 7 },
  { from: 5, to: "eliminated", type: "elimination" },
  { from: 6, to: "advanced", type: "qualifier" },
  { from: 6, to: 8 },
  { from: 7, to: 8 },
  { from: 7, to: "eliminated", type: "elimination" },
  { from: 8, to: "advanced", type: "qualifier" },
  { from: 8, to: "eliminated", type: "elimination" },
];
const playoffSourceMap = {
  psf1: [{ from: "pqf1" }, { from: "pqf2" }],
  psf2: [{ from: "pqf3" }, { from: "pqf4" }],
  pf1: [{ from: "psf1" }, { from: "psf2" }],
};
const bracketConnectorPairs = [
  { from: "uqf1", to: "usf1" },
  { from: "uqf2", to: "usf1" },
  { from: "uqf3", to: "usf2" },
  { from: "uqf4", to: "usf2" },
  { from: "usf1", to: "uf1" },
  { from: "usf2", to: "uf1" },
  { from: "lqf1", to: "lsf1" },
  { from: "lqf2", to: "lsf2" },
  { from: "lsf1", to: "lf1" },
  { from: "lsf2", to: "lf1" },
  { from: "pqf1", to: "psf1" },
  { from: "pqf2", to: "psf1" },
  { from: "pqf3", to: "psf2" },
  { from: "pqf4", to: "psf2" },
  { from: "psf1", to: "pf1" },
  { from: "psf2", to: "pf1" },
];
const phaseConnectorPairs = [
  { phase: "phase-playin", from: "uqf1", to: "lqf1" },
  { phase: "phase-playin", from: "uqf2", to: "lqf1" },
  { phase: "phase-playin", from: "uqf3", to: "lqf2" },
  { phase: "phase-playin", from: "uqf4", to: "lqf2" },
  { phase: "phase-playin", from: "usf2", to: "lsf1" },
  { phase: "phase-playin", from: "usf1", to: "lsf2" },
];
const upperQuarterIds = ["uqf1", "uqf2", "uqf3", "uqf4"];
const middleStageIds = ["usf1", "usf2", "lqf1", "lqf2"];
const slotSources = {
  usf1: [
    { from: "uqf1", result: "winner" },
    { from: "uqf2", result: "winner" },
  ],
  usf2: [
    { from: "uqf3", result: "winner" },
    { from: "uqf4", result: "winner" },
  ],
  lqf1: [
    { from: "uqf1", result: "loser" },
    { from: "uqf2", result: "loser" },
  ],
  lqf2: [
    { from: "uqf3", result: "loser" },
    { from: "uqf4", result: "loser" },
  ],
  uf1: [
    { from: "usf1", result: "winner" },
    { from: "usf2", result: "winner" },
  ],
  lsf1: [
    { from: "lqf1", result: "winner" },
    { from: "usf2", result: "loser" },
  ],
  lsf2: [
    { from: "lqf2", result: "winner" },
    { from: "usf1", result: "loser" },
  ],
  lf1: [
    { from: "lsf1", result: "winner" },
    { from: "lsf2", result: "winner" },
  ],
};
const stageRequirements = {
  usf1: ["uqf1", "uqf2"],
  usf2: ["uqf3", "uqf4"],
  lqf1: ["uqf1", "uqf2"],
  lqf2: ["uqf3", "uqf4"],
  uf1: ["usf1", "usf2"],
  lsf1: ["lqf1", "usf2"],
  lsf2: ["lqf2", "usf1"],
  lf1: ["lsf1", "lsf2"],
};
const playInStages = [
  ["uqf1", "uqf2", "uqf3", "uqf4"],
  ["usf1", "usf2", "lqf1", "lqf2"],
  ["uf1", "lsf1", "lsf2"],
  ["lf1"],
];
const playInStageByMatch = Object.fromEntries(
  playInStages.flatMap((stage, index) =>
    stage.map((matchId) => [matchId, index]),
  ),
);
const playoffStages = [
  ["pqf1", "pqf2", "pqf3", "pqf4"],
  ["psf1", "psf2"],
  ["pf1"],
];
const playoffStageByMatch = Object.fromEntries(
  playoffStages.flatMap((stage, index) =>
    stage.map((matchId) => [matchId, index]),
  ),
);
const autoSaveDelay = 650;
let autoSaveTimer;
const monthIndexByName = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function teamInitials(teamName) {
  if (!teamName) return "?";
  return teamName
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function renderTeamStrip() {
  participatingTeams.forEach((team) => {
    const tile = document.createElement("div");
    tile.className = "team-tile";

    if (teamLogos[team]) {
      const img = document.createElement("img");
      img.src = teamLogos[team];
      img.alt = `${team} logo`;
      tile.appendChild(img);
    } else {
      const fallback = document.createElement("span");
      fallback.className = "tile-fallback";
      fallback.textContent = teamInitials(team);
      tile.appendChild(fallback);
    }

    const name = document.createElement("span");
    name.className = "tile-name";
    name.textContent = team;
    tile.appendChild(name);
    teamStrip.appendChild(tile);
  });
}

function optionList(selectedTeam, availableTeams = teams) {
  return availableTeams.map((team) => {
    const option = document.createElement("option");
    option.value = team;
    option.textContent = team || "No team defined";
    option.selected = team === selectedTeam;
    return option;
  });
}

function setOptions(select, availableTeams, selectedTeam) {
  const realTeams = availableTeams.filter(Boolean);
  const selectedIsValid = selectedTeam && availableTeams.includes(selectedTeam);
  const nextValue = selectedIsValid
    ? selectedTeam
    : realTeams.length === 1
      ? realTeams[0]
      : "";

  select.replaceChildren();

  optionList(nextValue, availableTeams).forEach((option) => {
    select.appendChild(option);
  });

  select.value = nextValue;

  const teamCell = select.closest(".team-cell");
  let staticLabel = teamCell.querySelector(".team-static");

  if (realTeams.length === 1) {
    teamCell.classList.add("single-team");
    if (!staticLabel) {
      staticLabel = document.createElement("span");
      staticLabel.className = "team-static";
      teamCell.appendChild(staticLabel);
    }
    staticLabel.textContent = realTeams[0];
  } else {
    teamCell.classList.remove("single-team");
    if (staticLabel) {
      staticLabel.remove();
    }
  }

  setBadge(select.previousElementSibling, select.value);
}

function renderTime(parts) {
  const [day, date, month, hour] = parts;
  return [day, date, month, hour].filter(Boolean).join("\n");
}

function setBadge(badge, teamName) {
  badge.textContent = "";

  if (!teamName || !teamLogos[teamName]) {
    badge.textContent = teamInitials(teamName);
    badge.style.background = logoBadgeBackground;
    return;
  }

  const img = document.createElement("img");
  img.src = teamLogos[teamName];
  img.alt = `${teamName} logo`;
  badge.style.background = logoBadgeBackground;
  badge.appendChild(img);
}

function parseMatchTime(parts) {
  if (!Array.isArray(parts) || parts.length < 4) return null;
  const [day, dateText, monthText, timeText] = parts.map((part) =>
    String(part || "").trim(),
  );

  if (
    !dateText ||
    !monthText ||
    !timeText ||
    /tbd/i.test(day) ||
    /tbd/i.test(dateText) ||
    /tbd/i.test(monthText) ||
    /tbd/i.test(timeText) ||
    /^next$/i.test(day)
  ) {
    return null;
  }

  const monthKey = monthText.slice(0, 3).toLowerCase();
  const monthIndex = monthIndexByName[monthKey];
  if (monthIndex === undefined) return null;

  const dateNumber = Number(dateText);
  if (!Number.isFinite(dateNumber)) return null;

  const timeParts = timeText.split(":");
  if (timeParts.length !== 2) return null;
  const hour = Number(timeParts[0]);
  const minute = Number(timeParts[1]);
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return null;

  const year = new Date().getFullYear();
  const matchDate = new Date(year, monthIndex, dateNumber, hour, minute);
  return Number.isNaN(matchDate.getTime()) ? null : matchDate;
}

function isMatchTimeOver(parts) {
  const matchDate = parseMatchTime(parts);
  if (!matchDate) return false;
  return Date.now() >= matchDate.getTime();
}

function renderMatch(match) {
  const node = template.content.firstElementChild.cloneNode(true);
  node.dataset.match = match.id;
  node.classList.toggle("display-only", displayOnlyMatches.has(match.id));
  node.querySelector(".time").textContent = renderTime(match.time);

  const slots = node.querySelectorAll(".slot");
  slots.forEach((slot, index) => {
    const select = slot.querySelector("select");
    const score = slot.querySelector("input");
    const badge = slot.querySelector(".badge");

    select.dataset.match = match.id;
    select.dataset.slot = String(index);
    select.setAttribute("aria-label", `${match.id} team ${index + 1}`);
    optionList(match.teams[index]).forEach((option) =>
      select.appendChild(option),
    );

    score.dataset.match = match.id;
    score.dataset.slot = String(index);
    score.value = match.scores[index] ?? "";

    setBadge(badge, match.teams[index]);
    select.addEventListener("change", () => {
      setBadge(badge, select.value);
      unlockFrom(match.id);
      refreshBracket();
      showStatus("Unsaved changes");
      queueAutoSave();
    });
    score.addEventListener("input", () => {
      unlockFrom(match.id);
      refreshBracket();
      showStatus("Unsaved changes");
      queueAutoSave();
    });
  });

  document.getElementById(match.group).appendChild(node);
  controls[match.id] = {
    node,
    slots: [...node.querySelectorAll(".slot")],
    selects: [...node.querySelectorAll("select")],
    scores: [...node.querySelectorAll("input")],
    button: node.querySelector(".advance-btn"),
    label: node.querySelector(".winner-label"),
  };
  controls[match.id].button.addEventListener("click", () =>
    lockWinner(match.id),
  );
}

function getOutcome(matchId) {
  if (!lockedMatches.has(matchId)) return null;

  const matchControls = controls[matchId];
  const selectedTeams = matchControls.selects.map((select) => select.value);
  const scores = matchControls.scores.map((score) => Number(score.value));

  if (!selectedTeams[0] || !selectedTeams[1]) return null;
  if (scores.some((score) => Number.isNaN(score))) return null;
  if (scores[0] === scores[1]) return null;

  const winnerSlot = scores[0] > scores[1] ? 0 : 1;
  const loserSlot = winnerSlot === 0 ? 1 : 0;

  return {
    winner: selectedTeams[winnerSlot],
    loser: selectedTeams[loserSlot],
    winnerSlot,
    loserSlot,
  };
}

function getSlotChoices(matchId, slotIndex) {
  const sources = slotSources[matchId];
  if (!sources) return teams;

  const source = sources[slotIndex];
  const outcome = source ? getOutcome(source.from) : null;
  const team = outcome ? outcome[source.result] : "";
  return team ? ["", team] : [""];
}

function isPlayInStageReady(matchId) {
  const stageIndex = playInStageByMatch[matchId];
  if (stageIndex === undefined) return true;
  for (let index = 0; index < stageIndex; index += 1) {
    if (!playInStages[index].every((id) => lockedMatches.has(id))) {
      return false;
    }
  }
  return true;
}

function isMatchReady(matchId) {
  const requiredMatches = stageRequirements[matchId] || [];
  const feedersReady = requiredMatches.every((requiredId) =>
    lockedMatches.has(requiredId),
  );
  return feedersReady && isPlayInStageReady(matchId);
}

function finalizeMatchIfOver(matchId) {
  if (finalizedMatches.has(matchId)) return false;
  const match = matchById[matchId];
  if (!match) return false;
  if (!lockedMatches.has(matchId)) return false;
  if (!isMatchTimeOver(match.time)) return false;
  finalizedMatches.add(matchId);
  return true;
}

function finalizeGenericMatchIfOver(matchId) {
  if (finalizedGenericMatches.has(matchId)) return false;
  if (!lockedGenericMatches.has(matchId)) return false;
  if (!isMatchTimeOver(genericMatchTimes[matchId])) return false;
  finalizedGenericMatches.add(matchId);
  return true;
}

function unlockFrom(matchId) {
  [...lockedMatches].forEach((id) => {
    if (finalizedMatches.has(id)) return;
    if (id === matchId || matchDependsOn(id, matchId)) lockedMatches.delete(id);
  });
}

function matchDependsOn(targetId, sourceId, visited = new Set()) {
  if (visited.has(targetId)) return false;
  visited.add(targetId);

  const directSources = [
    ...(stageRequirements[targetId] || []),
    ...(slotSources[targetId] || []).map((source) => source.from),
  ];

  return directSources.some(
    (id) => id === sourceId || matchDependsOn(id, sourceId, visited),
  );
}

function refreshBracket() {
  matches.forEach((match) => {
    const matchControls = controls[match.id];
    const ready = isMatchReady(match.id);
    const isFinal = finalizedMatches.has(match.id);
    const timeOver = isMatchTimeOver(match.time);

    matchControls.node.classList.toggle("pending", !ready);
    matchControls.node.classList.toggle("locked", lockedMatches.has(match.id));
    matchControls.node.classList.toggle("finalized", isFinal);

    matchControls.selects.forEach((select, index) => {
      if (isFinal) {
        const lockedChoice = select.value ? ["", select.value] : [""];
        setOptions(select, lockedChoice, select.value);
        select.disabled = true;
        return;
      }

      const choices = getSlotChoices(match.id, index);
      setOptions(select, choices, select.value);
      select.disabled = !ready || displayOnlyMatches.has(match.id);
    });

    matchControls.scores.forEach((score) => {
      score.disabled = isFinal || !ready || displayOnlyMatches.has(match.id);
    });

    const outcome = getOutcome(match.id);
    matchControls.slots.forEach((slot) =>
      slot.classList.remove("winner", "loser"),
    );

    if (isFinal) {
      if (outcome) {
        matchControls.slots[outcome.winnerSlot].classList.add("winner");
        matchControls.slots[outcome.loserSlot].classList.add("loser");
        matchControls.label.textContent = `Finalized: ${outcome.winner}`;
      } else {
        matchControls.label.textContent = "Finalized";
      }
      matchControls.button.disabled = true;
      matchControls.button.style.display = "none";
    } else if (displayOnlyMatches.has(match.id)) {
      matchControls.node.classList.toggle("locked", ready);
      matchControls.label.textContent = ready
        ? "Qualified to Swiss"
        : "Waiting for feeders";
      matchControls.button.disabled = true;
      matchControls.button.style.display = "none";
    } else if (outcome) {
      matchControls.slots[outcome.winnerSlot].classList.add("winner");
      matchControls.slots[outcome.loserSlot].classList.add("loser");
      matchControls.label.textContent = timeOver
        ? `Ready to finalize: ${outcome.winner}`
        : `Prediction: ${outcome.winner}`;
      matchControls.button.textContent = timeOver
        ? "Finalize Result"
        : "Update Prediction";
      matchControls.button.style.display = "";
    } else {
      lockedMatches.delete(match.id);
      if (!ready) {
        matchControls.label.textContent = "Waiting for previous stage";
      } else if (!timeOver) {
        matchControls.label.textContent = "Enter score to lock prediction";
      } else {
        matchControls.label.textContent = "Enter score to finalize";
      }
      matchControls.button.textContent = timeOver
        ? "Finalize Result"
        : "Lock Prediction";
      matchControls.button.style.display = "";
    }

    matchControls.button.disabled = !ready || displayOnlyMatches.has(match.id);
  });

  refreshSwissTeamPool();
  scheduleBracketConnectors();
}

function lockWinner(matchId) {
  if (finalizedMatches.has(matchId)) {
    showStatus("Match is finalized");
    return;
  }

  const matchControls = controls[matchId];
  const selectedTeams = matchControls.selects.map((select) => select.value);
  const scores = matchControls.scores.map((score) => Number(score.value));

  if (!isMatchReady(matchId)) {
    showStatus("Previous stage must be completed first");
    return;
  }

  if (!selectedTeams[0] || !selectedTeams[1]) {
    showStatus("Select both teams before locking winner");
    return;
  }

  if (selectedTeams[0] === selectedTeams[1]) {
    showStatus("A team cannot play itself");
    return;
  }

  if (
    matchControls.scores.some((score) => score.value === "") ||
    scores.some((score) => Number.isNaN(score))
  ) {
    showStatus("Enter both scores before locking winner");
    return;
  }

  if (scores[0] === scores[1]) {
    showStatus("Scores cannot be tied");
    return;
  }

  lockedMatches.add(matchId);
  const wasFinalized = finalizeMatchIfOver(matchId);
  const outcome = getOutcome(matchId);
  refreshBracket();
  showStatus(
    wasFinalized
      ? `${outcome.winner} finalized`
      : `${outcome.winner} prediction locked`,
  );
  queueAutoSave();
}

function splitTime(timeText) {
  const parts = timeText.split(" ");
  return [parts[0], parts[1], parts[2], parts.slice(3).join(" ")];
}

function getPlayInQualifiers() {
  return ["usf1", "usf2", "lsf1", "lsf2"]
    .map((matchId) => getOutcome(matchId)?.winner)
    .filter(Boolean);
}

function getSwissTeamPool() {
  return [...new Set([...directSwissTeams, ...getPlayInQualifiers()])];
}

function uniqueTeams(teamList) {
  return teamList.filter(
    (team, index, list) => team && list.indexOf(team) === index,
  );
}

function swissMatchId(roundIndex, matchIndex) {
  return `swiss_${roundIndex + 1}_${matchIndex + 1}`;
}

function getSwissRoundIndex(matchId) {
  const match = /^swiss_(\d+)_\d+$/.exec(matchId);
  return match ? Number(match[1]) - 1 : -1;
}

function getSwissRoundMatchIds(roundIndex) {
  const round = swissRounds[roundIndex];
  if (!round) return [];
  return Array.from({ length: round.matches }, (_, matchIndex) =>
    swissMatchId(roundIndex, matchIndex),
  );
}

function isSwissStageReady(roundIndex) {
  const stageIndex = swissStageByRound[roundIndex];
  if (stageIndex === undefined) return true;
  for (let index = 0; index < stageIndex; index += 1) {
    if (!swissStages[index].every(isSwissRoundComplete)) return false;
  }
  return true;
}

function isSwissRoundComplete(roundIndex) {
  const matchIds = getSwissRoundMatchIds(roundIndex);
  return (
    matchIds.length > 0 &&
    matchIds.every((matchId) => lockedGenericMatches.has(matchId))
  );
}

function getNextSwissRecord(record, result) {
  const [wins, losses] = record.split("-").map(Number);
  return result === "winner"
    ? `${wins + 1}-${losses}`
    : `${wins}-${losses + 1}`;
}

function getSwissRecordBuckets() {
  const buckets = { "0-0": getSwissTeamPool() };

  swissRounds.forEach((round, roundIndex) => {
    getSwissRoundMatchIds(roundIndex).forEach((matchId) => {
      const outcome = getGenericOutcome(matchId);
      if (!outcome) return;

      const winnerRecord = getNextSwissRecord(round.record, "winner");
      const loserRecord = getNextSwissRecord(round.record, "loser");

      if (!winnerRecord.startsWith("3-")) {
        buckets[winnerRecord] = buckets[winnerRecord] || [];
        buckets[winnerRecord].push(outcome.winner);
      }

      if (!loserRecord.endsWith("-3")) {
        buckets[loserRecord] = buckets[loserRecord] || [];
        buckets[loserRecord].push(outcome.loser);
      }
    });
  });

  Object.keys(buckets).forEach((record) => {
    buckets[record] = uniqueTeams(buckets[record]);
  });

  return buckets;
}

function getSwissAvailableTeamsForRound(roundIndex) {
  const round = swissRounds[roundIndex];
  if (!round) return [];
  return getSwissRecordBuckets()[round.record] || [];
}

function isSwissRoundReady(roundIndex) {
  const round = swissRounds[roundIndex];
  if (!round) return false;
  if (roundIndex === 0 && getSwissTeamPool().length < 16) return false;
  if (!isSwissStageReady(roundIndex)) return false;
  if (!round.prerequisites.every(isSwissRoundComplete)) return false;
  return getSwissAvailableTeamsForRound(roundIndex).length >= 2;
}

function getPlayoffQualifierPool() {
  return uniqueTeams(
    swissQualifierMatchIds
      .map((matchId) => getGenericOutcome(matchId)?.winner)
      .filter(Boolean),
  );
}

function getSwissEliminatedPool() {
  return uniqueTeams(
    swissEliminationMatchIds
      .map((matchId) => getGenericOutcome(matchId)?.loser)
      .filter(Boolean),
  );
}

function addSelectedChoice(choices, selectedTeam) {
  if (selectedTeam && !choices.includes(selectedTeam)) {
    return [...choices, selectedTeam];
  }
  return choices;
}

function getTakenGenericTeams(predicate, currentMatchId, currentSlotIndex) {
  const taken = new Set();

  Object.entries(genericControls).forEach(([id, matchControls]) => {
    if (!predicate(id, matchControls)) return;

    matchControls.selects.forEach((select, index) => {
      if (id === currentMatchId && index === currentSlotIndex) return;
      if (select.value) taken.add(select.value);
    });
  });

  return taken;
}

function getDuplicateGenericSelection(predicate) {
  const seen = new Set();

  for (const [id, matchControls] of Object.entries(genericControls)) {
    if (!predicate(id, matchControls)) continue;

    for (const select of matchControls.selects) {
      if (!select.value) continue;
      if (seen.has(select.value)) return select.value;
      seen.add(select.value);
    }
  }

  return "";
}

function getSwissAvailableTeamsForSlot(roundIndex, matchId, slotIndex) {
  const taken = getTakenGenericTeams(
    (id, matchControls) =>
      matchControls.type === "swiss" && getSwissRoundIndex(id) === roundIndex,
    matchId,
    slotIndex,
  );

  return getSwissAvailableTeamsForRound(roundIndex).filter(
    (team) => !taken.has(team),
  );
}

function getPlayoffAvailableTeamsForSlot(matchId, slotIndex) {
  const matchControls = genericControls[matchId];
  const taken = getTakenGenericTeams(
    (id, controls) =>
      controls.type === "playoff" &&
      controls.group === matchControls.group &&
      !playoffSourceMap[id],
    matchId,
    slotIndex,
  );

  return getPlayoffQualifierPool().filter((team) => !taken.has(team));
}

function getSwissOutcomeLabel(matchId, outcome, isFinal = false) {
  const prefix = isFinal ? "Finalized" : "";
  if (
    swissQualifierMatchIds.includes(matchId) &&
    swissEliminationMatchIds.includes(matchId)
  ) {
    return `${prefix ? `${prefix}: ` : ""}${outcome.winner} advanced | ${outcome.loser} eliminated`;
  }

  if (swissQualifierMatchIds.includes(matchId)) {
    return `${prefix ? `${prefix} qualifier: ` : "Playoff qualifier: "}${outcome.winner}`;
  }

  if (swissEliminationMatchIds.includes(matchId)) {
    return `${prefix ? `${prefix} elimination: ` : "Eliminated: "}${outcome.loser}`;
  }

  return `${prefix ? `${prefix}: ` : "Winner: "}${outcome.winner}`;
}

function renderGenericMatch(container, match, type) {
  const node = template.content.firstElementChild.cloneNode(true);
  node.dataset.match = match.id;
  genericMatchTimes[match.id] = match.time;

  if (type === "swiss") node.classList.add("swiss-match");
  node.querySelector(".time").textContent = renderTime(match.time);

  const slots = node.querySelectorAll(".slot");
  slots.forEach((slot, index) => {
    const select = slot.querySelector("select");
    const score = slot.querySelector("input");
    const badge = slot.querySelector(".badge");

    select.dataset.match = match.id;
    select.dataset.slot = String(index);
    select.setAttribute("aria-label", `${match.id} team ${index + 1}`);
    optionList("").forEach((option) => select.appendChild(option));

    score.dataset.match = match.id;
    score.dataset.slot = String(index);
    score.value = match.scores[index] ?? "";

    setBadge(badge, "");
    select.addEventListener("change", () => {
      setBadge(badge, select.value);

      if (match.id.startsWith("swiss_")) {
        const roundIndex = getSwissRoundIndex(match.id);

        const duplicate = getDuplicateGenericSelection(
          (id, controls) =>
            controls.type === "swiss" && getSwissRoundIndex(id) === roundIndex,
        );

        if (duplicate) {
          showStatus(`${duplicate} is already used in this Swiss round`);
          refreshGenericMatches();
          return;
        }
      }

      unlockGenericFrom(match.id);
      refreshGenericMatches();
      showStatus("Unsaved changes");
      queueAutoSave();
    });
    score.addEventListener("input", () => {
      unlockGenericFrom(match.id);
      refreshGenericMatches();
      showStatus("Unsaved changes");
      queueAutoSave();
    });
  });

  container.appendChild(node);
  genericControls[match.id] = {
    node,
    type,
    group: match.group || "",
    slots: [...node.querySelectorAll(".slot")],
    selects: [...node.querySelectorAll("select")],
    scores: [...node.querySelectorAll("input")],
    button: node.querySelector(".advance-btn"),
    label: node.querySelector(".winner-label"),
  };
  genericControls[match.id].button.addEventListener("click", () =>
    lockGenericWinner(match.id),
  );
}

function renderSwissResultPanel(type, title) {
  const panel = document.createElement("section");
  panel.className = `swiss-result-panel ${type}`;
  panel.dataset.swissResult = type;

  const heading = document.createElement("strong");
  heading.textContent = title;
  panel.appendChild(heading);

  const list = document.createElement("div");
  list.className = "swiss-result-list";
  list.id = type === "advanced" ? "swissAdvancedList" : "swissEliminatedList";
  panel.appendChild(list);

  return panel;
}

function refreshSwissResultList(listId, teams) {
  const list = document.getElementById(listId);
  if (!list) return;

  list.replaceChildren();
  Array.from({ length: 8 }, (_, index) => teams[index] || "").forEach(
    (team) => {
      const slot = document.createElement("div");
      slot.className = `swiss-result-slot${team ? "" : " empty"}`;

      const badge = document.createElement("span");
      badge.className = "badge";
      setBadge(badge, team);
      slot.appendChild(badge);

      const name = document.createElement("span");
      name.textContent = team || "TBD";
      slot.appendChild(name);

      list.appendChild(slot);
    },
  );
}

function refreshSwissResults() {
  refreshSwissResultList("swissAdvancedList", getPlayoffQualifierPool());
  refreshSwissResultList("swissEliminatedList", getSwissEliminatedPool());
}

function getSwissConnectorTarget(target) {
  const root = document.getElementById("swissRounds");
  if (typeof target === "number") {
    return root.querySelector(`[data-swiss-round="${target}"]`);
  }
  return root.querySelector(`[data-swiss-result="${target}"]`);
}

function drawSwissConnectors() {
  const root = document.getElementById("swissRounds");
  const svg = document.getElementById("swissConnectors");
  if (!root || !svg) return;

  const rootRect = root.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${root.scrollWidth} ${root.scrollHeight}`);
  svg.replaceChildren();

  swissConnectorPairs.forEach(({ from, to, type }) => {
    const source = getSwissConnectorTarget(from);
    const target = getSwissConnectorTarget(to);
    if (!source || !target) return;

    const sourceRect = source.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const sx = sourceRect.right - rootRect.left;
    const sy = sourceRect.top + sourceRect.height / 2 - rootRect.top;
    const tx = targetRect.left - rootRect.left;
    const ty = targetRect.top + targetRect.height / 2 - rootRect.top;
    const midX = sx + (tx - sx) * 0.52;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `M ${sx} ${sy} C ${midX} ${sy}, ${midX} ${ty}, ${tx} ${ty}`,
    );
    if (type) path.classList.add(type);
    svg.appendChild(path);
  });
}

function scheduleSwissConnectors() {
  requestAnimationFrame(drawSwissConnectors);
}

function ensureBracketConnectorSvg(wrap) {
  let svg = wrap.querySelector(".bracket-connector-svg");
  if (svg) return svg;

  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("bracket-connector-svg");
  svg.setAttribute("aria-hidden", "true");
  wrap.prepend(svg);
  return svg;
}

function drawBracketConnectors() {
  document.querySelectorAll(".bracket-wrap").forEach((wrap) => {
    const svg = ensureBracketConnectorSvg(wrap);
    const wrapRect = wrap.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${wrap.scrollWidth} ${wrap.scrollHeight}`);
    svg.style.width = `${wrap.scrollWidth}px`;
    svg.style.height = `${wrap.scrollHeight}px`;
    svg.replaceChildren();

    bracketConnectorPairs.forEach(({ from, to }) => {
      const source = wrap.querySelector(`[data-match="${from}"]`);
      const target = wrap.querySelector(`[data-match="${to}"]`);
      if (!source || !target) return;

      const sourceRect = source.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const sx = sourceRect.right - wrapRect.left + wrap.scrollLeft;
      const sy =
        sourceRect.top + sourceRect.height / 2 - wrapRect.top + wrap.scrollTop;
      const tx = targetRect.left - wrapRect.left + wrap.scrollLeft;
      const ty =
        targetRect.top + targetRect.height / 2 - wrapRect.top + wrap.scrollTop;
      const midX = sx + (tx - sx) * 0.5;

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      path.setAttribute(
        "d",
        `M ${sx} ${sy} C ${midX} ${sy}, ${midX} ${ty}, ${tx} ${ty}`,
      );
      svg.appendChild(path);
    });
  });
}

function ensurePhaseConnectorSvg(panel) {
  let svg = panel.querySelector(":scope > .phase-connector-svg");
  if (svg) return svg;

  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("phase-connector-svg");
  svg.setAttribute("aria-hidden", "true");
  panel.prepend(svg);
  return svg;
}

function drawPhaseConnectors() {
  document.querySelectorAll(".phase-panel.active").forEach((panel) => {
    const svg = ensurePhaseConnectorSvg(panel);
    const panelRect = panel.getBoundingClientRect();
    svg.setAttribute(
      "viewBox",
      `0 0 ${panel.scrollWidth} ${panel.scrollHeight}`,
    );
    svg.style.width = `${panel.scrollWidth}px`;
    svg.style.height = `${panel.scrollHeight}px`;
    svg.replaceChildren();

    phaseConnectorPairs
      .filter(({ phase }) => phase === panel.id)
      .forEach(({ from, to }) => {
        const source = panel.querySelector(`[data-match="${from}"]`);
        const target = panel.querySelector(`[data-match="${to}"]`);
        if (!source || !target) return;

        const sourceRect = source.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const sx = sourceRect.left + sourceRect.width / 2 - panelRect.left;
        const sy = sourceRect.bottom - panelRect.top;
        const tx = targetRect.left + targetRect.width / 2 - panelRect.left;
        const ty = targetRect.top - panelRect.top;
        const midY = sy + (ty - sy) * 0.5;

        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        path.setAttribute(
          "d",
          `M ${sx} ${sy} C ${sx} ${midY}, ${tx} ${midY}, ${tx} ${ty}`,
        );
        svg.appendChild(path);
      });
  });
}

function scheduleBracketConnectors() {
  requestAnimationFrame(() => {
    drawBracketConnectors();
    drawPhaseConnectors();
  });
}

function renderSwissPhase() {
  const root = document.getElementById("swissRounds");
  const columns = [...root.querySelectorAll(".swiss-column")];
  swissQualifierMatchIds.length = 0;
  swissEliminationMatchIds.length = 0;
  columns.forEach((column, index) => {
    column.replaceChildren();

    const label = document.createElement("div");
    label.className = "swiss-column-label";
    label.textContent = swissColumnLabels[index] || `Round ${index + 1}`;
    column.appendChild(label);
  });

  swissLayout.forEach((roundIndexes, columnIndex) => {
    const column = columns[columnIndex] || root;
    if (columnIndex === 4) {
      column.appendChild(renderSwissResultPanel("advanced", "Advanced"));
    }

    roundIndexes.forEach((roundIndex) => {
      const round = swissRounds[roundIndex];
      if (!round) return;

      const group = document.createElement("section");
      group.className = "swiss-group";
      group.dataset.swissRound = String(roundIndex);
      if (round.status) group.dataset.status = round.status;

      const title = document.createElement("h3");
      title.textContent = round.label || round.title;
      if (round.label) {
        const record = document.createElement("span");
        record.textContent = round.title;
        title.appendChild(record);
      }
      group.appendChild(title);

      for (let index = 0; index < round.matches; index += 1) {
        const id = swissMatchId(roundIndex, index);
        if (round.qualifier) swissQualifierMatchIds.push(id);
        if (round.eliminator) swissEliminationMatchIds.push(id);
        renderGenericMatch(
          group,
          {
            id,
            time: splitTime(round.times[index] || "TBD TBD TBD TBD"),
            teams: ["", ""],
            scores: [null, null],
          },
          "swiss",
        );
      }

      const format = document.createElement("div");
      format.className = "swiss-format";
      format.textContent = round.format;
      group.appendChild(format);

      column.appendChild(group);
    });

    if (columnIndex === 4) {
      column.appendChild(renderSwissResultPanel("eliminated", "Eliminated"));
    }
  });

  refreshSwissResults();
  scheduleSwissConnectors();
  scheduleBracketConnectors();
}

function renderPlayoffs() {
  playoffMatches.forEach((match) => {
    renderGenericMatch(document.getElementById(match.group), match, "playoff");
  });
}

function getGenericOutcome(matchId) {
  if (!lockedGenericMatches.has(matchId)) return null;

  const matchControls = genericControls[matchId];
  const selectedTeams = matchControls.selects.map((select) => select.value);
  const scores = matchControls.scores.map((score) => Number(score.value));

  if (!selectedTeams[0] || !selectedTeams[1]) return null;
  if (scores.some((score) => Number.isNaN(score))) return null;
  if (scores[0] === scores[1]) return null;

  const winnerSlot = scores[0] > scores[1] ? 0 : 1;
  const loserSlot = winnerSlot === 0 ? 1 : 0;

  return {
    winner: selectedTeams[winnerSlot],
    loser: selectedTeams[loserSlot],
    winnerSlot,
    loserSlot,
  };
}

function getSwissManualChoices(matchId, slotIndex) {
  const roundIndex = getSwissRoundIndex(matchId);
  return ["", ...getSwissAvailableTeamsForSlot(roundIndex, matchId, slotIndex)];
}

function getGenericChoices(matchId, slotIndex) {
  const matchControls = genericControls[matchId];

  // Prevent trickling auto-selection by not providing choices until the stage/match is fully ready
  if (!isGenericMatchReady(matchId)) return [""];

  if (matchControls.type === "swiss") {
    return getSwissManualChoices(matchId, slotIndex);
  }

  const playoffSources = playoffSourceMap[matchId];
  if (playoffSources) {
    const source = playoffSources[slotIndex];
    const team = source ? getGenericOutcome(source.from)?.winner : "";
    return team ? ["", team] : [""];
  }

  return ["", ...getPlayoffAvailableTeamsForSlot(matchId, slotIndex)];
}

function isPlayoffStageReady(matchId) {
  const stageIndex = playoffStageByMatch[matchId];
  if (stageIndex === undefined) return true;
  for (let index = 0; index < stageIndex; index += 1) {
    if (!playoffStages[index].every((id) => lockedGenericMatches.has(id))) {
      return false;
    }
  }
  return true;
}

function isGenericMatchReady(matchId) {
  const matchControls = genericControls[matchId];

  if (matchControls.type === "swiss") {
    return (
      lockedGenericMatches.has(matchId) ||
      isSwissRoundReady(getSwissRoundIndex(matchId))
    );
  }

  const playoffSources = playoffSourceMap[matchId];
  if (playoffSources) {
    return (
      isPlayoffStageReady(matchId) &&
      playoffSources.every((source) => lockedGenericMatches.has(source.from))
    );
  }

  return isPlayoffStageReady(matchId) && getPlayoffQualifierPool().length >= 8;
}

function genericDependsOn(targetId, sourceId, visited = new Set()) {
  if (visited.has(targetId)) return false;
  visited.add(targetId);

  const directSources = (playoffSourceMap[targetId] || []).map(
    (source) => source.from,
  );
  return directSources.some(
    (id) => id === sourceId || genericDependsOn(id, sourceId, visited),
  );
}

function unlockGenericFrom(matchId) {
  if (finalizedGenericMatches.has(matchId)) return;
  lockedGenericMatches.delete(matchId);

  Object.keys(genericControls).forEach((id) => {
    if (finalizedGenericMatches.has(id)) return;
    if (genericDependsOn(id, matchId)) lockedGenericMatches.delete(id);
  });

  if (matchId.startsWith("swiss_")) {
    const changedRoundIndex = getSwissRoundIndex(matchId);
    Object.keys(genericControls).forEach((id) => {
      if (finalizedGenericMatches.has(id)) return;
      if (
        id.startsWith("swiss_") &&
        getSwissRoundIndex(id) > changedRoundIndex
      ) {
        lockedGenericMatches.delete(id);
      }
    });

    playoffMatches.forEach((match) => lockedGenericMatches.delete(match.id));
  }
}

function refreshSwissTeamPool() {
  const qualifiers = getPlayInQualifiers();
  const pool = getSwissTeamPool();
  swissPoolText.textContent = `${pool.length} teams: ${pool.join(", ")}${qualifiers.length < 4 ? " | Waiting for remaining Play-in qualifiers." : ""}`;
  refreshGenericMatches();
}

function refreshGenericMatches() {
  Object.entries(genericControls).forEach(([matchId, matchControls]) => {
    const ready = isGenericMatchReady(matchId);
    const isFinal = finalizedGenericMatches.has(matchId);
    const timeOver = isMatchTimeOver(genericMatchTimes[matchId]);
    matchControls.node.classList.toggle("pending", !ready);
    matchControls.node.classList.toggle(
      "locked",
      lockedGenericMatches.has(matchId),
    );
    matchControls.node.classList.toggle("finalized", isFinal);

    matchControls.selects.forEach((select, index) => {
      if (isFinal) {
        const lockedChoice = select.value ? ["", select.value] : [""];
        setOptions(select, lockedChoice, select.value);
        select.disabled = true;
        return;
      }

      const choices = getGenericChoices(matchId, index);
      setOptions(select, choices, select.value);
      select.disabled = !ready;
    });

    matchControls.scores.forEach((score) => {
      score.disabled = isFinal || !ready;
    });

    const outcome = getGenericOutcome(matchId);
    matchControls.slots.forEach((slot) =>
      slot.classList.remove("winner", "loser"),
    );

    if (isFinal) {
      if (outcome) {
        matchControls.slots[outcome.winnerSlot].classList.add("winner");
        matchControls.slots[outcome.loserSlot].classList.add("loser");
        matchControls.label.textContent =
          matchControls.type === "swiss"
            ? getSwissOutcomeLabel(matchId, outcome, true)
            : `Finalized: ${outcome.winner}`;
      } else {
        matchControls.label.textContent = "Finalized";
      }
      matchControls.button.disabled = true;
      matchControls.button.style.display = "none";
    } else if (outcome) {
      matchControls.slots[outcome.winnerSlot].classList.add("winner");
      matchControls.slots[outcome.loserSlot].classList.add("loser");
      const baseLabel =
        matchControls.type === "swiss"
          ? getSwissOutcomeLabel(matchId, outcome)
          : `Winner: ${outcome.winner}`;
      matchControls.label.textContent = timeOver
        ? `Ready to finalize: ${baseLabel}`
        : `Prediction: ${baseLabel}`;
      matchControls.button.textContent = timeOver
        ? "Finalize Result"
        : "Update Prediction";
      matchControls.button.style.display = "";
    } else {
      lockedGenericMatches.delete(matchId);
      if (!ready) {
        matchControls.label.textContent =
          matchControls.type === "swiss"
            ? "Waiting for feeder record"
            : "Waiting for qualified teams";
      } else if (!timeOver) {
        matchControls.label.textContent = "Enter score to lock prediction";
      } else {
        matchControls.label.textContent = "Enter score to finalize";
      }
      matchControls.button.textContent = timeOver
        ? "Finalize Result"
        : "Lock Prediction";
      matchControls.button.style.display = "";
    }

    matchControls.button.disabled = !ready;
  });

  refreshSwissResults();
  scheduleSwissConnectors();
}

function lockGenericWinner(matchId) {
  if (finalizedGenericMatches.has(matchId)) {
    showStatus("Match is finalized");
    return;
  }

  const matchControls = genericControls[matchId];
  const selectedTeams = matchControls.selects.map((select) => select.value);
  const scores = matchControls.scores.map((score) => Number(score.value));

  if (!isGenericMatchReady(matchId)) {
    showStatus("Qualified teams are needed first");
    return;
  }

  if (!selectedTeams[0] || !selectedTeams[1]) {
    showStatus("Select both teams before locking winner");
    return;
  }

  if (selectedTeams[0] === selectedTeams[1]) {
    showStatus("A team cannot play itself");
    return;
  }

  if (matchControls.type === "swiss") {
    const roundIndex = getSwissRoundIndex(matchId);
    const duplicate = getDuplicateGenericSelection(
      (id, controls) =>
        controls.type === "swiss" && getSwissRoundIndex(id) === roundIndex,
    );

    if (duplicate) {
      showStatus(`${duplicate} is already selected in this Swiss round`);
      return;
    }
  }

  if (matchControls.type === "playoff" && !playoffSourceMap[matchId]) {
    const duplicate = getDuplicateGenericSelection(
      (id, controls) =>
        controls.type === "playoff" &&
        controls.group === matchControls.group &&
        !playoffSourceMap[id],
    );

    if (duplicate) {
      showStatus(`${duplicate} is already selected in this playoff round`);
      return;
    }
  }

  if (
    matchControls.scores.some((score) => score.value === "") ||
    scores.some((score) => Number.isNaN(score))
  ) {
    showStatus("Enter both scores before locking winner");
    return;
  }

  if (scores[0] === scores[1]) {
    showStatus("Scores cannot be tied");
    return;
  }

  lockedGenericMatches.add(matchId);
  const wasFinalized = finalizeGenericMatchIfOver(matchId);
  const outcome = getGenericOutcome(matchId);
  refreshGenericMatches();
  showStatus(
    wasFinalized
      ? matchControls.type === "swiss"
        ? getSwissOutcomeLabel(matchId, outcome, true)
        : `${outcome.winner} finalized`
      : matchControls.type === "swiss"
        ? `Prediction locked: ${getSwissOutcomeLabel(matchId, outcome)}`
        : `${outcome.winner} prediction locked`,
  );
  queueAutoSave();
}

function setActivePhase(panelId, announce = true) {
  phaseTabs.forEach((tab) => {
    tab.setAttribute(
      "aria-selected",
      String(tab.dataset.phaseTarget === panelId),
    );
  });

  phasePanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === panelId);
  });

  if (announce)
    showStatus(
      `${document.querySelector(`[data-phase-target="${panelId}"]`).textContent.trim()} active`,
    );

  if (panelId === "phase-swiss") scheduleSwissConnectors();
  scheduleBracketConnectors();
}

function readMatchState(matchControls) {
  return {
    teams: matchControls.selects.map((select) => select.value),
    scores: matchControls.scores.map((score) =>
      score.value === "" ? null : score.value,
    ),
  };
}

function getState() {
  const savedMatches = {};
  matches.forEach((match) => {
    savedMatches[match.id] = readMatchState(controls[match.id]);
  });

  const savedGenericMatches = {};
  Object.entries(genericControls).forEach(([id, matchControls]) => {
    savedGenericMatches[id] = readMatchState(matchControls);
  });

  return {
    version: 1,
    savedAt: new Date().toISOString(),
    activePhase:
      phasePanels.find((panel) => panel.classList.contains("active"))?.id ||
      "phase-playin",
    lockedMatches: [...lockedMatches],
    lockedGenericMatches: [...lockedGenericMatches],
    finalizedMatches: [...finalizedMatches],
    finalizedGenericMatches: [...finalizedGenericMatches],
    matches: savedMatches,
    genericMatches: savedGenericMatches,
  };
}

function applySavedMatch(matchControls, saved) {
  if (!matchControls || !saved) return;

  (saved.teams || []).forEach((team, index) => {
    const select = matchControls.selects[index];
    if (!select) return;
    const choices = teams.includes(team) ? teams : ["", team];
    setOptions(select, choices, team);
    setBadge(select.previousElementSibling, select.value);
  });

  (saved.scores || []).forEach((score, index) => {
    const input = matchControls.scores[index];
    if (input) input.value = score ?? "";
  });
}

function applyState(savedState) {
  if (!savedState || typeof savedState !== "object") return;

  const savedMatches = savedState.matches || {};
  const savedGenericMatches = savedState.genericMatches || {};

  lockedMatches.clear();
  lockedGenericMatches.clear();
  finalizedMatches.clear();
  finalizedGenericMatches.clear();

  Object.entries(savedMatches).forEach(([id, saved]) => {
    applySavedMatch(controls[id], saved);
  });

  Object.entries(savedGenericMatches).forEach(([id, saved]) => {
    applySavedMatch(genericControls[id], saved);
  });

  (savedState.lockedMatches || []).forEach((id) => {
    if (matchById[id]) lockedMatches.add(id);
  });

  (savedState.lockedGenericMatches || []).forEach((id) => {
    if (genericControls[id]) lockedGenericMatches.add(id);
  });

  (savedState.finalizedMatches || []).forEach((id) => {
    if (matchById[id]) {
      finalizedMatches.add(id);
      lockedMatches.add(id);
    }
  });

  (savedState.finalizedGenericMatches || []).forEach((id) => {
    if (genericControls[id]) {
      finalizedGenericMatches.add(id);
      lockedGenericMatches.add(id);
    }
  });

  refreshBracket();
  refreshGenericMatches();

  if (
    savedState.activePhase &&
    document.getElementById(savedState.activePhase)
  ) {
    setActivePhase(savedState.activePhase, false);
  }
}

async function loadState() {
  try {
    const response = await fetch("/api/state", {
      cache: "no-store",
    });
    if (!response.ok) {
      const message =
        (await response.json().catch(() => null))?.error ||
        "Saved state not available";
      throw new Error(message);
    }

    const savedState = await response.json();
    applyState(savedState);
    console.log("State loaded successfully from Supabase.");
    showStatus("Loaded saved bracket state");
  } catch (error) {
    console.error("Failed to load state from Supabase:", error);
    showStatus(error.message || "Using default schedule");
  }
}

async function writeStateToServer(state) {
  const response = await fetch("/api/state", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state, null, 2),
  });

  if (!response.ok) {
    const message =
      (await response.json().catch(() => null))?.error || "State API failed";
    throw new Error(message);
  }
}

async function saveState() {
  if (autoSaveTimer) {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = null;
  }

  const state = getState();

  try {
    await writeStateToServer(state);
    console.log("State saved successfully to Supabase.");
    showStatus(
      `Saved bracket state ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`,
    );
    return true;
  } catch (error) {
    console.error("Failed to save state to Supabase:", error);
    showStatus(error.message || "Save failed - use Save State to retry");
    return false;
  }
}

function showStatus(message) {
  status.textContent = message;
}

function queueAutoSave() {
  if (autoSaveTimer) clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    autoSaveTimer = null;
    saveState();
  }, autoSaveDelay);
}

renderTeamStrip();
matches.forEach(renderMatch);
renderSwissPhase();
renderPlayoffs();
refreshBracket();
scheduleBracketConnectors();
document.querySelectorAll(".bracket-wrap").forEach((wrap) => {
  wrap.addEventListener("scroll", scheduleBracketConnectors);
});
const swissBoard = document.querySelector(".swiss-board");
if (swissBoard) swissBoard.addEventListener("scroll", scheduleSwissConnectors);
loadState();

phaseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActivePhase(tab.dataset.phaseTarget);
    queueAutoSave();
  });
});
window.addEventListener("resize", () => {
  scheduleSwissConnectors();
  scheduleBracketConnectors();
});
document.getElementById("saveBtn").addEventListener("click", saveState);
