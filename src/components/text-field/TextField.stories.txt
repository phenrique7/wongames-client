import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { LockIcon } from 'src/icons/LockIcon';
import { SearchIcon } from 'src/icons/SearchIcon';
import { TextField } from 'src/components/text-field/TextField';

export default {
  title: 'components/TextField',
  component: TextField,
  args: {
    id: 'text-input',
    placeholder: 'Type some text...',
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});

export const WithLabel = Template.bind({});

WithLabel.args = {
  label: 'Email',
};

export const WithLeftElement = Template.bind({});

WithLeftElement.args = {
  leftElement: <LockIcon color="rgb(156 163 175)" />,
};

export const WithRightElement = Template.bind({});

WithRightElement.args = {
  rightElement: <SearchIcon color="rgb(156 163 175)" />,
};

export const WithError = Template.bind({});

WithError.args = {
  ...WithLabel.args,
  errorMessage: 'Email is required.',
};
