import MainContainer from "./components/background/background";
import Frame from "./components/ui/frame/frame";
import ContentBox from "./components/ui/content-box/content-box";
import NavigationPanel from "./components/navigation-panel/navigation-panel";
import DropBox from "./components/DragDrop/drop-box";

function App() {
  return (
    <MainContainer themeClassName={"vaporwave-two"}>
      <Frame frameType={"frame-outer"}>
        <Frame frameType={"frame-inner"}>
          <ContentBox>
            <h1>Content Box</h1>
          </ContentBox>
          <ContentBox>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ex
              est provident porro eius dolor repudiandae dolores quo laboriosam
              magnam cum maxime sit quibusdam voluptate laudantium voluptatibus
              totam, quas explicabo!
            </p>
          </ContentBox>
          <ContentBox>
            <DropBox />
          </ContentBox>
        </Frame>
      </Frame>
      <NavigationPanel />
    </MainContainer>
  );
}

export default App;
