import DropdownContainer from './DropdownContainer.tsx';
const meta = {
    title: 'Components/DropdownContainer',
    component: DropdownContainer,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // Define the controls for your component's properties
        backgroundColor: {
            control: 'color',
            description: 'Background color of the DropdownContainer',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable DropdownContainer',
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
