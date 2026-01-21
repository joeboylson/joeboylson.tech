import {
  IconProps,
  ReadCvLogoIcon,
  TerminalWindowIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import {
  goToExperiencePage,
  goToProfilePage,
  goToProjectsPage,
} from "../../utils";

import { ReactNode } from "react";

export type HeaderItem = {
  component: ReactNode;
  onClick: () => void;
  label: string;
};

const phosphorParams: IconProps = { size: 24, weight: "duotone" };
const p = phosphorParams; // shorthand

export const headerItems: HeaderItem[] = [
  {
    component: <UserCircleIcon {...p} />,
    onClick: goToProfilePage,
    label: "Profile",
  },
  {
    component: <TerminalWindowIcon {...p} />,
    onClick: goToProjectsPage,
    label: "Projects",
  },
  {
    component: <ReadCvLogoIcon {...p} />,
    onClick: goToExperiencePage,
    label: "Experience",
  },
];
