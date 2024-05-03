import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { WithChildren } from "../../types";
import Padding from "../Padding";
import "./style.css";

export default function PageWrapper({ children }: WithChildren) {

    return (
        <div id="layout-pagewrapper">
            {/* HEADER */}
            <Header />

            {/* BODY */}
            <div id="layout-pagewrapper-body">
                <Padding padding={4}>
                    {children}
                </Padding>
            </div>

            {/* FOOTER */}
            <Footer />

        </div >
    )

}