import styled from "vue-styled-components";
import { breakpoints } from "../../shared/styles";

const messageProps = { backgroundColor: String, color: String };

export const StyledAskoMessage = styled("section", messageProps)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em;
  line-height: 1.25;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

export const StyledHeading = styled.h1`
  font-weight: 700;
  font-size: 20px;

  ${breakpoints(`
    font-size: 24px;
  `).phone_only}
`

export const StyledParagraph = styled.p`
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  
  ${breakpoints(`
    font-size: 18px;
  `).phone_only}
`;
