import React from 'react';
import { Meta, Story } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
    title: "Components/Image",
    component: Image,
    tags: ['autodocs'],
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    imageAlt:"대체텍스트",
    imageSrc:"/img1.jpg",
}
