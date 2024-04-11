import DropdownButton from './DropdownButton.tsx';
const meta = {
    title: 'Components/DropdownButton',
    component: DropdownButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isVisible: {
            control: 'boolean',
            description: 'Control visibility of DropdownButton',
        },
        backgroundColor: {
            control: 'color',
            description: 'Background color of the DropdownButton',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable DropdownButton interaction',
        },
    },
};
export default meta;
// Default state story
export const Default = {
    args: {
        disabled: false,
        isVisible: true,
    },
};
export const disabled = {
    args: {
        disabled: true,
        isVisible: true,
    },
};
