import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Label, LabelProps } from './Label';

export default {
  title: 'Example/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Label',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Label',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Label',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Label',
};
