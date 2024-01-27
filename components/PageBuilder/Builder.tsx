// YourMainComponent.js
import React, { useState } from 'react';
import TemplateSelector from './TemplateSelector';
import TemplateBuilder from './TemplateBuilder';

const Builder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div>
      <TemplateSelector onSelectTemplate={handleTemplateSelect} />
      <TemplateBuilder selectedTemplate={selectedTemplate} />
    </div>
  );
};

export default Builder;
