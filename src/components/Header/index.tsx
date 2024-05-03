import Padding from "../../layout/Padding";
import WithRoundedBorder from "../../layout/WithRoundedBorder";
import "./style.css";

export default function Header() {
    return (
        <Padding padding={4}>
            <WithRoundedBorder>
                <div id="components-header">
                    <Padding padding={4}>
                        <img src="./logo.png" alt="Joe Boylson Tech Logo" />
                    </Padding>
                </div>
            </WithRoundedBorder>
        </Padding>

    );
}