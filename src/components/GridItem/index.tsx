import clsx from "clsx";
import { WithChildren } from "../../types";

type _props = WithChildren & {
  sizeL: 5 | 4 | 3 | 2 | 1;
  sizeM: 3 | 2 | 1;
};

const colSpanMd800: Record<number, string> = {
  1: "md-800:col-span-1",
  2: "md-800:col-span-2",
  3: "md-800:col-span-3",
  4: "md-800:col-span-4",
  5: "md-800:col-span-5",
};

const colSpanSm600: Record<number, string> = {
  1: "sm-600:col-span-1",
  2: "sm-600:col-span-2",
  3: "sm-600:col-span-3",
};

export default function GridItem({ children, sizeL, sizeM }: _props) {
  return (
    <div
      data-id="GridItem"
      className={clsx(
        // base
        "w-full grid grid-cols-[1fr] gap-3 content-start col-span-1",
        // 600px
        colSpanSm600[sizeM],
        // 800px
        colSpanMd800[sizeL]
      )}
    >
      {children}
    </div>
  );
}
