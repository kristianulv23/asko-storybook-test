<template>
  <table>{{label}}</table>
</template>

<script>
export default {
  name: "FancyTableHead",

  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>


