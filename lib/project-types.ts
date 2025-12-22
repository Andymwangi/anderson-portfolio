export interface ProjectTestimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
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
}
