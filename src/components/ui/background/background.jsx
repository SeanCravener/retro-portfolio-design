import "./background.css";

function Background(props) {
  return (
    <div className={props.themeClassName + " background"}>{props.children}</div>
  );
}

export default Background;
