import "./content-box.css";

function ContentBox(props) {
  return (
    <div className="content-box" style={props.style}>
      {props.children}
    </div>
  );
}

export default ContentBox;
