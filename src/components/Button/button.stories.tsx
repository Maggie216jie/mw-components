import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#000' },
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },

} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >Button</Button>;


export const Primary = Template.bind({});
Primary.storyName = 'Default Button'
Primary.args = {
  btnType: 'default',
};
Primary.parameters = {
  docs: { 
    source: {code: '<Button title="Default Button"></Button>'},
  },
};

export const Secondary = () => (
  <Button btnType="link" href="http://google.com">link </Button>
)
Secondary.storyName = 'Link Button';
Secondary.parameters = {
  docs: { 
    source: {code: '<Button btnType="link" href="http://google.com">link </Button>'},
  },
};

export const third = () => (
  <>
    <Button size="lg">Large</Button>
    <Button>Default</Button>
    <Button size="sm">Small</Button>
  </>
)
third.storyName = 'ButtonSize';

export const fourth = () => (
  <>
    <Button btnType="default">default</Button>
    <Button btnType="primary">primary</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link" href="#">link button</Button>
  </>
)
fourth.storyName = 'ButtonsType';