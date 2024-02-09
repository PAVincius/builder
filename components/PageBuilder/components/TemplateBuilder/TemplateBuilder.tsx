import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentPreview } from '../../../component-preview';
import { Model1 } from '@/components/NavBar/model1';

interface TemplateBuilderProps {
  project: {
    id: string;
    title: string;
    components: Array<{ [key: string]: string[] }>;
  };
}

const TemplateBuilder: React.FC<TemplateBuilderProps> = ({ project }) => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>();
  const [selectedModel, setSelectedModel] = useState<string | null>();

const handleModelSelect = (model: string, component: string) => {
  console.log('Model selected:', model);
  console.log('Component selected:', component);

  if (!component) {
    throw new Error('Component must be provided');
  }

  setSelectedComponent(model);

  if (!model) {
    throw new Error('Model must be provided');
  }

  setSelectedModel(model);
};


  const renderModels = (models: string[], component: string) => {
    return (
      <div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            {models.map((model, index) => (
              <SelectItem value={model} key={index}>
                {model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="mb-4 text-2xl font-bold">{project.title}</h2>
      <Model1 />
      <div>
        {project.components.map((component, index) => (
          <div key={index} className="mb-4 rounded-lg border border-gray-200 p-4">
            <h3 className="mb-2 text-lg font-semibold">{Object.keys(component)[0]}</h3>
            {renderModels(component[Object.keys(component)[0]], Object.keys(component)[0])}
              {/* <ComponentPreview name={`${selectedComponent}${selectedModel}`} /> */}
              <ComponentPreview name="Model1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateBuilder;
