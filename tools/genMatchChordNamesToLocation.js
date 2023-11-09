const fs = require("fs");

let out = "";
// ex. C#mM7: "../assets/chord/DbmM7.png"

const prefix = "../assets/chord/";
const postfix = ".png";

const pitches = [
  "C",
  "C#",
  "Db",
  "D",
  "D#",
  "Eb",
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

const naturalPitches = ["C", "D", "E", "F", "G", "A", "B"];

// ex. "C#mM7": "../assets/chord/DbmM7.png",
for (const pitch of pitches) {
  for (const chordType of chordTypes) {
    out += `\"${pitch}${matchChordTypeToText[chordType]}\": \"${prefix}`;

    if (pitch.endsWith("#")) {
      // ex. C# is converted to Db
      let natural = pitch[0];
      out += `${naturalPitches[naturalPitches.indexOf(natural) + 1]}b`;
    } else {
      out += `${pitch}`;
    }
    out += `${matchChordTypeToText[chordType]}${postfix}\",\n`;
  }
}

fs.writeFile("./out_chord_names_to_img_location.txt", out, (err) => {
  if (err) {
    console.error(err);
  }
});
