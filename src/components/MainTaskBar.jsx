import { useState, useContext } from "react";
import { ModulesContext } from "../context/module-context";
import { TaskBar, List } from "@react95/core";

function MainTaskBar({ modules, selectedModules, setSelectedModules }) {
  const onTaskBarClick = (module) => {
    if (selectedModules.includes(module)) {
      return;
    } else {
      setSelectedModules([...selectedModules, module]);
    }
  };

  return (
    <div className="taskbar-main">
      <TaskBar
        list={
          <List>
            {modules.map((module) => {
              return (
                <List.Item
                  key={module.projectId}
                  onClick={() => onTaskBarClick(module)}
                >
                  {module.title}
                </List.Item>
              );
            })}
          </List>
        }
      />
    </div>
  );
}

export default MainTaskBar;
