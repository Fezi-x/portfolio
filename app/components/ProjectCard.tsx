import { IconExternalLink } from '@tabler/icons-react';
import { TechIcon } from './TechIcon';

export type ProjectSize = 'small' | 'medium' | 'medium-wide' | 'large';

export type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  logoSrc?: string;
  logoAlt?: string;
  href?: string;
  links?: string[];
  videoSrc?: string;
  architecture?: string;
  featured?: boolean;
  size?: ProjectSize;
};

export function ProjectCard({
  title,
  description,
  tech,
  logoSrc,
  logoAlt,
  href,
  links,
  videoSrc,
  architecture,
  featured,
  size = 'small',
}: ProjectCardProps) {
  const linkList = links ?? (href ? [href] : []);
  const columnSpan =
    size === 'large'
      ? 'col-span-1 md:col-span-2 lg:col-span-3'
      : size === 'medium-wide'
        ? 'col-span-1 md:col-span-2 lg:col-span-2'
        : 'col-span-1 md:col-span-1 lg:col-span-1';
  const density =
    size === 'large'
      ? 'gap-6 p-10 md:p-12'
      : size === 'medium' || size === 'medium-wide'
        ? 'gap-5 p-9'
        : 'gap-4 p-8';

  return (
    <article className={`border-r border-b border-[#2A2A2A] bg-transparent ${columnSpan} ${density}`}>
      {featured ? (
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-[12px] border border-[#2A2A2A] bg-[#121212] overflow-hidden aspect-[16/9]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              src={videoSrc}
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-[16px] font-medium text-[#FFFFFF]">{title}</h3>
            <p className="text-[14px] text-[#A1A1AA] leading-relaxed">{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {tech.map((item) => (
              <TechIcon key={item} label={item} />
            ))}
          </div>
          {linkList.length > 0 ? (
            <div className="flex flex-wrap items-center gap-3">
              {linkList.map((link, index) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors"
                  aria-label={`Open ${title} link ${index + 1}`}
                >
                  <IconExternalLink className="h-[18px] w-[18px]" stroke={2} />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : size === 'small' ? (
        <div className="flex flex-col gap-4 min-w-0">
          <div className="h-24 w-full rounded-[12px] bg-[#121212] flex items-center justify-center">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt || `${title} logo`}
                className="max-h-12 max-w-[70%] object-contain"
              />
            ) : null}
          </div>
          <h3 className="text-[16px] font-medium text-[#FFFFFF]">{title}</h3>
          <div className="flex flex-wrap items-center gap-3">
            {tech.map((item) => (
              <TechIcon key={item} label={item} />
            ))}
          </div>
          {linkList.length > 0 ? (
            <div className="flex flex-wrap items-center gap-3">
              {linkList.map((link, index) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors"
                  aria-label={`Open ${title} link ${index + 1}`}
                >
                  <IconExternalLink className="h-[18px] w-[18px]" stroke={2} />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start min-w-0">
          <div className="h-24 w-full lg:h-24 lg:w-24 shrink-0 rounded-[12px] border border-[#2A2A2A] bg-[#121212] flex items-center justify-center">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt || `${title} logo`}
                className="max-h-12 max-w-[70%] object-contain"
              />
            ) : null}
          </div>
          <div className="flex flex-col gap-4 min-w-0">
            <div className="space-y-2">
              <h3 className="text-[16px] font-medium text-[#FFFFFF]">{title}</h3>
              <p className="text-[14px] text-[#A1A1AA] leading-relaxed">{description}</p>
              {architecture ? (
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{architecture}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {tech.map((item) => (
                <TechIcon key={item} label={item} />
              ))}
            </div>
            {linkList.length > 0 ? (
              <div className="flex flex-wrap items-center gap-3">
                {linkList.map((link, index) => (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors"
                    aria-label={`Open ${title} link ${index + 1}`}
                  >
                    <IconExternalLink className="h-[18px] w-[18px]" stroke={2} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </article>
  );
}
