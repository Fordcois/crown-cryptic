const KeyboardLetter = ({ keyboardLetter,setUserGuessArrayIndexToLetter}) => {

return (
<div className='KeyboardLetter' onClick={()=> {setUserGuessArrayIndexToLetter(keyboardLetter)}}>
    {keyboardLetter}
</div>
);
}

export default KeyboardLetter;