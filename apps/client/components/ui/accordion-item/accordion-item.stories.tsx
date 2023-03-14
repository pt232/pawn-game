import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import AccordionItem from "./accordion-item";

export default {
  title: "Accordion",
  component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = (args) => (
  <AccordionItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Lorem ipsum dolor?",
  children: "Ab totam ex accusamus minus id sed eligendi quos architecto!",
};

Default.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);
  const accordionItem = await canvas.getByText(/lorem ipsum dolor?/i);

  await userEvent.click(accordionItem);

  const accordionAnswer = await canvas.getByText(
    /ab totam ex accusamus minus id/i,
  );

  expect(accordionAnswer).toBeVisible();
};
