import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
    title: "Components/Input",
    component: Input,
    tags: ['autodocs'],
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
