import { Coffee, TerminalWindow, UserCircle } from "@phosphor-icons/react";
import "./style.css";
import MinimalButton from "../MinimalButton";
import {
  goToBuyMeACoffee,
  goToProfilePage,
  goToProjectsPage,
} from "../../utils";

export default function Header() {
  return (
    <div id="components-header">
      <img src="./favicon-32x32.png" alt="Joe Boylson" />

      <MinimalButton onClick={goToProfilePage}>
        <UserCircle size={24} weight="duotone" />
      </MinimalButton>

      <MinimalButton onClick={goToProjectsPage}>
        <TerminalWindow size={24} weight="duotone" />
      </MinimalButton>

      <MinimalButton onClick={goToBuyMeACoffee}>
        <Coffee size={24} weight="duotone" />
      </MinimalButton>
    </div>
  );
}
