import clsx from "clsx";

type _props = {
  sizeL: 5 | 3 | 2 | 1;
};

const colSpanMd800: Record<number, string> = {
  1: "md-800:col-span-1",
  2: "md-800:col-span-2",
  3: "md-800:col-span-3",
  5: "md-800:col-span-5",
};

export default function SpacerL({ sizeL }: _props) {
  return (
    <div
      data-id="SpacerL"
      className={clsx(
        // base - hidden by default
        "hidden",
        // 800px - show with col-span
        "md-800:block md-800:w-full md-800:grid md-800:grid-cols-[1fr] md-800:gap-3 md-800:content-start",
        colSpanMd800[sizeL]
      )}
    />
  );
}
