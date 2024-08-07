const KeyboardLetter = ({ keyboardLetter,setUserGuessArrayIndexToLetter,pressed}) => {

return (
<button className={pressed ? 'hitkeyboardLetter' : 'KeyboardLetter'} onClick={()=> {setUserGuessArrayIndexToLetter(keyboardLetter)}}>
    {keyboardLetter}
</button>
);
}

export default KeyboardLetter;