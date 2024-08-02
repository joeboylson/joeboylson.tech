import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import Tag from "../../components/Tag";

export default function ProjectPlaceLift() {
  return (
    <>
      <GridItem sizeL={2} sizeM={1}>
        <h3>PlaceLift</h3>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <b>
          PlaceLift is a mobile application and service that assists clients in
          their home improvement projects from start to finish. PlaceLift
          provides these services through a mobile app and excellent customer
          service.
        </b>

        <p>
          As CTO of PlaceLift, starting in the Spring of 2024, I performed all
          development tasks on our mobile application and an internal tool
          called "PlaceLift Connector".
        </p>

        <p>
          <i>
            NOTE: As of September 1st, 2024, the PlaceLift team is taking a
            hiatus. We’re proud of the progress we’ve made since our launch in
            the spring of 2024, but we need to take this pause to allow us to
            reassess our needs in terms of time and investment.
          </i>
        </p>

        <p>
          <a href="#">→ PlaceLift Website</a> <br />
          <a href="#">→ GitHub: PlaceLift Connector</a> <br />
          <a href="#">→ GitHub: PlaceLift Mobile App</a>
        </p>

        <Flow>
          <Tag>Flutter</Tag>
          <Tag>React</Tag>
          <Tag>Express.js</Tag>
          <Tag>Supabase</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
