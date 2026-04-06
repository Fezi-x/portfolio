type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  tone?: 'default' | 'muted';
  children: React.ReactNode;
};

export function Section({ id, title, eyebrow, children, tone = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${tone === 'muted' ? 'bg-[#121212] border-y border-[#2A2A2A]' : ''}`}
    >
      <div className="mx-auto w-full max-w-[860px] px-6 md:px-12">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.4em] text-[#6B7280] mb-4">{eyebrow}</p>
        ) : null}
        {title ? (
          <h2 className="text-[18px] md:text-[20px] tracking-[0.2em] uppercase text-[#A1A1AA] mb-8">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
