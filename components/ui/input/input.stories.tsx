import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Input from "./input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "Placeholder",
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByPlaceholderText<HTMLInputElement>(
    /placeholder/i,
  );

  await userEvent.type(input, "Hello World");

  expect(input).toHaveValue("Hello World");
};
