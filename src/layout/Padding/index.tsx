import { WithChildren } from "../../types";

export type PaddingProps = WithChildren & {
    /**
     * only allow these padding values throughout the app
     */
    padding: 4 | 8 | 16 | 32 | 64;
}

export default function Padding({ children, padding }: PaddingProps) {

    return (
        <div style={{ padding: `${padding}px` }}>
            {children}
        </div>
    )

}