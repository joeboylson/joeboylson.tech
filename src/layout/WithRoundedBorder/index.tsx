import { WithChildren } from "../../types";
import "./style.css";

export default function WithRoundedBorder({ children }: WithChildren) {

    return (
        <div className="layout-withroundedborder">
            {children}
        </div>
    )

}