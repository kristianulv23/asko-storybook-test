import AskoButton from "../components/AskoButton/AskoButton";
import { icons } from "../shared/icons";
import { action } from "@storybook/addon-actions";

export default {
  title: "Example/AskoButton",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  component: AskoButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const actionsData = {
  onButtonClick: action("onButtonClick"),
};

const buttonTemplate = `<asko-button @onClick="onButtonClick" v-bind="$props" />`;

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AskoButton },
  template: buttonTemplate,
  methods: actionsData,
});

export const Default = Template.bind({});
Default.args = {
  label: "Default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  withIcon: true,
  iconHeight: 15,
  label: "With Icon",
};
