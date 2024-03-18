import React from 'react';
import { Meta, Story } from '@storybook/react';
import Select, { SelectProps } from './Select';

export default {
    title: "Components/Select",
    component: Select,
    tags: ['autodocs'],
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    id: "",
    className: "",
    label: "select",
    name : "",
    value : ""
};
