import "./content-box.css";

function ContentBox(props) {
  return (
    <div className="content-box" style={{ margin: ".5rem" }}>
      {props.children}
    </div>
  );
}

export default ContentBox;
