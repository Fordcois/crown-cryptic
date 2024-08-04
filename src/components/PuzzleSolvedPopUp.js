import { RWebShare } from "react-web-share";
import ShareButton from "./ShareButton";

const PuzzleSolvedPopUp = ({ClueUsed,letterHintsGiven, emojiResults}) => {
  console.log("in pop up")
  console.log(emojiResults)

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
        <ShareButton emojiResults={emojiResults} cluesUsed={cluesUsed} letterHintsGiven={letterHintsGiven}></ShareButton> 
      </div>
    </div>
  );
}

export default PuzzleSolvedPopUp;