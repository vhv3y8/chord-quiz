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
  let params = new URLSearchParams(window.location.search);
  let paramObj = Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  );

  if (paramObj.problem === "pitchtochord") {
    problemIsChordName = false;
  } else {
    params.set("problem", "chordtopitch");
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
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
