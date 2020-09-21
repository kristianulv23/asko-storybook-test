import AskoIcon from "../components/AskoIcon/AskoIcon";
import AskoIconList from "./templates/AskoIconList";
import { icons } from "../shared/icons";

export default {
  title: "Example/AskoIcon",
  component: AskoIcon,
  argTypes: {
    icon: {
      defaultValue: icons.heart_stroked.name,
      control: {
        type: "select",
        options: Object.values(icons).map((icon) => icon.name),
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AskoIcon },
  template: '<asko-icon v-bind="$props" />',
});

const IconsTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AskoIconList },
  template: '<asko-icon-list v-bind="$props" />',
});

const AvailableIcons = IconsTemplate.bind({});
AvailableIcons.args = {
  icons: icons,
};
AvailableIcons.parameters = {
  docs: { page: null },
  actions: { disable: true },
  a11y: {
    disable: true,
  },
};

const HeartStroked = Template.bind({});
HeartStroked.args = {
  icon: icons.heart_stroked.name,
};

const HeartFilled = Template.bind({});
HeartFilled.args = {
  icon: icons.heart_filled.name,
};

export { AvailableIcons, HeartFilled, HeartStroked };
