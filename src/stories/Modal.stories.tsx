import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';

export default {
    title: "Components/Modal",
    component: Modal,
    tags: ['autodocs'],
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
