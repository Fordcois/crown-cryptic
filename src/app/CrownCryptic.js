"use client"; 
import { useState } from "react";
import LetterSquare from "@/components/LetterSquare"
import Keyboard from "@/components/keyboard";


const CrownCryptic = () => {

const CorrectAnswer='CORRECT'
const [currentSelectedSquare,setcurrentSelectedSquare] = useState(0)
// const answerLength = (CorrectAnswer.split('').length)

// const Array =[]*answerLength

// const isCorrect 
// return { arrau.join === correctAnser}


return (
    <div>
    <b>Correct Answer:</b> {CorrectAnswer}<br/>

    <div className="LetterContainer">
        {/* Turn this into Array.From  */}
        {CorrectAnswer.split('').map((correctLetter, index) => (
        <span key={index} onClick={()=>{setcurrentSelectedSquare(index)}}>
            <LetterSquare currentSelectedSquare={currentSelectedSquare} letterIndex={index} correctLetter={correctLetter}/>
        </span>
        ))}

    </div>
        <Keyboard/>
    </div>
    )}

export default CrownCryptic

