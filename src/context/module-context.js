import React, { useState, createContext } from "react";
import { PortfolioConfig } from "../config/PortfolioConfig";

export const ModulesContext = createContext();

export const ModulesContextProvider = (props) => {
  const [modules, setModules] = useState(PortfolioConfig);
  const [selectedModules, setSelectedModules] = useState([]);

  const addModule = (module) => {
    setSelectedModules(selectedModules.concat(module));
  };

  const removeModule = (module) => {
    setSelectedModules(
      selectedModules.filter(
        (selectedModule) => selectedModule.projectId !== module.projectId
      )
    );
  };

  return (
    <ModulesContext.Provider
      value={{ modules, setModules, selectedModules, addModule, removeModule }}
    >
      {props.children}
    </ModulesContext.Provider>
  );
};
