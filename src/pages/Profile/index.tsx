import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";
import RoundedWrapper from "../../components/RoundedWrapper";

export default function Profile() {
  return (
    <Grid>
      <GridItem sizeL={2} sizeM={1}>
        <RoundedWrapper>
          <img src="./images/profile-picture.jpg" alt="Joe Boylson" />
        </RoundedWrapper>
      </GridItem>
      <GridItem sizeL={2} sizeM={2}>
        <h1>Hey, I'm Joe</h1>
        <p>
          I'm a Cincinnati local with a degree in BS Software Development from
          UC. My expertise is in full-stack development where I combine
          technical and creative solutions with the future in mind.
        </p>
        <p>
          In the off-hours, I enjoy photography, small entrepreneurial projects,
          and creating other (often full-stack) programs.
        </p>
      </GridItem>

      <GridItem sizeL={3} sizeM={1}>
        <h2>Get in touch</h2>
        <a href="#" className="elios">
          → Email
        </a>
        <a href="#" className="elios">
          → LinkedIn
        </a>
        <a href="#" className="elios">
          → Github
        </a>
      </GridItem>
    </Grid>
  );
}

// {/* <WithRoundedBorder>
//
//   </WithRoundedBorder>

//   <WithRoundedBorder>
//     <Padding padding={16}>
//       <Spaced spacing={8}>
//         <p>
//           <strong>Joe Boylson Tech LLC</strong>
//         </p>
//         <p>
//           Web & App Developer, Analogue Photography Hobbyist, Specialty
//           Coffee Enthusiast
//         </p>
//         <a href="mailto:joeboylson@gmail.com">Email</a>
//         <a href="https://www.linkedin.com/in/joeboylson/">LinkedIn</a>
//       </Spaced>
//     </Padding>
//   </WithRoundedBorder>

//   <WithRoundedBorder>
//     <Padding padding={16}>
//       <Spaced spacing={8}>
//         <Tag>May 3rd, 2024</Tag>
//         <p>
//           <strong>
//             Hey there, check out the <i>PlaceLift</i> on the app store.
//           </strong>
//         </p>
//         <p>
//           <a href="https://placelift.app">Visit our homepage</a>
//         </p>
//         <p>
//           <a href="https://apps.apple.com/us/app/placelift/id6469234779">
//             Download for iOS
//           </a>
//         </p>
//         <p>
//           <a href="https://play.google.com/store/apps/details?id=com.placelift.app&pcampaignid=web_share">
//             Download for Android
//           </a>
//         </p>
//       </Spaced>
//     </Padding>
//   </WithRoundedBorder> */}
