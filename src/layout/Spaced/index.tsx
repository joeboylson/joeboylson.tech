import { WithChildren } from "../../types";
import "./style.css"

export type SpacedProps = WithChildren & {
    /**
     * only allow these padding values throughout the app
     */
    spacing: 4 | 8 | 16 | 32 | 64;
}

export default function Spaced({ children, spacing }: SpacedProps) {

    return (
        <div className="layout-spaced" style={{ gap: `${spacing}px` }}>
            {children}
        </div>
    )

}