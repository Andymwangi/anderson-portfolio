export interface ProjectTestimonial {
  quote: string;
  name: string;
  title: string;
}

/**
 * Display priority. Projects are ordered by tier first, then by their position
 * in the `projects` array, so ranking survives any reordering of the data file.
 *
 * flagship - headline products and enterprise systems, shown first
 * product  - own products still being built out
 * client   - delivered client engagements
 */
export type ProjectTier = "flagship" | "product" | "client";

export const TIER_ORDER: Record<ProjectTier, number> = {
  flagship: 0,
  product: 1,
  client: 2,
};

/** One slide in a project's screenshot carousel. */
export interface ProjectImage {
  src: string;
  /** Describes what the screenshot shows, for screen readers. */
  alt: string;
  /** Short label naming the feature on screen. */
  caption: string;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  /** Primary screenshot. Used on the homepage and as the carousel fallback. */
  img: string;
  /**
   * Optional screenshot set. When present, the case-study card renders a
   * carousel instead of the single `img`.
   */
  images?: ProjectImage[];
  iconLists: string[];
  technologies: string[];
  link: string | null;
  githubLink?: string | null;
  category: string;
  client: string;
  clientLogo: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  impact: string[];
  testimonial: ProjectTestimonial;
  status: string;
  /** Display priority band. See ProjectTier. */
  tier: ProjectTier;
  /** Surfaced in the homepage "Selected work" section. */
  featured?: boolean;
}
