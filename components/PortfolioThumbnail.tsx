import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Layers, 
  FileText, 
  Zap, 
  Cloud, 
  Box, 
  Cpu,
  Activity
} from 'lucide-react';
import { Project, ProjectStatus, ProjectType, DeploymentPlatform } from '../types';

interface PortfolioThumbnailProps extends Omit<Project, 'id'> {
  className?: string;
  width?: number | string;
  height?: number | string;
  target?: string;
}

const PortfolioThumbnail: React.FC<PortfolioThumbnailProps> = ({
  imageSrc,
  linkHref,
  title,
  description,
  techStack = [],
  projectStatus = "active",
  githubUrl,
  liveUrl,
  deploymentPlatform = "cloudflare",
  projectType = "web-app",
  codeAnalysis,
  className = "",
  target = "_blank",
}) => {

  // Configuration for Status Badges
  const statusConfig: Record<ProjectStatus, { color: string; icon: React.ReactNode; bg: string }> = {
    active: { color: 'text-emerald-500', bg: 'bg-emerald-500', icon: <Activity size={10} /> },
    beta: { color: 'text-amber-500', bg: 'bg-amber-500', icon: <Zap size={10} /> },
    completed: { color: 'text-blue-500', bg: 'bg-blue-500', icon: <Layers size={10} /> },
    archived: { color: 'text-gray-500', bg: 'bg-gray-500', icon: <Box size={10} /> }
  };

  // Configuration for Project Types
  const typeConfig: Record<ProjectType, { label: string; bg: string }> = {
    'web-app': { label: 'Web App', bg: 'bg-violet-500' },
    'automation': { label: 'Automation', bg: 'bg-cyan-500' },
    'ai-agent': { label: 'AI Agent', bg: 'bg-pink-500' },
    'analysis': { label: 'Analysis', bg: 'bg-lime-500' }
  };

  // Platform Icons helper
  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case 'cloudflare': return <Cloud size={16} className="text-orange-500" />;
      case 'netlify': return <Layers size={16} className="text-teal-500" />;
      case 'aws': return <Box size={16} className="text-yellow-600" />;
      default: return <Box size={16} className="text-slate-500" />;
    }
  };

  return (
    <div className={`group flex flex-col bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-slate-200 overflow-hidden w-full h-full ${className}`}>
      {/* Clickable Thumbnail Area */}
      <a 
        href={linkHref}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="block relative overflow-hidden h-56 bg-slate-50 cursor-pointer"
      >
        {/* Main Image */}
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center gap-1.5 z-10">
          <span className={`w-2 h-2 rounded-full ${statusConfig[projectStatus].bg} animate-pulse`}></span>
          <span className={`text-xs font-bold uppercase tracking-wider ${statusConfig[projectStatus].color}`}>
            {projectStatus}
          </span>
        </div>

        {/* Project Type Badge */}
        <div className={`absolute top-3 right-3 px-2.5 py-1.5 rounded-xl text-white text-[10px] font-bold shadow-sm backdrop-blur-md z-10 ${typeConfig[projectType].bg}`}>
          {typeConfig[projectType].label}
        </div>

        {/* Platform Indicator */}
        <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm z-10">
          {getPlatformIcon(deploymentPlatform)}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">
            <h3 className="text-xl font-bold mb-2 leading-tight">{title}</h3>
            <p className="text-sm opacity-90 line-clamp-2 mb-4">{description}</p>
            
            <div className="flex gap-2 justify-center flex-wrap">
              <span className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full text-xs font-semibold transition-all duration-200">
                View Project
              </span>
              {githubUrl && (
                <span className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full transition-all duration-200" title="View Code">
                  <Code2 size={16} />
                </span>
              )}
              {liveUrl && (
                <span className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full transition-all duration-200" title="View Live">
                  <ExternalLink size={16} />
                </span>
              )}
            </div>
          </div>
        </div>
      </a>

      {/* Content Details */}
      <div className="p-5 flex flex-col gap-3 flex-grow bg-white">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-semibold text-slate-800 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
            <a href={linkHref} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>{title}</a>
          </h4>
        </div>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {techStack.slice(0, 4).map((tech, index) => (
              <span key={index} className="px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-lg text-xs font-medium">
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-lg text-xs font-medium">
                +{techStack.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Analytics / Stats */}
        {codeAnalysis && (
          <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <FileText size={14} className="text-slate-400" />
              {codeAnalysis.fileCount} files
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu size={14} className="text-slate-400" />
              {codeAnalysis.tokenEstimate}k tokens
            </span>
          </div>
        )}

        {/* Bottom Quick Links */}
        <div className="mt-3 flex gap-3 pt-2">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-200"
              >
                <Github size={14} />
                Code
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioThumbnail;