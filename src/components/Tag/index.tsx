import { WithChildren } from "../../types";
import "./style.css";

export default function Tag({ children }: WithChildren) {
    return (
        <div className="components-tag">
            {children}
        </div>
    )
}