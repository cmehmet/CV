import "./Header.css"
function Title(props)
{
    return (
        <div className="header">
            <h1 className="title">PROFİL</h1>
            <h1>{props.items[0].Name}</h1>
            <h2>{props.items[0].Tag}</h2>
            <h5>{props.items[0].Summary}</h5>
        </div>
    );
}

export default Title;