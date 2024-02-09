import React, { useState } from 'react';
import  TemplateList  from '../PageBuilder/components/TemplateList/TemplateList';

export const Builder = () => {

  return (
    <div className="mt-5 flex flex-col items-center">
      <h1 className="mb-4 text-2xl font-bold">Template Builder</h1>
      <div className="flex">

        <TemplateList/>
      </div>
    </div>
  );
};
