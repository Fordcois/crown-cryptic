import { useState } from "react";
import { FaFacebookSquare, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../app/shareButton.css'


const ShareButton = ({emojiResults, cluesUsed, letterHintsGiven}) => {

    console.log("in Share Button");
    console.log(emojiResults);
    console.log(cluesUsed);
    console.log(letterHintsGiven);
    

    const [isClickable, setIsClickable] = useState(true);

    const urlToShare = 'http://localhost:3000/'
    // const UrlTitleToShare = 'Samuel Ford - Full Stack Developer'
    const messageToShareClipboard = "I Solved Crown Cryptic!" + "\n\n" + emojiResults + "\n\n🅰️ " + letterHintsGiven + " Letters Given\n\n 🔍 " + cluesUsed + " Clues Used\n\n"; 
    const messageToShareSocials = "I Solved Crown Cryptic!" + "%0a%0a   " + emojiResults + "%0a%0a   🅰️ " + letterHintsGiven + " Letters Given%0a%0a   🔍 " + cluesUsed + " Clues Used%0a%0a";

    const ShareFunction = () => {
        if (navigator.share){
            navigator.share({
            Text:messageToShareClipboard,
            url: urlToShare})
            }
        else{
            setIsClickable(false);
            navigator.clipboard.writeText(`${messageToShareClipboard} ${urlToShare}`)
            setTimeout(() => {setIsClickable(true);}, 1000)
            }
            };

    return (
    <div className="GLOBAL-center">
        <div className="ShareButton-container">
            <button className={`ShareButton ${!isClickable ? "NotClickable" : ""}`} onClick={ShareFunction} disabled={!isClickable} >
                Share
            </button>
            <span className={`tooltip ${!isClickable ? "show" : ""}`}>
                Copied to Clipboard
            </span>
        </div>
        <div className="Socials-container">
            <span> Socials </span>
            <br/>

            {/* Twitter */}
            <a href={`https://twitter.com/intent/post?text=${messageToShareSocials}&url=${urlToShare}`} target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="Sharing-Icons"/>
            </a>
            {/* Facebook */}
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}/&quote=${messageToShareSocials}`} target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="Sharing-Icons"/>
            </a>
            {/* WhatsApp */}
            <a href={`https://api.whatsapp.com/send?text=${messageToShareSocials}%20${urlToShare}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="Sharing-Icons"/>
            </a>
            {/* Telegram */}
            <a href={`https://telegram.me/share/msg?url=${urlToShare}&text=${messageToShareSocials}`} target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="Sharing-Icons"/>
            </a>
        </div>

    </div>
    );
};

export default ShareButton;