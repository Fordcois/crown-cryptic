const PuzzleSolvedPopUp = ({ClueUsed,lettersGiven}) => {

const cluesUsed = ClueUsed? '1':'0';
const lettersUsed = lettersGiven

return (
        <div className='PopUpShade'>
          <div className='PopUpWindow' >
            <b>Puzzle Solved</b>
            <br/>
            {cluesUsed} Clues Used
            <br/>
            {lettersUsed} Letters Given
            <br/>
            Share
          </div>
    </div>
);
}

export default PuzzleSolvedPopUp;