import "./frame.css";

function Frame(props) {
  return (
    <div className={props.frameType} style={props.style}>
      {props.children}
    </div>
  );
}

export default Frame;
