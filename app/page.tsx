import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';
import { ProjectCard, type ProjectCardProps } from './components/ProjectCard';
import { Section } from './components/Section';

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
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">Portfolio</p>
              <h1 className="text-[34px] md:text-[38px] font-medium mt-4">Zayar Min Thu</h1>
            </div>
            <p className="text-xs text-[#A1A1AA] uppercase tracking-[0.35em]">Product Engineer</p>
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

      <Section id="security" title="Systems & Security">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">Platform</p>
              <a
                href="https://tryhackme.com/p/Fezia"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center text-[14px] text-[#FFFFFF] hover:text-[#FFFFFF]"
              >
                TryHackMe Profile
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">Networking Internship</p>
              <ul className="mt-3 space-y-2 text-[14px] text-[#A1A1AA]">
                <li>Assisted in configuring and maintaining network infrastructure</li>
                <li>Worked with basic network security practices (firewalls, access control)</li>
                <li>Diagnosed connectivity and system-level issues</li>
                <li>Observed system hardening and operational security procedures</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">Skills</p>
              <ul className="mt-3 space-y-2 text-[14px] text-[#A1A1AA]">
                <li>Networking fundamentals (TCP/IP, DNS, routing basics)</li>
                <li>Linux system handling and basic hardening</li>
                <li>Security concepts (enumeration, access control, vulnerabilities)</li>
                <li>Automation and scripting for workflows</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280]">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Linux / Ubuntu', 'Wireshark', 'Nmap', 'Playwright', 'Git / GitHub'].map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
