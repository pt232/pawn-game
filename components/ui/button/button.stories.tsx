import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./button";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "md",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "md",
};
