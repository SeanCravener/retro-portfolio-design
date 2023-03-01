import { ModulesContextProvider } from "./context/module-context";
import "bootstrap/dist/css/bootstrap.min.css";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Frame from "./components/ui/frame/frame";

function App2() {
  return (
    <ModulesContextProvider>
      <Desktop desktopBackground="vaporwave-two" />
      <Taskbar />
    </ModulesContextProvider>
  );
}

export default App2;
