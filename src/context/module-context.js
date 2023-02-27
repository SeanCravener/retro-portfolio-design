import React, { useState, createContext } from "react";

export const ModulesContext = createContext();

export const ModulesContextProvider = (props) => {
  const [modules, setModules] = useState([
    {
      title: "Single Price Grid Component",
      description:
        "A simple single price grid component built with HTML and CSS",
      src: "./projects/level-1/single-price-grid/index.html",
      projectId: "project-1",
      category: "Frontend Mentor",
      difficultyLevel: "Level 1",
    },
    {
      title: "Advice Generator App",
      description:
        "A simple advice generator app built with HTML, CSS, JavaScript, React. The app uses the Advice Slip JSON API to generate random advice.",
      src: "./projects/level-2/advice-generator-app/dist/index.html",
      projectId: "project-2",
      category: "Frontend Mentor",
      difficultyLevel: "Level 2",
    },
  ]);
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <ModulesContext.Provider
      value={{ modules, setModules, selectedModule, setSelectedModule }}
    >
      {props.children}
    </ModulesContext.Provider>
  );
};
