import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@/components/button/Button';
import { AddShoppingCartIcon } from '@/icons/AddShoppingCartIcon';

export default {
  title: 'components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ gap: '0.5rem', display: 'flex', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...other }) => {
  if (other.full) {
    return <Button {...other}>{children}</Button>;
  }

  return (
    <>
      <Button size="sm" {...other}>
        {children} SM
      </Button>
      <Button size="md" {...other}>
        {children} MD
      </Button>
      <Button size="lg" {...other}>
        {children} LG
      </Button>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  children: 'Full width',
  full: true,
};

export const WithPrimaryIcon = Template.bind({});

WithPrimaryIcon.storyName = 'With Icon (Primary)';

WithPrimaryIcon.args = {
  children: 'With Icon',
  icon: <AddShoppingCartIcon />,
};

export const WithSecondaryIcon = Template.bind({});

WithSecondaryIcon.storyName = 'With Icon (Secondary)';

WithSecondaryIcon.args = {
  children: 'With Icon',
  variant: 'secondary',
  icon: <AddShoppingCartIcon />,
};
