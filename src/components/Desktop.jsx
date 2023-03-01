import React, { useContext } from "react";
import { ModulesContext } from "../context/module-context";
import Shortcut from "./Shortcut";

function Desktop(props) {
  const { modules } = useContext(ModulesContext);

  const handleDrop = (e) => {
    const data = e.dataTransfer.getData("text");
    const icon = document.getElementById(data);
    e.target.appendChild(icon);
    const x = e.clientX - icon.offsetWidth / 2;
    const y = e.clientY - icon.offsetHeight / 2;
    icon.style.left = x + "px";
    icon.style.top = y + "px";
  };

  return (
    <div
      id="desktop"
      className={`${props.desktopBackground}`}
      onDrop={handleDrop}
    >
      {modules.map((module) => (
        <Shortcut key={module.projectId} module={module} />
      ))}
    </div>
  );
}

export default Desktop;
