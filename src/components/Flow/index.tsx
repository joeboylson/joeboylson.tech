import { WithChildren } from "../../types";

export default function Flow({ children }: WithChildren) {
  return (
    <div data-id="Flow" className="w-full flex flex-wrap gap-1">
      {children}
    </div>
  );
}
