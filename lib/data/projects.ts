import { Project } from "@/lib/project-types";

export const projects: Project[] = [
  // ─── ENTERPRISE / FLAGSHIP PROJECTS ───────────────────────────────────────

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
    id: 11,
    title: "USIU E-Counselling Platform",
    des: "A mental health and wellness application serving students and staff at the United States International University Africa (USIU-Africa), enabling seamless appointment booking with counsellors and end-to-end session management.",
    img: "/usiu-counselling.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiPostgresql", "SiPrisma"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    link: "#",
    githubLink: "#",
    category: "Enterprise System",
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
    id: 12,
    title: "TotalEnergies CLM System",
    des: "An intelligent Contract Lifecycle Management system for TotalEnergies Kenya that transforms scanned paper contracts into fully digital, traceable, and auto-categorised contracts with automated milestone notifications and performance monitoring.",
    img: "/total-clm.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiPostgresql", "SiPrisma", "SiDocker"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    link: "#",
    githubLink: "#",
    category: "Enterprise System",
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
    id: 13,
    title: "ICTA EDRMS — Contract & Asset Modules",
    des: "Contributed the Contract Management and Asset & Inventory modules to the ICTA Electronic Document and Records Management System (EDRMS), enhancing the platform's capability to manage institutional contracts and physical asset registers.",
    img: "/icta-edrms.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiPostgresql", "SiPrisma", "SiDocker"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    link: "#",
    githubLink: "#",
    category: "Enterprise System",
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

  // ─── UPCOMING / IN DEVELOPMENT ────────────────────────────────────────────

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

  {
    id: 15,
    title: "SereneMind — Mental Health & Wellness App",
    des: "A cross-platform mental health and wellness application built for Kenyan youth and anyone navigating mental health challenges, featuring AmanAI — a personalised AI conversational assistant — alongside journaling, mood tracking, community support, therapy matching and guided wellness programmes.",
    img: "/serenemind.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiPostgresql", "SiPrisma"],
    technologies: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "AI/ML"],
    link: "#",
    githubLink: "#",
    category: "Mobile & Web App",
    client: "Product — Vortex Digital Labs",
    clientLogo: "/vortex-logo.png",
    fullDescription:
      "SereneMind is a comprehensive mental health and wellness platform available on both web and mobile, designed specifically for the Kenyan youth demographic and extended to anyone facing mental health challenges. At the heart of the application is AmanAI, a deeply personalised AI conversational assistant whose name and persona can be fully customised by each user. AmanAI goes beyond generic chatbot interactions — it learns the user's emotional patterns, preferences and mental health goals to curate a bespoke wellness journey, adapting its tone, approach and recommendations over time. The platform encompasses private journaling with mood-linked entries, a granular mood tracking system with trend visualisations, a Community Center for peer support and shared experiences, a Therapy Module that connects users with vetted professional therapists for virtual or in-person sessions, a guided Exercises Module featuring breathing techniques, mindfulness practices and CBT-based activities, and a clinical Assessments Page offering standardised mental health screening tools. SereneMind is built with privacy as a core design principle — all journal entries and personal data are end-to-end encrypted.",
    challenge:
      "Kenya faces a significant mental health crisis, particularly among young people, yet access to professional mental health support remains limited by cost, stigma and geographic barriers. Existing global mental health apps lack cultural contextualisation for the Kenyan and broader East African experience, making them feel distant and ineffective for local users.",
    solution:
      "SereneMind was designed from the ground up with the Kenyan user in mind — culturally aware content, local therapist network integration, Swahili language support and pricing models accessible to young Kenyans. AmanAI is built on a fine-tuned conversational model with a mental health safety layer, ensuring responsible AI interactions and escalation pathways to human support when risk indicators are detected. The therapist matching engine considers specialisation, location, availability and user-reported preferences. The app is optimised for low-bandwidth mobile environments common in Kenya.",
    impact: [
      "Designed to democratise access to mental health support for Kenyan youth regardless of location or income",
      "AmanAI provides 24/7 personalised emotional support, bridging the gap between professional therapy sessions",
      "Community Center fosters peer connection and reduces the isolation that compounds mental health challenges",
      "Therapy module creates a direct pipeline to professional help for users who need it",
      "Mood tracking and assessments enable users to understand their mental health trends and progress over time",
      "Privacy-first architecture builds the trust necessary for users to engage honestly with a sensitive platform"
    ],
    testimonial: {
      quote: "",
      name: "",
      title: ""
    },
    status: "In Development"
  },

  // ─── COMPLETED CLIENT PROJECTS ────────────────────────────────────────────

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
    id: 3,
    title: "Minty — Banking Web Application",
    des: "A secure banking web application that facilitates seamless transactions and user authentication.",
    img: "/minty.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiAppwrite", "SiDocker", "SiFramer", "SiPostgresql"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
    link: "https://minty-bank-app.vercel.app/",
    githubLink: "https://github.com/Andymwangi/minty",
    category: "Full Stack App",
    client: "Jaza",
    clientLogo: "/jaza-logo.png",
    fullDescription:
      "Minty was developed as a prototype for a local financial lending institution (Jaza)'s digital transformation initiative, focusing on youth savings and lending solutions with seamless mobile money integration and financial education tools.",
    challenge:
      "Jaza needed to attract younger customers who were abandoning traditional banking for mobile money platforms, leading to a 23% decline in new youth accounts.",
    solution:
      "A mobile-first banking application was created with M-Pesa integration, gamified financial education modules, and simplified KYC processes tailored to Kenyan regulations.",
    impact: [
      "Increased new youth accounts by 45% in the first quarter",
      "Processed over Ksh 2.5 million in transactions within two months",
      "Reduced account opening time from 2 days to 15 minutes",
      "97% customer satisfaction rating from user surveys"
    ],
    testimonial: {
      quote: "Minty has helped us reconnect with the youth market in a way we never thought possible. The integration with local payment systems and the intuitive design has been a game-changer.",
      name: "Sarah Wanjiku",
      title: "Digital Lending Manager, Jaza"
    },
    status: "Completed"
  },

  {
    id: 4,
    title: "LaundryBasket — Laundry E-commerce Platform",
    des: "A comprehensive laundry service marketplace integrating seamless payments via PayPal and M-Pesa, with real-time order tracking and customer loyalty features for local laundry businesses.",
    img: "/laundrybasket.PNG",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiAppwrite", "SiDocker", "SiPostgresql"],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "PostgreSQL", "Docker"],
    link: "https://laundrybasket-web.vercel.app/",
    githubLink: "https://github.com/Andymwangi/laundrybasket",
    category: "Full Stack App",
    client: "Cleanex Laundry Services",
    clientLogo: "/cleanex-logo.png",
    fullDescription:
      "LaundryBasket transformed Cleanex from a single physical laundromat in Westlands, Nairobi to a digital platform connecting over 25 local laundry providers with customers across the city.",
    challenge:
      "Small laundry businesses in Nairobi were struggling with inconsistent customer flow, inefficient manual bookkeeping, and limited market reach in a highly competitive industry.",
    solution:
      "A marketplace platform was built with scheduling, M-Pesa payment integration, real-time order tracking, and a loyalty programme specifically designed for local laundry businesses.",
    impact: [
      "Connected 25+ laundry providers with 3,000+ customers",
      "Increased average monthly revenue for vendors by 65%",
      "Processed over 5,000 orders in the first year",
      "Created 35 new delivery jobs"
    ],
    testimonial: {
      quote: "LaundryBasket has transformed our small business into a digital success story. The M-Pesa integration works flawlessly for our customers, and the order management system has eliminated our booking headaches.",
      name: "Grace Muthoni",
      title: "Founder, Cleanex Laundry Services"
    },
    status: "Completed"
  },

  {
    id: 5,
    title: "Jadamy Elite Academy — School Website",
    des: "A modern, responsive school website featuring enrollment capabilities, curriculum information, event calendars, and a parent portal for easy communication between staff and families.",
    img: "/jadamyelite.PNG",
    iconLists: ["SiNextdotjs", "SiTailwindcss", "SiTypescript", "FaReact", "SiShadcnui"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    link: "https://jadamy-elite.vercel.app/",
    githubLink: "https://github.com/Andymwangi/jadamy-elite",
    category: "Website",
    client: "Jadamy Elite Academy, Ruai",
    clientLogo: "/jadamy-logo.png",
    fullDescription:
      "Jadamy Elite Academy's website serves as a comprehensive digital hub for the school, featuring online enrolment, fee payment through local banking integrations, and a parent communication portal.",
    challenge:
      "The school was losing potential students to competitors with better online presence, and staff spent excessive time on routine communications and paperwork.",
    solution:
      "A feature-rich school website was developed with a custom admissions workflow, M-Pesa fee payment integration, and a secure parent portal with academic performance tracking.",
    impact: [
      "Increased student enrolment by 32% in one academic year",
      "Reduced administrative workload by 20 hours per week",
      "Improved parent engagement with 85% of families using the portal regularly",
      "Streamlined fee collection process with 95% on-time payments"
    ],
    testimonial: {
      quote: "Our website has become central to our school operations. Parents particularly appreciate the ability to monitor their children's progress and communicate with teachers without visiting the school.",
      name: "Mrs Lucy Mwaniki",
      title: "Principal, Jadamy Elite Academy"
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

  {
    id: 8,
    title: "Resume by Edna — Professional Portfolio",
    des: "A sophisticated portfolio website showcasing professional resume writing, content creation, and LinkedIn optimisation services with an elegant, conversion-focused design.",
    img: "/resumebyedna.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiFramer"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    link: "https://resume-by-edna.vercel.app/",
    githubLink: "https://github.com/Andymwangi/resume-by-edna",
    category: "Website",
    client: "Edna Wanjiku",
    clientLogo: "/edna-logo.png",
    fullDescription:
      "Resume by Edna is a professional portfolio website that showcases Edna's expertise in resume writing, content creation, and LinkedIn optimisation, designed to attract high-value clients and establish her as a thought leader in career development.",
    challenge:
      "Edna needed a professional online presence to differentiate herself in the competitive resume writing market and attract premium clients willing to invest in professional career services.",
    solution:
      "An elegant, conversion-optimised portfolio website was created featuring service showcases, client testimonials, before/after portfolio samples, and an integrated booking system for consultations.",
    impact: [
      "Increased client inquiries by 150% within 2 months",
      "Attracted 25+ premium clients paying 3x previous rates",
      "Established a strong personal brand with 95% client satisfaction",
      "Generated 40% of new business through website referrals"
    ],
    testimonial: {
      quote: "My new website has completely transformed my business. The professional design and clear presentation of my services has helped me attract the quality clients I've always wanted to work with.",
      name: "Edna Wanjiku",
      title: "Professional Resume Writer & Career Coach"
    },
    status: "Completed"
  },
];