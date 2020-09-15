<template>
  <table>{{label}}</table>
</template>

<script>
export default {
  name: "FancyTable",

  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>


