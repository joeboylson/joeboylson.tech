import Padding from "../../layout/Padding";
import WithRoundedBorder from "../../layout/WithRoundedBorder";
import Tag from "../Tag";
import "./style.css"

export default function Footer() {
    return (
        <Padding padding={4}>
            <WithRoundedBorder>
                <Padding padding={4}>
                    <div id="components-footer-tagswrapper">
                        <Tag>505</Tag>
                        <Tag>Dimension C-137</Tag>
                    </div>
                </Padding>
            </WithRoundedBorder>
        </Padding>

    )
}