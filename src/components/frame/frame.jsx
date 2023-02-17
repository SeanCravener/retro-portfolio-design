import "./frame.css";

function Frame(props) {
    return (
        <div className={props.frameType}>
                {props.children}
        </div>
    )
}

export default Frame;