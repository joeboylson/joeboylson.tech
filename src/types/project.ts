import { Related } from "./related";

export interface ProjectLink {
  href: string;
  text: string;
  label: string;
  external: boolean;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  description: string[];
  links?: ProjectLink[];
  tags: string[];
  note?: string;
  related?: Related;
  isOther: boolean;
}
