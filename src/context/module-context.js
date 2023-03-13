import React, { useState, createContext } from "react";

export const ModulesContext = createContext();

export const ModulesContextProvider = (props) => {
  const [modules, setModules] = useState([
    {
      showModal: false,
      title: "Single Price Grid Component",
      description:
        "A simple single price grid component built with HTML and CSS",
      src: "./projects/level-1/single-price-grid/index.html",
      icon: "./images/icons8-disk-61.png",
      projectId: "project-1",
      category: "Frontend Mentor",
      difficultyLevel: "Level 1",
      links: [
        {
          url: "https://github.com/SeanCravener/frontend-mentor-challenges/tree/main/level-1/single-price-grid",
          text: "Github",
        },
        {
          url: "https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc",
          text: "Frontend Mentor",
        },
      ],
    },
    {
      showModal: false,
      title: "Advice Generator App",
      description:
        "A simple advice generator app built with HTML, CSS, JavaScript, React. The app uses the Advice Slip JSON API to generate random advice.",
      src: "./projects/level-2/advice-generator-app/dist/index.html",
      icon: "./images/icons8-disk-61.png",
      projectId: "project-2",
      category: "Frontend Mentor",
      difficultyLevel: "Level 2",
      links: [
        {
          url: "https://github.com/SeanCravener/frontend-mentor-challenges/tree/main/level-2/advice-generator-app",
          text: "Github",
        },
        {
          url: "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
          text: "Frontend Mentor",
        },
      ],
    },
  ]);
  const [selectedModules, setSelectedModules] = useState([]);

  return (
    <ModulesContext.Provider
      value={{ modules, setModules, selectedModules, setSelectedModules }}
    >
      {props.children}
    </ModulesContext.Provider>
  );
};
