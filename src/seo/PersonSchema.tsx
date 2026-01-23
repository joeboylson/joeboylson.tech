export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe Boylson",
    url: "https://joeboylson.tech",
    image: "https://joeboylson.tech/images/profile-picture.png",
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Available for Hire",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cincinnati",
      addressRegion: "OH",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/in/joeboylson",
      "https://github.com/joeboylson",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
