import { getContent } from "@/lib/content";
import { isAdmin as checkIsAdmin } from "@/lib/auth";
import Nav from "@/components/Nav";
import AdminBar from "@/components/AdminBar";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
import OperatingAreas from "@/components/OperatingAreas";
import Philosophy from "@/components/Philosophy";
import ExperienceTrail from "@/components/ExperienceTrail";
import Certifications from "@/components/Certifications";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import SkillsChips from "@/components/SkillsChips";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [content, admin] = await Promise.all([getContent(), checkIsAdmin()]);

  return (
    <div id="top">
      {admin && <AdminBar />}
      <Nav brand={content.nav} resumeUrl={content.resumeUrl} isAdmin={admin} />
      <Hero hero={content.hero} stats={content.stats} resumeUrl={content.resumeUrl} isAdmin={admin} />
      <Milestones intro={content.milestonesIntro} milestones={content.milestones} isAdmin={admin} />
      <OperatingAreas intro={content.operatingAreasIntro} areas={content.operatingAreas} isAdmin={admin} />
      <Philosophy intro={content.philosophyIntro} philosophy={content.philosophy} isAdmin={admin} />
      <ExperienceTrail intro={content.experienceIntro} experience={content.experience} isAdmin={admin} />
      <Certifications intro={content.certificationsIntro} certifications={content.certifications} isAdmin={admin} />
      <CaseStudiesGrid intro={content.caseStudiesIntro} caseStudies={content.caseStudies} isAdmin={admin} />
      <SkillsChips intro={content.skillsIntro} skills={content.skills} isAdmin={admin} />
      <Footer contact={content.contact} roleLabel={content.nav.subtitle} resumeUrl={content.resumeUrl} isAdmin={admin} />
    </div>
  );
}
