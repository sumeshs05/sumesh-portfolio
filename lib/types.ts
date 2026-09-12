export type Stat = { value: string; label: string };

export type Milestone = {
  value: string;
  label: string;
  description: string;
  tags: string[];
  badge: string; // featured-card only, e.g. "Scale Benchmark"
  context: string; // featured-card only, e.g. "Swiggy Consumer Surface"
  verified: string; // featured-card only, e.g. "Direct Impact Verified"
  unit: string; // compact-card only, small label under the number
};

export type Principle = { title: string; description: string };

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  tag: string; // e.g. "Swiggy" short chip
  period: string;
  current: boolean;
  bullets: string[];
  tags: string[]; // shown only on the current-role card
  location: string; // shown only on the current-role card
};

export type Certification = {
  id: string;
  title: string;
  org: string;
  meta: string; // date or status
  tagline: string;
};

export type CaseStudyStat = { value: string; label: string };

export type CaseStudySection = {
  id: string;
  heading: string;
  body: string[]; // paragraphs
  bullets?: string[];
  stats?: CaseStudyStat[];
  quote?: string;
};

export type CaseStudy = {
  slug: string;
  tag: string;
  domain: string;
  color: "violet" | "emerald" | "amber" | "sky";
  title: string;
  hook: string;
  stats: CaseStudyStat[];
  scope: string;
  methods: string;
  output: string;
  note: string;
  sections: CaseStudySection[];
};

export type SectionIntro = {
  kicker: string;
  heading?: string;
  description?: string;
};

export type OperatingArea = { title: string; description: string; tags: string[] };

export type NavBrand = { name: string; subtitle: string };

export type SiteContent = {
  nav: NavBrand;
  hero: {
    eyebrow: string;
    headline: string;
    intro: string;
    ctaPrimaryLabel: string;
    ctaSecondaryLabel: string;
    photoUrl: string | null;
    captionLine: string;
    captionBadge: string;
    tags: string[];
  };
  stats: Stat[];
  milestonesIntro: SectionIntro;
  milestones: Milestone[];
  operatingAreasIntro: SectionIntro;
  operatingAreas: OperatingArea[];
  philosophyIntro: SectionIntro;
  philosophy: {
    quote: string;
    principles: Principle[];
  };
  experienceIntro: SectionIntro;
  experience: ExperienceItem[];
  certificationsIntro: SectionIntro;
  certifications: Certification[];
  caseStudiesIntro: SectionIntro;
  caseStudies: CaseStudy[];
  skillsIntro: SectionIntro;
  skills: string[];
  aiSkills: string[];
  aiTools: string[];
  contact: {
    heading: string;
    body: string;
    email: string;
    linkedin: string;
    location: string;
  };
  resumeUrl: string;
};
