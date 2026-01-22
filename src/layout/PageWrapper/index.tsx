import styled from "styled-components";
import Header from "../Header";
import { WithChildren } from "../../types";
import { MouseEventHandler, useRef } from "react";

const StyledPageWrapper = styled("div")`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr;
  overflow-x: hidden;
`;

const PageWrapperBody = styled("div")`
  border-top: 1px solid var(--color-border);
  height: calc(100vh - 64px - 1px); // 1px extra fpr border
  overflow-y: auto;
  overflow-x: hidden;
  transition: border-color 0.3s ease;
`;

const PageBottomSpacer = styled("div")`
  height: 120px;
`;

export default function PageWrapper({ children }: WithChildren) {
  const coordinatesRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = ({
    clientX,
    clientY,
  }) => {
    const element = coordinatesRef.current;
    if (element) element.innerHTML = `(${clientX}, ${clientY})`;

    const root = document.querySelector(":root") as HTMLElement;
    root?.style.setProperty("--clientX", `${clientX}px`);
    root?.style.setProperty("--clientY", `${clientY}px`);
  };

  return (
    <StyledPageWrapper onMouseMove={handleMouseMove}>
      <Header />
      <PageWrapperBody>
        {children}
        <PageBottomSpacer />
      </PageWrapperBody>
    </StyledPageWrapper>
  );
}
