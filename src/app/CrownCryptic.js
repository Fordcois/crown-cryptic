"use client"; 
import { useState } from "react";
import LetterSquare from "@/components/LetterSquare"
import Keyboard from "@/components/keyboard";
import PuzzleSolvedPopUp from "@/components/PuzzleSolvedPopUp";
import data from '@/resources/questionData.json'

const CrownCryptic = () => {

const dayPuzzleData = data[0]

const question = dayPuzzleData.clue;
const definition = dayPuzzleData.definition;
const CorrectAnswer=dayPuzzleData.answer;
const answerLength = CorrectAnswer.split('').length
const [currentSelectedSquare,setcurrentSelectedSquare] = useState(0)
const [userGuessArray,setuserGuessArray] = useState(Array(answerLength))
const [puzzleSolved,setpuzzleSolved] = useState(false)
const [showDefinition,setshowDefinition] = useState(false)
const [lettersGiven,setslettersGiven] = useState(0)

const checksGuessIsCorrect = () => {
if (userGuessArray.join('') === CorrectAnswer) 
    {setpuzzleSolved(true)}
}

const setIndextoLetter = (letter) => {
    let newArray = [...userGuessArray];
    newArray[currentSelectedSquare] = letter;
    setuserGuessArray(newArray);
    if (currentSelectedSquare < answerLength - 1){
        setcurrentSelectedSquare(currentSelectedSquare+1)
    }
    }

const getDefinition = () => {
    setshowDefinition(true);
}

return (
    <div>
    {puzzleSolved &&
     <PuzzleSolvedPopUp ClueUsed={showDefinition} lettersGiven={lettersGiven}/>
    }
    <b>Question:</b> {question}<br/>
    {
    showDefinition &&
    <span>
    <b>Definition:</b> {definition}<br/>
    </span>
    }
    <b>Correct Answer:</b> {CorrectAnswer}<br/>
    <b>Puzzle Solved:</b> {puzzleSolved.toString()}<br/>
    <b>Answer Length:</b> {answerLength}<br/>
    <b>Current Selected Index:</b> {currentSelectedSquare}<br/>
    <b>Example of a Question Structure:</b> <br/>
    
    <div style={{ marginTop: '20px', marginBottom:'20px' }}>
        <span>WORDS WORDS WORDS WORDS </span> <span className={showDefinition ? "RevealedDefinition" : ""}>WORDS </span>
    </div>

    <div className="LetterContainer">

    {Array.from({length: answerLength }).map((_, index) => (
        <span key={index} onClick={() => { setcurrentSelectedSquare(index) }}>
            <LetterSquare currentLetter={userGuessArray[index]} currentSelectedSquare={currentSelectedSquare} letterIndex={index} />
        </span>
    ))}

    <button onClick={()=>getDefinition()}>Clue</button>
    </div>
        <Keyboard passedFunc={setIndextoLetter}/>
    <button  onClick={()=>checksGuessIsCorrect()}> Check Answer is Correct</button>
    </div>
    )
};

export default CrownCryptic

