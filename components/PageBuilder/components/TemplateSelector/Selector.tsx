// TemplateSelector.js
import React, { useState } from 'react';

const TemplateSelector = ({ onSelectTemplate }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    onSelectTemplate(template);
  };

  return (
    <div>
      <h2>Select a Template:</h2>
      <div className="flex space-x-4">
        <button
          className={`template-button ${selectedTemplate === 'landing' && 'selected'}`}
          onClick={() => handleTemplateSelect('landing')}
        >
          Landing Page
        </button>
        <button
          className={`template-button ${selectedTemplate === 'institutional' && 'selected'}`}
          onClick={() => handleTemplateSelect('institutional')}
        >
          Institutional Site
        </button>
        <button
          className={`template-button ${selectedTemplate === 'ecommerce' && 'selected'}`}
          onClick={() => handleTemplateSelect('ecommerce')}
        >
          E-commerce
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;
