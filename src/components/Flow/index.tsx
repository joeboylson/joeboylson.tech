import styled from "styled-components";
import { WithChildren } from "../../types";

export default function Flow({ children }: WithChildren) {
  const StyledFlow = styled("div")`
    width: 100%;
    display: flex;

    & > * {
      margin-right: 8px;
    }
  `;

  return <StyledFlow>{children}</StyledFlow>;
}
