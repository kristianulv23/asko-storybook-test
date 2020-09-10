import BaseButton from "../components/BaseButton/BaseButton";

export default {
  title: "Example/BaseButton",
  component: BaseButton,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: '<base-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "BaseButton",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "BaseButton",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "BaseButton",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "BaseButton",
};
