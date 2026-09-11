import { getContent } from "@/lib/content";
import { isAdmin as checkIsAdmin } from "@/lib/auth";
import Nav from "@/components/Nav";
import AdminBar from "@/components/AdminBar";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
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
      <Nav resumeUrl={content.resumeUrl} />
      <Hero hero={content.hero} stats={content.stats} isAdmin={admin} />
      <Milestones milestones={content.milestones} isAdmin={admin} />
      <Philosophy philosophy={content.philosophy} isAdmin={admin} />
      <ExperienceTrail experience={content.experience} isAdmin={admin} />
      <Certifications certifications={content.certifications} isAdmin={admin} />
      <CaseStudiesGrid caseStudies={content.caseStudies} isAdmin={admin} />
      <SkillsChips skills={content.skills} isAdmin={admin} />
      <Footer contact={content.contact} resumeUrl={content.resumeUrl} isAdmin={admin} />
    </div>
  );
}
