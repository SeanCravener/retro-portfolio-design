import { useContext } from "react";
import { ModulesContext } from "../context/module-context";
import { TaskBar, List } from "@react95/core";
import { Computer5 } from "@react95/icons";

function MainTaskBar() {
  const { modules, addModule } = useContext(ModulesContext);

  const handleModuleClick = (project) => {
    addModule(project);
  };

  return (
    <>
      <TaskBar
        list={
          <List>
            {modules.map((module, index) => (
              <List.Item key={index} icon={<Computer5 variant="32x32_4" />}>
                <List>
                  {module.difficultyLevels.map((level, index) => (
                    <List.Item key={index}>
                      <List>
                        {level.projects.map((project, index) => (
                          <List.Item
                            key={index}
                            onClick={() => handleModuleClick(project)}
                          >
                            <span style={{ padding: ".5rem" }}>
                              {project.title}
                            </span>
                          </List.Item>
                        ))}
                      </List>
                      <span style={{ padding: ".5rem" }}>{level.title}</span>
                    </List.Item>
                  ))}
                </List>
                <span style={{ padding: ".5rem" }}>{module.title}</span>
              </List.Item>
            ))}
          </List>
        }
      />
    </>
  );
}

export default MainTaskBar;
