import React from 'react';
import PortfolioThumbnail from '../components/PortfolioThumbnail';
import { Project } from '../types';
import { ArrowRight, Terminal, Cpu, Database } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Mock Data mimicking the user's snippet, using Lorem Picsum for images
  const projects: Project[] = [
    {
      id: 'ai-agents-framework',
      title: 'AI Agents Framework',
      description: 'Comprehensive multi-agent system with 153+ files, supporting cross-domain communication, MCP integration, and playground testing.',
      imageSrc: 'https://picsum.photos/id/1/800/600',
      linkHref: '#',
      githubUrl: 'https://github.com/leverageai/agents',
      liveUrl: 'https://agents.leverageai.com',
      techStack: ['TypeScript', 'React', 'Cloudflare Workers', 'Vite', 'MCP'],
      projectStatus: 'active',
      deploymentPlatform: 'cloudflare',
      projectType: 'ai-agent',
      codeAnalysis: {
        fileCount: 153,
        tokenEstimate: 82,
        size: '306.62 KB'
      }
    },
    {
      id: 'codetxt-analyzer',
      title: 'CodeTXT Knowledge Builder',
      description: 'Revolutionary tool that transforms any codebase into LLM-friendly knowledge bases for intelligent analysis and documentation.',
      imageSrc: 'https://picsum.photos/id/119/800/600',
      linkHref: '#',
      githubUrl: 'https://github.com/leverageai/codetxt',
      liveUrl: 'https://codetxt.leverageai.com',
      techStack: ['Node.js', 'CLI', 'Git Integration', 'Pattern Matching'],
      projectStatus: 'active',
      deploymentPlatform: 'cloudflare',
      projectType: 'analysis',
      codeAnalysis: {
        fileCount: 45,
        tokenEstimate: 15,
        size: '128.5 KB'
      }
    },
    {
      id: 'autorag-pipeline',
      title: 'AutoRAG Knowledge Pipeline',
      description: 'Intelligent document processing and retrieval system built on Cloudflare infrastructure for scalable AI applications.',
      imageSrc: 'https://picsum.photos/id/20/800/600',
      linkHref: '#',
      githubUrl: 'https://github.com/leverageai/autorag',
      techStack: ['Cloudflare Workers', 'Vector DB', 'AI Gateway', 'D1 Database'],
      projectStatus: 'beta',
      deploymentPlatform: 'cloudflare',
      projectType: 'ai-agent',
      codeAnalysis: {
        fileCount: 67,
        tokenEstimate: 23,
        size: '189.3 KB'
      }
    },
    {
      id: 'python-automations',
      title: 'Python Agent Workflows',
      description: 'Autonomous Python-based workflow automation system for streamlining development and deployment processes.',
      imageSrc: 'https://picsum.photos/id/60/800/600',
      linkHref: '#',
      githubUrl: 'https://github.com/leverageai/python-automations',
      techStack: ['Python', 'FastAPI', 'Celery', 'Docker', 'CI/CD'],
      projectStatus: 'active',
      deploymentPlatform: 'cloudflare',
      projectType: 'automation',
      codeAnalysis: {
        fileCount: 89,
        tokenEstimate: 34,
        size: '245.7 KB'
      }
    },
    {
      id: 'dependency-mapper',
      title: 'Interactive Dependency Mapping',
      description: 'Visual system for mapping and understanding codebase dependencies and relationships across projects.',
      imageSrc: 'https://picsum.photos/id/2/800/600',
      linkHref: '#',
      githubUrl: 'https://github.com/leverageai/dependency-mapper',
      liveUrl: 'https://deps.leverageai.com',
      techStack: ['React', 'D3.js', 'Graph Theory', 'WebGL', 'Cloudflare Pages'],
      projectStatus: 'beta',
      deploymentPlatform: 'cloudflare',
      projectType: 'analysis',
      codeAnalysis: {
        fileCount: 78,
        tokenEstimate: 29,
        size: '167.4 KB'
      }
    },
    {
      id: 'ai-architect-app',
      title: 'AI Architect Application',
      description: 'Production-ready ADR creation system with intelligent document upload and AI-powered content classification.',
      imageSrc: 'https://picsum.photos/id/48/800/600',
      linkHref: '#',
      githubUrl: 'https://github.com/leverageai/ai-architect',
      liveUrl: 'https://architect.leverageai.com',
      techStack: ['React', 'Cloudflare Workers', 'Workers AI', 'R2', 'D1'],
      projectStatus: 'completed',
      deploymentPlatform: 'cloudflare',
      projectType: 'web-app',
      codeAnalysis: {
        fileCount: 94,
        tokenEstimate: 41,
        size: '298.1 KB'
      }
    }
  ];

  // Helper stats calculation
  const totalFiles = projects.reduce((sum, p) => sum + (p.codeAnalysis?.fileCount || 0), 0);
  const totalTokens = projects.reduce((sum, p) => sum + (p.codeAnalysis?.tokenEstimate || 0), 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden pb-32 pt-28">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-400 tracking-wide">System Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              LEVERAGEAI LLC
            </span>
            <br />
            <span className="text-white text-4xl md:text-6xl mt-2 block">
              Portfolio Gallery
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-12">
            Cutting-edge AI solutions and automation tools built on modern cloud infrastructure. 
            Transforming systems through elegant simplicity and architectural leverage.
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <Terminal className="text-blue-400" size={28} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{projects.length}+</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Active Projects</div>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 delay-75">
               <div className="flex items-center justify-center mb-3">
                <Database className="text-purple-400" size={28} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{totalFiles}+</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Files Analyzed</div>
            </div>

            <div className="col-span-2 md:col-span-1 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 delay-100">
               <div className="flex items-center justify-center mb-3">
                <Cpu className="text-emerald-400" size={28} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{totalTokens}k+</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Token Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative py-20 px-6 lg:px-8 -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <PortfolioThumbnail
                  {...project}
                  height={220}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how our proven AI architectures and automation workflows can accelerate your digital transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight size={20} />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 text-lg font-semibold rounded-xl shadow-sm transition-all duration-300"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LEVERAGEAI LLC. All rights reserved.</p>
          <p className="mt-2">Architected with React & Tailwind</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;