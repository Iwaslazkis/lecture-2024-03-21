import { Meta, StoryObj } from '@storybook/react';
import { DropdownProps } from './Dropdown.types';
import Dropdown from './Dropdown';

export default {
  title: 'Best_Components/PierceDropdown',
  component: Dropdown,
  tags:['autodocs'],
  argTypes: {
    label: { control: 'text' },
    options: { control: 'array' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean'},
    onSelect: { action: 'selected' },
  },
} as Meta;

export const Primary: StoryObj<DropdownProps> = {
  args: {
    label: 'Drop Down',
    options: ['Option 1', 'Option 2', 'Option 3'],
    onSelect: () => {},
  },
};

export const Disabled: StoryObj<DropdownProps> = {
  args: {
    label: 'Disabled Drop Down',
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: true,
  },
};