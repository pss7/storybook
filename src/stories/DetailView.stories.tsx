import React from 'react';
import { Meta, Story } from '@storybook/react';
import DetailView, { DetailProps } from './DetailView';

export default {
    title: "pages/DetailView",
    component: DetailView,
    tags: ['autodocs'],
} as Meta;

const Template: Story<DetailProps> = (args) => <DetailView {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
