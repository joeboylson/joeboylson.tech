import clsx from "clsx";
import { WithChildren } from "../../types";

type _props = WithChildren & {
  onClick: (() => void) | ((event: React.MouseEvent<HTMLElement>) => void);
  className?: string;
  "data-id"?: string;
};

export default function MinimalButton({ onClick, children, className, "data-id": dataId }: _props) {
  return (
    <button
      data-id={dataId ?? "MinimalButton"}
      onClick={onClick}
      className={clsx(
        "w-fit p-0 m-0 border-0 outline-none bg-transparent cursor-pointer text-text-primary transition-colors duration-300 flex items-center justify-center",
        className
      )}
    >
      {children}
    </button>
  );
}
