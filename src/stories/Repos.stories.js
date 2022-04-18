import React from 'react';
import Repos from '../components/Repos';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Recent Repos',
  component: Repos,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Repos {...args} />;

const Dark = Template.bind();

const Light = Template.bind();

export { Dark, Light };

Dark.args = {
    theme: 'dark'
};

Light.args = {
  theme: 'light'
}