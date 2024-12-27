import type { Meta, StoryObj } from '@storybook/web-components';
import '@zephyra-ui/z-button';

const meta: Meta = {
  component: 'z-button',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Button',
    disabled: false,
  },
};
