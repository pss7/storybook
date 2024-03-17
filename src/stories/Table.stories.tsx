import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table, { TableProps } from './Table';

export default {
    title: "Components/Table",
    component: Table,
    tags: ['autodocs'],
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
