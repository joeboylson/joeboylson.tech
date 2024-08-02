import { Coffee, TerminalWindow, UserCircle } from "@phosphor-icons/react";
import MinimalButton from "../MinimalButton";
import {
  goToBuyMeACoffee,
  goToProfilePage,
  goToProjectsPage,
} from "../../utils";
import styled from "styled-components";

const StyledHeader = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 24px);
  gap: 24px;
  place-items: center;
  width: fit-content;
  margin: 0 auto;
`;

const HeaderLogo = styled("img")`
  width: 18px;
`;

const HeaderNavItem = styled(MinimalButton)`
  height: calc(24px + 8px + 8px);
  padding: 8px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderLogo src="./favicon-32x32.png" alt="joeboylson.tech logo" />

      <HeaderNavItem onClick={goToProfilePage}>
        <UserCircle size={24} weight="duotone" />
      </HeaderNavItem>

      <HeaderNavItem onClick={goToProjectsPage}>
        <TerminalWindow size={24} weight="duotone" />
      </HeaderNavItem>

      <HeaderNavItem onClick={goToBuyMeACoffee}>
        <Coffee size={24} weight="duotone" />
      </HeaderNavItem>
    </StyledHeader>
  );
}
