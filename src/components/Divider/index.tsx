import styled from "styled-components";

const StyledDivider = styled("div")`
  width: 100%;
  height: 0;
  border-top: 1px solid var(--color-border);
  transition: border-color 0.3s ease;
`;

export default function Divider() {
  return <StyledDivider />;
}
