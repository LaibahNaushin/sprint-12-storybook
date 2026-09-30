import Button from "./Button";

const meta = {
  title: "Design System/Button",
  component: Button,

  argTypes: {
    label: {
      control: "text",
      description: "Text displayed inside the button",
    },

    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },

    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },

    disabled: {
      control: "boolean",
    },

    onClick: {
      action: "clicked",
    },
  },

  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    size: "medium",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Button",
    variant: "primary",
    size: "medium",
    disabled: true,
  },
};