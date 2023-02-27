import Background from "./components/ui/background/background";
import Frame from "./components/ui/frame/frame";
import MainContent from "./components/main-content/main-content";
import { ModulesContextProvider } from "./context/module-context";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationPanel from "./components/navigation-panel/navigation-panel";

function App() {
  return (
    <ModulesContextProvider>
      <Frame frameType={"frame-inner-no-outer"}>
        <Background themeClassName={"vaporwave-two"}>
          <div className="row mb-5">
            <div className="col-12">
              <NavigationPanel />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <MainContent />
            </div>
          </div>
        </Background>
      </Frame>
    </ModulesContextProvider>
  );
}

export default App;
