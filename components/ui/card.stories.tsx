import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./card";

export default {
  title: "Card",
  component: Card,
  args: {
    children: "A simple card",
  },
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);
