import { useState, useContext, useEffect } from "react";
import { ModulesContext } from "../context/module-context";
import MainTaskBar from "./MainTaskBar";
import Desktop from "./Desktop";
import Window from "./Window";

function Main(props) {
  const { modules, selectedModules, setSelectedModules } =
    useContext(ModulesContext);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedModules([]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setSelectedModules, selectedModules]);

  return (
    <div className="main" id="main">
      {selectedModules &&
        selectedModules.map((module, index) => {
          return <Window module={module} index={index} />;
        })}
      <MainTaskBar
        modules={modules}
        selectedModules={selectedModules}
        setSelectedModules={setSelectedModules}
      />
    </div>
  );
}

export default Main;
