import Header from "../Header";
import { WithChildren } from "../../types";
import { MouseEventHandler, useRef } from "react";

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
    <div
      data-id="PageWrapper"
      className="h-screen grid grid-cols-1 grid-rows-[64px_1fr] overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <Header />
      <div data-id="PageWrapperBody" className="border-t border-border h-[calc(100vh-64px-1px)] overflow-y-auto overflow-x-hidden transition-colors duration-300">
        <div data-id="PageWrapperContent" className="!py-[72px] grid place-items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
