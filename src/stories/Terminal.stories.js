import React from 'react';
import Terminal from '../components/Terminal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mock Terminal',
  component: Terminal,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Terminal {...args} />;

const Python = Template.bind();

const JavaScript = Template.bind();

export { Python, JavaScript };

const project = {
    description: 'test project',
    full_name: 'devmegan/test',
    html_url: '/test',
    language: 'Python',
    name: 'test',
}

Python.args = {
  theme: 'dark',
  project: project,
};

JavaScript.args = {
  theme: 'light',
  project: { ...project, language: 'JavaScript'},
}