const fs = require("fs");

// TODO:
// 1. 코드 이름이 플랫
// 2. 음이름이 플랫 (음정으로 계산할 때 삽이 아니라 플랫 와야할 때)

let text = "";

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

const pitchAlphabets = ["C", "D", "E", "F", "G", "A", "B"];

const chordTypes = ["major", "minor", "7", "m7", "M7", "mM7"];

const chordTypeToIntervalsArray = {
  major: [4, 3],
  minor: [3, 4],
  7: [4, 3, 3],
  m7: [3, 4, 3],
  M7: [4, 3, 4],
  mM7: [3, 4, 4],
};

const chordTypeAddText = {
  major: "",
  minor: "m",
  7: "7",
  m7: "m7",
  M7: "M7",
  mM7: "mM7",
};

function generatePitchNamesArrayText(pitch, chordType) {
  // ex: "C", "E", "G"
  let curr = `\"${pitch}\", `;
  let pitchIdxNow = pitchNames.indexOf(pitch);
  let intervalArr = chordTypeToIntervalsArray[chordType];

  for (let i = 0; i < intervalArr.length; i++) {
    pitchIdxNow = (pitchIdxNow + intervalArr[i]) % 12;
    let currPitch = pitchNames[pitchIdxNow];
    curr += `"${currPitch}"`;
    if (i !== intervalArr.length - 1) {
      curr += ", ";
    }
  }

  return curr;
}

// ex: "C": ["C", "E", "G"],

for (const pitch of pitchNames) {
  for (const chordType of chordTypes) {
    text += `\"${pitch}${
      chordTypeAddText[chordType]
    }\": [${generatePitchNamesArrayText(pitch, chordType)}],\n`;
  }
  text += "\n";
}

// console.log(text);

// [
//   ["C#", "m7"],
//   ["A", "7"],
//   ["G#", "mM7"],
// ].forEach(([pitch, chordType]) => {
//   // console.log(`${pitch}/${chordType}`);
//   console.log(generatePitchNamesArrayText(pitch, chordType));
// });

fs.writeFile("./out_chord_pitch_names.txt", text, (err) => {
  if (err) {
    console.error(err);
  }
});
