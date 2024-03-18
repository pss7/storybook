import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container, { ContainerProps } from './Container';

export default {
    title: "Components/Container",
    component: Container,
    tags: ['autodocs'],
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
