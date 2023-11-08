import { Quiz } from "./help.js";

const startBtn = document.getElementById("startBtn");
const startOptions = document.getElementById("startOptions");
const quizMain = document.getElementById("quizMain");
const nextBtn = document.getElementById("next");

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
  Quiz.options = options;
  Quiz.createChordNamesList();

  if (Quiz.statusIsAnswerHidden) {
    Quiz.showAnswer();
    Quiz.statusIsAnswerHidden = !Quiz.statusIsAnswerHidden;
  } else {
    Quiz.next();
    Quiz.statusIsAnswerHidden = !Quiz.statusIsAnswerHidden;
  }

  // switch ui
  startOptions.style.display = "none";
  quizMain.style.display = "block";
});

nextBtn.addEventListener("click", (e) => {
  if (Quiz.statusIsAnswerHidden) {
    Quiz.showAnswer();
    Quiz.statusIsAnswerHidden = !Quiz.statusIsAnswerHidden;
  } else {
    Quiz.next();
    Quiz.statusIsAnswerHidden = !Quiz.statusIsAnswerHidden;
  }

  console.log(nextBtn.classList);
  if (nextBtn.classList.contains("showAnswer")) {
    nextBtn.classList.remove("showAnswer");
    nextBtn.classList.add("next");
    console.log("contains showAnswer");
  } else if (nextBtn.classList.contains("next")) {
    nextBtn.classList.remove("next");
    nextBtn.classList.add("showAnswer");
    console.log("contains next");
  }
});
