import { color } from "../shared/styles";

import AskoMessage from "../components/AskoMessage/AskoMessage";
export default {
  title: "Example/AskoMessage",
  component: AskoMessage,
  argTypes: {
    backgroundColor: { control: "color" },
    color: {
      defaultValue: color.black,
      control: { type: "select", options: Object.values(color) },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AskoMessage },
  template: '<asko-message v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  heading: "Hei!",
  paragraph: "Dagens faktura jobber vi med for å gjøre ferdig til deg. Sjekk igjen om litt!",
  backgroundColor: color.pale,
};
