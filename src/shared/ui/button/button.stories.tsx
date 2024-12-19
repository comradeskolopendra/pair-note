import Button from './button';
import type {ButtonProps} from "./button";

export default {
    title: "ui/button",
    component: Button,
    argTypes: {
        children: {
            type: "string",
            name: "label"
        },
        variant: {
            control: {
                type: "radio",
            },
            options: ["danger", "primary", "secondary"],
        },
        size: {
            control: {
                type: "radio",
            },
            options: ["s", "m", "l"]
        }
    }
}

const Template = (args: ButtonProps) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    children: "Click Me",
    variant: "primary",
    size: "m"
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Click Me",
    variant: "secondary",
    size: "m"
}

export const Danger = Template.bind({});
Danger.args = {
    children: "Click Me",
    variant: "danger",
    size: "m"
}