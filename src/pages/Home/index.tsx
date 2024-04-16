import Padding from "../../layout/Padding"
import WithRoundedBorder from "../../layout/WithRoundedBorder"
import "./style.css"


export default function Home() {

    return (
        <div id="page-home">

            <WithRoundedBorder>
                <img src="./profile-picture.jpg" />
            </WithRoundedBorder>

            <WithRoundedBorder>
                <Padding padding={16}>
                    <p><strong>Joe Boylson Tech LLC</strong></p>
                    <p>Full Stack Developer, Analogue Photography Hobbyist, Specialty Coffee Enthusiast</p>
                    <p>
                        <a href="mailto:joeboylson@gmail.com">Email</a> /
                        <a href="https://www.linkedin.com/in/joeboylson/">LinkedIn</a> /
                        <a href="https://instagram.com/jobo.jpg">Instagram</a>
                    </p>
                </Padding>
            </WithRoundedBorder>

        </div>
    )

}