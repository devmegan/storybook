import React from 'react';

import Hero from '../components/Hero';

export default {
  title: 'Hero',
  component: 'Hero',
};

const Template = (args) => <Hero {...args} />;

const Dark = Template.bind();

const Light = Template.bind();

export { Light, Dark };

const content = {
    header: 'Hi, I\'m Megan',
    para: 'A Web Developer with hands-on, full-stack experience across public, private and third sector projects.',
    CTA: <>Want to see what tech I enjoy working with? Check out my <a className="link link-hover font-semibold underline text-secondary hover:text-secondary-focus" href="https://github.com/devmegan/awesome" target="_blank" rel="noreferrer">awesome list</a>. 😎</>
}

Dark.args = {
    content: content,
    theme: 'dark',
};

Light.args = {
    content: content,
    theme: 'light'
}