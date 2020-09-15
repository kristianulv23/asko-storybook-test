<template>
  <table>{{label}}</table>
</template>

<script>
export default {
  name: "FancyTableBody",

  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>


