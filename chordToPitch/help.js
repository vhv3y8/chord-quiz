import {
  pitchNames,
  chordTypes,
  chordToPitchNames,
  chordToImgLocation,
  chordsToInclude,
  chordTypesToPostFix,
} from "./constant.js";
import { questionTextElem, answerTextElem, answerImgElem } from "./ui.js";

class Quiz {
  static options;
  static prevCount = 5;
  static prevChordNames = [];
  static statusIsAnswerHidden = false;
  static chordNamesList = [];

  static createChordNamesList() {
    console.log("wtf");
    const chordTypeArr = [];

    for (const type of chordTypes) {
      if (this.options[type] && type !== "hint") {
        console.log(`type is ${type}`);
        chordTypeArr.push(chordTypesToPostFix[type]);
      }
    }

    console.log(chordTypeArr);

    for (const pitch of pitchNames) {
      for (const type of chordTypeArr) {
        this.chordNamesList.push(`${pitch}${type}`);
      }
    }
    console.log(this.chordNamesList);
  }

  static #getRandomChord() {
    console.log(this.chordNamesList);
    let picked =
      this.chordNamesList[getRandomInt(0, this.chordNamesList.length - 1)];
    console.log(picked);
    while (this.prevChordNames.includes(picked)) {
      picked =
        this.chordNamesList[getRandomInt(0, this.chordNamesList.length - 1)];
      console.log(picked);
    }
    // let picked;
    // do {
    //   picked =
    //     this.chordNamesList[getRandomInt(0, this.chordNamesList.length - 1)];
    // } while (this.prevChordNames.includes(picked));

    if (this.prevChordNames.length === this.prevCount) {
      this.prevChordNames.shift();
      this.prevChordNames.push(picked);
    }

    return picked;
  }

  static showAnswer() {
    console.log("showAnswer");
    // change text
    // change ui
    answerTextElem.style.display = "block";
    answerTextElem.style.display = "block";
    answerImgElem.style.display = "block";
  }

  static next() {
    console.log("next");
    // change text
    const nextChord = this.#getRandomChord();
    console.log(nextChord);
    questionTextElem.textContent = nextChord;
    answerTextElem.textContent = chordToPitchNames[nextChord].join(" - ");
    answerImgElem.src = chordToImgLocation[nextChord];
    // change ui
    answerTextElem.style.display = "none";
    answerTextElem.style.display = "none";
    answerImgElem.style.display = "none";
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export { Quiz };
