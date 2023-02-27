import Frame from "../ui/frame/frame";
import DragBox from "../DragDrop/drag-box";
import "./navigation-panel.css";
import ContentBox from "../ui/content-box/content-box";
import { useContext } from "react";
import { ModulesContext } from "../../context/module-context";

function NavigationPanel() {
  const { modules } = useContext(ModulesContext);

  return (
    <Frame frameType={"frame-outer"}>
      {modules.map((module) => (
        <ContentBox>
          <DragBox key={module.projectId} dragItemId={module.projectId} />
        </ContentBox>
      ))}
    </Frame>
  );
}

export default NavigationPanel;
