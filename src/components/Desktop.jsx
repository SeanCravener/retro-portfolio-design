import { useContext, useEffect } from "react";
import Window from "./Window";

function Desktop({ setSelectedModules, selectedModules }) {
  const displayWindows = (selectedModules) => {
    return selectedModules.map((module, index) => {
      return <Window module={module} index={index} />;
    });
  };

  return (
    <div className="desktop">
      {selectedModules && displayWindows(selectedModules)}
    </div>
  );
}

export default Desktop;
