import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
    title: "Components/Button",
    component: Button,
    tags: ['autodocs'],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    id: "",
    className: "",
    title : "",
    label: "Button",
};
