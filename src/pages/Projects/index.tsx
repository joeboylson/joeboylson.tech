import Divider from "../../components/Divider";
import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";
import Details from "../../components/Details";
import Flow from "../../components/Flow";
import Tag from "../../components/Tag";
import WithLabel from "../../components/WithLabel";
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
        <>
          <GridItem sizeL={5} sizeM={3} key={`${project.id}-divider`}>
            <Divider />
          </GridItem>
          <GridItem sizeL={2} sizeM={3} key={`${project.id}-title`}>
            <h2>{project.name}</h2>
          </GridItem>
          <GridItem sizeL={3} sizeM={3} key={`${project.id}-details`}>
            <Details
              details={[
                ["Summary:", project.summary],
                [
                  "Description:",
                  project.description.length === 1 ? (
                    project.description[0]
                  ) : (
                    <>
                      {project.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                      ))}
                    </>
                  ),
                ],
                ...(project.note
                  ? [
                      ["Note:", <i key="note">{project.note}</i>] as [
                        string,
                        React.ReactNode,
                      ],
                    ]
                  : []),
                ...(project.links && project.links.length > 0
                  ? [
                      [
                        "Links:",
                        <div key="links">
                          {project.links.map((link) => (
                            <WithLabel label={link.label} key={link.href}>
                              <a
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noreferrer" : undefined}
                              >
                                → {link.text}
                              </a>
                            </WithLabel>
                          ))}
                        </div>,
                      ] as [string, React.ReactNode],
                    ]
                  : []),
                [
                  "Technologies:",
                  <Flow key="tags">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Flow>,
                ],
                ...(project.related
                  ? [
                      [
                        "Related:",
                        <div key="related">
                          <WithLabel label={project.related.label}>
                            <a
                              href={project.related.href}
                              target={
                                project.related.external ? "_blank" : undefined
                              }
                              rel={
                                project.related.external
                                  ? "noreferrer"
                                  : undefined
                              }
                            >
                              {project.related.text}
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
        <>
          <GridItem sizeL={5} sizeM={3} key={`${project.id}-divider`}>
            <Divider />
          </GridItem>
          <GridItem sizeL={2} sizeM={3} key={`${project.id}-title`}>
            <h2>{project.name}</h2>
          </GridItem>
          <GridItem sizeL={3} sizeM={3} key={`${project.id}-details`}>
            <Details
              details={[
                ["Summary:", project.summary],
                [
                  "Description:",
                  project.description.length === 1 ? (
                    project.description[0]
                  ) : (
                    <>
                      {project.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                      ))}
                    </>
                  ),
                ],
                [
                  "Technologies:",
                  <Flow key="tags">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Flow>,
                ],
                ...(project.related
                  ? [
                      [
                        "Related:",
                        <div key="related">
                          <WithLabel label={project.related.label}>
                            <a
                              href={project.related.href}
                              target={
                                project.related.external ? "_blank" : undefined
                              }
                              rel={
                                project.related.external
                                  ? "noreferrer"
                                  : undefined
                              }
                            >
                              {project.related.text}
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
