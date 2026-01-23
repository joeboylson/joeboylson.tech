import { WithChildren } from "../../types";

export default function List({ children }: WithChildren) {
  return (
    <div data-id="List" className="w-full grid grid-cols-[1fr] gap-1">
      {children}
    </div>
  );
}
