import styled from "styled-components";
import { WithChildren } from "../../types";

export default function RoundedWrapper({ children }: WithChildren) {
  const StyledGridItem = styled("div")`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  `;

  return <StyledGridItem>{children}</StyledGridItem>;
}
