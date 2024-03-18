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
Basic.args = {
    imageAlt:"",
    imageSrc:"/img1.jpg",
    title: "1줄효과1줄효과1줄효과1줄효과1줄효과1줄효과",
    description:"3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과33줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과3줄효과"
};
