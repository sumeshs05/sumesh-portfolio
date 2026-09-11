export type Stat = { value: string; label: string };

export type Milestone = { value: string; label: string; description: string };

export type Principle = { title: string; description: string };

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  tag: string; // e.g. "Swiggy" short chip
  period: string;
  current: boolean;
  bullets: string[];
};

export type Certification = {
  id: string;
  title: string;
  org: string;
  meta: string; // date or status
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

export type SiteContent = {
  hero: {
    eyebrow: string;
    headline: string;
    intro: string;
    ctaPrimaryLabel: string;
    ctaSecondaryLabel: string;
    photoUrl: string | null;
  };
  stats: Stat[];
  milestonesIntro: SectionIntro;
  milestones: Milestone[];
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
  contact: {
    heading: string;
    body: string;
    email: string;
    linkedin: string;
  };
  resumeUrl: string;
};
