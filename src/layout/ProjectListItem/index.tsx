import { useMemo } from "react";
import Divider from "../../components/Divider";
import GridItem from "../../components/GridItem";
import Details from "../../components/Details";
import Flow from "../../components/Flow";
import Tag from "../../components/Tag";
import WithLabel from "../../components/WithLabel";
import { Project } from "../../types";

interface ProjectListItemProps {
  project: Project;
}

export default function ProjectListItem({ project }: ProjectListItemProps) {
  const summaryDetail = useMemo(
    () => ["Summary:", project.summary],
    [project.summary],
  );

  const descriptionDetail = useMemo(
    () => [
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
    [project.description],
  );

  const noteDetail = useMemo(
    () =>
      project.note ? ["Note:", <i key="note">{project.note}</i>] : null,
    [project.note],
  );

  const linksDetail = useMemo(
    () =>
      project.links && project.links.length > 0
        ? [
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
          ]
        : null,
    [project.links],
  );

  const technologiesDetail = useMemo(
    () => [
      "Technologies:",
      <Flow key="tags">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Flow>,
    ],
    [project.tags],
  );

  const relatedDetail = useMemo(
    () =>
      project.related
        ? [
            "Related:",
            <div key="related">
              <WithLabel label={project.related.label}>
                <a
                  href={project.related.href}
                  target={project.related.external ? "_blank" : undefined}
                  rel={project.related.external ? "noreferrer" : undefined}
                >
                  {project.related.text}
                </a>
              </WithLabel>
            </div>,
          ]
        : null,
    [project.related],
  );

  const projectDetails = useMemo(
    () =>
      [
        summaryDetail,
        descriptionDetail,
        noteDetail,
        linksDetail,
        technologiesDetail,
        relatedDetail,
      ].filter((detail) => detail !== null),
    [
      summaryDetail,
      descriptionDetail,
      noteDetail,
      linksDetail,
      technologiesDetail,
      relatedDetail,
    ],
  );

  return (
    <>
      <GridItem sizeL={5} sizeM={3} key={`${project.id}-divider`}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={3} key={`${project.id}-title`}>
        <h2>{project.name}</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={3} key={`${project.id}-details`}>
        <Details details={projectDetails} />
      </GridItem>
    </>
  );
}
