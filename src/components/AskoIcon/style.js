import styled from "vue-styled-components";

const svgProps = { block: Boolean, color: String };

export const AskoSvg = styled("svg", svgProps)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  vertical-align: middle;
  shape-rendering: inherit;
  color: ${(props) => props.color};
`;

export const AskoPath = styled.path`
  fill: currentColor;
`;
