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

export const Primary: ComponentStory<typeof Dialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Dialog
        {...args}
        isOpen={isOpen}
        hasCloseBtn
        close={() => setIsOpen(false)}
      />
    </>
  );
};
