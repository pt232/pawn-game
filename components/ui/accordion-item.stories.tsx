import { ComponentMeta, ComponentStory } from "@storybook/react";
import AccordionItem from "./accordion-item";

export default {
  title: "Accordion",
  component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = (args) => (
  <>
    <AccordionItem {...args} />
    <AccordionItem {...args} />
    <AccordionItem {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum dolor?",
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam ex
      accusamus minus id sed eligendi quos architecto! Expedita, incidunt.
    </p>
  ),
};
