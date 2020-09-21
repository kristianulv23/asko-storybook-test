<template>
  <styled-asko-message :backgroundColor="backgroundColor" :color="color">
    <styled-heading>{{ heading }}</styled-heading>
    <styled-paragraph>{{ paragraph }}</styled-paragraph>
  </styled-asko-message>
</template>
  
<script>
import { StyledAskoMessage, StyledParagraph, StyledHeading } from "./style";

export default {
  name: "AskoMessage",
  components: { StyledAskoMessage, StyledParagraph, StyledHeading },
  props: {
    /**
    Sets the heading for AskoMessage
    */
    heading: {
      type: String
    },
    /**
    Sets the paragraph for AskoMessage
    */
    paragraph: {
      type: String
    },
    /**
    Sets the background color for AskoMessage
    */
    backgroundColor: {
      type: String
    },
    /**
    Sets the text color for AskoMessage
    */
    color: {
      type: String
    }
  }
};
</script>
    