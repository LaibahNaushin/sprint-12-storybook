import Input from "./Input";

const meta = {
  title: "Design System/Input",
  component: Input,

  argTypes: {
    label: {
      control: "text",
    },

    placeholder: {
      control: "text",
    },

    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },

    disabled: {
      control: "boolean",
    },

    error: {
      control: "boolean",
    },

    errorMessage: {
      control: "text",
    },
  },

  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    disabled: false,
    error: false,
  },
};

export const Error = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    disabled: false,
    error: true,
    errorMessage: "Please enter a valid email address",
  },
};

export const Disabled = {
  args: {
    label: "Email",
    placeholder: "Input disabled",
    type: "email",
    disabled: true,
    error: false,
  },
};