<template>
  <styled-asko-button
    type="button"
    @click="onClick"
    :disabled="disabled"
    :appearance="appearance"
    :withIcon="withIcon"
  >
    <span>{{ label }}</span>
    <asko-icon v-if="withIcon" icon="arrow_right" :block="false" :height="iconHeight"></asko-icon>
  </styled-asko-button>
</template>

<script>
import StyledAskoButton from "./style";
import { AskoIcon } from "../AskoIcon";

export default {
  name: "AskoButton",
  components: { StyledAskoButton, AskoIcon },
  props: {
    label: {
      type: String,
      required: true,
      default: "Button Text"
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    appearance: {
      type: String,
      default: "primary"
    },
    iconHeight: {
      type: Number
    }
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
