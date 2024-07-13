
import KeyboardLetter from "./keyboardLetter";
const Keyboard = ({setUserGuessArrayIndexToLetter}) => {

  return (
    <div className="Keyboard">
      <div className="KeyboardRow">
        <KeyboardLetter keyboardLetter={'Q'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'W'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'E'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'R'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'T'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'Y'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'U'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'I'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'O'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'P'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
      </div>

      <div className="KeyboardRow">
        <KeyboardLetter keyboardLetter={'A'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'S'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'D'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'F'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'G'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'H'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'J'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'K'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'L'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
      </div>
      
      <div className="KeyboardRow">
        <KeyboardLetter keyboardLetter={'Z'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'X'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'C'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'V'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'B'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'N'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
        <KeyboardLetter keyboardLetter={'M'} setUserGuessArrayIndexToLetter={setUserGuessArrayIndexToLetter}/>
      </div>
    </div>
  );
}

export default Keyboard;