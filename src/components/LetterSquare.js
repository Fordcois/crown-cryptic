"use client"; 
import { useState } from 'react';

const LetterSquare = ({ currentLetter,currentSelectedSquare,letterIndex }) => {

const selectedLetter = (currentSelectedSquare == letterIndex);

return (
<div className={selectedLetter ? "SelectedLetter" : "Letter"}>
    {currentLetter}
</div>
);
}

export default LetterSquare;