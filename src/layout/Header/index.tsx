import { Link } from "react-router-dom";
import { headerItems } from "./HeaderItems";
import WithLabel from "../../components/WithLabel";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <div data-id="Header" className="w-full flex justify-center items-center">
      <div
        data-id="HeaderNav"
        className="grid gap-6 place-items-center"
        style={{ gridTemplateColumns: `repeat(${headerItems.length + 1}, 24px)` }}
      >
        {headerItems.map(({ to, component, label }) => (
          <WithLabel label={label} key={label}>
            <Link
              to={to}
              className="h-10 p-2 text-text-primary transition-colors duration-300 flex items-center justify-center no-underline"
            >
              {component}
            </Link>
          </WithLabel>
        ))}
        <WithLabel label="Theme">
          <ThemeToggle />
        </WithLabel>
      </div>
    </div>
  );
}
