import styled from "styled-components";
import { Link } from "react-router-dom";
import { headerItems } from "./HeaderItems";
import WithLabel from "../WithLabel";
import ThemeToggle from "../ThemeToggle";

const StyledHeader = styled("div")`
  display: grid;
  grid-template-columns: repeat(${headerItems.length + 1}, 24px);
  gap: 24px;
  place-items: center;
  width: fit-content;
  margin: 0 auto;
`;

const HeaderNavLink = styled(Link)`
  height: calc(24px + 8px + 8px);
  padding: 8px;
  color: var(--color-text-primary);
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export default function Header() {
  return (
    <StyledHeader>
      {headerItems.map(({ to, component, label }) => (
        <WithLabel label={label} key={label}>
          <HeaderNavLink to={to}>{component}</HeaderNavLink>
        </WithLabel>
      ))}
      <WithLabel label="Theme">
        <ThemeToggle />
      </WithLabel>
    </StyledHeader>
  );
}
