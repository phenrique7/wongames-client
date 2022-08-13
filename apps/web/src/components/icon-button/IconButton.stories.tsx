import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from '@/components/icon-button/IconButton';
import { AddShoppingCartIcon } from '@/icons/AddShoppingCartIcon';

export default {
  title: 'components/IconButton',
  component: IconButton,
  decorators: [
    (Story) => (
      <div className="gap-2 flex items-center">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <>
    <IconButton size="sm" {...args} />
    <IconButton size="md" {...args} />
    <IconButton size="lg" {...args} />
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  'aria-label': 'Primary',
  icon: <AddShoppingCartIcon />,
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  'aria-label': 'Secondary',
  icon: <AddShoppingCartIcon color="var(--color-primary)" />,
};
