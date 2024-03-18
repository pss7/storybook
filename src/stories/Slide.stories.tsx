import React from 'react';
import { Meta, Story } from '@storybook/react';
import Slide, { SlideProps } from './Slide';

export default {
    title: "Components/Slide",
    component: Slide,
    tags: ['autodocs'],
} as Meta;

const Template: Story<SlideProps> = (args) => <Slide {...args} />;

export const Basic = Template.bind({});
Basic.args = {

};
