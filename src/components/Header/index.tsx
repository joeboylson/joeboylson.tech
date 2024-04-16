import Padding from "../../layout/Padding";
import "./style.css";

export default function Header() {
    return (
        <div id="components-header">
            <Padding padding={4}>
                <img src="./logo.png" />
            </Padding>
        </div>
    );
}