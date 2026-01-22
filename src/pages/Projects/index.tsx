import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";
import ProjectListItem from "../../layout/ProjectListItem";
import { projects } from "../../constants";

const mainProjects = projects.filter((p) => !p.isOther);
const otherProjects = projects.filter((p) => p.isOther);

export default function Projects() {
  return (
    <Grid>
      <GridItem sizeL={5} sizeM={2}>
        <h1>Projects</h1>
      </GridItem>

      <GridItem sizeL={3} sizeM={2}>
        <p>
          All projects listed below reflect my expertise in
          <strong> custom, full-stack applications</strong>.
        </p>
      </GridItem>

      {mainProjects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}

      <GridItem sizeL={5} sizeM={3}>
        <div className="h-[200px]"></div>
      </GridItem>

      <GridItem sizeL={3} sizeM={2}>
        <h2>Other Projects</h2>
        <p>
          Below is a list of projects which I cannot name or provide links to.
          The naming conventions are obscured for privacy, but the technologies
          and methods are listed to provide as much context as possible
        </p>
      </GridItem>

      {otherProjects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </Grid>
  );
}
