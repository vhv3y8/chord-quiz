import {
  matchChordNameToPitches,
  matchChordNameToImgLocation,
  matchChordNameToImgSourceLink,
  getChordNames,
} from "./constant.js";
import {
  questionTextElem,
  answerTextElem,
  answerImgElem,
  answerImgSourceLink,
  nextBtn,
  startOptions,
  quizMain,
} from "./ui.js";
import { getRandomInt } from "./helpers.js";

export class Quiz {
  constructor(
    options = {
      major: true,
      minor: true,
      7: true,
      m7: true,
      M7: true,
      mM7: true,
      hint: true,
    },
    problemIsChordName = true,
    preventDuplicateCount = 5
  ) {
    console.log(options);
    const showHint = options["hint"];
    console.log(showHint);
    const optionsChordType = {
      major: options["major"],
      minor: options["minor"],
      7: options["7"],
      m7: options["m7"],
      M7: options["M7"],
      mM7: options["mM7"],
    };
    console.log("optionsChordType: ", optionsChordType);

    // toggle from startOptions section to quizMain section
    startOptions.style.display = "none";
    quizMain.style.display = "block";

    // show or hide hint image based on given option
    if (showHint) {
      console.log("showHint is true.");
      document.getElementById("hintImg").style.display = "grid";
    } else {
      console.log("showHint is false.");
      document.getElementById("hintImg").style.display = "none";
    }

    // set instance field
    this.chordNames = getChordNames(optionsChordType);
    this.preventDuplicateCount = preventDuplicateCount;
    this.problemIsChordName = problemIsChordName;
    this.duplicateMatchingList = [];
    this.statusIsSolving = false;

    // set first problem
    this.#nextProblem();
    this.statusIsSolving = true;
  }

  clickedShowNextBtn() {
    if (this.statusIsSolving) {
      this.#showAnswer();
    } else {
      this.#nextProblem();
    }

    // toggle status
    this.statusIsSolving = !this.statusIsSolving;
  }

  #showAnswer() {
    // show answer UI
    this.#toggleAnswerUI();

    // toggle nextBtn class to change bg color
    nextBtn.classList.remove("showAnswer");
    nextBtn.classList.add("next");
    nextBtn.textContent = "다음으로";
  }

  #nextProblem() {
    const nextChordName = this.#pickChordName();
    const nextPitchNames = matchChordNameToPitches[nextChordName];
    // const nextAnswerImgLocation = matchChordNameToImgLocation[nextChordName];
    const nextAnswerImgLink = matchChordNameToImgSourceLink[nextChordName];
    console.log("nextPitchNames: ", nextPitchNames);

    // set UI
    if (this.problemIsChordName) {
      questionTextElem.textContent = nextChordName;
      answerTextElem.textContent = nextPitchNames.join(" - ");
    } else {
      questionTextElem.textContent = nextPitchNames.join(" - ");
      answerTextElem.textContent = nextChordName;
    }
    answerImgElem.src = nextAnswerImgLink;
    answerImgSourceLink.href = nextAnswerImgLink;
    answerImgSourceLink.textContent = nextAnswerImgLink;

    // hide answer UI
    this.#toggleAnswerUI();

    // toggle nextBtn class to change bg color
    nextBtn.classList.remove("next");
    nextBtn.classList.add("showAnswer");
    nextBtn.textContent = "정답보기";
  }

  #toggleAnswerUI() {
    if (this.statusIsSolving) {
      // show answer
      answerTextElem.style.display = "block";
      answerImgElem.style.display = "block";
      answerImgSourceLink.style.display = "block";
    } else {
      // hide answer
      answerTextElem.style.display = "none";
      answerImgElem.style.display = "none";
      answerImgSourceLink.style.display = "none";
    }
  }

  #pickChordName() {
    console.log(`chordNames:`, this.chordNames);

    let picked = this.chordNames[getRandomInt(0, this.chordNames.length - 1)];
    console.log(`picked: ${picked}`);

    while (this.duplicateMatchingList.includes(picked)) {
      picked = this.chordNames[getRandomInt(0, this.chordNames.length - 1)];
      console.log(`picked: ${picked}`);
    }

    if (this.duplicateMatchingList.length === this.preventDuplicateCount) {
      this.duplicateMatchingList.shift();
    }
    this.duplicateMatchingList.push(picked);

    return picked;
  }

  //

  // static options;
  // static prevCount = 5;
  // static prevChordNames = [];
  // static statusIsAnswerHidden = false;
  // static chordNamesList = [];

  // static createChordNamesList() {
  //   console.log("wtf");
  //   const chordTypeArr = [];

  //   for (const type of chordTypes) {
  //     if (this.options[type] && type !== "hint") {
  //       console.log(`type is ${type}`);
  //       chordTypeArr.push(chordTypesToPostFix[type]);
  //     }
  //   }

  //   console.log(chordTypeArr);

  //   for (const pitch of pitchNames) {
  //     for (const type of chordTypeArr) {
  //       this.chordNamesList.push(`${pitch}${type}`);
  //     }
  //   }
  //   console.log(this.chordNamesList);
  // }

  // static showAnswer() {
  //   console.log("showAnswer");
  //   // change text
  //   // change ui
  //   answerTextElem.style.display = "block";
  //   answerTextElem.style.display = "block";
  //   answerImgElem.style.display = "block";
  // }

  // static next() {
  //   console.log("next");
  //   // change text
  //   const nextChord = this.#getRandomChord();
  //   console.log(nextChord);
  //   questionTextElem.textContent = nextChord;
  //   answerTextElem.textContent = chordToPitchNames[nextChord].join(" - ");
  //   answerImgElem.src = chordToImgLocation[nextChord];
  //   // change ui
  //   answerTextElem.style.display = "none";
  //   answerTextElem.style.display = "none";
  //   answerImgElem.style.display = "none";
  // }
}
