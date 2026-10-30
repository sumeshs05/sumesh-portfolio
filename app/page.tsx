import { getContent } from "@/lib/content";
import { isAdmin as checkIsAdmin } from "@/lib/auth";
import Nav from "@/components/Nav";
import AdminBar from "@/components/AdminBar";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
import OperatingAreas from "@/components/OperatingAreas";
import Philosophy from "@/components/Philosophy";
import ExperienceTrail from "@/components/ExperienceTrail";
import ProjectsSection from "@/components/ProjectsSection";
import Certifications from "@/components/Certifications";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import SkillsChips from "@/components/SkillsChips";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [content, admin] = await Promise.all([getContent(), checkIsAdmin()]);

  const current = content.experience.find((e) => e.current) ?? content.experience[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.nav.name,
    url: SITE_URL,
    jobTitle: current?.role,
    worksFor: current
      ? { "@type": "Organization", name: current.company.split(",")[0].trim() }
      : undefined,
    sameAs: [content.contact.linkedin],
  };

  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {admin && <AdminBar />}
      <Nav brand={content.nav} resumeUrl={content.resumeUrl} isAdmin={admin} />
      <main id="main">
      <Hero hero={content.hero} stats={content.stats} resumeUrl={content.resumeUrl} isAdmin={admin} />
      <Milestones intro={content.milestonesIntro} milestones={content.milestones} isAdmin={admin} />
      <OperatingAreas intro={content.operatingAreasIntro} areas={content.operatingAreas} customerSuccess={content.customerSuccess} isAdmin={admin} />
      <Philosophy intro={content.philosophyIntro} philosophy={content.philosophy} isAdmin={admin} />
      <ExperienceTrail intro={content.experienceIntro} experience={content.experience} isAdmin={admin} />
      <ProjectsSection intro={content.projectsIntro} projects={content.projects} isAdmin={admin} />
      <Certifications intro={content.certificationsIntro} certifications={content.certifications} isAdmin={admin} />
      <CaseStudiesGrid intro={content.caseStudiesIntro} caseStudies={content.caseStudies} isAdmin={admin} />
      <SkillsChips intro={content.skillsIntro} skills={content.skills} aiSkills={content.aiSkills} aiTools={content.aiTools} isAdmin={admin} />
      </main>
      <Footer contact={content.contact} roleLabel={content.nav.subtitle} resumeUrl={content.resumeUrl} isAdmin={admin} />
    </div>
  );
}
