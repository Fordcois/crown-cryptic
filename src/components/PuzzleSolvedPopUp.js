import ShareButton from "./ShareButton";

const PuzzleSolvedPopUp = ({ClueUsed,letterHintsGiven, emojiResults}) => {

  const cluesUsed = ClueUsed? '1':'0';
  const clueSgOrPl = cluesUsed == 1 ? "Clue" : "Clues";
  const letterSgOrPl = letterHintsGiven == 1 ? "Letter" : "Letters";

  return (
    <div className='PopUpShade'>
      <div className='PopUpWindow'>
        <b>Puzzle Solved</b>
        <br/>
        {letterHintsGiven} {letterSgOrPl} Given
        <br/>
        {cluesUsed} {clueSgOrPl} Used
        <br/>
        <ShareButton emojiResults={emojiResults} cluesUsed={cluesUsed} clueSgOrPl={clueSgOrPl} letterHintsGiven={letterHintsGiven} letterSgOrPl={letterSgOrPl}></ShareButton> 
      </div>
    </div>
  );
}

export default PuzzleSolvedPopUp;