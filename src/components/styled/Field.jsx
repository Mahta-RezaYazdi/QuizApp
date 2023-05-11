import styled from "styled-components";

const Filed = styled.input.attrs((props) => ({
  type: props.type,
}))`
  padding: 1em;
  border-radius: 15px;
`;

export const InputFiled = styled(Filed).attrs({
  type: "text",
})`
  border: 1px solid
    ${({ isValid, Error }) =>
      isValid ? "lightgreen" : Error ? "red" : "black"};

  &:focus {
    outline: none;
  }
`;

export const CheckboxFiled = styled(Filed).attrs({
  type: "checkbox",
})`
  cursor: pointer;
`;

export default Filed;
