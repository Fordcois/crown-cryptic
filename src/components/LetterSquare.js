"use client"; 
import { useState } from 'react';

const LetterSquare = ({ currentLetter,currentSelectedSquare,letterIndex,revealedThroughHint }) => {

const selectedLetter = (currentSelectedSquare == letterIndex);

return (
<div className={selectedLetter ? "SelectedLetter" : "Letter"}>
    <span className={revealedThroughHint ? "RevealedLetter" : ""} >{currentLetter}</span>
</div>
);
}

export default LetterSquare;