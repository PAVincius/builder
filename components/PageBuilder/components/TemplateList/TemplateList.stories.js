// TemplateList.stories.js
import React from 'react';
import { TemplateList } from './TemplateList';

export default {
  title: 'Components/TemplateList',
  component: TemplateList,
};

const Template = (args) => <TemplateList {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithSelectedCard = Template.bind({});
WithSelectedCard.args = {
  selectedProjectIndex: 0,
};

// Add more stories as needed for different states or use cases
