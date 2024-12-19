import Input from "./input";
import type {InputProps} from "./input";

export default {
    title: "ui/input",
    component: Input,
    argTypes: {
        label: {
            type: "string",
        },
        status: {
            control: {
                type: "radio"
            },
            options: ["valid", "invalid"]
        }
    }
}

const Template = (args: InputProps) => <Input {...args}/>;

export const Default = Template.bind({});
Default.args = {
    label: "Label",
    status: "valid"
}

export const Danger = Template.bind({});
Danger.args = {
    label: "Label",
    status: "invalid"
}