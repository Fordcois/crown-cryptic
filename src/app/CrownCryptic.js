"use client"; 
import { useState } from "react";
import LetterSquare from "@/components/LetterSquare"
import Keyboard from "@/components/keyboard";


const CrownCryptic = () => {

const CorrectAnswer='CORRECT'
const splitAnswer = CorrectAnswer.split('')
const answerLength = (splitAnswer.length)
const [currentSelectedSquare,setcurrentSelectedSquare] = useState(0)
const [userGuessArray,setuserGuessArray] = useState(Array(answerLength))
const [puzzleSolved,setpuzzleSolved] = useState(false)

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

return (
    <div>
    <b>Correct Answer:</b> {CorrectAnswer}<br/>
    <b>Puzzle Solved:</b> {puzzleSolved.toString()}<br/>
    <b>Answer Length:</b> {answerLength}<br/>
    <b>Current Selected Index:</b> {currentSelectedSquare}<br/>

    <div className="LetterContainer">

    {Array.from({length: answerLength }).map((_, index) => (
        <span key={index} onClick={() => { setcurrentSelectedSquare(index) }}>
            <LetterSquare currentLetter={userGuessArray[index]} currentSelectedSquare={currentSelectedSquare} letterIndex={index} />
        </span>
    ))}

    </div>
        <Keyboard passedFunc={setIndextoLetter}/>
    <button value='Check'  onClick={()=>checksGuessIsCorrect()}> Check Answer is Correct</button>
    </div>
    )
};

export default CrownCryptic

