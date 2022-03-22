import "./Yetenek.css"
function Yetenek(props)
{
    return (
        <div className="yetenek">
            <h1 className="title">YETENEKLER</h1>
            <pre className="pre">{props.items[2].Beceri}</pre>
        </div>
    );
}
export default Yetenek;