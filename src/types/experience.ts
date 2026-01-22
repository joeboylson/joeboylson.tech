import { Related } from "./related";

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string[];
  skills: string[];
  synopsis: string;
  related?: Related;
}
