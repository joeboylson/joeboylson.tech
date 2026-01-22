import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "../../context/ThemeContext";
import MinimalButton from "../MinimalButton";
import styled from "styled-components";

const StyledThemeToggle = styled(MinimalButton)`
  height: calc(24px + 8px + 8px);
  padding: 8px;
  color: var(--color-text-primary);
  transition: color 0.3s ease;
`;

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <StyledThemeToggle onClick={toggleTheme}>
      {isDark ? (
        <SunIcon size={24} weight="duotone" />
      ) : (
        <MoonIcon size={24} weight="duotone" />
      )}
    </StyledThemeToggle>
  );
}
