import styled from "vue-styled-components";
import { color } from "../../shared/styles";

const btnProps = { disabled: Boolean, appearance: String, withIcon: Boolean };

const APPEARANCES = {
  PRIMARY: 'primary',
};

const StyledAskoButton = styled("button", btnProps)`
  font-family: "NeuzeitGro", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0,0,0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;

  ${(props) => props.withIcon && `
    span {
      margin-right: 15px;
    }
  `}

  &:hover {
    background: ${color.duck_egg_blue};
  }

  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
      background: ${color.white};
      border: 1px solid ${color.black}

      &:hover {
        border: 1px solid transparent;
      }
    `}

  ${(props) => props.disabled && `
    cursor: not-allowed !important;
    pointer-events: none;
    opacity: 0.5;
    &:hover {
      transform: none;
    }
  `} 
`;

export default StyledAskoButton;
