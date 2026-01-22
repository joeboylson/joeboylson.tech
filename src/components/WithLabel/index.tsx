import styled from "styled-components";
import { WithChildren } from "../../types";

type _props = WithChildren & {
  label: string;
};

export default function WithLabel({ children, label }: _props) {
  const StyledWithLabel = styled("div")`
    width: fit-content;

    &::after {
      font-family: Elios;
      font-size: 12px;
      background-color: var(--color-label-bg);
      color: var(--color-label-text);
      position: fixed;
      padding: 0 8px;
      border-radius: 24px;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    &:hover::after {
      top: var(--clientY);
      left: var(--clientX);
      transform: translate(4px, 4px);
      content: "${label}";
    }
  `;

  return <StyledWithLabel>{children}</StyledWithLabel>;
}
