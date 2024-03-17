import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tab from './Tab';

export default {
    title: "Components/Tab",
    component: Tab,
    tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <Tab {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
