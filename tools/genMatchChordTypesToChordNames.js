const fs = require("fs");

let out = "";

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

for (const chordType of chordTypes) {
  out += `${chordType}: [`;
  for (const pitch of pitches) {
    // "C#mM7",
    out += `\"${pitch}${matchChordTypeToText[chordType]}\", `;
  }
  out += "],\n";
}

fs.writeFile("./out_chord_types_to_chord_names.txt", out, (err) => {
  if (err) {
    console.error(err);
  }
});
