import React from 'react';
import { Meta, Story } from '@storybook/react';
import DetailView from './DetailView';

export default {
    title: "pages/DetailView",
    component: DetailView,
    tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <DetailView {...args} />;

export const DbDetailView = Template.bind({});
DbDetailView.args = {};
