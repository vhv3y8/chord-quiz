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

let text = "";

for (const pitch of pitchNames) {
  for (const chordType of chordTypes) {
    // C: `${this.imgLocationBase}/C/c.png`,
    let curr = `\"${pitch}${chordType}\": \`\$\{this.imgLocationBase\}/${pitch}/${pitch.toLowerCase()}`;
    if (chordType === "M7") {
      curr += "maj7";
    } else if (chordType === "mM7") {
      curr += "minmaj7";
    } else {
      curr += chordType;
    }
    curr += ".png`,\n";
    text += curr;
  }
  text += "\n";
}

// console.log(text);

fs.writeFile("./out_chord_image_link.txt", text, (err) => {
  if (err) {
    console.error(err);
  }
});
