import Card from "./Card";

const meta = {
  title: "Design System/Card",
  component: Card,

  argTypes: {
    title: {
      control: "text",
    },

    description: {
      control: "text",
    },

    category: {
      control: "text",
    },

    actionText: {
      control: "text",
    },

    featured: {
      control: "boolean",
    },
  },

  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = {
  args: {
    title: "Design System Card",
    description:
      "A reusable card component designed for consistent interfaces.",
    category: "Components",
    actionText: "View Details",
    featured: false,
  },
};

export const Featured = {
  args: {
    title: "Featured Component",
    description:
      "This card demonstrates a highlighted state using Storybook Args.",
    category: "Featured",
    actionText: "Explore",
    featured: true,
  },
};