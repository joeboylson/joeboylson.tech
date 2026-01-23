import clsx from "clsx";
import { WithChildren } from "../../types";

export default function Grid({ children }: WithChildren) {
  return (
    <div
      data-id="Grid"
      className={clsx(
        // base
        "w-full grid grid-cols-[1fr] gap-12 max-w-[1096px] mx-auto p-12",
        // 600px
        "sm-600:grid-cols-[repeat(3,1fr)]",
        // 800px
        "md-800:grid-cols-[repeat(5,1fr)] md-800:w-[calc(100%-96px)]"
      )}
    >
      {children}
    </div>
  );
}
