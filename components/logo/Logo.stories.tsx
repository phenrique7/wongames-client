import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from './Logo';

export default {
  title: 'components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  backgrounds: {
    default: 'won-dark',
  },
};

export const LargeBlack = Template.bind({});

LargeBlack.args = {
  color: 'black',
  size: 'large',
};

export const WithoutLabel = Template.bind({});

WithoutLabel.args = {
  label: false,
};
