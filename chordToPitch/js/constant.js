const chordNames = [
  // created by /tools/genChordNames.js
  "C",
  "Cm",
  "C7",
  "Cm7",
  "CM7",
  "CmM7",
  "C#",
  "C#m",
  "C#7",
  "C#m7",
  "C#M7",
  "C#mM7",
  "D",
  "Dm",
  "D7",
  "Dm7",
  "DM7",
  "DmM7",
  "D#",
  "D#m",
  "D#7",
  "D#m7",
  "D#M7",
  "D#mM7",
  "E",
  "Em",
  "E7",
  "Em7",
  "EM7",
  "EmM7",
  "F",
  "Fm",
  "F7",
  "Fm7",
  "FM7",
  "FmM7",
  "F#",
  "F#m",
  "F#7",
  "F#m7",
  "F#M7",
  "F#mM7",
  "G",
  "Gm",
  "G7",
  "Gm7",
  "GM7",
  "GmM7",
  "G#",
  "G#m",
  "G#7",
  "G#m7",
  "G#M7",
  "G#mM7",
  "A",
  "Am",
  "A7",
  "Am7",
  "AM7",
  "AmM7",
  "A#",
  "A#m",
  "A#7",
  "A#m7",
  "A#M7",
  "A#mM7",
  "B",
  "Bm",
  "B7",
  "Bm7",
  "BM7",
  "BmM7",
];

const pitchNames = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const chordTypes = ["major", "minor", "7", "m7", "M7", "mM7"];

const chordTypesToPostFix = {
  major: "",
  minor: "m",
  7: "7",
  m7: "m7",
  M7: "M7",
  mM7: "mM7",
};

const chordToPitchNames = {
  // created by /tools/genChordToPitchNamesText.js
  C: ["C", "E", "G"],
  Cm: ["C", "D#", "G"],
  C7: ["C", "E", "G", "A#"],
  Cm7: ["C", "D#", "G", "A#"],
  CM7: ["C", "E", "G", "B"],
  CmM7: ["C", "D#", "G", "B"],

  "C#": ["C#", "F", "G#"],
  "C#m": ["C#", "E", "G#"],
  "C#7": ["C#", "F", "G#", "B"],
  "C#m7": ["C#", "E", "G#", "B"],
  "C#M7": ["C#", "F", "G#", "C"],
  "C#mM7": ["C#", "E", "G#", "C"],

  D: ["D", "F#", "A"],
  Dm: ["D", "F", "A"],
  D7: ["D", "F#", "A", "C"],
  Dm7: ["D", "F", "A", "C"],
  DM7: ["D", "F#", "A", "C#"],
  DmM7: ["D", "F", "A", "C#"],

  "D#": ["D#", "G", "A#"],
  "D#m": ["D#", "F#", "A#"],
  "D#7": ["D#", "G", "A#", "C#"],
  "D#m7": ["D#", "F#", "A#", "C#"],
  "D#M7": ["D#", "G", "A#", "D"],
  "D#mM7": ["D#", "F#", "A#", "D"],

  E: ["E", "G#", "B"],
  Em: ["E", "G", "B"],
  E7: ["E", "G#", "B", "D"],
  Em7: ["E", "G", "B", "D"],
  EM7: ["E", "G#", "B", "D#"],
  EmM7: ["E", "G", "B", "D#"],

  F: ["F", "A", "C"],
  Fm: ["F", "G#", "C"],
  F7: ["F", "A", "C", "D#"],
  Fm7: ["F", "G#", "C", "D#"],
  FM7: ["F", "A", "C", "E"],
  FmM7: ["F", "G#", "C", "E"],

  "F#": ["F#", "A#", "C#"],
  "F#m": ["F#", "A", "C#"],
  "F#7": ["F#", "A#", "C#", "E"],
  "F#m7": ["F#", "A", "C#", "E"],
  "F#M7": ["F#", "A#", "C#", "F"],
  "F#mM7": ["F#", "A", "C#", "F"],

  G: ["G", "B", "D"],
  Gm: ["G", "A#", "D"],
  G7: ["G", "B", "D", "F"],
  Gm7: ["G", "A#", "D", "F"],
  GM7: ["G", "B", "D", "F#"],
  GmM7: ["G", "A#", "D", "F#"],

  "G#": ["G#", "C", "D#"],
  "G#m": ["G#", "B", "D#"],
  "G#7": ["G#", "C", "D#", "F#"],
  "G#m7": ["G#", "B", "D#", "F#"],
  "G#M7": ["G#", "C", "D#", "G"],
  "G#mM7": ["G#", "B", "D#", "G"],

  A: ["A", "C#", "E"],
  Am: ["A", "C", "E"],
  A7: ["A", "C#", "E", "G"],
  Am7: ["A", "C", "E", "G"],
  AM7: ["A", "C#", "E", "G#"],
  AmM7: ["A", "C", "E", "G#"],

  "A#": ["A#", "D", "F"],
  "A#m": ["A#", "C#", "F"],
  "A#7": ["A#", "D", "F", "G#"],
  "A#m7": ["A#", "C#", "F", "G#"],
  "A#M7": ["A#", "D", "F", "A"],
  "A#mM7": ["A#", "C#", "F", "A"],

  B: ["B", "D#", "F#"],
  Bm: ["B", "D", "F#"],
  B7: ["B", "D#", "F#", "A"],
  Bm7: ["B", "D", "F#", "A"],
  BM7: ["B", "D#", "F#", "A#"],
  BmM7: ["B", "D", "F#", "A#"],
};

const imgLocationBase = "/assets/chord";

const chordToImgLocation = {
  // created by /tools/genChordToImageLinkText.js
  C: `${imgLocationBase}/C/c.png`,
  Cm: `${imgLocationBase}/C/cm.png`,
  C7: `${imgLocationBase}/C/c7.png`,
  Cm7: `${imgLocationBase}/C/cm7.png`,
  CM7: `${imgLocationBase}/C/cmaj7.png`,
  CmM7: `${imgLocationBase}/C/cminmaj7.png`,

  "C#": `${imgLocationBase}/C#/c#.png`,
  "C#m": `${imgLocationBase}/C#/c#m.png`,
  "C#7": `${imgLocationBase}/C#/c#7.png`,
  "C#m7": `${imgLocationBase}/C#/c#m7.png`,
  "C#M7": `${imgLocationBase}/C#/c#maj7.png`,
  "C#mM7": `${imgLocationBase}/C#/c#minmaj7.png`,

  D: `${imgLocationBase}/D/d.png`,
  Dm: `${imgLocationBase}/D/dm.png`,
  D7: `${imgLocationBase}/D/d7.png`,
  Dm7: `${imgLocationBase}/D/dm7.png`,
  DM7: `${imgLocationBase}/D/dmaj7.png`,
  DmM7: `${imgLocationBase}/D/dminmaj7.png`,

  "D#": `${imgLocationBase}/D#/d#.png`,
  "D#m": `${imgLocationBase}/D#/d#m.png`,
  "D#7": `${imgLocationBase}/D#/d#7.png`,
  "D#m7": `${imgLocationBase}/D#/d#m7.png`,
  "D#M7": `${imgLocationBase}/D#/d#maj7.png`,
  "D#mM7": `${imgLocationBase}/D#/d#minmaj7.png`,

  E: `${imgLocationBase}/E/e.png`,
  Em: `${imgLocationBase}/E/em.png`,
  E7: `${imgLocationBase}/E/e7.png`,
  Em7: `${imgLocationBase}/E/em7.png`,
  EM7: `${imgLocationBase}/E/emaj7.png`,
  EmM7: `${imgLocationBase}/E/eminmaj7.png`,

  F: `${imgLocationBase}/F/f.png`,
  Fm: `${imgLocationBase}/F/fm.png`,
  F7: `${imgLocationBase}/F/f7.png`,
  Fm7: `${imgLocationBase}/F/fm7.png`,
  FM7: `${imgLocationBase}/F/fmaj7.png`,
  FmM7: `${imgLocationBase}/F/fminmaj7.png`,

  "F#": `${imgLocationBase}/F#/f#.png`,
  "F#m": `${imgLocationBase}/F#/f#m.png`,
  "F#7": `${imgLocationBase}/F#/f#7.png`,
  "F#m7": `${imgLocationBase}/F#/f#m7.png`,
  "F#M7": `${imgLocationBase}/F#/f#maj7.png`,
  "F#mM7": `${imgLocationBase}/F#/f#minmaj7.png`,

  G: `${imgLocationBase}/G/g.png`,
  Gm: `${imgLocationBase}/G/gm.png`,
  G7: `${imgLocationBase}/G/g7.png`,
  Gm7: `${imgLocationBase}/G/gm7.png`,
  GM7: `${imgLocationBase}/G/gmaj7.png`,
  GmM7: `${imgLocationBase}/G/gminmaj7.png`,

  "G#": `${imgLocationBase}/G#/g#.png`,
  "G#m": `${imgLocationBase}/G#/g#m.png`,
  "G#7": `${imgLocationBase}/G#/g#7.png`,
  "G#m7": `${imgLocationBase}/G#/g#m7.png`,
  "G#M7": `${imgLocationBase}/G#/g#maj7.png`,
  "G#mM7": `${imgLocationBase}/G#/g#minmaj7.png`,

  A: `${imgLocationBase}/A/a.png`,
  Am: `${imgLocationBase}/A/am.png`,
  A7: `${imgLocationBase}/A/a7.png`,
  Am7: `${imgLocationBase}/A/am7.png`,
  AM7: `${imgLocationBase}/A/amaj7.png`,
  AmM7: `${imgLocationBase}/A/aminmaj7.png`,

  "A#": `${imgLocationBase}/A#/a#.png`,
  "A#m": `${imgLocationBase}/A#/a#m.png`,
  "A#7": `${imgLocationBase}/A#/a#7.png`,
  "A#m7": `${imgLocationBase}/A#/a#m7.png`,
  "A#M7": `${imgLocationBase}/A#/a#maj7.png`,
  "A#mM7": `${imgLocationBase}/A#/a#minmaj7.png`,

  B: `${imgLocationBase}/B/b.png`,
  Bm: `${imgLocationBase}/B/bm.png`,
  B7: `${imgLocationBase}/B/b7.png`,
  Bm7: `${imgLocationBase}/B/bm7.png`,
  BM7: `${imgLocationBase}/B/bmaj7.png`,
  BmM7: `${imgLocationBase}/B/bminmaj7.png`,
};

const chordsToInclude = {
  major: true,
  minor: true,
  7: true,
  m7: true,
  M7: true,
  mM7: true,
};

const chordNamesToLinkText = {};

export {
  pitchNames,
  chordTypes,
  chordToPitchNames,
  chordToImgLocation,
  chordsToInclude,
  chordTypesToPostFix,
};