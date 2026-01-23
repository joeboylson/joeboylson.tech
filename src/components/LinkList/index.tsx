import WithLabel from "../WithLabel";

interface LinkProps {
  href: string;
  text: string;
  label: string;
  target?: "_blank";
}

interface _props {
  links: LinkProps[];
}

export default function LinkList({ links }: _props) {
  return (
    <div data-id="LinkList" className="grid grid-cols-[1fr]">
      {links.map(({ href, text, label, target }) => {
        return (
          <WithLabel label={label} key={href}>
            <a href={href} target={target} className="w-fit">
              → {text}
            </a>
          </WithLabel>
        );
      })}
    </div>
  );
}
