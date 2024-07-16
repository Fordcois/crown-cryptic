import { RWebShare } from "react-web-share";

const PuzzleSolvedPopUp = ({ClueUsed,letterHintsGiven, emojiResults}) => {

const cluesUsed = ClueUsed? '1':'0';
const letterHintsUsed = letterHintsGiven;

  return (
    <div className='PopUpShade'>
      <div className='PopUpWindow'>
        <b>Puzzle Solved</b>
        <br/>
        {cluesUsed} Clues Used
        <br/>
        {letterHintsUsed} Letters Given
        <br/>
        <RWebShare 
          data={{ 
            text: "I Solved Crown Cryptic!" + "%0a%0a   " + emojiResults + "%0a%0a   🅰️ " + letterHintsGiven + " Letters Given%0a%0a   🔍 " + cluesUsed + " Clues Used%0a%0a", 
            url: "http://localhost:3000", 
            title: "Crown Cryptic",
            }
          }
          onClick={() => console.log("Shared successfully!")} 
        > 
          <button>Share</button> 
        </RWebShare> 
      </div>
    </div>
  );
}

export default PuzzleSolvedPopUp;