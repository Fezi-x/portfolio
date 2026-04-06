import { IconBrandGithub, IconBrandX, IconExternalLink } from '@tabler/icons-react';
import { ProjectCard, type ProjectCardProps } from './components/ProjectCard';
import { Section } from './components/Section';
import { TechIcon } from './components/TechIcon';

const GRID_ITEMS: ProjectCardProps[] = [
  {
    size: 'small',
    title: 'CUEO',
    description:
      'Mobile teleprompter app for capturing video while reading a scripts.',
    tech: ['React Native', 'Tailwind', 'Expo go', 'UI/UX'],
    logoSrc: '/cueo_logo.png',
    logoAlt: 'CUEO logo',
    href: 'https://github.com/Fezi-x/cueoApp',
  },
  {
    size: 'small',
    title: 'krakentec.com',
    description: 'Business platform for managing digital presence and services for local businesses.',
    tech: ['Web Stack', 'UI/UX', 'CMS', 'Deployment'],
    logoSrc: '/kraken_logo.png',
    logoAlt: 'Krakentec logo',
    href: 'https://www.krakentec.com/',
  },
  {
    size: 'small',
    title: 'pefaentertainment.com',
    description: 'Digital entertainment platform for content delivery and audience engagement.',
    tech: ['Media Platform', 'Web Stack', 'AWS', 'Docker'],
    logoSrc: '/logopefa.svg',
    logoAlt: 'PEFA LOGO',
    href: 'https://www.pefaentertainment.com/',
  },
  {
    size: 'large',
    title: 'Self-Learning Prompt Validation System',
    description: 'System for evaluating and improving prompts through structured validation loops.',
    tech: ['Automation', 'Evaluation', 'System Design', 'AI Ops', 'groq'],
    links: [
      'https://github.com/Fezi-x/Self-Learning-Prompt-Validation-System',
      'https://zayar-hackathon-issa-production.up.railway.app/',
      'https://vercel.com/zayar-min-thus-projects/hackathon-issa-frontend',
    ],
  },
  {
    size: 'large',
    title: 'Lead Intelligence Engine',
    description: 'Extracts and structures business data from social platforms into usable leads.',
    tech: ['Python', 'Playwright', 'APIs', 'Data Parsing', 'Automation', 'groq'],
    links: [
      'https://github.com/Fezi-x/Lead-Intelligence-Engine',
      'https://www.mintlify.com/Fezi-x/Lead-Intelligence-Engine',
    ],
  },
  {
    size: 'large',
    title: 'Devloop',
    description:
      'A workflow system that connects development tasks directly with execution, allowing actions to trigger structured outputs and GitHub issue management in real time.',
    tech: ['Python', 'CLI', 'GitHub API', 'Automation', 'System Design'],
    architecture:
      'Command-driven interface that maps user intent into structured operations, integrated with external services via API orchestration.',
    mediaSrc: '/devloop-demo.gif',
    href: 'https://github.com/Fezi-x/devloop',
    featured: true,
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] uppercase tracking-widest text-[#6B7280] border border-[#2A2A2A] px-2.5 py-1 rounded-full">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0E0E0E] text-[#FFFFFF]">
      <div className="pointer-events-none absolute inset-0 noise-overlay" aria-hidden="true" />

      <header className="relative">
        <div className="mx-auto w-full max-w-[860px] px-6 md:px-12 pt-16 md:pt-24 pb-10">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">Portfolio</p>
              <h1 className="text-[34px] md:text-[38px] font-medium mt-4">Zayar Min Thu</h1>
            </div>
            <p className="text-lg text-white uppercase">Product Engineer</p>
          </div>

          <div className="mt-10 max-w-2xl space-y-4 text-[#A1A1AA] text-[15px] leading-relaxed">
            <p>I build things that start as small problems and end up becoming systems.</p>
            <p>
              Somewhere between breaking and fixing, I work across code, interfaces, and infrastructure -- where ideas
              don't stay abstract for long. Most of what I make lives in that loop between curiosity and execution.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-5 text-[#A1A1AA]">
            <a
              href="https://github.com/Fezi-x"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#FFFFFF]"
              aria-label="GitHub"
            >
              <IconBrandGithub className="h-[18px] w-[18px]" stroke={2} />
            </a>
            <a
              href="https://x.com/ZayarMinthuW"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#FFFFFF]"
              aria-label="X"
            >
              <IconBrandX className="h-[18px] w-[18px]" stroke={2} />
            </a>
          </div>
        </div>
      </header>

      <Section id="projects" title="Projects" tone="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#2A2A2A] [grid-auto-rows:auto]">
          {GRID_ITEMS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="security" title="Security Foundations">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* 🔥 FEATURED (like large project) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 border-r border-b border-[#2A2A2A] p-10 md:p-12 flex flex-col gap-6">

            <div className="flex items-center gap-3">
              <img
                src="https://tryhackme.com/img/favicon.png"
                alt="TryHackMe"
                className="h-6 w-6"
              />
              <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">
                Capability
              </p>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-[18px] font-medium text-[#FFFFFF]">
                  Junior Security Level
                </h3>
                <p className="mt-1 text-[14px] text-[#A1A1AA]">
                  Hands-on labs in enumeration, networking, and system access
                </p>
              </div>
            </div>

            <a
              href="https://tryhackme.com/p/Fezia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors"
            >
              <IconExternalLink className="h-[18px] w-[18px]" stroke={2} />
              View Profile
            </a>
          </div>

          {/* Core Knowledge */}
          <div className="col-span-1 border-r border-b border-[#2A2A2A] p-8 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">
              Core Knowledge
            </p>
            <ul className="space-y-2 text-[14px] text-[#A1A1AA]">
              <li>Network architecture & routing (CCNA/CCNP-level)</li>
              <li>Enumeration, vulnerabilities, access control</li>
              <li>Web security (SQL Injection, OWASP)</li>
              <li>System attack surfaces & defensive thinking</li>
              <li>Data structures & algorithms (foundation)</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="col-span-1 border-r border-b border-[#2A2A2A] p-8 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">
              Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'Linux',
                'Nmap',
                'Wireshark',
                'Burp Suite',
                'Metasploit',
                'Aircrack-ng',
                'Sherlock',
                'SQLite'
              ].map((tool) => (
                <TechIcon key={tool} label={tool} />
              ))}
            </div>
          </div>

          {/* Systems */}
          <div className="col-span-1 border-b border-[#2A2A2A] p-8 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">
              Systems
            </p>
            <ul className="space-y-2 text-[14px] text-[#A1A1AA]">
              <li>Linux & Windows Server administration</li>
              <li>Deployment: AWS, Docker, Railway, Vercel</li>
              <li>Networking: Cisco, Mikrotik, TP-Link, Engenius</li>
              <li>Hands-on configuration & troubleshooting</li>
            </ul>
          </div>

        </div>
      </Section>
    </main>
  );
}
