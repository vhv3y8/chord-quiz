const fs = require("fs");

let out = "";
// ex. C: "https://www.pianochord.org/c.html"

const prefix = "https://www.pianochord.org/";
const postfix = ".html";

const pitches = ["C", "D", "E", "F", "G", "A", "B"];

const hasSharp = ["C", "D", "F", "G", "A"];
const hasFlat = ["D", "E", "G", "A", "B"];

const chordTypes = ["major", "minor", "7", "m7", "M7", "mM7"];
const matchChordTypeToTitle = {
  major: "",
  minor: "m",
  7: "7",
  m7: "m7",
  M7: "M7",
  mM7: "mM7",
};
const matchChordTypeToText = {
  major: "",
  minor: "m",
  7: "7",
  m7: "m7",
  M7: "maj7",
  mM7: "minmaj7",
};

// ex. C#: "https://www.pianochord.org/c-sharp-major.html",
for (const pitch of pitches) {
  for (const chordType of chordTypes) {
    // natural
    out += `\"${pitch}${
      matchChordTypeToTitle[chordType]
    }\": \"${prefix}${pitch.toLowerCase()}${
      chordType === "major" ? "-major" : matchChordTypeToText[chordType]
    }${postfix}\",\n`;

    // sharp
    if (hasSharp.includes(pitch)) {
      out += `\"${pitch}#${
        matchChordTypeToTitle[chordType]
      }\": \"${prefix}${pitch.toLowerCase()}${
        matchChordTypeToText[chordType]
      }-sharp${chordType === "major" ? "-major" : ""}${postfix}\",\n`;
    }

    // flat
    if (hasFlat.includes(pitch)) {
      out += `\"${pitch}b${
        matchChordTypeToTitle[chordType]
      }\": \"${prefix}${pitch.toLowerCase()}${
        matchChordTypeToText[chordType]
      }-flat${chordType === "major" ? "-major" : ""}${postfix}\",\n`;
    }
  }
}

fs.writeFile("./out_chord_names_to_link_text.txt", out, (err) => {
  if (err) {
    console.error(err);
  }
});
