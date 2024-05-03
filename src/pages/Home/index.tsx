import Tag from "../../components/Tag"
import Padding from "../../layout/Padding"
import Spaced from "../../layout/Spaced"
import WithRoundedBorder from "../../layout/WithRoundedBorder"
import "./style.css"


export default function Home() {

    return (
        <div id="page-home">

            <WithRoundedBorder>
                <img src="./profile-picture.jpg" alt="Joe Boylson" />
            </WithRoundedBorder>

            <WithRoundedBorder>
                <Padding padding={16}>
                    <Spaced spacing={8}>
                        <p><strong>Joe Boylson Tech LLC</strong></p>
                        <p>Web & App Developer, Analogue Photography Hobbyist, Specialty Coffee Enthusiast</p>
                        <a href="mailto:joeboylson@gmail.com">Email</a>
                        <a href="https://www.linkedin.com/in/joeboylson/">LinkedIn</a>
                        <a href="https://instagram.com/jobo.jpg">Instagram</a>
                    </Spaced>
                </Padding>
            </WithRoundedBorder>

            <WithRoundedBorder>
                <Padding padding={16}>
                    <Spaced spacing={8}>
                        <Tag>May 3rd, 2024</Tag>
                        <p><strong>Hey there, check out the <i>PlaceLift</i> on the app store.</strong></p>
                        <p><a href="https://placelift.app">Visit our homepage</a></p>
                        <p><a href="https://apps.apple.com/us/app/placelift/id6469234779">Download for iOS</a></p>
                        <p><a href="https://play.google.com/store/apps/details?id=com.placelift.app&pcampaignid=web_share">Download for Android</a></p>
                    </Spaced>

                </Padding >
            </WithRoundedBorder >
        </div >
    )

}