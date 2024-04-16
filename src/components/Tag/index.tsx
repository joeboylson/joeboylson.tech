import Padding from "../../layout/Padding";
import { WithChildren } from "../../types";
import "./style.css";

export function Tag({ children }: WithChildren) {
    return (
        <div className="components-tag">
            {children}
        </div>
    )
}