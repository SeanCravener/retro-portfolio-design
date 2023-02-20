import Frame from "../ui/frame/frame";

function MainContent() {
  return (
    <Frame frameType="frame-outer">
      <iframe
        src={"projects/level-1/single-price-grid/index.html"}
        title="main-content"
        style={{ width: "500px", height: "500px", border: "none" }}
      />
    </Frame>
  );
}

export default MainContent;
