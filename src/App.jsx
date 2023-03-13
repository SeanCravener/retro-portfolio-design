import { ModulesContextProvider } from "./context/module-context";
import { ThemeProvider } from "@react95/core";
import Main from "./components/Main";

function App() {
  return (
    <ModulesContextProvider>
      <ThemeProvider matrix>
        <Main />
      </ThemeProvider>
    </ModulesContextProvider>
  );
}

export default App;
