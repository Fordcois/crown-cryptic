"use client";
import { useState, useEffect } from "react";
import LetterSquare from "@/components/LetterSquare";
import Keyboard from "@/components/keyboard";
import PuzzleSolvedPopUp from "@/components/PuzzleSolvedPopUp";
import data from "@/resources/questionData.json";

const CrownCryptic = () => {

  const startDate = new Date(2024, 6, 28);
  const todaysDate = new Date();
  const daysElapsed = Math.floor((todaysDate - startDate) / 86400000);

  const dayPuzzleData = data[daysElapsed];
  const question = dayPuzzleData.clue;
  const definition = dayPuzzleData.definition;
  const CorrectAnswer = dayPuzzleData.answer;

  const answerLength = CorrectAnswer.split("").length;

  const [currentSelectedSquare, setcurrentSelectedSquare] = useState(0);
  const [userGuessArray, setuserGuessArray] = useState(Array(answerLength));
  const [showDefinition, setshowDefinition] = useState(false);
  const [indexesGivenAsHint, setindexesGivenAsHint] = useState([]);
  const [puzzleSolved, setpuzzleSolved] = useState(false);
  const [emojiResults, setemojiResults] = useState("");


  const checkDays = () => {

    const storedDaysElapsed = localStorage.getItem("storedDaysElapsed");
    if (storedDaysElapsed) {

      if (Number(storedDaysElapsed) === daysElapsed) {
        const storedUserGuessArray = localStorage.getItem("storedUserGuessArray");

        if (storedUserGuessArray) {
          setuserGuessArray(storedUserGuessArray.split(","));
        };

        const storedIndexesGivenAsHint = localStorage.getItem("storedIndexesGivenAsHint");
        if (storedIndexesGivenAsHint) {
          setindexesGivenAsHint(storedIndexesGivenAsHint.split(",").map(Number));
        };

        setshowDefinition(localStorage.getItem("storedShowDefinition") == "true" ? true : false);

        setpuzzleSolved(localStorage.getItem("storedPuzzleSolved") == "true" ? true : false);

        setemojiResults(localStorage.getItem("storedEmojiResults"));

      } else {
        localStorage.clear();
        localStorage.setItem("storedDaysElapsed", daysElapsed);
      };

    } else {
      localStorage.setItem("storedDaysElapsed", daysElapsed);
      localStorage.setItem("storedUserGuessArray", userGuessArray);
      localStorage.setItem("storedShowDefinition", showDefinition);
      localStorage.setItem("storedIndexesGivenAsHint", indexesGivenAsHint);
      localStorage.setItem("storedPuzzleSolved", puzzleSolved);
      localStorage.setItem("storedEmojiResults", emojiResults);
    };
  };


  useEffect(() => {
    checkDays();
  }, []);


  const moveCurrentSelectedSquareBy = (movement) => {
    let potentialNewSquare = currentSelectedSquare + movement;
    if (potentialNewSquare >= 0 && potentialNewSquare < answerLength) {
      if (!indexesGivenAsHint.includes(potentialNewSquare)) {
        setcurrentSelectedSquare(potentialNewSquare);
      } else {
        moveCurrentSelectedSquareBy((movement += Math.sign(movement)));
      }
    }
  };

  const setUserGuessArrayIndexToLetter = (letter) => {
    if (!indexesGivenAsHint.includes(currentSelectedSquare)) {
      let newArray = [...userGuessArray];
      newArray[currentSelectedSquare] = letter;
      setuserGuessArray(newArray);
      localStorage.setItem("storedUserGuessArray", newArray);
    }
    moveCurrentSelectedSquareBy(letter === "" ? -1 : +1);
  };

  const getDefinition = () => {
    setshowDefinition(true);
    localStorage.setItem("storedShowDefinition", true);
  };

  const seperateDefinitionFromQuestion = () => {
    const defFirstIndex = question.indexOf(definition);
    const defLastIndex = defFirstIndex + definition.length;
    return [
      question.slice(0, defFirstIndex),
      question.slice(defFirstIndex, defLastIndex),
      question.slice(defLastIndex),
    ];
  };
  const [questionPreDef, questionDef, questionPostDef] =
    seperateDefinitionFromQuestion();

  const revealSelectedLetterAsHint = () => {
    if (!indexesGivenAsHint.includes(currentSelectedSquare)) {
      let newIndexesGivenAsHint = [...indexesGivenAsHint];
      newIndexesGivenAsHint.push(currentSelectedSquare);
      setUserGuessArrayIndexToLetter(CorrectAnswer[currentSelectedSquare]);
      setindexesGivenAsHint(newIndexesGivenAsHint);
      localStorage.setItem("storedIndexesGivenAsHint", newIndexesGivenAsHint);
    }
  };

  const selectLetterSquare = (index) => {
    if (!indexesGivenAsHint.includes(index)) {
      setcurrentSelectedSquare(index);
    }
  };

  const checksGuessIsCorrect = () => {
    if (userGuessArray.join("") === CorrectAnswer) {
      captureResults();
      setpuzzleSolved(true);
      localStorage.setItem("storedPuzzleSolved", true);
    }
  };

  const captureResults = () => {
    let emojiString = "";
    for (let i = 0; i < answerLength; i++) {
      if (indexesGivenAsHint.includes(i)) {
        emojiString += "🟨";
      } else if (showDefinition === false) {
        emojiString += "🟩";
      } else {
        emojiString += "🟦";
      }
    }
    setemojiResults(emojiString);
    localStorage.setItem("storedEmojiResults", emojiString);
  };

  const clearGuess = () => {
    let clearedGuesses = [];
    let firstEmptyIndex = answerLength - 1;
    for (let i = 0; i < answerLength; i++) {
      if (!indexesGivenAsHint.includes(i) && firstEmptyIndex > i) {
        firstEmptyIndex = i;
      }
      if (indexesGivenAsHint.includes(i)) {
        clearedGuesses.push(userGuessArray[i]);
      } else {
        clearedGuesses.push("");
      }
    }
    setuserGuessArray(clearedGuesses);
    localStorage.setItem("storedUserGuessArray", clearedGuesses);
    setcurrentSelectedSquare(firstEmptyIndex);
  };


  return (
    <div>
      {puzzleSolved && (
        <PuzzleSolvedPopUp
          ClueUsed={showDefinition}
          letterHintsGiven={indexesGivenAsHint.length}
          emojiResults={emojiResults}
        />
      )}
      <b>Question:</b>
      <br />
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <span>{questionPreDef}</span>
        <span className={showDefinition ? "RevealedDefinition" : ""}>
          {questionDef}
        </span>
        <span>{questionPostDef}</span>
      </div>
      <b>Correct Answer:</b> {CorrectAnswer}
      <br />
      <b>Puzzle Solved:</b> {puzzleSolved.toString()}
      <br />
      <b>Answer Length:</b> {answerLength}
      <br />
      <b>Current Selected Index:</b> {currentSelectedSquare}
      <br />
      <b>indexes Given As Hint:</b> {indexesGivenAsHint.toString()}
      <br />
      <div className="LetterContainer">
        {Array.from({ length: answerLength }).map((_, index) => (
          <span
            key={index}
            onClick={() => {
              selectLetterSquare(index);
            }}
          >
            <LetterSquare
              currentLetter={userGuessArray[index]}
              currentSelectedSquare={currentSelectedSquare}
              letterIndex={index}
              revealedThroughHint={indexesGivenAsHint.includes(index)}
            />
          </span>
        ))}
        <button onClick={() => getDefinition()}>Clue</button>
        <button onClick={() => clearGuess()}>Clear</button>
      </div>
      <Keyboard
        setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}
        moveCurrentSelectedSquareBy={moveCurrentSelectedSquareBy}
        checksGuessIsCorrect={checksGuessIsCorrect}
        puzzleSolved={puzzleSolved}
      />
      <button onClick={() => revealSelectedLetterAsHint()}>
        {" "}
        Get Letter Hint
      </button>{" "}
      <br />
      <button onClick={() => checksGuessIsCorrect()}>
        {" "}
        Check Answer is Correct
      </button>
      <br />
    </div>
  );
};

export default CrownCryptic;
