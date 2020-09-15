<template>
  <table>{{label}}</table>
</template>

<script>
export default {
  name: "FancyTableCell",

  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>


