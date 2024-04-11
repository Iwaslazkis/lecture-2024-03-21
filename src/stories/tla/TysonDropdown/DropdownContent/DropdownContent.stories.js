import DropdownContent from './DropdownContent.tsx';
const meta = {
    title: 'Components/DropdownContent',
    component: DropdownContent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    argTypes: {
        isVisible: {
            control: 'boolean',
            description: 'Control visibility of DropdownContent',
        },
        backgroundColor: {
            control: 'color',
            description: 'Background color of the DropdownContent',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable DropdownContent interaction',
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
