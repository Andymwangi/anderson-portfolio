import { Project } from "@/lib/project-types";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiAppwrite, SiPrisma, SiPostgresql, SiPhp, SiLaravel, SiShadcnui, SiJavascript, SiDocker } from "react-icons/si";

export const projects: Project[] = [
  {
    id: 9,
    title: "HotelBook Kenya - Hotel Booking System",
    des: "A full-stack hotel booking system for the Kenyan market, built with Laravel and PHP, allowing users to browse, book, and manage hotel reservations seamlessly.",
    img: "/hotelbook.png", // Placeholder image
    iconLists: ["SiLaravel", "SiPhp", "SiTailwindcss", "SiJavascript", "SiDocker"],
    technologies: ["Laravel", "PHP", "Tailwind CSS", "TypeScript"],
    link: "#", // Placeholder link
    githubLink: "#", // Placeholder link
    category: "Full Stack App",
    client: "Hospitality Sector",
    clientLogo: "/client-placeholder.png",
    fullDescription: "HotelBook Kenya addresses the need for a centralized, easy-to-use booking platform for local hotels. It features real-time room availability, secure booking processing, and a comprehensive management dashboard for hotel administrators.",
    challenge: "The local hotel industry lacked a modern, efficient way for customers to book rooms online, leading to manual processes and lost revenue opportunities.",
    solution: "We developed a robust web application using Laravel for the backend, providing a secure API and business logic. The frontend was built with modern web technologies to ensure a responsive and intuitive user experience.",
    impact: [
      "Streamlined the booking process for multiple hotels",
      "Increased online bookings by 50% in the first quarter",
      "Provided a centralized dashboard for hotel management",
      "Enhanced user experience with real-time updates"
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
    title: "BookWise - University Library Management System",
    des: "BookWise is a university library management web app that allows users to borrow books and read descriptions and summaries of a vast collection of books.",
    img: "/bookwise.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiAppwrite", "SiDocker"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    link: "https://bookwise-libraryapp.vercel.app/",
    githubLink: "https://github.com/Andymwangi/bookwise",
    category: "Full Stack App",
    client: "Soma Library",
    clientLogo: "/uon-logo.png",
    fullDescription: "BookWise revolutionized a local community's library system( Soma Library ) by digitizing over 50,000 book records and creating an intuitive borrowing system that works across all departments.",
    challenge: "The community was struggling with an outdated library system that caused long queues, lost books, and inefficient resource allocation.",
    solution: "We developed a comprehensive library management system with mobile-responsive interfaces, real-time availability updates, and integrated student ID verification.",
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
    title: "RegisVault - Digital File Management System",
    des: "A digital file management system that leverages OCR for document uploading and secure storage.",
    img: "/regisvault.PNG",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiAppwrite", "SiDocker"],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    link: "https://regisvault.vercel.app/",
    githubLink: "https://github.com/Andymwangi/regisvault",
    category: "Full Stack App",
    client: "Office of the Registrar of Political Parties",
    clientLogo: "/orpp-logo.png",
    fullDescription: "RegisVault was developed for the Office of the Registrar of Political Parties (ORPP) Kenya to digitize their massive archives of political party documentation and enable secure, searchable access.",
    challenge: "ORPP was drowning in physical paperwork with over 75 registered political parties, leading to document retrieval delays of up to 3 days and security vulnerabilities.",
    solution: "We implemented an OCR-powered document management system with role-based access control, advanced search capabilities, and automated document verification features.",
    impact: [
      "Digitized over 100,000 documents in the first 6 months",
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
    title: "Minty - Banking Web Application",
    des: "A secure banking web application that facilitates seamless transactions and user authentication.",
    img: "/minty.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiAppwrite", "SiDocker", "SiFramer", "SiPostgresql"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
    link: "https://minty-bank-app.vercel.app/",
    githubLink: "https://github.com/Andymwangi/minty",
    category: "Full Stack App",
    client: "Jaza",
    clientLogo: "/jaza-logo.png",
    fullDescription: "Minty was developed as a prototype for a local financial lending institution (Jaza's) digital transformation initiative, focusing on youth savings and lending solutions with seamless mobile money integration and financial education tools.",
    challenge: "jaza needed to attract younger customers who were abandoning traditional banking for mobile money platforms, leading to a 23% decline in new youth accounts.",
    solution: "We created a mobile-first banking application with M-Pesa integration, gamified financial education modules, and simplified KYC processes tailored to Kenyan regulations.",
    impact: [
      "Increased new youth accounts by 45% in the first quarter",
      "Processed over Ksh 2.5 million in transactions within two months",
      "Reduced account opening time from 2 days to 15 minutes",
      "97% customer satisfaction rating from user surveys"
    ],
    testimonial: {
      quote: "Minty has helped us reconnect with the youth market in a way we never thought possible. The integration with local payment systems and the intuitive design has been a game-changer.",
      name: "Sarah Wanjiku",
      title: "Digital lendingManager, Jaza"
    },
    status: "Completed"
  },
  {
    id: 4,
    title: "LaundryBasket - Laundry E-commerce Platform",
    des: "A comprehensive laundry service marketplace integrating seamless payments via PayPal and M-Pesa, with real-time order tracking and customer loyalty features for local laundry businesses.",
    img: "/laundrybasket.PNG",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiAppwrite", "SiDocker", "SiPostgresql"],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "PostgreSQL", "Docker"],
    link: "https://laundrybasket-web.vercel.app/",
    githubLink: "https://github.com/Andymwangi/laundrybasket",
    category: "Full Stack App",
    client: "Cleanex Laundry Services",
    clientLogo: "/cleanex-logo.png",
    fullDescription: "LaundryBasket transformed Cleanex from a single physical laundromat in Westlands, Nairobi to a digital platform connecting over 25 local laundry providers with customers across the city.",
    challenge: "Small laundry businesses in Nairobi were struggling with inconsistent customer flow, inefficient manual bookkeeping, and limited market reach in a highly competitive industry.",
    solution: "We built a marketplace platform with scheduling, M-Pesa payment integration, real-time order tracking, and a loyalty program specifically designed for local laundry businesses.",
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
    title: "Jadamy Elite Academy - School Website",
    des: "A modern, responsive school website featuring enrollment capabilities, curriculum information, event calendars, and a parent portal for easy communication between staff and families.",
    img: "/jadamyelite.PNG",
    iconLists: ["SiNextdotjs", "SiTailwindcss", "SiTypescript", "FaReact", "SiShadcnui"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    link: "https://jadamy-elite.vercel.app/",
    githubLink: "https://github.com/Andymwangi/jadamy-elite",
    category: "Website",
    client: "Jadamy Elite Academy, Ruai",
    clientLogo: "/jadamy-logo.png",
    fullDescription: "Jadamy Elite Academy's website serves as a comprehensive digital hub for the school, featuring online enrollment, fee payment through local banking integrations, and a parent communication portal.",
    challenge: "The school was losing potential students to competitors with better online presence, and staff spent excessive time on routine communications and paperwork.",
    solution: "We developed a feature-rich school website with custom admissions workflow, M-Pesa fee payment integration, and a secure parent portal with academic performance tracking.",
    impact: [
      "Increased student enrollment by 32% in one academic year",
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
    title: "Learn Hub - Online Learning Platform",
    des: "A comprehensive online learning platform where users can discover, enroll in, and complete various courses with progress tracking and interactive content.",
    img: "/learnhub.PNG",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiPostgresql", "SiPrisma", "SiTailwindcss", "SiDocker"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "React"],
    link: "https://learn-hub.vercel.app/",
    githubLink: "https://github.com/Andymwangi/learn-hub",
    category: "Full Stack App",
    client: "EduTech Kenya",
    clientLogo: "/edutech-logo.png",
    fullDescription: "Learn Hub was developed for EduTech Kenya to create a comprehensive online learning ecosystem that democratizes access to quality education across Kenya, featuring course management, user authentication, and progress tracking.",
    challenge: "Many Kenyans lack access to quality educational resources and professional development courses, especially in rural areas, leading to skills gaps in the growing digital economy.",
    solution: "We built a scalable learning platform with secure user authentication, course enrollment system, progress tracking, and mobile-responsive design optimized for low-bandwidth connections.",
    impact: [
      "Enrolled over 2,500 students in the first 3 months",
      "Delivered 50+ courses across technology and business skills",
      "Achieved 78% course completion rate",
      "Enabled learning access in 15+ counties across Kenya"
    ],
    testimonial: {
      quote: "Learn Hub has revolutionized how we deliver education to underserved communities. The platform's reliability and user-friendly design have made quality education accessible to thousands of Kenyans.",
      name: "Dr. Michael Kiprotich",
      title: "Director, EduTech Kenya"
    },
    status: "Completed"
  },
  {
    id: 8,
    title: "Resume by Edna - Professional Portfolio",
    des: "A sophisticated portfolio website showcasing professional resume writing, content creation, and LinkedIn optimization services with an elegant, conversion-focused design.",
    img: "/resumebyedna.png",
    iconLists: ["SiNextdotjs", "FaReact", "SiTypescript", "SiTailwindcss", "SiFramer"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    link: "https://resume-by-edna.vercel.app/",
    githubLink: "https://github.com/Andymwangi/resume-by-edna",
    category: "Website",
    client: "Edna Wanjiku",
    clientLogo: "/edna-logo.png",
    fullDescription: "Resume by Edna is a professional portfolio website that showcases Edna's expertise in resume writing, content creation, and LinkedIn optimization, designed to attract high-value clients and establish her as a thought leader in career development.",
    challenge: "Edna needed a professional online presence to differentiate herself in the competitive resume writing market and attract premium clients willing to invest in professional career services.",
    solution: "We created an elegant, conversion-optimized portfolio website featuring service showcases, client testimonials, before/after portfolio samples, and integrated booking system for consultations.",
    impact: [
      "Increased client inquiries by 150% within 2 months",
      "Attracted 25+ premium clients paying 3x previous rates",
      "Established strong personal brand with 95% client satisfaction",
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
