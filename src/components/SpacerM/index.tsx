import clsx from "clsx";

type _props = {
  sizeM: 3 | 2 | 1;
};

const colSpanSm600: Record<number, string> = {
  1: "sm-600:col-span-1",
  2: "sm-600:col-span-2",
  3: "sm-600:col-span-3",
};

export default function SpacerM({ sizeM }: _props) {
  return (
    <div
      data-id="SpacerM"
      className={clsx(
        // base - hidden
        "hidden",
        // 600px - show with col-span
        "sm-600:block",
        colSpanSm600[sizeM],
        // 800px - hidden again
        "md-800:hidden"
      )}
    />
  );
}
