import React from 'react';
import { Meta, Story } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
    title: "Components/Title",
    component: Title,
    tags: ['autodocs'],
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
Basic.args = {

    text: "h1 ~ h6 제목을 적용합니다."

};
