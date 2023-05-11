import styled from "styled-components";

const Span = styled.span`
  color: ${(Error) => Error && "red"};
`;

export default Span;
