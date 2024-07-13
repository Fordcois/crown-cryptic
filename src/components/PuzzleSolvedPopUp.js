const PuzzleSolvedPopUp = ({ClueUsed,letterHintsGiven}) => {

const cluesUsed = ClueUsed? '1':'0';
const letterHintsUsed = letterHintsGiven

return (
        <div className='PopUpShade'>
          <div className='PopUpWindow' >
            <b>Puzzle Solved</b>
            <br/>
            {cluesUsed} Clues Used
            <br/>
            {letterHintsUsed} Letters Given
            <br/>
            Share
          </div>
    </div>
);
}

export default PuzzleSolvedPopUp;