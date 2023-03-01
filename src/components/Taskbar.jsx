import Frame from "./ui/frame/frame";

function Taskbar() {
  return (
    <div className="taskbar">
      <Frame frameType="frame-inner-no-outer">
        <div className="taskbar-start">
          <div className="taskbar-start-text">Start</div>
        </div>
      </Frame>
    </div>
  );
}

export default Taskbar;
