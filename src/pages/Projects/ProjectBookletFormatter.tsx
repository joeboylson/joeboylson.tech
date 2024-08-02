import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import Tag from "../../components/Tag";

export default function ProjectBookletFormatter() {
  return (
    <>
      <GridItem sizeL={2} sizeM={1}>
        <h3>Booklet Formatter</h3>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <b>
          Booklet Formatter is an online tool to assist in the formatting of
          booklet pages or snippets. The formatting can be exported as JSON in
          order to be loaded into another application as content.
        </b>
        <p>
          This project is meant to be paired with another project (not yet
          started) to avoid the overhead of a database.
        </p>
        <p>
          <a href="https://booklet-formatter.vercel.app">→ Live Site</a>
          <br />
          <a href="https://github.com/joeboylson/prayer-formatter">
            → Github Project
          </a>
        </p>

        <Flow>
          <Tag>React</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
