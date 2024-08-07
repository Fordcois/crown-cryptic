'use client'
import KeyboardLetter from "./keyboardLetter";
import React, { useState, useEffect } from 'react';

const Keyboard = ({setUserGuessArrayIndexToLetter,moveCurrentSelectedSquareBy,checksGuessIsCorrect}) => {
const [pressedKeys,setPressedKeys] = useState({})


useEffect(() => {
  const handleKeyDown = (event) => {
    console.log('You Have Typed: ',event.key)
    const key = event.key.toUpperCase();
    
    // Places keypresses into Array for styling to mimic keystokres
      setPressedKeys(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setPressedKeys(prev => ({ ...prev, [key]: false }));
      }, 100);

    // If a Letter
    if (/^[A-Z]$/.test(key)) 
      {setUserGuessArrayIndexToLetter(key)}
    // If Backspace
    if(key ==='BACKSPACE'){
      setUserGuessArrayIndexToLetter('')
    }
    //If Enter
    if(key ==='ENTER')
      {checksGuessIsCorrect()}

    //If Left Arrow Key
    if(key ==='ARROWRIGHT')
      {moveCurrentSelectedSquareBy(+1)}

    //If Right Arrow Key
    if(key ==='ARROWLEFT')
      {moveCurrentSelectedSquareBy(-1)}
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => {window.removeEventListener('keydown', handleKeyDown);};
});

  return (
    <div className="Keyboard">
      <div className="KeyboardRow">
        <KeyboardLetter keyboardLetter={'Q'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['Q']}/>
        <KeyboardLetter keyboardLetter={'W'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['W']}/>
        <KeyboardLetter keyboardLetter={'E'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['E']}/>
        <KeyboardLetter keyboardLetter={'R'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['R']}/>
        <KeyboardLetter keyboardLetter={'T'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['T']}/>
        <KeyboardLetter keyboardLetter={'Y'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['Y']}/>
        <KeyboardLetter keyboardLetter={'U'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['U']}/>
        <KeyboardLetter keyboardLetter={'I'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['I']}/>
        <KeyboardLetter keyboardLetter={'O'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['O']}/>
        <KeyboardLetter keyboardLetter={'P'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['P']}/>
        <button className={pressedKeys['BACKSPACE'] ? 'hitkeyboardLetterLong' : 'KeyboardLetterLong'} onClick={() => setUserGuessArrayIndexToLetter("")}>DELETE</button>
      </div>

      <div className="KeyboardRow">
        <KeyboardLetter keyboardLetter={'A'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['A']}/>
        <KeyboardLetter keyboardLetter={'S'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['S']}/>
        <KeyboardLetter keyboardLetter={'D'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['D']}/>
        <KeyboardLetter keyboardLetter={'F'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['F']}/>
        <KeyboardLetter keyboardLetter={'G'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['G']}/>
        <KeyboardLetter keyboardLetter={'H'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['H']}/>
        <KeyboardLetter keyboardLetter={'J'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['J']}/>
        <KeyboardLetter keyboardLetter={'K'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['K']}/>
        <KeyboardLetter keyboardLetter={'L'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['L']}/>
        <button className={pressedKeys['ENTER'] ? 'hitkeyboardLetterLong' : 'KeyboardLetterLong'} onClick={() => checksGuessIsCorrect()}>SUMBIT</button>
      </div>
      
      <div className="KeyboardRow">
        <KeyboardLetter keyboardLetter={'Z'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['Z']}/>
        <KeyboardLetter keyboardLetter={'X'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['X']}/>
        <KeyboardLetter keyboardLetter={'C'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['C']}/>
        <KeyboardLetter keyboardLetter={'V'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['V']}/>
        <KeyboardLetter keyboardLetter={'B'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['B']}/>
        <KeyboardLetter keyboardLetter={'N'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['N']}/>
        <KeyboardLetter keyboardLetter={'M'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter} pressed={pressedKeys['M']}/>
      </div>
    </div>
  );
}

export default Keyboard;