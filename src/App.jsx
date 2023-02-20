import Background from "./components/ui/background/background";
import Frame from "./components/ui/frame/frame";
import MainContent from "./components/main-content/main-content";

function App() {
  return (
    <Frame frameType={"frame-inner-no-outer"}>
      <Background themeClassName={"vaporwave-two"}>
        <MainContent />
      </Background>
    </Frame>
  );
}

export default App;
