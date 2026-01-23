import clsx from "clsx";
import { ReactNode } from "react";

interface _props {
  details: (ReactNode | null)[][];
}

export default function Details({ details }: _props) {
  return (
    <div data-id="Details" className="grid grid-cols-[1fr]">
      {details.map(([_1, _2], index) => {
        const isLast = index === details.length - 1;
        return (
          <div
            data-id="DetailsRow"
            key={index}
            className={clsx(
              // base (mobile)
              "grid grid-cols-[1fr] gap-6 !py-2 transition-colors duration-300",
              !isLast && "border-b border-border",
              // 600px
              "sm-600:grid-cols-[1fr_2fr]",
            )}
          >
            <b
              className={clsx(
                // base (mobile)
                "text-left",
                // 600px
                "sm-600:text-right",
              )}
            >
              {_1}
            </b>
            <p>{_2}</p>
          </div>
        );
      })}
    </div>
  );
}
