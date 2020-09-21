const { splitUpperCaseWithDash } = require("../utils");

const vueTemplate = (tag) => {
  return `<template>
  <styled-${splitUpperCaseWithDash(
    tag
  )} @click="onClick" :size="size" :style="style">{{ label }}</styled-${splitUpperCaseWithDash(
    tag
  )}>
</template>
  
<script>

import Styled${tag} from "./style";

export default {
  name: "${tag}",
  components: { Styled${tag} },
  props: {
    /**
    Sets the inner text for ${tag}
    */
    label: {
      type: String
    },
    /**
    Sets the background color for ${tag}
    */
    backgroundColor: {
      type: String
    },
    /**
    Sets the size for ${tag}
    */
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
  },
  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },
  methods: {
    onClick() {
      this.$emit("onClick");
      console.log("${tag} clicked!")
    }
  }
};
</script>
    `;
};

const packageJsonTemplate = (tag) => {
  return `{
  "name": "@fortedigital/${tag.toLowerCase()}",
  "version": "1.0.0",
  "publishConfig": {
    "access": "restricted"
  },
  "repository": {
    "type": "git",
    "url": "ssh://git@github.com:fortedigital/asko-storybook.git"
  }
}
  `;
};

const readmeTemplate = (tag) => {
  return `# ${"`"}${tag}${"`"}

> TODO: description

## Usage

${"```"}
TODO: usage
${"```"}
  `;
};

const indexTemplate = (tag) => {
  return `export { default as ${tag} } from "./${tag}";`;
};

const testTemplate = (tag) => {
  return `import { shallowMount } from "@vue/test-utils";
import ${tag} from "@/components/${tag}/${tag}.vue";

describe("${tag}.vue", () => {
  it("renders props.label when passed", () => {
    const label = "${tag}";
    const wrapper = shallowMount(${tag}, {
      propsData: { label }
    });
    expect(wrapper.text()).toMatch(label);
  });
});
`;
};

const styledTemplate = (tag) => {
  return `import styled from "vue-styled-components";
import { typography } from "../../shared/styles";

const divProps = { size: String };

const fontSize = (type) => {
  switch (type) {
    case "small":
      return ${"`"}
        font-size: ${"${"}typography.size.s1}px;
        ${"`"};
    case "medium":
      return ${"`"}
        font-size: ${"${"}typography.size.s2}px;
        ${"`"};
    case "large":
      return ${"`"}
        font-size: ${"${"}typography.size.s3}px;
        ${"`"};
  }
};

const Styled${tag} = styled("div", divProps)${"`"}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10em;
  width: 20em;
  padding: 1em;
  background-color: black;
  color: white;
  ${"${"}(props) => fontSize(props.size)}
${"`"};

export default Styled${tag};
`;
};

const storyTemplate = (tag) => {
  return `import { color } from "../shared/styles";

import ${tag} from "../components/${tag}/${tag}";
export default {
  title: "Example/${tag}",
  component: ${tag},
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ${tag} },
  template: '<${splitUpperCaseWithDash(
    tag
  )} @onClick="onClick" v-bind="$props" />'
});

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small ${tag}",
  backgroundColor: color.pale
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium ${tag}",
  backgroundColor: color.duck_egg_blue
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large ${tag}",
  backgroundColor: color.black
};
  `;
};

module.exports = {
  vueTemplate,
  packageJsonTemplate,
  readmeTemplate,
  indexTemplate,
  testTemplate,
  styledTemplate,
  storyTemplate,
};
