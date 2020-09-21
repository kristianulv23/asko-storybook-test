<template>
  <asko-svg
    :id="name"
    :viewBox="viewBox"
    :height="height"
    :block="block"
    version="1.1"
  >
    <title>{{ name }}</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g fill="#000000" fill-rule="nonzero">
        <asko-path :d="path" />
      </g>
    </g>
  </asko-svg>
</template>
  
<script>
import { AskoSvg, AskoPath } from "./style";
import { icons } from "../../shared/icons";
import { color } from "../../shared/styles";

export default {
  name: "AskoIcon",
  components: { AskoSvg, AskoPath },
  data() {
    return {
      viewBox: [0, 0, 0, 0]
    };
  },
  props: {
    /**
    Sets the icon type for AskoIcon
    */
    icon: {
      type: String,
      required: true
    },
    /**
    Sets the display property for AskoIcon
    */
    block: {
      type: Boolean,
      default: true
    },
    /**
    Sets the height for AskoIcon
    */
    height: {
      type: Number,
      default: 20
    }
  },
  computed: {
    path() {
      return icons[this.icon].path;
    },
    name() {
      return icons[this.icon].name;
    }
  },
  mounted() {
    const svg = document.getElementById(`${this.name}`);
    const box = svg.getBBox();
    this.viewBox = [box.x, box.y, box.width, box.height].join(" ");
  }
};
</script>
    