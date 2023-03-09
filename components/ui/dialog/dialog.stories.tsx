import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { useState } from "react";
import Button from "../button";
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

Default.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);
  const openDialogButton = await canvas.getByRole("button", { name: /open/i });

  await userEvent.click(openDialogButton);

  const dialogTitle = await canvas.getByText(/title/i);
  const closeDialogButton = await canvas.getByRole("button", {
    name: /close dialog/i,
  });

  expect(dialogTitle).toBeVisible();

  await userEvent.click(closeDialogButton);

  expect(dialogTitle).not.toBeVisible();
};
