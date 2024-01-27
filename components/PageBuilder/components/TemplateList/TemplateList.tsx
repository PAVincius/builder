import TemplateCards from "./components/TemplateCards";
import { useProjects } from "./hooks/useProjects";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TemplateBuilder } from "../TemplateBuilder/TemplateBuilder";
import { useReducer, useState } from "react";

export const TemplateList = () => {
  const [selectedProjectid, setSelectedProjectid] = useState(-1);
  const [projects] = useProjects('/data/projects.json');

  const handleCardClick = (id: number) => {
    setSelectedProjectid(id);
  };

  const initialState = {
    showSection: false
  };

  const sectionReducer = (state, action) => {
    switch (action.type) {
      case "SHOW_SECTION":
        return {
          ...state,
          showSection: true
        };
      default:
        return state;
    }
  };

  const [sectionState, dispatch] = useReducer(sectionReducer, initialState);

  const handleButtonClick = () => {
    dispatch({ type: "SHOW_SECTION" });
  };
  const selectedProject = projects.find((project) =>project.id === selectedProjectid);
  return (
    <div className="relative mr-5 max-w-full">
      <div className="grid grid-cols-1 py-10 md:grid-cols-2  lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group block h-full w-full cursor-pointer p-2 duration-300 ease-in-out hover:scale-105"
            onClick={() => handleCardClick(project.id)}
          >
            <TemplateCards selectedProjectIndex={selectedProjectid} project={project} />
          </div>
        ))}
      </div>
      <Button
        onClick={selectedProjectid !== -1 ? handleButtonClick : undefined}
        variant={selectedProjectid === -1 ? 'ghost' : undefined}
      >
        {selectedProjectid === -1 ? 'Select a project' : "Let's go!"}
      </Button>
      {sectionState.showSection && <TemplateBuilder project={selectedProject} />}
    </div>
  );
};
