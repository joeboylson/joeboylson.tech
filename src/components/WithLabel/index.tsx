import { WithChildren } from "../../types";

type _props = WithChildren & {
  label: string;
};

export default function WithLabel({ children, label }: _props) {
  return (
    <div data-id="WithLabel" className="with-label w-fit" data-label={label}>
      {children}
    </div>
  );
}
