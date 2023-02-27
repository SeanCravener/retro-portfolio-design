import Frame from "../ui/frame/frame";
import { useContext, useEffect } from "react";
import { ModulesContext } from "../../context/module-context";
import ContentBox from "../ui/content-box/content-box";
import "bootstrap/dist/css/bootstrap.min.css";
import DragBox from "../DragDrop/drag-box";
import DropBox from "../DragDrop/drop-box";

function MainContent() {
  const { selectedModule } = useContext(ModulesContext);

  return (
    <Frame frameType="frame-outer">
      <Frame frameType="frame-inner" style={{ width: "100%" }}>
        <div className="row">
          <div className="col">
            <ContentBox>
              <h1>
                {selectedModule === null ? "its null" : selectedModule.title}
              </h1>
            </ContentBox>
          </div>
          <div className="col">
            <ContentBox>
              <DropBox />
            </ContentBox>
          </div>
        </div>
        <Frame
          frameType="frame-inner"
          style={{ display: "flex", padding: "0px" }}
        >
          {selectedModule === null ? (
            <div className="row m-3">
              <div className="col">
                <p>...Load Project Module...</p>
              </div>
            </div>
          ) : (
            <iframe
              src={selectedModule.src}
              title="main-content"
              style={{ width: "100%", height: "500px", border: "none" }}
            ></iframe>
          )}
        </Frame>
      </Frame>
    </Frame>
  );
}

export default MainContent;
