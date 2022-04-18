import React from 'react';
import LinkBtn from '../components/LinkBtn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Buttons/Link Button',
  component: LinkBtn,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LinkBtn {...args} />;

const Chevron = Template.bind();
const Plain = Template.bind();

export { Chevron, Plain }

Chevron.args = {
    chevron: true,
    text: 'View all',
    href: '/',
    target: "_self"
}

Plain.args = {
    chevron: false,
    text: 'View all',
    href: '/',
    target: "_self"
}