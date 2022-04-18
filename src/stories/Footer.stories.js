import React from 'react';

import Footer from '../components/Footer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Footer',
  component: Footer,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Footer {...args} />;

const Dark = Template.bind();

const Light = Template.bind();

export { Light, Dark };

Dark.args = {
  theme: 'dark',
};

Light.args = {
  theme: 'light'
}