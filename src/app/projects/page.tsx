import type { Metadata } from 'next';
import { Project } from '@/types/post';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I\'ve built and maintain.',
};

const projects: Project[] = [
  {
    name: 'Minimal Blog Engine',
    description: 'A lightweight, self-hosted blog built with Next.js. Focus on performance and simplicity.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'Active',
    github: 'https://github.com/yourusername/blog',
    demo: 'https://yourdomain.com'
  }

];

export default function ProjectsPage() {
  return (
    <div className="post-content">
      <h1>Projects</h1>
      <p>Things I&apos;ve built and maintain. Focus on utility over complexity.</p>
      
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h3 className="project-title">
              {project.name}
            </h3>
            <p className="project-description">
              {project.description}
            </p>
            
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
              <span className="status-tag">
                {project.status}
              </span>
            </div>
            
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  github
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}