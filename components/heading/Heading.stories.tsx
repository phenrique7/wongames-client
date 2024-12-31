import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from 'src/components/heading/Heading';

export default {
  title: 'components/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Won Games',
};

export const WhiteColor = Template.bind({});

WhiteColor.parameters = {
  backgrounds: {
    default: 'won-dark',
  },
};

WhiteColor.args = {
  ...Default.args,
  color: 'white',
};

export const WithLineLeft = Template.bind({});

WithLineLeft.args = {
  ...Default.args,
  line: 'left',
};

export const WithLineBottom = Template.bind({});

WithLineBottom.args = {
  ...Default.args,
  line: 'bottom',
};
