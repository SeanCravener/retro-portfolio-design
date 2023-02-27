import React, { useContext } from "react";
import { ModulesContext } from "../../context/module-context";

function DropBox() {
  const { modules, setSelectedModule } = useContext(ModulesContext);

  const handleDrop = async (event) => {
    const moduleId = event.dataTransfer.getData("text/plain");
    const moduleObject = modules.find(
      (module) => module.projectId === moduleId
    );
    setSelectedModule(moduleObject);
  };

  return (
    <div
      id="dropbox"
      onDrop={handleDrop}
      style={{
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    ></div>
  );
}

export default DropBox;
