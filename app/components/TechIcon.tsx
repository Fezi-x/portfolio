import { siGithub, siNodedotjs, siPython } from 'simple-icons/icons';

type TechIconProps = {
  label: string;
};

export function TechIcon({ label }: TechIconProps) {
  const key = label.toLowerCase();
  const iconMap: Record<string, typeof siPython> = {
    python: siPython,
    'node.js': siNodedotjs,
    nodejs: siNodedotjs,
    github: siGithub,
    'github api': siGithub,
  };
  const icon = iconMap[key] ?? null;

  if (!icon) {
    return (
      <span className="text-[11px] uppercase tracking-widest text-[#6B7280] border border-[#2A2A2A] px-2.5 py-1 rounded-full">
        {label}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center text-[#A1A1AA]" title={icon.title}>
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d={icon.path} fill="currentColor" />
      </svg>
    </span>
  );
}
