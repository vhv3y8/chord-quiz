import { Quiz } from "./Quiz.js";
import { nextBtn } from "./ui.js";

const startBtn = document.getElementById("startBtn");
let quiz;
let problemIsChordName = true;

startBtn.addEventListener("click", (e) => {
  quiz = new Quiz(getOptions(), problemIsChordName);

  nextBtn.addEventListener("click", (e) => {
    quiz.clickedShowNextBtn();
  });
});

document.addEventListener("DOMContentLoaded", (e) => {
  // set problemIsChordName from query string
  let params = Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  );
  if (params.problem === "chordtopitch") {
    problemIsChordName = true;
  } else if (params.problem === "pitchtochord") {
    problemIsChordName = false;
  }
});

function getOptions() {
  return {
    major: document.getElementById("major").checked,
    minor: document.getElementById("minor").checked,
    7: document.getElementById("7").checked,
    m7: document.getElementById("m7").checked,
    M7: document.getElementById("M7").checked,
    mM7: document.getElementById("mM7").checked,
    hint: document.getElementById("hint").checked,
  };
}
