import React from 'react';
import { Meta, Story } from '@storybook/react';
import Drawer, { DrawerProps } from './Drawer';

export default {
    title: "Components/Drawer",
    component: Drawer,
    tags: ['autodocs'],
} as Meta;

const Template: Story<DrawerProps> = (args) => <Drawer {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
