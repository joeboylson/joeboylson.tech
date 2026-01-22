import {
  IconProps,
  ReadCvLogoIcon,
  TerminalWindowIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import { Routes } from "../../constants";
import { ReactNode } from "react";

export type HeaderItem = {
  component: ReactNode;
  to: string;
  label: string;
};

const phosphorParams: IconProps = { size: 24, weight: "duotone" };
const p = phosphorParams; // shorthand

export const headerItems: HeaderItem[] = [
  {
    component: <UserCircleIcon {...p} />,
    to: Routes.PROFILE,
    label: "Profile",
  },
  {
    component: <TerminalWindowIcon {...p} />,
    to: Routes.PROJECTS,
    label: "Projects",
  },
  {
    component: <ReadCvLogoIcon {...p} />,
    to: Routes.EXPERIENCE,
    label: "Experience",
  },
];
