import formatDate from "@/functions/formatDate";
const Header=()=>{
    const today = new Date();
return (
    <div className="headerContainer">
        <span className="titleText">CROWN CRYPTIC</span>
        <br/>
        {formatDate(today)}
    </div>
)};

export default Header

