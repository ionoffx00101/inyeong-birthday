export interface ProjectDetail {
  platform: string;
  description?: string;
  techStack: string[];
  items: string[];
}

export interface Project {
  name: string;
  platforms: string[];
  role: string;
  period: string;
  description: string;
  details: ProjectDetail[];
}
