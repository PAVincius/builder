// TemplateList.tsx

import React, { useState } from 'react';
import { useProjects } from "../../hooks/useProjects";
import  TemplateCards  from "./components/TemplateCards";
import { Button } from "@/components/ui/button";
import TemplateBuilder from "../TemplateBuilder/TemplateBuilder"; // Importe o TemplateBuilder

const TemplateList = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projects, fetchProjects, error] = useProjects('/data/projects.json');

  const handleCardClick = (id) => {
    setSelectedProjectId(id);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer rounded-lg border border-gray-200 hover:border-primary "
            onClick={() => handleCardClick(project.id)}
          >
            <TemplateCards
              selectedProjectIndex={selectedProjectId}
              project={project}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button
          onClick={() => setSelectedProjectId(null)} // Limpar seleção ao clicar no botão
          variant={selectedProjectId === null ? 'ghost' : undefined}
        >
          {selectedProjectId === null ? 'Selecione um projeto' : 'Vamos lá!'}
        </Button>
      </div>
      {selectedProjectId !== null && (
        <TemplateBuilder
          project={projects.find((project) => project.id === selectedProjectId)}
        />
      )}
    </div>
  );
};

export default TemplateList;
