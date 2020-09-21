<template>
  <list>
    <item v-for="icon in icons" :key="icon.name">
      <asko-icon :icon="icon.name"></asko-icon>
    </item>
  </list>
</template>

<script>
import styled from "vue-styled-components";
import { AskoIcon } from "../../components/AskoIcon";

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  svg {
    margin-right: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export default {
  name: "AskoIconList",
  components: {
    Item,
    List,
    AskoIcon
  },
  props: {
    icons: {
      type: Object
    }
  }
};
</script>