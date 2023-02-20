import Frame from "../ui/frame/frame";
import DragBox from "../DragDrop/drag-box";
import "./navigation-panel.css";
import ContentBox from "../ui/content-box/content-box";

function NavigationPanel() {
  return (
    <Frame frameType={"frame-outer"}>
      <ContentBox>
        <DragBox dragItemId="item-id-1" />
      </ContentBox>
    </Frame>
  );
}

export default NavigationPanel;
