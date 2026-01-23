import PageSEO from "./PageSEO";
import PersonSchema from "./PersonSchema";

export default function ProfileSEO() {
  return (
    <>
      <PageSEO
        title="Joe Boylson | Full-Stack Developer in Cincinnati, OH"
        description="Full-stack developer specializing in React, TypeScript, and modern web technologies. Based in Cincinnati, OH. Available for hire."
        url="https://joeboylson.tech/profile"
      />
      <PersonSchema />
    </>
  );
}
