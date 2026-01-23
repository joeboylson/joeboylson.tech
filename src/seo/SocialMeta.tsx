interface SocialMetaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export default function SocialMeta({
  title,
  description,
  url,
  image = "https://joeboylson.tech/images/og-image.png",
}: SocialMetaProps) {
  return (
    <>
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
