import React, { useState } from "react";
import "./App.css";

function App() {
  const [themeStyle, setThemeStyle] = useState("background-one");

  return (
    <div
      className={themeStyle}
      style={{ textAlign: "center", paddingTop: "5em" }}
    >
      <button
        onClick={() =>
          themeStyle === "background-one"
            ? setThemeStyle("background-two")
            : setThemeStyle("background-one")
        }
        style={{ backgroundColor: "blue" }}
      >
        Click me!
      </button>
    </div>
  );
}

export default App;
