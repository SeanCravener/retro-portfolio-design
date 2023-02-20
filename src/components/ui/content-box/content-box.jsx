import "./content-box.css";

function ContentBox(props) {
  return <div className="content-box">{props.children}</div>;
}

export default ContentBox;
