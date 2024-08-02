import Divider from "../../components/Divider";
import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";
import SpacerL from "../../components/SpacerL";
import SpacerM from "../../components/SpacerM";
import ProjectBookletFormatter from "./ProjectBookletFormatter";
import MattBoylsonDotCom from "./ProjectMattBoylsonDotCom";
import ProjectPlaceLift from "./ProjectPlaceLift";

export default function Projects() {
  return (
    <Grid>
      <GridItem sizeL={5} sizeM={2}>
        <h1>Projects</h1>
      </GridItem>
      <SpacerM sizeM={1} />

      {/* Projects */}
      <ProjectPlaceLift />
      <ProjectBookletFormatter />
      <MattBoylsonDotCom />

      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>

      <GridItem sizeL={3} sizeM={2}>
        <h3>Other Projects</h3>
        <p>
          Below is a list of projects that I have had a hand in, but no longer
          have access to the codebase.
        </p>
      </GridItem>
      <SpacerL sizeL={1} />

      {/* AreaXT */}
      <>
        <GridItem sizeL={2} sizeM={1}>
          <h3>AreaXT</h3>
        </GridItem>
        <GridItem sizeL={3} sizeM={2}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            incidunt facilis corporis quam aspernatur saepe, dolore fugit
            nostrum deserunt obcaecati. At velit sint veniam impedit suscipit
            aut provident rerum sequi dicta ducimus iusto dolorum fugit enim
            quibusdam cupiditate optio praesentium eligendi culpa, excepturi
            aliquid expedita consequatur ab. Blanditiis, odit reprehenderit esse
            accusantium incidunt laudantium beatae amet aliquid excepturi
            quaerat at ex atque placeat. Accusantium voluptate quod, sit unde
            consectetur, dolore ducimus voluptatum veniam deleniti, perspiciatis
            aut adipisci sed minus dolor maxime sequi iusto ipsa quis. Nobis in
            aspernatur nihil odio minima quam sunt! Tenetur modi sed sint magnam
            alias laudantium?
          </p>
        </GridItem>
      </>
    </Grid>
  );
}
