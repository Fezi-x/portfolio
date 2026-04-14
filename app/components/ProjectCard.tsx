import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { TechIcon } from './TechIcon';

export type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  logoSrc?: string;
  logoAlt?: string;
  projectUrl?: string;
  githubUrl?: string;
  mediaSrc?: string;
  featured?: boolean;
};

export function ProjectCard({
  title,
  description,
  tech,
  logoSrc,
  logoAlt,
  projectUrl,
  githubUrl,
  mediaSrc,
  featured,
}: ProjectCardProps) {
  const gradients = [
    'bg-gradient-to-br from-neutral-800 via-zinc-900 to-neutral-700',
    'bg-gradient-to-br from-slate-800 via-neutral-900 to-slate-700',
    'bg-gradient-to-br from-stone-800 via-neutral-900 to-stone-700',
  ];
  const gradientClass = gradients[title.length % gradients.length];

  return (
    <article
      className={`group relative flex flex-col gap-5 rounded-2xl border border-neutral-800 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
        featured ? 'bg-neutral-800/60 md:col-span-2' : 'bg-neutral-900'
      }`}
    >
      {featured ? (
        <span className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          Featured
        </span>
      ) : null}

      <div className="w-full overflow-hidden rounded-xl border border-neutral-800 aspect-[16/9]">
        {mediaSrc ? (
          <img
            src={mediaSrc}
            alt={`${title} demo`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center ${gradientClass}`}>
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt || `${title} logo`}
                className="max-h-12 max-w-[70%] object-contain"
              />
            ) : null}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-[18px] font-semibold text-white">{title}</h3>
        <p className="text-sm text-[#A1A1AA] leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {tech.map((item) => (
          <TechIcon key={item} label={item} />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition-colors hover:bg-white hover:text-black"
            aria-label={`View project ${title}`}
          >
            <IconExternalLink className="h-4 w-4" stroke={2} />
            View Project
          </a>
        ) : null}
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition-colors hover:bg-white hover:text-black"
            aria-label={`View ${title} on GitHub`}
          >
            <IconBrandGithub className="h-4 w-4" stroke={2} />
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
