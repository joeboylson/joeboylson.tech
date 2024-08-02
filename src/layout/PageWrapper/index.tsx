import styled from "styled-components";
import Header from "../../components/Header";
import { WithChildren } from "../../types";

const StyledPageWrapper = styled("div")`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr;
  overflow-x: hidden;
`;

const PageWrapperBody = styled("div")`
  border-top: 1px solid #ddd;
  height: calc(100vh - 80px);
  overflow-y: auto;
  overflow-x: hidden;
`;

export default function PageWrapper({ children }: WithChildren) {
  return (
    <StyledPageWrapper>
      <Header />
      <PageWrapperBody>{children}</PageWrapperBody>
    </StyledPageWrapper>
  );
}
