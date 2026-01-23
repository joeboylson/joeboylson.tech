import { WithChildren } from "../../types";

export default function RoundedWrapper({ children }: WithChildren) {
  return <div data-id="RoundedWrapper" className="w-full rounded-lg overflow-hidden">{children}</div>;
}
