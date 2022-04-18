import React from 'react';
import Repos from '../components/Repos';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Recent Repos',
  component: Repos,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Repos {...args} />;

export const Default = Template.bind();
