
import KeyboardLetter from "./keyboardLetter";
const Keyboard = ({passedFunc}) => {

  return (
    <div className="Keyboard">
      <div className="KeyboardRow">
        <KeyboardLetter keyboardLetter={'Q'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'W'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'E'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'R'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'T'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'Y'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'U'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'I'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'O'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'P'} passedFunc={passedFunc}/>
      </div>

      <div className="KeyboardRow">
        <KeyboardLetter keyboardLetter={'A'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'S'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'D'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'F'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'G'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'H'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'J'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'K'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'L'} passedFunc={passedFunc}/>
      </div>
      
      <div className="KeyboardRow">
        <KeyboardLetter keyboardLetter={'Z'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'X'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'C'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'V'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'B'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'N'} passedFunc={passedFunc}/>
        <KeyboardLetter keyboardLetter={'M'} passedFunc={passedFunc}/>
      </div>
    </div>
  );
}

export default Keyboard;