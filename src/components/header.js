import formatDate from "@/functions/formatDate";
const Header=()=>{
    const today = new Date();
return (
    <div className="headerContainer">
        <span className="titleText">CROWN CRYPTIC</span>
        <span className="dateText">{formatDate(today)}</span>
    </div>
)};

export default Header

