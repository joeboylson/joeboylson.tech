import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "../../context/ThemeContext";
import MinimalButton from "../../components/MinimalButton";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <MinimalButton
      data-id="ThemeToggle"
      onClick={toggleTheme}
      className="h-10 p-2"
    >
      {isDark ? (
        <SunIcon size={24} weight="duotone" color="var(--color-accent)" />
      ) : (
        <MoonIcon size={24} weight="duotone" color="var(--color-accent)" />
      )}
    </MinimalButton>
  );
}
