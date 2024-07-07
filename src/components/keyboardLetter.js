const KeyboardLetter = ({ keyboardLetter,passedFunc}) => {

return (
<div className='KeyboardLetter' onClick={()=>passedFunc(keyboardLetter)}>
    {keyboardLetter}
</div>
);
}

export default KeyboardLetter;