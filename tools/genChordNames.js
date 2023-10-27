const fs = require("fs");

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

const chordTypes = ["", "m", "7", "m7", "M7", "mM7"];

let text = "[";

for (const pitch of pitchNames) {
  for (const chordType of chordTypes) {
    text += `\"${pitch}${chordType}\", `;
  }
  text += "\n";
}

text += "];";

// console.log(text);

fs.writeFile("./out_chord_names_array.txt", text, (err) => {
  if (err) {
    console.error(err);
  }
});
