import styled from "styled-components";
import { WithChildren } from "../../types";

const StyledTag = styled("div")`
  background-color: var(--color-tag-bg);
  width: fit-content;
  border-radius: 100px;
  padding: 0 8px;
  color: var(--color-tag-text);
  font-size: 12px;
  font-family: Elios;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export default function Tag({ children }: WithChildren) {
  return <StyledTag>{children}</StyledTag>;
}
