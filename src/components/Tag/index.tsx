import { WithChildren } from "../../types";

export default function Tag({ children }: WithChildren) {
  return (
    <div
      data-id="Tag"
      className="bg-[var(--color-tag-bg)] w-fit rounded-full !px-[8px] text-[var(--color-tag-text)] !text-[12px] !font-[Elios] whitespace-nowrap transition-colors duration-300"
    >
      {children}
    </div>
  );
}
