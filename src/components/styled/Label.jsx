import styled from "styled-components";

const Label = styled.label`
  color: ${({ Error }) => (Error ? "red" : "black")};
`;

export default Label;
