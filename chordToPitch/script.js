import {
  chordToPitchNames,
  chordToImgLocation,
  chordsToInclude,
} from "./constant.js";

function start(options) {
  console.log(options);
}

const startBtn = document.getElementById("startBtn");
const startOptions = document.getElementById("startOptions");
const quizMain = document.getElementById("quizMain");

startBtn.addEventListener("click", (e) => {
  // get options
  let options = {
    major: document.getElementById("major").checked,
    minor: document.getElementById("minor").checked,
    7: document.getElementById("7").checked,
    m7: document.getElementById("m7").checked,
    M7: document.getElementById("M7").checked,
    mM7: document.getElementById("mM7").checked,
    hint: document.getElementById("hint").checked,
  };
  // start
  start(options);

  // switch ui
  startOptions.style.display = "none";
  quizMain.style.display = "block";
});

class Quiz {}
