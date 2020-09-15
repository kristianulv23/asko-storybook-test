<template>
  <table>{{label}}</table>
</template>

<script>
export default {
  name: "FancyTableRow",

  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>


