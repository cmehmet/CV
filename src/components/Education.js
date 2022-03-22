import "./Edu.css"
function Edu(props)
{
    
    return (
        <div className="edu">
        <h1 className="title">EĞİTİM</h1>
        <h2>{props.items[1].School}</h2>
        <h4>Ortalama Puan : {props.items[1].Gpa}</h4>
        <h5>Başlangıç : {props.items[1].Start}</h5>
        <h5>Mezuniyet : {props.items[1].Graduate}</h5>
        </div>
    );
}

export default Edu;