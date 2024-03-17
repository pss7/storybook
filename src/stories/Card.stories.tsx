import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
    title: "Components/Card",
    component: Card,
    tags: ['autodocs'],
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
