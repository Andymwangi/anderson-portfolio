import { Project } from "@/lib/project-types";

export const projects: Project[] = [

  // --- FLAGSHIP - HEADLINE PRODUCTS & ENTERPRISE SYSTEMS -------------------------

  {
    id: 16,
    title: "Wakili360 — Legal Practice Suite for Kenyan Law",
    des: "A complete practice management suite for Kenyan law firms, bringing matters, court diaries, trust accounting, billing, compliance and governance into a single system built around the law actually practised in Kenya.",
    img: "/wakili360-1.png",
    images: [
      {
        src: "/wakili360-1.png",
        alt: "Wakili360 home page reading 'Run your entire practice from one calm, well-ordered set of chambers', beside a matter file where the AI layer flags a date mismatch and cites the two source documents it read.",
        caption: "Hero — the practice suite for Kenyan law"
      },
      {
        src: "/wakili360-2.png",
        alt: "Court diary section titled 'Never miss a court date', showing a week view with a Court of Appeal ruling and the nearest statutory limitation at 214 days.",
        caption: "Court diary — statutory limitation tracking"
      },
      {
        src: "/wakili360-3.png",
        alt: "Matters and litigation feature page listing open matters by court, tagged Limitation of Actions Act (Cap 22), ARO fee scale and Advocates Act.",
        caption: "Matters & litigation — intake to judgment"
      }
    ],
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiPostgresql", "SiPrisma"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "React Native", "AI/ML"],
    link: "https://wakili360.vercel.app",
    githubLink: "#",
    category: "SaaS Platform",
    tier: "flagship",
    featured: true,
    client: "Product — Vortex Digital Labs",
    clientLogo: "/vortex-logo.png",
    fullDescription:
      "Wakili360 is a practice management suite for Kenyan advocates, positioned as a well-run registry for the legal profession: run an entire practice from one calm, well-ordered set of chambers. Thirteen connected product areas sit on a single matter record. Matter Management holds one living file that connects persons, dates, documents, payments and decisions. The Court Diary tracks hearings, mentions and statutory limitation dates across six limitation bases, with two-way calendar sync to Google and Microsoft. Time and Billing offers five ways to capture time, issues fiscal invoices through KRA eTIMS, and collects over M-Pesa. Trust Accounting runs double-entry client ledgers with overdraw prevention enforced in line with the Advocates Act. Legal Intelligence layers AI assistance over matters and documents while always showing its sources. A mobile client stores locally and queues synchronisation so advocates keep working in court buildings with no signal. The whole financial path is one traceable line: work recorded, invoice drafted, eTIMS issued, M-Pesa received, ledger reconciled.",
    challenge:
      "Kenyan law firms run on a stack that was never designed for them. International practice management products assume different limitation rules, different tax machinery and no mobile money, so firms end up bolting spreadsheets and messaging apps onto software that cannot express a Kenyan matter. Trust accounting under the Advocates Act carries personal liability for the advocate, yet client account balances are commonly tracked outside any system able to prevent an overdraw. Limitation dates — the deadlines that end a claim outright — are diarised by hand. Since eTIMS became mandatory, an invoice is no longer merely a document but a fiscal event that must be issued through KRA, and most firm billing has no path to it at all.",
    solution:
      "Wakili360 was built jurisdiction-first rather than localised after the fact. The matter is the spine: every hearing, document, ledger entry, invoice and payment resolves back to it, which is what makes a single audit trail possible. Limitation tracking is modelled explicitly across six statutory bases rather than as a generic reminder, so the diary computes deadlines instead of merely storing them. Trust accounting is implemented as a genuine double-entry ledger with the overdraw check enforced at the posting layer, where no UI route can bypass it. KRA eTIMS and the M-Pesa Daraja API are first-class integrations inside the billing flow rather than exports bolted to the end of it. The AI layer is deliberately constrained to answer only from documents already inside the matter and to cite them, because a legal assistant that cannot show its source is a liability rather than a tool. The mobile client is offline-first — local storage is the source of truth and mutations queue for replay on reconnect — because court buildings are exactly where connectivity fails.",
    impact: [
      "Consolidates thirteen product areas onto a single matter record, removing the spreadsheet layer that surrounds most firm software",
      "Computes statutory limitation dates across six bases rather than relying on manual diarisation",
      "Enforces Advocates Act trust account rules at the ledger, preventing client account overdraws by construction",
      "Closes the billing loop end to end: work recorded, invoice drafted, eTIMS fiscal invoice issued, M-Pesa payment received, ledger reconciled",
      "Keeps AI output accountable by restricting it to in-matter sources and showing a citation for every answer",
      "Keeps advocates working inside court buildings through an offline-first mobile client with queued sync",
      "Integrates the bodies a Kenyan practice actually answers to — Law Society of Kenya, Kenya Law, KRA eTIMS, POCAMLA/AML and the Data Protection Act"
    ],
    testimonial: {
      quote: "",
      name: "",
      title: ""
    },
    status: "In Development"
  },

  {
    id: 10,
    title: "SRC Legal Management System",
    des: "A comprehensive legal case and contract lifecycle management platform purpose-built for the Salaries and Remuneration Commission (SRC) of Kenya, enabling fully digitised, traceable legal workflows.",
    img: "/src-legal.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiPostgresql", "SiPrisma", "SiDocker"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    link: "#",
    githubLink: "#",
    category: "Enterprise System",
    tier: "flagship",
    featured: true,
    client: "Salaries and Remuneration Commission (SRC), Kenya",
    clientLogo: "/src-logo.png",
    fullDescription:
      "The SRC Legal Management System is a mission-critical enterprise platform deployed at the Salaries and Remuneration Commission of Kenya. It brings together two powerful modules — a Legal Case Management System and a Contract Lifecycle Management (CLM) System — under a single, secure, role-based platform. Legal officers can create digitally traceable cases, manage all case activities, monitor hearing schedules and judgements, handle post-litigation activities, and track workload across the department. The CLM module manages every stage of a contract's life from creation to archival, incorporating digital signature workflows, obligation tracking, negotiation records, performance monitoring and automated renewal alerts.",
    challenge:
      "SRC's legal department operated largely on paper-based processes and disconnected spreadsheets, making it extremely difficult to track the real-time status of ongoing cases, enforce accountability for case milestones, and manage a growing volume of institutional contracts with multiple parties. There was no single source of truth for legal officers, leading to missed deadlines, duplicated effort and compliance risks.",
    solution:
      "A dual-module enterprise system was architected. The Case Management module introduces structured case creation with full lifecycle tracking — from filing through hearings, judgements, appeals, and post-litigation activities — with an activity timeline per case. The Contract module implements a multi-stage workflow engine supporting contract authoring, internal review, external negotiation, digital signature capture, obligation scheduling, and performance dashboards. Role-based access control ensures each user sees only the data and actions relevant to their clearance level.",
    impact: [
      "Digitised and centralised all active legal cases for SRC's legal department",
      "Reduced case status inquiry turnaround from days to real-time dashboard visibility",
      "Automated contract milestone notifications, eliminating missed renewal and expiry deadlines",
      "Enabled digital contract signatures, removing dependency on physical sign-off processes",
      "Provided senior management with contract performance metrics and obligation compliance dashboards",
      "Established a fully auditable, traceable legal record-keeping system compliant with Kenyan public sector governance standards"
    ],
    testimonial: {
      quote: "The system has brought a level of order and traceability to our legal operations that we simply did not have before. Contract renewals no longer catch us off guard, and our officers have complete visibility into every case at any moment.",
      name: "Senior Legal Officer",
      title: "Salaries and Remuneration Commission, Kenya"
    },
    status: "Live"
  },

  {
    id: 17,
    title: "FarmCred — Agricultural Credit Scoring",
    des: "A credit scoring platform that turns farm records, field sensor readings and crop imagery into a lending score a bank can trust, giving East African farmers a route to credit that does not depend on collateral or paperwork.",
    img: "/farmcred-1.png",
    images: [
      {
        src: "/farmcred-1.png",
        alt: "FarmCred home page over a wheat field at golden hour, reading 'Credit that starts with the farm, not the paperwork.'",
        caption: "Hero — credit from the farm, not the paperwork"
      },
      {
        src: "/farmcred-2.png",
        alt: "Section titled 'What a FarmCred score is made of', listing the four evidence types: farm and crop records, sensor readings, field imagery and yield and risk models.",
        caption: "Scoring — the four kinds of evidence"
      },
      {
        src: "/farmcred-3.png",
        alt: "Features page reading 'Everything a season leaves behind, kept', describing how records, sensors and imagery feed a score and the score feeds a lending workflow.",
        caption: "Features — four connected tools"
      }
    ],
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiPostgresql", "SiPython"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Python", "AI/ML"],
    link: "https://farmcred.vercel.app",
    githubLink: "#",
    category: "AI & ML Platform",
    tier: "flagship",
    featured: true,
    client: "Product — Vortex Digital Labs",
    clientLogo: "/vortex-logo.png",
    fullDescription:
      "FarmCred is built on a single premise: credit should start with the farm, not the paperwork. The platform turns farm records, sensor readings and field imagery into a credit score a lender can read and act on. Four data streams feed the model. Farmers register a farm, map its boundaries and record the crops in the ground, then accumulate expenses and harvest history across the season. Field devices log soil moisture, temperature and rainfall over time rather than as a single self-reported snapshot. Photographs of the farm are analysed for crop cover, plant health and visible risk. Yield and risk models predict expected harvest and exposure from those inputs, and are refreshed each season. The output is a score with its reasoning attached, so the farmer sees exactly what the lender sees. On the lending side, a dedicated workspace lets institutions score applicants against verified field data, review and approve applications in one place, disburse to mobile money, and export portfolio reports to PDF or Excel. Repayment schedules follow the crop calendar rather than the calendar month.",
    challenge:
      "Smallholder farming across East Africa is largely uncreditworthy on paper. A farmer with a productive plot, a reliable harvest history and genuine repayment capacity typically has no land title to pledge, no formal financial statements and no transaction record a bank can score. Lenders are not being unreasonable in declining — they have nothing to assess. The result is a well-known deadlock: farmers cannot borrow to expand, so they never generate the formal record that would let them borrow. Where agricultural lending does happen, repayment is usually scheduled as monthly instalments that bear no relationship to when a crop actually pays out, which turns a solvent farmer into a defaulter for reasons of timing alone.",
    solution:
      "FarmCred replaces the missing paper trail with an observed one. Rather than asking a farmer to prove creditworthiness with documents that do not exist, the platform builds the evidence over a season from sources that are hard to fabricate: sensor readings logged continuously by field devices, geotagged imagery analysed for crop cover and plant health, and farmer-entered records that can be cross-checked against both. Yield and risk models turn that record into a prediction of expected harvest and exposure, refreshed each season so the score tracks the farm rather than a moment in its history. Scoring is deliberately transparent — every score carries the reasons behind it, which is what makes it defensible to a credit committee and legible to the farmer. Repayment is scheduled against the harvest calendar for the crop actually in the ground, so instalments fall due when the farm has money.",
    impact: [
      "Builds a credit history for farmers who have no collateral, no financial statements and no formal transaction record",
      "Grounds scoring in observed field evidence — continuous sensor readings and analysed crop imagery — rather than self-reported claims",
      "Publishes the reasoning behind every score, so the farmer sees the same assessment the lender does",
      "Aligns repayment schedules to the crop calendar, removing the timing mismatch that turns solvent farmers into defaulters",
      "Gives lenders a single workspace for scoring, review, approval and mobile money disbursement",
      "Exports portfolio reports to PDF and Excel for credit committee and regulatory reporting",
      "Refreshes yield and risk models each season so a score follows the farm's trajectory rather than a single snapshot"
    ],
    testimonial: {
      quote: "",
      name: "",
      title: ""
    },
    status: "In Development"
  },

  {
    id: 12,
    title: "TotalEnergies CLM System",
    des: "An intelligent Contract Lifecycle Management system for TotalEnergies Kenya that transforms scanned paper contracts into fully digital, traceable, and auto-categorised contracts with automated milestone notifications and performance monitoring.",
    img: "/total-clm.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiPostgresql", "SiPrisma", "SiDocker"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    link: "#",
    githubLink: "#",
    category: "Enterprise System",
    tier: "flagship",
    client: "TotalEnergies Kenya",
    clientLogo: "/total-logo.png",
    fullDescription:
      "The TotalEnergies Contract Lifecycle Management System is an enterprise-grade platform built to digitise and manage the full lifecycle of TotalEnergies Kenya's contract portfolio. The system ingests existing scanned hard-copy contracts and converts them into digitally traceable records, automatically categorising each contract by type and associated parties. A powerful notification engine monitors key contract milestones — including expiry dates, renewal windows, and obligation deadlines — and dispatches automated alerts to responsible stakeholders. The platform also surfaces comprehensive contract performance metrics and manages renewal obligations to ensure no contract lapses without deliberate action.",
    challenge:
      "TotalEnergies Kenya managed a large portfolio of contracts that existed predominantly as scanned PDFs and physical documents, making it impossible to programmatically track expiry dates, renewal obligations or performance milestones at scale. Critical contract deadlines were being missed, and there was no centralised view of the organisation's contractual commitments and liabilities.",
    solution:
      "A CLM platform was built with an OCR-powered ingestion pipeline that processes scanned contracts and extracts key metadata — parties, dates, obligations and contract type — populating structured digital records automatically. A rules-based categorisation engine classifies each contract. A milestone notification system sends proactive alerts for expiry, renewal and obligation deadlines. Executive dashboards provide real-time visibility into the entire contract portfolio's health, performance and compliance status.",
    impact: [
      "Converted the entire backlog of scanned contracts into searchable, structured digital records",
      "Eliminated missed contract expiry and renewal deadlines through automated milestone alerts",
      "Reduced contract retrieval time from hours to seconds",
      "Provided management with a real-time dashboard of contract portfolio performance and risk",
      "Improved vendor and party management through auto-categorised contract relationships",
      "Strengthened compliance posture across TotalEnergies Kenya's contractual commitments"
    ],
    testimonial: {
      quote: "What used to take our team days of manual effort to track is now available at a glance. The automated notifications alone have saved us from several costly contract lapses.",
      name: "Contracts Manager",
      title: "TotalEnergies Kenya"
    },
    status: "Live"
  },

  {
    id: 15,
    title: "Utulivu — Mental Health Platform for Kenya",
    des: "A mental health platform pairing an AI companion with a network of licensed therapists, built for Kenyan users on real Kenyan infrastructure: bilingual English and Swahili, mobile money billing, and full function down to 2G with USSD access on basic handsets.",
    img: "/utulivu-1.png",
    images: [
      {
        src: "/utulivu-1.png",
        alt: "Utulivu home page reading 'You deserve to feel better. Peace begins here.', with Crisis Support pinned in the navigation and the promise of compassionate, personalised mental health support.",
        caption: "Hero — peace begins here"
      },
      {
        src: "/utulivu-2.png",
        alt: "Features overview titled 'Everything You Need for Mental Wellness', spanning AI, therapy, community and growth, with 24/7 AI availability, six or more integrated tools and everything encrypted by default.",
        caption: "Features — AI, therapy, community, growth"
      },
      {
        src: "/utulivu-3.png",
        alt: "AI companion section explaining an evidence-based assistant that is always available and never judgmental, adapts to the user's needs, and is grounded in CBT and mindfulness.",
        caption: "AI companion — grounded in CBT"
      }
    ],
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiPostgresql", "SiPrisma"],
    technologies: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "AI/ML"],
    link: "https://utulivu-app.vercel.app",
    githubLink: "#",
    category: "AI & ML Platform",
    tier: "flagship",
    featured: true,
    client: "Product — Vortex Digital Labs",
    clientLogo: "/vortex-logo.png",
    fullDescription:
      "Utulivu — Swahili for calm — is a mental health platform built on the premise that peace begins somewhere reachable. It pairs an AI companion with access to licensed human therapists rather than treating either as sufficient alone. The AI companion adapts to the user, curating cognitive behavioural exercises, meditation and focus work around what that person is actually carrying. Therapist matching connects users to licensed professionals by specialisation and need, over video, audio or chat. Emotional pattern tracking surfaces triggers and progress through analytics rather than leaving users to interpret their own mood history. Guided self-help programmes are authored by clinical psychologists. Mazungumzo — conversational journaling — lets a user write the way they would talk, with AI drawing insight back out of it. A weekly wellness digest handles proactive check-ins and goal coaching, and family plans add a shared calendar and household wellness view. Onboarding is deliberately short: create an account in under two minutes, complete a wellness assessment, receive a personalised plan, begin. Billing runs on M-Pesa and Airtel Money at KES 599 monthly for Premium, KES 999 for Pro, and KES 1,499 for a Family plan covering up to five members.",
    challenge:
      "Mental health support in Kenya fails on access long before it fails on clinical quality. Therapy is priced beyond most people who need it, concentrated in a handful of urban centres, and carries enough stigma that many will not walk into a building to seek it. The global apps that fill the gap are built for a different user entirely: they price in dollars against card payments most Kenyans do not hold, assume broadband, and deliver culturally distant content in English only. The practical failure is infrastructural as much as cultural — an app that needs a stable connection to render is unusable on the 2G and 3G networks much of the country actually runs on, and useless on a feature phone. And an AI companion in this domain carries real clinical risk: a system that responds to a user in crisis with generic encouragement is not merely unhelpful.",
    solution:
      "Utulivu is designed around the constraints rather than in spite of them. The interface is bilingual English and Swahili, and Mazungumzo journaling works conversationally so users can write in the register they actually think in. The client is built to function on 2G and 3G, with a USSD path that puts core check-ins on basic handsets that will never run an app at all. Billing goes through M-Pesa and Airtel Money at price points set against Kenyan incomes, not converted from dollar tiers. The AI companion is scoped as a bridge between sessions rather than a replacement for a clinician, with a safety layer that watches for risk indicators and escalates to human support instead of continuing to converse. Therapist matching runs on specialisation and stated need, and sessions are offered over video, audio or chat so a user on a poor connection can still be seen. A wellness assessment at signup produces a personalised plan immediately, which is what turns a two-minute onboarding into something a hesitant user will finish.",
    impact: [
      "Puts mental health support within reach on cost, distance and privacy — the three barriers that stop Kenyans seeking therapy",
      "Works down to 2G and 3G, with USSD access extending core check-ins to basic handsets that cannot run an app",
      "Bills in shillings over M-Pesa and Airtel Money, removing the card requirement that locks users out of global apps",
      "Runs bilingually in English and Swahili, with conversational Mazungumzo journaling in the user's own register",
      "Pairs a 24/7 AI companion with licensed human therapists, bridging the gap between sessions rather than replacing the clinician",
      "Escalates to human support on detected risk indicators instead of continuing an AI conversation",
      "Turns mood history into legible analytics, so users can see triggers and progress rather than guess at them",
      "Extends to households through family plans with a shared calendar and joint wellness view"
    ],
    testimonial: {
      quote: "",
      name: "",
      title: ""
    },
    status: "In Development"
  },

  {
    id: 11,
    title: "USIU E-Counselling Platform",
    des: "A mental health and wellness application serving students and staff at the United States International University Africa (USIU-Africa), enabling seamless appointment booking with counsellors and end-to-end session management.",
    img: "/usiu-counselling.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiPostgresql", "SiPrisma"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    link: "#",
    githubLink: "#",
    category: "Enterprise System",
    tier: "flagship",
    client: "United States International University Africa (USIU-Africa)",
    clientLogo: "/usiu-logo.png",
    fullDescription:
      "The USIU E-Counselling Platform is a secure mental health support application designed exclusively for the USIU-Africa community. The system allows students and staff to book appointments with their assigned or preferred counsellors — choosing between in-person physical sessions and virtual video meetings — and then track the progression of their counselling journey through the application. Contributions to this platform included a comprehensive UI/UX overhaul to modernise the interface, improve accessibility and elevate the overall user experience, as well as the addition of new feature modules that extend the platform's therapeutic capabilities and administrative workflows.",
    challenge:
      "The existing counselling platform had an ageing interface that felt clinical and uninviting, discouraging voluntary uptake among students who needed support. Administrative workflows for counsellors were manual, and the system lacked features to support the evolving needs of a modern university wellness centre.",
    solution:
      "A full design refresh was implemented to create a warm, approachable, and accessible experience. New features were introduced including enhanced appointment scheduling with physical/virtual mode selection, session progression tracking for counsellors, improved counsellor-student communication tools, and streamlined administrative management dashboards. Performance optimisations were applied across the stack to ensure reliable access for the entire USIU community.",
    impact: [
      "Significantly improved platform adoption and voluntary counselling session bookings",
      "Reduced appointment scheduling friction with an intuitive, redesigned booking flow",
      "Enabled counsellors to track client session progression and notes within a single interface",
      "Introduced virtual meeting integration, extending access to students off-campus",
      "Improved overall student wellness engagement through a more welcoming digital experience"
    ],
    testimonial: {
      quote: "The improvements made to our counselling platform have had a noticeable impact. Students are more willing to engage with the system, and our counsellors find the new tools invaluable for managing their caseloads.",
      name: "Director of Student Services",
      title: "USIU-Africa"
    },
    status: "Live"
  },

  {
    id: 18,
    title: "Jitume Omoka — Dream Big Challenge",
    des: "A national video competition platform for Kenyan youth: entrants film a short vertical video naming their entrepreneurial dream and the one skill they need to reach it, with the top ten paid out directly over M-PESA.",
    img: "/jitume-omoka-1.png",
    images: [
      {
        src: "/jitume-omoka-1.png",
        alt: "Jitume Omoka home page reading 'Film your dream. Win cash to learn the skill for it', with the three-step Record, Submit and Win cards and a KES 113,500 prize pool paid via M-PESA.",
        caption: "Hero — record, submit, win"
      },
      {
        src: "/jitume-omoka-2.png",
        alt: "Section titled 'Your story deserves a national stage', reaching young Kenyans from Nairobi to Kisumu and Mombasa to Eldoret.",
        caption: "Built for Kenya — Nairobi to Eldoret"
      },
      {
        src: "/jitume-omoka-3.png",
        alt: "Strong answer examples across agribusiness, tech and e-commerce, creative and fashion, and trade and services, each naming a dream and the one skill needed to reach it.",
        caption: "What wins — specific beats generic"
      }
    ],
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiPostgresql", "SiPrisma"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "M-Pesa Daraja"],
    link: "https://learnflix-dbc.vercel.app",
    githubLink: "#",
    category: "Full Stack App",
    tier: "flagship",
    client: "Product — Vortex Digital Labs",
    clientLogo: "/vortex-logo.png",
    fullDescription:
      "Jitume Omoka — hustle to make it — runs the Dream Big Challenge, a national competition inviting Kenyan youth aged 18 to 35 to film their dream and win cash to learn the skill for it. The brief is deliberately narrow: two questions, one honest answer, a vertical video of 30 seconds to 2 minutes at 480p or better, in Swahili, English or a mix of the two. Entrants create an account, verify their phone with a one-time SMS code, and upload. The platform handles submission intake and media validation, entrant identity verification, judging against published criteria, and payout of a KES 113,500 prize pool to the top ten placed winners straight to their registered M-PESA numbers — KES 25,000 for first, 20,000 for second, 15,000 for third and 5,000 each from fourth to tenth. Winners are announced publicly and the top ten also receive a six-month Pro subscription when the wider learning platform launches. Reach is built around the whole country rather than the capital, with entrants across Nairobi, Kisumu, Mombasa and Eldoret.",
    challenge:
      "A youth competition that pays real money out to strangers over mobile money is a trust and integrity problem long before it is a video problem. Entries arrive from phones on constrained networks as large media files, so intake has to be tolerant of slow and interrupted uploads while still enforcing hard format rules on duration, aspect ratio and resolution. Every entrant must be uniquely identifiable, because a single person entering repeatedly under different handles corrupts both the judging and the payout. Payout itself is unforgiving: money moving to a phone number is effectively irreversible, so the number that receives a prize must be the verified number that submitted the entry. And judging has to stay credible in public — a competition where entrants suspect that production budget beats storytelling loses the very people it exists to reach.",
    solution:
      "Identity is anchored to a phone number verified by one-time SMS code at submission, and that same verified number is the only destination the M-PESA payout will target, which closes the gap between who entered and who is paid. Media validation runs against the published brief at upload — duration, 9:16 aspect ratio and minimum resolution are checked rather than trusted — with the mobile-first upload path designed to survive the interrupted connections typical of the networks entrants are actually on. Judging criteria are published up front and scored against specificity rather than polish, with the site stating plainly that production quality does not affect scoring, so a video shot on a basic handset competes on equal terms. The whole timeline is fixed and public — entries close, results are announced, payouts are initiated — so entrants can hold the competition to its own schedule.",
    impact: [
      "Opens a KES 113,500 prize pool to any Kenyan aged 18 to 35 with a phone, no entry fee and no equipment requirement",
      "Ties identity, entry and payout to one SMS-verified phone number, closing the main route to duplicate entries and misdirected prizes",
      "Pays the top ten directly over M-PESA, removing the bank account most young entrants do not have",
      "Validates video duration, aspect ratio and resolution at upload rather than rejecting entries after the fact",
      "Accepts Swahili, English or mixed-language entries, so language fluency is not a barrier to entry",
      "Scores storytelling over production value by published criteria, keeping the competition winnable on a basic handset",
      "Reaches entrants beyond Nairobi across Kisumu, Mombasa and Eldoret through a mobile-first, low-bandwidth submission flow"
    ],
    testimonial: {
      quote: "",
      name: "",
      title: ""
    },
    status: "In Development"
  },

  {
    id: 13,
    title: "ICTA EDRMS — Contract & Asset Modules",
    des: "Contributed the Contract Management and Asset & Inventory modules to the ICTA Electronic Document and Records Management System (EDRMS), enhancing the platform's capability to manage institutional contracts and physical asset registers.",
    img: "/icta-edrms.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiPostgresql", "SiPrisma", "SiDocker"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    link: "#",
    githubLink: "#",
    category: "Enterprise System",
    tier: "flagship",
    client: "Information and Communications Technology Authority (ICTA), Kenya",
    clientLogo: "/icta-logo.png",
    fullDescription:
      "As part of the broader ICTA Electronic Document and Records Management System (EDRMS) engagement, the Contract Management Module and the Asset & Inventory Module were designed and developed. The Contract module integrates seamlessly into ICTA's document management ecosystem, providing structured contract creation, workflow-driven review and approval processes, digital signing, expiry tracking and obligation management. The Asset & Inventory module delivers a centralised register for all ICT and physical assets across ICTA, supporting asset tagging, location tracking, assignment to staff, maintenance scheduling and depreciation monitoring — giving ICTA leadership accurate, real-time visibility into the organisation's asset estate.",
    challenge:
      "ICTA's EDRMS lacked structured modules for managing the institution's contractual obligations and physical asset inventory. Contracts were tracked in disparate spreadsheets and asset records were inconsistent, creating audit risks and operational inefficiencies for a technology authority responsible for national ICT infrastructure.",
    solution:
      "The Contract module was built with a multi-stage approval workflow, document version control, obligation tracking and automated expiry alerts — all integrated within the EDRMS document architecture. The Asset & Inventory module introduced a structured asset register with QR/barcode support for tagging, staff assignment tracking, location management, maintenance logs, and asset lifecycle reporting from procurement through disposal.",
    impact: [
      "Delivered a fully integrated contract management capability within ICTA's EDRMS platform",
      "Established a centralised, auditable asset register for all ICTA physical and ICT assets",
      "Enabled automated contract expiry notifications and obligation tracking for ICTA's procurement team",
      "Improved asset accountability with staff assignment records and location tracking",
      "Streamlined asset maintenance scheduling and reduced unplanned downtime on critical equipment",
      "Strengthened ICTA's audit readiness with comprehensive, exportable asset and contract reports"
    ],
    testimonial: {
      quote: "The contract and asset modules have filled critical gaps in our EDRMS. We now have a single, trusted source for all our institutional contracts and a reliable asset register that satisfies our audit requirements.",
      name: "ICT Director",
      title: "Information and Communications Technology Authority (ICTA), Kenya"
    },
    status: "Live"
  },

  // --- OWN PRODUCTS - IN DEVELOPMENT ---------------------------------------------

  {
    id: 14,
    title: "ContractIQ — Enterprise CLM Platform",
    des: "An enterprise-grade, multi-tenant Contract Lifecycle Management SaaS platform offering a comprehensive suite of CLM capabilities with AI-powered contract ingestion, bilateral workflow automation, and end-to-end contract intelligence.",
    img: "/contractiq.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiPostgresql", "SiPrisma", "SiDocker"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker", "AI/ML"],
    link: "#",
    githubLink: "#",
    category: "SaaS Platform",
    tier: "product",
    client: "Product — Vortex Digital Labs",
    clientLogo: "/vortex-logo.png",
    fullDescription:
      "ContractIQ is an enterprise-grade, multi-tenant SaaS platform engineered to serve organisations of all sizes that need a comprehensive, intelligent contract lifecycle management solution. The platform covers the full CLM spectrum — contract request, authoring, negotiation, approval, execution, obligation management, performance monitoring and renewal — within a single, cohesive environment. A standout capability is ContractIQ's AI engine, which automatically ingests scanned hard-copy contracts using OCR and machine learning to extract structured metadata, categorise contracts by type and parties, and pipeline them directly into the appropriate digital workflow stages without manual intervention. Workflows are designed with bilateral movement, meaning contracts can move forward to the next stage or be returned to a prior stage with contextual reasons and audit trails, closely mirroring real-world contract negotiation dynamics. As a true multi-tenant architecture, ContractIQ allows multiple organisations to operate in fully isolated, customisable environments on the same platform.",
    challenge:
      "Organisations across East Africa and beyond are still managing contracts through email chains, shared drives and physical files. Existing enterprise CLM solutions in the market are prohibitively expensive, Western-market-centric, and not designed for the realities of mixed digital-physical contract environments common in emerging markets, where large backlogs of paper contracts must be brought into digital workflows.",
    solution:
      "ContractIQ is being built with an AI-first approach to contract ingestion, using OCR combined with a fine-tuned classification model to process legacy paper contracts at scale. The bilateral workflow engine is designed around configurable approval chains that support forward progression, return-for-revision, parallel approvals and escalation paths. The multi-tenant architecture uses schema-level data isolation per organisation, with a white-label capability allowing enterprises to brand their instance. Comprehensive CLM dashboards surface contract health metrics, obligation calendars, performance KPIs and risk indicators across the entire portfolio.",
    impact: [
      "Designed to eliminate manual contract tracking for enterprises managing hundreds to thousands of contracts",
      "AI ingestion pipeline projected to reduce legacy contract digitisation effort by over 80%",
      "Multi-tenant architecture enables scalable deployment across multiple enterprise clients",
      "Bilateral workflow engine designed to faithfully mirror real-world contract negotiation processes",
      "Targeted at underserved East African and emerging market enterprises needing affordable enterprise CLM"
    ],
    testimonial: {
      quote: "",
      name: "",
      title: ""
    },
    status: "In Development"
  },

  // --- CLIENT ENGAGEMENTS - DELIVERED --------------------------------------------

  {
    id: 9,
    title: "HotelBook Kenya — Hotel Booking System",
    des: "A full-stack hotel booking system for the Kenyan market, built with Laravel and PHP, allowing users to browse, book, and manage hotel reservations seamlessly.",
    img: "/hotelbook.png",
    iconLists: ["SiLaravel", "SiPhp", "SiTailwindcss", "SiJavascript", "SiDocker"],
    technologies: ["Laravel", "PHP", "Tailwind CSS", "JavaScript", "Docker"],
    link: "https://hotelbook-kenya.vercel.app/",
    githubLink: "https://github.com/Andymwangi/hotel_system",
    category: "Full Stack App",
    tier: "client",
    client: "Hospitality Sector",
    clientLogo: "/client-placeholder.png",
    fullDescription:
      "HotelBook Kenya addresses the need for a centralised, easy-to-use booking platform for local hotels. It features real-time room availability, secure booking processing, and a comprehensive management dashboard for hotel administrators.",
    challenge:
      "The local hotel industry lacked a modern, efficient way for customers to book rooms online, leading to manual processes and lost revenue opportunities.",
    solution:
      "A robust web application was developed using Laravel for the backend, providing a secure API and business logic. The frontend was built with modern web technologies to ensure a responsive and intuitive user experience.",
    impact: [
      "Streamlined the booking process for multiple hotels",
      "Increased online bookings by 50% in the first quarter",
      "Provided a centralised dashboard for hotel management",
      "Enhanced user experience with real-time availability updates"
    ],
    testimonial: {
      quote: "This platform has been a game-changer for our hotel. Our online bookings have soared, and managing reservations has never been easier.",
      name: "John Doe",
      title: "Manager, Safari Hotels"
    },
    status: "Completed"
  },

  {
    id: 1,
    title: "BookWise — University Library Management System",
    des: "BookWise is a university library management web app that allows users to borrow books and read descriptions and summaries of a vast collection of books.",
    img: "/bookwise.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiAppwrite", "SiDocker"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Appwrite", "Docker"],
    link: "https://bookwise-libraryapp.vercel.app/",
    githubLink: "https://github.com/Andymwangi/bookwise",
    category: "Full Stack App",
    tier: "client",
    client: "Soma Library",
    clientLogo: "/uon-logo.png",
    fullDescription:
      "BookWise revolutionised a local community's library system (Soma Library) by digitising over 50,000 book records and creating an intuitive borrowing system that works across all departments.",
    challenge:
      "The community was struggling with an outdated library system that caused long queues, lost books, and inefficient resource allocation.",
    solution:
      "A comprehensive library management system was developed with mobile-responsive interfaces, real-time availability updates, and integrated student ID verification.",
    impact: [
      "Reduced book processing time by 75%",
      "Increased student book borrowing by 40%",
      "Decreased lost book incidents by 85%",
      "Enabled 24/7 book reservation from anywhere"
    ],
    testimonial: {
      quote: "BookWise has transformed how our students access academic resources. The system's reliability and ease of use have made a significant difference in our operations.",
      name: "Mrs. Elizabeth Mwangi",
      title: "Head Librarian, Soma Library"
    },
    status: "Completed"
  },

  {
    id: 2,
    title: "RegisVault — Digital File Management System",
    des: "A digital file management system that leverages OCR for document uploading and secure storage.",
    img: "/regisvault.PNG",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiAppwrite", "SiDocker"],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Appwrite", "Docker"],
    link: "https://regisvault.vercel.app/",
    githubLink: "https://github.com/Andymwangi/regisvault",
    category: "Full Stack App",
    tier: "client",
    client: "Office of the Registrar of Political Parties",
    clientLogo: "/orpp-logo.png",
    fullDescription:
      "RegisVault was developed for the Office of the Registrar of Political Parties (ORPP) Kenya to digitise their massive archives of political party documentation and enable secure, searchable access.",
    challenge:
      "ORPP was drowning in physical paperwork with over 75 registered political parties, leading to document retrieval delays of up to 3 days and security vulnerabilities.",
    solution:
      "An OCR-powered document management system was implemented with role-based access control, advanced search capabilities, and automated document verification features.",
    impact: [
      "Digitised over 100,000 documents in the first 6 months",
      "Reduced document retrieval time from days to seconds",
      "Cut operational costs by 35% annually",
      "Improved compliance with election transparency regulations"
    ],
    testimonial: {
      quote: "RegisVault has been instrumental in our digital transformation journey. The system's OCR capability and security features have made our regulatory work significantly more efficient.",
      name: "James Mutua",
      title: "Deputy Registrar, ORPP Kenya"
    },
    status: "Completed"
  },

  {
    id: 6,
    title: "Learn Hub — Online Learning Platform",
    des: "A comprehensive online learning platform where users can discover, enrol in, and complete various courses with progress tracking and interactive content.",
    img: "/learnhub.PNG",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiPostgresql", "SiPrisma", "SiTailwindcss", "SiDocker"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "React"],
    link: "https://learn-hub.vercel.app/",
    githubLink: "https://github.com/Andymwangi/learn-hub",
    category: "Full Stack App",
    tier: "client",
    client: "EduTech Kenya",
    clientLogo: "/edutech-logo.png",
    fullDescription:
      "Learn Hub was developed for EduTech Kenya to create a comprehensive online learning ecosystem that democratises access to quality education across Kenya, featuring course management, user authentication, and progress tracking.",
    challenge:
      "Many Kenyans lack access to quality educational resources and professional development courses, especially in rural areas, leading to skills gaps in the growing digital economy.",
    solution:
      "A scalable learning platform was built with secure user authentication, course enrolment system, progress tracking, and mobile-responsive design optimised for low-bandwidth connections.",
    impact: [
      "Enrolled over 2,500 students in the first 3 months",
      "Delivered 50+ courses across technology and business skills",
      "Achieved 78% course completion rate",
      "Enabled learning access in 15+ counties across Kenya"
    ],
    testimonial: {
      quote: "Learn Hub has revolutionised how we deliver education to underserved communities. The platform's reliability and user-friendly design have made quality education accessible to thousands of Kenyans.",
      name: "Dr. Michael Kiprotich",
      title: "Director, EduTech Kenya"
    },
    status: "Completed"
  },

];
