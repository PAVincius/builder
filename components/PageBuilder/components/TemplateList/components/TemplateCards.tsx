// TemplateCards.tsx

import React from 'react';
import { Badge } from "@/components/ui/badge";

interface TemplateCardsProps {
  selectedProjectIndex: number;
  project: {
    id: string;
    badge?: string[];
    link?: string;
    title?: string;
    content?: string;
    components: Array<{ [key: string]: string[] }>;
  };
}

const TemplateCards: React.FC<TemplateCardsProps> = ({ selectedProjectIndex, project }) => {
  const { id, badge, link, title, content } = project;

  return (
    <div className={`w-full rounded-lg ${id === selectedProjectIndex ? "border-2 border-primary" : ""} p-4` }>
      <div className="flex flex-row">
        {badge?.map((badgeItem, index) => (
          <div className="mr-2" key={index}>
            <Badge variant={badgeItem === "new" ? "default" : "secondary"}>
              {badgeItem}
            </Badge>
          </div>
        ))}
      </div>
      <h2 className="mb-4 mt-2 text-xl font-bold">{title}</h2>
      <p className="mb-4">{content}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary">
        Visit Projects
      </a>
    </div>
  );
};

export default TemplateCards;
