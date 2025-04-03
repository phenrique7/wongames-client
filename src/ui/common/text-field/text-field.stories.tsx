import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@/ui/common/text-field/text-field";

const meta = {
  title: "components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  render: () => (
    <TextField>
      <TextField.Label>Label</TextField.Label>
    </TextField>
  ),
};
