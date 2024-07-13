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

const [indexesGivenAsHint, setindexesGivenAsHint] = useState([])



const checksGuessIsCorrect = () => {
if (userGuessArray.join('') === CorrectAnswer) 
    {setpuzzleSolved(true)}
}

const moveCurrentSelectedSquareBy = (movement) => {
    let potentialNewSquare = currentSelectedSquare + movement;
    if ((potentialNewSquare >= 0) && (potentialNewSquare < answerLength)) {
        setcurrentSelectedSquare(currentSelectedSquare + movement);
    }
}

const setUserGuessArrayIndexToLetter = (letter) => {
    if (!indexesGivenAsHint.includes(currentSelectedSquare)){
    let newArray = [...userGuessArray];
    newArray[currentSelectedSquare] = letter;
    setuserGuessArray(newArray);
    }
    moveCurrentSelectedSquareBy(+1)
    }
    

const getDefinition = () => {
    setshowDefinition(true);
}

const seperateDefinitionFromQuestion = () => {
    const defFirstIndex = question.indexOf(definition)
    const defLastIndex = defFirstIndex + definition.length
    return [question.slice(0,defFirstIndex),question.slice(defFirstIndex,defLastIndex),question.slice(defLastIndex)]
}
const [questionPreDef,questionDef,questionPostDef] = seperateDefinitionFromQuestion()

const revealSelectedLetterAsHint = () => {
    if (!indexesGivenAsHint.includes(currentSelectedSquare))
        {
        console.log('Hint Used')
        let newIndexesGivenAsHint = [...indexesGivenAsHint]
        newIndexesGivenAsHint.push(currentSelectedSquare)
        setUserGuessArrayIndexToLetter(CorrectAnswer[currentSelectedSquare]);
        setindexesGivenAsHint(newIndexesGivenAsHint);
        }
}


return (
    <div>
    {puzzleSolved &&
    <PuzzleSolvedPopUp ClueUsed={showDefinition} letterHintsGiven={indexesGivenAsHint.length}/>
    }

    <b>Question:</b><br/>
    <div style={{ marginTop: '20px', marginBottom:'20px' }}> 
        <span>{questionPreDef}</span>
        <span className={showDefinition ? "RevealedDefinition" : ""}>{questionDef}</span>
        <span>{questionPostDef}</span>
    </div>
   
    {/* {
    showDefinition &&
    <span>
    <b>Definition:</b> {definition}<br/>
    </span>
    } */}

    <b>Correct Answer:</b> {CorrectAnswer}<br/>
    <b>Puzzle Solved:</b> {puzzleSolved.toString()}<br/>
    <b>Answer Length:</b> {answerLength}<br/>
    <b>Current Selected Index:</b> {currentSelectedSquare}<br/>
    <b>indexes Given As Hint:</b> {indexesGivenAsHint.toString()}<br/>

    <div className="LetterContainer">

    {Array.from({length: answerLength }).map((_, index) => (
        <span key={index} onClick={() => { setcurrentSelectedSquare(index) }}>
            <LetterSquare currentLetter={userGuessArray[index]} currentSelectedSquare={currentSelectedSquare} letterIndex={index} />
        </span>
    ))}

    <button onClick={()=>getDefinition()}>Clue</button>
    </div>
        <Keyboard setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <button  onClick={()=>revealSelectedLetterAsHint()}> Get Letter Hint</button> <br/>
    <button  onClick={()=>checksGuessIsCorrect()}> Check Answer is Correct</button><br/>
    <button  onClick={()=>moveCurrentSelectedSquareBy(1)}> Move Current Selected Square +1</button><br/>
    <button  onClick={()=>moveCurrentSelectedSquareBy(-1)}> Move Current Selected Square -1</button><br/>
    
    
    </div>
    )
};

export default CrownCryptic

