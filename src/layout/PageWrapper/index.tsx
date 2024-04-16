import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { WithChildren } from "../../types";
import "./style.css";

export default function PageWrapper({ children }: WithChildren) {

    return (
        <div id="layout-pagewrapper">
            {/* HEADER */}
            <Header />

            {/* BODY */}
            {children}

            {/* FOOTER */}
            <Footer />

        </div >
    )

}