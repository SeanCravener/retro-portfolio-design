import { useEffect, useContext } from "react";
import Window from "./Window";
import { ModulesContext } from "../context/module-context";

function Desktop() {
  const { selectedModules } = useContext(ModulesContext);

  useEffect(() => {
    console.log("test");
    console.log(selectedModules);
  }, [selectedModules]);

  return (
    <div className="desktop">
      {selectedModules.length > 0 &&
        selectedModules.map((module, index) => {
          console.log(module);
          return <Window key={index} module={module} />;
        })}
    </div>
  );
}

export default Desktop;
