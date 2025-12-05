export interface CodeAnalysis {
  fileCount: number;
  tokenEstimate: number;
  size: string;
}

export type ProjectStatus = 'active' | 'beta' | 'completed' | 'archived';
export type DeploymentPlatform = 'cloudflare' | 'netlify' | 'vercel' | 'aws' | 'other';
export type ProjectType = 'web-app' | 'automation' | 'ai-agent' | 'analysis';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  linkHref: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: string[];
  projectStatus: ProjectStatus;
  deploymentPlatform: DeploymentPlatform;
  projectType: ProjectType;
  codeAnalysis?: CodeAnalysis;
}