import React, { useState, createContext } from "react";

const loadModules = [
  {
    moduleCategory: "Frontend Mentor Project",
    moduleSrc: "projects/level-1/single-price-grid/index.html",
    moduleTitle: "Single Price Grid",
    moduleDescription:
      "This is a single price grid component. It is a challenge from Frontend Mentor.",
  },
];

export const ModulesContext = createContext();

export const ModulesContextProvider = (props) => {
  const [modules, setModules] = useState(loadModules);
  const [selectedModule, setSelectedModule] = useState(modules[0]);

  return (
    <ModulesContext.Provider
      value={{ modules, setModules, selectedModule, setSelectedModule }}
    >
      {props.children}
    </ModulesContext.Provider>
  );
};
