import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dialog from "./dialog";

export default {
  title: "Dialog",
  component: Dialog,
  args: {
    children: "Open dialog window",
  },
} as ComponentMeta<typeof Dialog>;

export const Primary: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args} hasCloseBtn />
);
