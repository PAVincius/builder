import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";

interface TemplateCardsProps {}

interface TemplateCardsProps {
  idx: number;
  selectedProjectIndex: number;
  project: {
    id: number;
    badge?: string[];
    link?: string;
    title?: string;
    content?: string;
    components: [{
    navbar: string,
    hero: string,
    features: string,
    testimonial: string,
    product: string,
    cta: string,
    faq: string,
    contact: string,
    footer: string
  }]
  };

}

const TemplateCards: React.FC<TemplateCardsProps> = ({selectedProjectIndex, project}) => {
  const id = project.id;
  return (
    <Card
      className={`w-full ${
       id === selectedProjectIndex ? "animate-squeeze border-2 border-primary duration-1000 " : ""
      }`}
      key={project?.link}
    >
      <CardHeader className="my-2">
        <div className="flex flex-row">
          {project.badge?.map((badge, id) => (
            <div className="mr-2" key={id}>
              <Badge
                variant={`${
                  badge === "new" ? "default" : "secondary"
                }`}
              >
                {badge}
              </Badge>
            </div>
          ))}
        </div>
        <CardTitle className="text-primary">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>{project.content}</CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default TemplateCards;
