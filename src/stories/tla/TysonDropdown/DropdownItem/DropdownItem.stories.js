import DropdownItem from './DropdownItem.tsx';
const meta = {
    title: 'Components/DropdownItem',
    component: DropdownItem,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // Define the controls for your component's properties
        backgroundColor: {
            control: 'color',
            description: 'Background color of the DropdownItem',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable DropdownItem',
        },
    },
};
export default meta;
// Default state story
export const Default = {
    args: {
        disabled: false,
    },
};
export const disabled = {
    args: {
        disabled: true,
    },
};
