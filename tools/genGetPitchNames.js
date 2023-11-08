const fs = require("fs");

let out = "";
// ex. C#mM7: ["C#", "E", "G#", "C"]

const pitches = [
  "C",
  "C#",
  "Db",
  "D",
  "D#",
  "Eb",
  "E",
  "F",
  "F#",
  "Gb",
  "G",
  "G#",
  "Ab",
  "A",
  "A#",
  "Bb",
  "B",
];
const chordTypes = ["major", "minor", "7", "m7", "M7", "mM7"];

const matchChordTypeToText = {
  major: "",
  minor: "m",
  7: "7",
  m7: "m7",
  M7: "M7",
  mM7: "mM7",
};

const matchChordTypeToIntervals = {
  major: [4, 3],
  minor: [3, 4],
  7: [4, 3, 3],
  m7: [3, 4, 3],
  M7: [4, 3, 4],
  mM7: [3, 4, 4],
};

const match12IndexToPitches = {
  0: ["C"],
  1: ["C#", "Db"],
  2: ["D"],
  3: ["D#", "Eb"],
  4: ["E"],
  5: ["F"],
  6: ["F#", "Gb"],
  7: ["G"],
  8: ["G#", "Ab"],
  9: ["A"],
  10: ["A#", "Bb"],
  11: ["B"],
};
const matchPitchTo12Index = {
  C: 0,
  "C#": 1,
  Db: 1,
  D: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  F: 5,
  "F#": 6,
  Gb: 6,
  G: 7,
  "G#": 8,
  Ab: 8,
  A: 9,
  "A#": 10,
  Bb: 10,
  B: 11,
};

const matchNaturalPitchTo7Index = {
  C: 0,
  D: 1,
  E: 2,
  F: 3,
  G: 4,
  A: 5,
  B: 6,
};
const match7IndexToNaturalPitch = {
  0: "C",
  1: "D",
  2: "E",
  3: "F",
  4: "G",
  5: "A",
  6: "B",
};

// add each line by line
// ex. `C#mM7: ["C#", "E", "G#", "C"],`
for (const pitch of pitches) {
  for (const chordType of chordTypes) {
    let intervals = matchChordTypeToIntervals[chordType];

    out += `\"${pitch}${matchChordTypeToText[chordType]}\": [`;

    let pitchIndex = matchPitchTo12Index[pitch];
    let natural = pitch[0];

    // Add First pitch
    filteredWithSameNatural = match12IndexToPitches[pitchIndex].filter((str) =>
      str.startsWith(natural)
    );
    if (0 < filteredWithSameNatural.length) {
      // has pitch name with same natural as expected. so use it.
      out += `\"${filteredWithSameNatural[0]}\", `;
    } else {
      // has only 1 pitch name, E, F, B, C.
      // which doesnt match the expected natural, but have to use it.
      out += `\"${match12IndexToPitches[pitchIndex]}\", `;
    }

    // Add Second to Last pitch
    for (let i = 0; i < intervals.length; i++) {
      pitchIndex = (pitchIndex + intervals[i]) % 12;
      natural =
        match7IndexToNaturalPitch[(matchNaturalPitchTo7Index[natural] + 2) % 7];

      let filteredWithSameNatural = match12IndexToPitches[pitchIndex].filter(
        (str) => str.startsWith(natural)
      );
      if (0 < filteredWithSameNatural.length) {
        out += `\"${filteredWithSameNatural[0]}\"`;
      } else {
        out += `\"${match12IndexToPitches[pitchIndex]}\"`;
      }

      // it not last pitch name, add ", "
      if (i < intervals.length - 1) {
        out += `, `;
      }
    }
    out += "],\n";
  }
}

fs.writeFile("./out_get_pitch_names.txt", out, (err) => {
  if (err) {
    console.error(err);
  }
});
