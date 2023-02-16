import "./content-box-container.css";

function ContentBoxContainer(props) {
  return <div className="content-box-container">{props.children}</div>;
}

export default ContentBoxContainer;
