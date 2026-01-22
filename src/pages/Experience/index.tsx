import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";
import WithLabel from "../../components/WithLabel";
import Details from "../../components/Details";
import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import Tag from "../../components/Tag";
import { experiences } from "../../constants";

export default function Experience() {
  return (
    <Grid>
      <GridItem sizeL={5} sizeM={2}>
        <h1>Experience</h1>
      </GridItem>
      <GridItem sizeL={5} sizeM={2}>
        <p>Below is my CV - fully up to date as of 01/22/2025</p>
        <WithLabel label="Download my CV">
          <a
            href="./resources/JoeBoylson_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download my Resume
          </a>
        </WithLabel>
      </GridItem>

      {experiences.map((experience) => (
        <>
          <GridItem sizeL={5} sizeM={3} key={`${experience.id}-divider`}>
            <Divider />
          </GridItem>
          <GridItem sizeL={2} sizeM={3} key={`${experience.id}-title`}>
            <h2>{experience.company}</h2>
          </GridItem>
          <GridItem sizeL={3} sizeM={3} key={`${experience.id}-details`}>
            <Details
              details={[
                ["Position:", experience.position],
                [
                  "Duration:",
                  experience.duration.length === 1 ? (
                    experience.duration[0]
                  ) : (
                    <>
                      {experience.duration.map((d, i) => (
                        <p key={i}>{d}</p>
                      ))}
                    </>
                  ),
                ],
                [
                  "Skills & Technologies:",
                  <Flow key="skills">
                    {experience.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </Flow>,
                ],
                ["Synopsis:", <p key="synopsis">{experience.synopsis}</p>],
                ...(experience.related
                  ? [
                      [
                        "Related:",
                        <div key="related">
                          <WithLabel label={experience.related.label}>
                            <a
                              href={experience.related.href}
                              target={
                                experience.related.external
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                experience.related.external
                                  ? "noreferrer"
                                  : undefined
                              }
                            >
                              {experience.related.text}
                            </a>
                          </WithLabel>
                        </div>,
                      ] as [string, React.ReactNode],
                    ]
                  : []),
              ]}
            />
          </GridItem>
        </>
      ))}
    </Grid>
  );
}
