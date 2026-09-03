/** Public GitHub username, used for the contribution graph and profile links */
export const GITHUB_USERNAME = "Andymwangi";

export const SITE_METADATA = {
  title: "Anderson Mwangi - Full Stack Developer & Cybersecurity Engineer",
  description: "Full-stack developer specialising in cybersecurity, cloud engineering, and enterprise systems.",
  keywords: "cybersecurity, cloud engineering, full stack developer, next.js, typescript",
  author: "Anderson Mwangi",
  email: "mitamboandy@gmail.com",
  location: "Nairobi, Kenya",
} as const;

/** The software studio behind the Vortex-branded products in the work section */
export const STUDIO_NAME = "Vortex Digital Labs";
export const STUDIO_URL = "https://vortex-digital-labs.vercel.app/";

/** Social links; icon is an Iconify icon name */
export const SOCIAL_LINKS = [
  { icon: "mdi:github", href: `https://github.com/${GITHUB_USERNAME}`, label: "GitHub" },
  { icon: "mdi:linkedin", href: "https://linkedin.com/in/anderson-mwangi", label: "LinkedIn" },
  { icon: "solar:letter-linear", href: `mailto:${SITE_METADATA.email}`, label: "Mail" },
  { icon: "mdi:twitter", href: "https://x.com/andymwangii", label: "Twitter" },
] as const;

/** Animation durations in seconds, used by the motion variant hooks */
export const ANIMATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  extraSlow: 2.0,
  staggerChildren: 0.1,
} as const;

/** Viewport breakpoints in pixels, mirrored from the Tailwind config */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const FORM_VALIDATION = {
  required: "This field is required",
  email: "Please enter a valid email address",
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be at most ${max} characters`,
} as const;
