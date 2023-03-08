import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Button from "./button";
import Dialog from "./dialog";

export default {
  title: "Dialog",
  component: Dialog,
  args: {
    children: "Open dialog window",
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Dialog {...args} isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
};
