import Frame from "../frame/frame";
import "./background.css";

function Background(props) {
    return (
        <Frame frameType={"frame-inner-no-outer"}>
            <div className={props.themeClassName + " background"} >
                {props.children}
            </div>
        </Frame>
    );
}

export default Background;