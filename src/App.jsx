import { ModulesContextProvider } from "./context/module-context";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import Main from "./components/Main";

function App() {
  return (
    <ModulesContextProvider>
      <ThemeProvider theme={"slate"}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </ModulesContextProvider>
  );
}

export default App;
