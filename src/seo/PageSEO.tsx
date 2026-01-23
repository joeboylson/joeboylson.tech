import SocialMeta from "./SocialMeta";
import WebSiteSchema from "./WebSiteSchema";

interface PageSEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export default function PageSEO({
  title,
  description,
  url,
  image,
}: PageSEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <SocialMeta
        title={title}
        description={description}
        url={url}
        image={image}
      />
      <WebSiteSchema />
    </>
  );
}
