export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  readingTime: number;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  status: string;
  github?: string;
  demo?: string;
}