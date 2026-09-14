import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Lireons } from "@/components/sections/lireons";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Credentials } from "@/components/sections/credentials";
import { Contact } from "@/components/sections/contact";
import { site } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  givenName: site.firstName,
  familyName: site.lastName,
  jobTitle: [site.role, "Founder, Lireons"],
  description: site.tagline,
  url: site.url,
  image: `${site.url}${site.headshot}`,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  worksFor: [
    { "@type": "Organization", name: "Physics Wallah", department: { "@type": "Organization", name: "IOI LeapX" } },
    { "@type": "Organization", name: "Lireons", url: site.lireons, founder: { "@type": "Person", name: site.name } },
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Lovely Professional University" },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "CompTIA Security+", recognizedBy: { "@type": "Organization", name: "CompTIA" } },
    { "@type": "EducationalOccupationalCredential", name: "CompTIA Network+", recognizedBy: { "@type": "Organization", name: "CompTIA" } },
  ],
  knowsAbout: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "AWS", "Kubernetes", "Terraform", "Microservices", "Cybersecurity"],
  sameAs: [site.github, site.linkedin, site.x, site.topmate, site.lireons],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      <ProofStrip />
      <About />
      <Experience />
      <Lireons />
      <Projects />
      <Stack />
      <Credentials />
      <Contact />
    </>
  );
}
