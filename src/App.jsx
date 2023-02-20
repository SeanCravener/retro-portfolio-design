import Background from "./components/ui/background/background";
import Frame from "./components/ui/frame/frame";
import MainContent from "./components/main-content/main-content";
import { ModulesContextProvider } from "./context/module-context";
function App() {
  return (
    <ModulesContextProvider>
      <Frame frameType={"frame-inner-no-outer"}>
        <Background themeClassName={"vaporwave-two"}>
          <MainContent />
        </Background>
      </Frame>
    </ModulesContextProvider>
  );
}

export default App;
