import { SiteContent } from "@/lib/types";

export const seedContent: SiteContent = {
  nav: {
    name: "Sumesh S",
    subtitle: "Product & Business Leader",
  },
  hero: {
    eyebrow: "Open to advisory & select roles",
    headline: "Turning ambiguous problems into shipped roadmaps.",
    intro:
      "I'm Sumesh — a Senior Product / Program Manager with 12 years building consumer products at scale, including 7+ years and counting at Swiggy. I instrument the funnel, prioritize with data, and partner across Product, Design, Engineering, Data and Ops to ship things people actually use.",
    ctaPrimaryLabel: "See my work",
    ctaSecondaryLabel: "Download résumé",
    photoUrl: null,
    captionLine: "Sumesh S · 12+ Yrs Craft · Bengaluru / Global",
    captionBadge: "Open to opportunities",
    tags: ["Scale & Monetization", "Cross-Functional Execution"],
  },
  stats: [
    { value: "12 yrs", label: "Product & delivery craft" },
    { value: "7+ yrs", label: "Continuous run at Swiggy" },
    { value: "5", label: "Business lines merchandised" },
  ],
  milestonesIntro: {
    kicker: "Track record",
    heading: "Business impact first.",
    description:
      "Concrete, measurable results from scaling on-app merchandising and monetization at Swiggy.",
  },
  milestones: [
    {
      value: "10x → 100x",
      label: "Widget reach scaled",
      description:
        "Scaled a pan-India on-app widget from 10x to 100x reach, unlocking new monetized ad revenue.",
      tags: ["Pan-India Reach", "Monetized Inventory"],
    },
    {
      value: "5 lines",
      label: "Merchandising owned",
      description:
        "Food, Instamart, Dineout, Genie and Scenes — end-to-end PI planning and roadmap execution across all five.",
      tags: ["PI Planning", "Cross-Line Coordination"],
    },
    {
      value: "CPC / CPV",
      label: "Monetization built",
      description:
        "Built out CPC and CPV monetization mechanics with traffic distribution, merchandising and brand marketing.",
      tags: ["Ad Mechanics", "Commercial Models"],
    },
    {
      value: "2x",
      label: "Recognized company-wide",
      description:
        "Swiggy Values Champion (League of Champions) and Most Valuable Player, OND 2025.",
      tags: ["League of Champions", "Values Champion"],
    },
  ],
  operatingAreasIntro: {
    kicker: "Where I operate",
    heading: "Where I operate.",
    description:
      "At the point where product decisions, operating complexity and commercial outcomes meet.",
  },
  operatingAreas: [
    {
      title: "Product scale",
      description:
        "Turning ambiguous problems into clear priorities, instrumented funnels and launches that can survive real operating conditions.",
      tags: ["Funnel Instrumentation", "Clear Priorities", "Operational Resilience"],
    },
    {
      title: "Monetization",
      description:
        "Connecting customer surfaces to measurable commercial models, while keeping user behavior and business trade-offs visible.",
      tags: ["Commercial Models", "User Behavior", "Business Trade-offs"],
    },
    {
      title: "Cross-functional systems",
      description:
        "Creating a dependable rhythm across product, design, engineering, data, finance and operations.",
      tags: ["Dependable Rhythm", "Stakeholder Alignment", "Execution Cadence"],
    },
    {
      title: "Business judgment",
      description:
        "Knowing what to push, what to sequence, what to measure and when not to scale a weak signal.",
      tags: ["Rigorous Sequencing", "Signal Evaluation", "Strategic Trade-offs"],
    },
  ],
  philosophyIntro: {
    kicker: "Philosophy & ethos",
  },
  philosophy: {
    quote:
      "Good product work isn't about running ceremonies or managing a feature list. It's translating ambiguous, cross-functional problems into a roadmap you're proud to ship.",
    principles: [
      {
        title: "Instrument first, prioritize second",
        description:
          "Track impressions, CTR and CVR before deciding what's next — not after.",
      },
      {
        title: "Earn autonomy before scale",
        description:
          "Trust is a gate you earn with evidence, not a formality you skip.",
      },
      {
        title: "Ship, then adapt",
        description:
          "Empiricism over planning in a vacuum. Inspect, adjust, repeat.",
      },
      {
        title: "Data over the loudest opinion",
        description:
          "Funnel data and RICE scores make the call, not whoever's in the room.",
      },
    ],
  },
  experienceIntro: {
    kicker: "12 years, one thread",
    heading: "The journey so far",
    description:
      "From finance associate to senior product manager — every stop added a different lens on how businesses actually run.",
  },
  experience: [
    {
      id: "exp-swiggy",
      role: "Sr. Manager, Project Management — Product Operations & On-App Merchandising",
      company: "Swiggy Limited, Bangalore",
      tag: "Swiggy",
      period: "Jun 2019 – Present",
      current: true,
      bullets: [
        "Own end-to-end PI planning and roadmap execution across five business lines (Food, Instamart, Dineout, Genie, Scenes).",
        "Partner continuously with Product, Design, Engineering, Data and Business Finance to scope, sequence and launch initiatives.",
        "Define and track a funnel of engagement and monetization metrics (impressions → CTR → CVR) to prioritize the roadmap.",
        "Scaled a pan-India widget from 10x to 100x reach, unlocking new monetized ad revenue.",
        "Built out CPC and CPV monetization mechanics in partnership with traffic distribution and brand marketing.",
      ],
      tags: ["PI Planning", "Food & Instamart", "Dineout, Genie & Scenes", "CPC & CPV Mechanics"],
    },
    {
      id: "exp-amazon-compliance",
      role: "Sr. Compliance Analyst — Dangerous Goods",
      company: "Amazon",
      tag: "Amazon",
      period: "Feb 2017 – Jun 2019",
      current: false,
      bullets: [],
      tags: [],
    },
    {
      id: "exp-jsw",
      role: "Market Analyst (BD) — Supply Chain Management",
      company: "JSW Steel",
      tag: "JSW Steel",
      period: "Aug 2016 – Jan 2017",
      current: false,
      bullets: [],
      tags: [],
    },
    {
      id: "exp-alansari",
      role: "Business Development Executive — Client Acquisition",
      company: "Al Ansari Exchange, Dubai, UAE",
      tag: "Al Ansari",
      period: "Sep 2015 – Jul 2016",
      current: false,
      bullets: [],
      tags: [],
    },
    {
      id: "exp-amazon-qa",
      role: "Quality Assurance Specialist",
      company: "Amazon",
      tag: "Amazon",
      period: "Apr 2014 – Jul 2015",
      current: false,
      bullets: [],
      tags: [],
    },
    {
      id: "exp-ambiquant",
      role: "Sr. BDM, Techno-Commercial",
      company: "AmbiQuant IT Solutions India Pvt Ltd",
      tag: "AmbiQuant",
      period: "Aug 2013 – Jan 2014",
      current: false,
      bullets: [],
      tags: [],
    },
    {
      id: "exp-ibm",
      role: "Finance & Accounts Associate",
      company: "IBM",
      tag: "IBM",
      period: "Feb 2013 – Aug 2013",
      current: false,
      bullets: [],
      tags: [],
    },
  ],
  certificationsIntro: {
    kicker: "Credentials & recognition",
    heading: "Certifications & recognitions",
    description:
      "Formal credentials and organizational recognition across execution, values, and emerging technology.",
  },
  certifications: [
    {
      id: "cert-genai",
      title: "What is Generative AI",
      org: "Certification",
      meta: "Completed",
      tagline: "Foundational LLM concepts",
    },
    {
      id: "cert-airtribe",
      title: "AI First — Product Management",
      org: "Airtribe",
      meta: "Expected 28 Nov 2026",
      tagline: "Applied AI for product teams",
    },
    {
      id: "cert-basecamp",
      title: "Project Management Best Practices",
      org: "Basecamp",
      meta: "Completed",
      tagline: "Execution standards",
    },
    {
      id: "cert-meetings",
      title: "Certificate of Commitment — Meeting Effectiveness",
      org: "Internal",
      meta: "Completed",
      tagline: "Operational rigor",
    },
    {
      id: "cert-values",
      title: "League of Champions — Swiggy Values Champion",
      org: "Swiggy",
      meta: "Recognition",
      tagline: "Company-wide recognition",
    },
    {
      id: "cert-mvp",
      title: "Most Valuable Player, OND 2025",
      org: "Swiggy",
      meta: "Recognition",
      tagline: "High-impact execution award",
    },
  ],
  skillsIntro: {
    kicker: "Toolkit",
    heading: "What I bring to the table",
  },
  skills: [
    "Agile & Scrum",
    "Product Roadmapping",
    "Cross-Functional Stakeholder Management",
    "Prioritization Frameworks (RICE)",
    "Data-Driven Prioritization",
    "Vendor & Contract Negotiation",
    "Strategic Planning",
    "Operational Efficiency",
    "Resource Allocation",
    "JIRA",
    "React & React Native Fluency",
    "Effective Communication",
  ],
  caseStudiesIntro: {
    kicker: "Independent studies & exploratory notes",
    heading:
      "Self-directed research I return to on weekends, out of curiosity — not work tasks.",
    description:
      "Four independent studies in growth strategy, user research, product strategy, and UX research.",
  },
  caseStudies: [
    {
      slug: "zepto-aov",
      tag: "Growth Strategy",
      color: "violet",
      title: "Growing Zepto's Average Order Value",
      hook: "Segmented 30 users into 4 behavioral archetypes, mapped exactly where basket growth breaks down, then prioritized with RICE — and a second lens RICE couldn't see.",
      stats: [
        { value: "6–8%", label: "Target AOV lift" },
        { value: "4", label: "User segments" },
      ],
      scope: "Market research → segmentation → prioritization",
      methods: "Survey (n=30), k-means clustering, RICE scoring",
      output: "v1 scope, success metrics, kill criteria",
      note: "Independent, self-directed case study — not an official engagement with Zepto. Market figures are from public sources; segment data is from a 30-respondent survey I ran myself.",
      sections: [
        {
          id: "problem",
          heading: "The problem",
          body: [
            "Average Order Value (AOV) is the metric-level proxy for basket size — items per order × average price per item, rolled up into one number. On that number, Zepto is behind.",
            "Industry data pointed at a credible lever: category expansion, not deeper discounting. Fee-related friction also surfaced repeatedly in app-store reviews — Zepto has been criticized for defaulting a delivery charge into the cart even on orders that qualify for free delivery, and for pushing refunds to wallet credit instead of cash.",
          ],
          stats: [
            { value: "₹387–430", label: "Zepto's estimated AOV" },
            { value: "₹518", label: "Blinkit's net order value" },
            { value: "₹460", label: "National benchmark" },
          ],
        },
        {
          id: "approach",
          heading: "What I did",
          body: [
            "I ran a 30-respondent survey covering basket size, order frequency, discount sensitivity and category mix. I used k-means clustering on four standardized behavioral variables to find natural segments, then validated the clusters against qualitative responses. Finally, I mapped the purchase funnel to see exactly where basket growth was breaking down at each stage.",
          ],
        },
        {
          id: "segments",
          heading: "Four behavioral segments",
          body: [
            "Segments A and D together are 47% of respondents and anchor the low-AOV problem. Segment B is the AOV anchor today but has untapped category-expansion headroom. Segment C — the largest group, and the least price-driven — is the real 'moveable middle'.",
          ],
          bullets: [
            "A. Frequent Top-Up Toppers (20%) — avg basket ~₹271, most discount-sensitive, pads cart for free delivery. AOV impact: LOW.",
            "B. Planned Bulk Stockers (23%) — avg basket ~₹757, weekly orders, narrow category range. AOV impact: HIGH.",
            "C. Balanced Convenience Shoppers (30%) — avg basket ~₹453, lowest discount sensitivity. AOV impact: SWING.",
            "D. Minimalist Need-Based Shoppers (27%) — avg basket ~₹238, zero browsing, shrinking basket. AOV impact: LOWEST.",
          ],
        },
        {
          id: "breakdown",
          heading: "Where basket growth breaks down",
          body: [],
          bullets: [
            "Discovery (structural): 77% open the app already knowing exactly what they want.",
            "Search / PDP (experiential): 70% notice recommendations, only 30% ever act on one.",
            "Cart (psychological + pricing): 80% pad the cart for free delivery, but 57% of that is need pulled forward, not incremental spend.",
            "Checkout (pricing + trust): late-disclosed fees are repeatedly cited as the reason people abandon the order entirely.",
          ],
          quote:
            "MOV-threshold padding is mistaken for genuine basket growth. Most of it is pulled-forward need, not real incremental spend.",
        },
        {
          id: "solutions",
          heading: "Three solutions, RICE-scored",
          body: [
            "On raw score, fee transparency wins — it's cheap and touches everyone. But RICE rewards small, wide changes and doesn't know which metric you were asked to move. Fee transparency mostly buys back trust; it doesn't make baskets bigger. Scored against a second lens — expected AOV impact, build complexity, cost to serve, downside risk — Smart Top-Up is the only one of the three that moves AOV directly.",
          ],
          bullets: [
            "Smart Top-Up — replace the generic MOV nudge with a personalized, history-based restock prompt. Targets Segments A & D.",
            "Upfront fee transparency — show an all-in total at the cart stage as a visible progress bar. Targets Segment D, benefits everyone.",
            "History-Aware Bundle Curation — bundles from actual co-purchase history, not generic popularity. Targets Segments B & C.",
          ],
          stats: [
            { value: "52.5", label: "RICE — Fee transparency (1st)" },
            { value: "32", label: "RICE — Smart Top-Up (2nd)" },
            { value: "11", label: "RICE — Bundle curation (3rd)" },
          ],
        },
        {
          id: "v1",
          heading: "What I'd ship: v1 scope",
          body: [],
          bullets: [
            "Rules-based cadence on the top 40 repeat SKUs per city — no ML model in v1.",
            "Nudge fires only in the cart, only below the free-delivery threshold.",
            "Suggestion pulled from the user's own purchase history; no history falls back to the generic nudge as a clean control.",
            "Two-week hold-out cohort in two cities before wider rollout.",
          ],
        },
        {
          id: "measure",
          heading: "How I'd measure it",
          body: [
            "What would make me kill it: orders per user per month drops more than 2% while AOV rises — that's cannibalization, not growth. Or the personalized nudge fails to beat the generic baseline by a meaningful margin.",
          ],
          stats: [
            { value: "6–8%", label: "Target AOV uplift" },
            { value: "18%+", label: "Target nudge attach rate" },
            { value: "≤2%", label: "Max tolerable drop in orders/user" },
          ],
        },
      ],
    },
    {
      slug: "uber-find-my-ride",
      tag: "User Research",
      color: "sky",
      title: "Fixing pickup coordination on Uber",
      hook: "Public data said 85% of riders had issues. My own survey found the real number — and a much more specific, fundable problem underneath it.",
      stats: [
        { value: "27%", label: "Actual coordination issues" },
        { value: "36%", label: "Already switched to competitor" },
      ],
      scope: "Market sizing → survey → segment prioritization",
      methods: "Desk research, 11-respondent survey, cohort analysis",
      output: "A re-scoped, prioritized problem statement",
      note: "Independent, self-directed case study — not an official engagement with Uber. Market figures are from public sources; survey findings are from 11 respondents I recruited myself.",
      sections: [
        {
          id: "market",
          heading: "The market",
          body: [
            "India's ride-hailing market is large and fragmenting fast. Uber leads on monthly active users, but the combined dominance of Ola and Uber has dropped from roughly 90% to 60–70% in three years, with Rapido capturing 10–20% share in major metros within a year of entering cabs.",
          ],
          stats: [
            { value: "33.6M", label: "Uber's MAU (2024)" },
            { value: "85%+", label: "Riders reporting issues, public data" },
            { value: "65.3%", label: "Market CAGR" },
          ],
        },
        {
          id: "friction",
          heading: "Where the pain concentrates",
          body: [
            "Most trips are booked 6–7pm, with Friday the busiest day — and early-morning Reserve bookings dominate airport trips. That creates two distinct high-friction windows: the evening office-complex commute, and time-sensitive early airport runs.",
          ],
          bullets: [
            "Office complexes — 25–30% of rides, high friction: multiple entrances, wrong-gate arrivals.",
            "Airports — 15–20% of rides, critical friction: GPS points to the terminal, drivers restricted to pickup zones.",
            "Malls — 10–15% of rides, high friction: parking-level confusion.",
            "Dense urban streets — 10–15% of rides, medium friction: ambiguous curbs at night.",
            "Residential — 35–40% of rides, low friction: the easy majority.",
          ],
        },
        {
          id: "gap",
          heading: "What public data couldn't tell me",
          body: [
            "The 85%-report-issues number is a ceiling, not a diagnosis. Uber doesn't publish cancellation rates by pickup-location type or driver-rider communication volume — the things you'd actually need to size a fix. So I ran a short survey of my own.",
          ],
        },
        {
          id: "findings",
          heading: "What I found",
          body: [
            "Current workarounds are consistent and telling: 100% of respondents who hit a coordination problem called the driver directly, and 45% also shared live location over WhatsApp — the problem is solvable in-app, but people route around it today.",
          ],
          stats: [
            { value: "27%", label: "Active coordination issues" },
            { value: "55%", label: "Navigation 'slightly off'" },
            { value: "36%", label: "Already switched to a competitor" },
          ],
          quote:
            "The top requested fix wasn't a new feature — it was visibility. 73% wanted a real-time driver location map; 55% wanted in-app messaging before the driver arrives.",
        },
        {
          id: "segments",
          heading: "Who suffers most",
          body: [
            "Daily commuters have effectively self-solved the problem through habit. The riders actually at risk are the ones with no pattern to learn from — infrequent users and airport travelers, who are also most likely to churn to a competitor.",
          ],
          bullets: [
            "Infrequent / first-time users — 50% friction.",
            "Airport travelers — 50% friction.",
            "Mall / leisure users — 45% friction.",
            "Office commuters — 0% friction.",
          ],
        },
        {
          id: "recommendation",
          heading: "My recommendation",
          body: [
            "Reframe the problem from '85% report cancellations' — too broad to build against — into something specific: roughly a quarter of riders face active coordination trouble, concentrated in two predictable windows, and the two most-requested fixes are cheap relative to the churn risk they address. I'd prioritize real-time driver location and pre-arrival messaging for airport and mall/leisure pickups first, and validate the exact ₹-value using Uber's own cancellation and communication logs.",
          ],
        },
      ],
    },
    {
      slug: "insurtech-support-ai",
      tag: "Product Strategy",
      color: "emerald",
      title: "AI customer support for insurers",
      hook: "A self-directed strategy exercise: size the AI customer-support market, diagnose why 95% of AI pilots show no P&L impact, and design a 3-phase roadmap that earns autonomy before scale.",
      stats: [
        { value: "$47.8B", label: "Projected market by 2030" },
        { value: "3", label: "Phase, 36-month roadmap" },
      ],
      scope: "Market sizing → competitive teardown → roadmap → GTM",
      methods: "Desk research, competitive benchmarking, moat analysis",
      output: "36-month roadmap + land-and-expand GTM strategy",
      note: "Independent, self-directed strategy exercise — not an official engagement with any named vendor or insurer. Figures are drawn from public market research.",
      sections: [
        {
          id: "opportunity",
          heading: "The opportunity",
          body: [
            "AI-powered customer support automation isn't one feature — it's a bundle of capabilities: a resolution engine, agent-assist copilots, triage and routing, knowledge grounding, integration, and analytics. The market around all of it is growing fast.",
          ],
          stats: [
            { value: "$15.1B", label: "Market size, 2026" },
            { value: "$47.8B", label: "Projected by 2030" },
            { value: "25.8%", label: "CAGR through 2030" },
          ],
        },
        {
          id: "problem",
          heading: "The real problem",
          body: [
            "It isn't that companies lack AI — 87% of leaders are already investing in it. The real blocker is that AI sits on top of broken plumbing: fragmented tools, siloed data, and no single layer that owns a customer's issue end-to-end.",
          ],
          quote:
            "The problem isn't that companies lack AI — it's that AI sits on top of a broken system. 95% of pilots show no measurable P&L impact.",
        },
        {
          id: "why-insurance",
          heading: "Why insurance, and who to sell to",
          body: [
            "I'd target mid-market insurance carriers, entering through the Head of Customer Service / Support Ops — the buyer who feels the pain daily and has budget authority without a full RFP cycle. Claims satisfaction fell from 82% to 78% in a year, the root cause is explicitly the integration gap, and no incumbent has gone deep on insurance-claims orchestration yet. Real white space.",
          ],
        },
        {
          id: "landscape",
          heading: "The competitive landscape",
          body: [
            "Global platforms (Intercom, Zendesk, Salesforce Agentforce, Ada/Decagon/Sierra) compete on orchestration depth. India-specific platforms (Haptik, Yellow.ai, Gupshup, CoRover, Fluid AI) compete on reach and WhatsApp depth. The gap between the two: nobody has connected claims, policy, CRM and support into one operational layer.",
          ],
        },
        {
          id: "moat",
          heading: "Where the moat comes from",
          body: [
            "The defensibility builds in sequence: integration depth (wrapping the legacy core in APIs) → data flywheel (claim patterns repeat, only 19% of insurers centralize this data today) → cross-team network effects (once support, claims, finance and IT depend on the same layer, switching means retraining every team). A competitor can copy the chatbot in months. They can't copy three years of claim history.",
          ],
        },
        {
          id: "roadmap",
          heading: "A 3-phase, 36-month roadmap",
          body: [
            "Each phase earns the right to the next: trust before autonomy, autonomy before proactivity.",
          ],
          bullets: [
            "Phase 1 (Months 1–6) — Embedded Agent Copilot. CRM + KB context retrieval, smart triage, auto-drafting. Target: 40% AHT reduction.",
            "Phase 2 (Months 7–18) — Autonomous Action Engine. API action connectors, deterministic workflows, audit logs. Target: 35% autonomous tier-1 resolution.",
            "Phase 3 (Months 19–36) — Proactive Customer Ops Platform. Anomaly alerts, auto-updating KBs. Target: budget expansion into Product/RevOps.",
          ],
        },
        {
          id: "gtm",
          heading: "Land-and-expand GTM",
          body: [
            "Enter where the pain is sharpest and the risk is lowest, then let results do the selling. Expansion follows usage signals, not a calendar.",
          ],
          bullets: [
            "Copilot → autonomous actions, triggered by a high AI-draft acceptance rate.",
            "Support → claims, triggered when the claims team asks for direct access.",
            "Claims → finance/RevOps, triggered when audit data gets requested outside support.",
            "Single team → platform budget, triggered when a non-support metric shows up in a business review support didn't organize.",
          ],
        },
      ],
    },
    {
      slug: "nykaa-ux-teardown",
      tag: "UX Research",
      color: "amber",
      title: "Where Nykaa loses shoppers",
      hook: "Walked two product-discovery paths on Nykaa Beauty and Nykaa Man to find exactly where a simple task — buying a moisturizer — gets hard.",
      stats: [
        { value: "2", label: "Discovery paths tested" },
        { value: "1", label: "Mental-model gap found" },
      ],
      scope: "Task-based UX evaluation across 2 platforms",
      methods: "Guided task walkthroughs, 2 user interviews",
      output: "Prioritized, evidence-backed UX recommendations",
      note: "Independent, self-directed UX case study — not an official engagement with Nykaa. Findings come from my own hands-on testing of the public apps and two informal user conversations.",
      sections: [
        {
          id: "task",
          heading: "The task",
          body: [
            "A simple scenario: find a moisturizer suitable for dry skin, and gather enough information to actually decide on a purchase. I ran the same task two ways on both apps — once through global search, once through category browsing.",
          ],
        },
        {
          id: "search",
          heading: "Path 1: global search",
          body: [
            "Smooth — no major pain points. Search results were relevant and gave multiple real options on both apps. The one friction point: the sheer number of filter pills created noticeable cognitive clutter.",
          ],
        },
        {
          id: "browse",
          heading: "Path 2: browse by category",
          body: [
            "Worked, but felt like a meaningfully longer journey than search — and it surfaced a real mental-model mismatch.",
          ],
          quote:
            "'Moisturizer' naturally maps to Skincare in the user's head. What I was looking for was filed under Bath & Body instead.",
        },
        {
          id: "features",
          heading: "Feature-level observations",
          body: [],
          bullets: [
            "Nykaa Man's quick radio filters are a small but real usability win over Nykaa Beauty's checkbox filters.",
            "'Shop by Ingredient' under-delivers for anyone without existing skincare literacy — names are listed, not explained.",
            "Nykaa Man's 'Discover What Works for You' lacks depth for seasonal need-states — no dedicated 'dry skin in winter' entry point.",
          ],
        },
        {
          id: "users",
          heading: "Talking to two users",
          body: [],
          bullets: [
            "Ashwini, 36 — browses frequently but rarely converts. Loves the assortment and Skin Scan. Finds Shop-by-Skin/Hair-Type discovery frustrating.",
            "Kamakshi, 33 — restocks monthly, values the range for comparison shopping. Dislikes inconsistent coupon codes; has switched to Myntra/Amazon for better deals.",
          ],
        },
        {
          id: "recommendation",
          heading: "What I'd recommend",
          body: [
            "Good product discovery isn't about catalogue size — it's about matching the experience to a user's mental model. Two concrete fixes: add a 'dry skin / winter' entry point to the top of Discover-What-Works, and turn ingredient callouts into short, decision-enabling explainers rather than names alone.",
          ],
        },
      ],
    },
  ],
  contact: {
    heading: "Let's build something worth shipping.",
    body: "Open to Senior Product / Program Manager roles and consulting engagements. Based in Bangalore, working comfortably across time zones.",
    email: "sumesh.nair.05@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumesh-s-a210b464",
    location: "Bangalore, India (IST)",
  },
  resumeUrl: "/resume.pdf",
};
