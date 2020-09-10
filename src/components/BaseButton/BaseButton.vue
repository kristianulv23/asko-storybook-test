<template>
  <button type="button" :class="classes" @click="onClick($event)" :style="style">{{ label }}</button>
</template>

<script>
import "./base-button.css";

export default {
  name: "base-button",

  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
    backgroundColor: {
      type: String
    }
  },

  computed: {
    classes() {
      return {
        "storybook-base-button": true,
        "storybook-base-button--primary": this.primary,
        "storybook-base-button--secondary": !this.primary,
        [`storybook-base-button--${this.size}`]: true
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  },

  methods: {
    onClick(event) {
      console.log("hello")
      this.$emit("onClick", event);
    }
  }
};
</script>


