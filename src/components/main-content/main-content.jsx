import Frame from "../ui/frame/frame";
import { useContext } from "react";
import { ModulesContext } from "../../context/module-context";
import ContentBox from "../ui/content-box/content-box";

function MainContent() {
  const { selectedModule, setSelectedModule } = useContext(ModulesContext);

  return (
    <Frame frameType="frame-outer">
      <Frame frameType="frame-inner" style={{ width: "100%" }}>
        <ContentBox>
          <h1>{selectedModule.moduleTitle}</h1>
        </ContentBox>
        <ContentBox>
          <div
            style={{
              height: "74.5",
              width: "74.5",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          ></div>
        </ContentBox>
        <Frame
          frameType="frame-inner"
          style={{ display: "flex", padding: "0px" }}
        >
          <iframe
            src={selectedModule.moduleSrc}
            title="main-content"
            style={{ width: "100%", height: "500px", border: "none" }}
          />
        </Frame>
      </Frame>
    </Frame>
  );
}

export default MainContent;
