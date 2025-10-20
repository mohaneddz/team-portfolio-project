type SocialLinks = {
  github?: string;
  linkedin?: string;
  twitter?: string;
};

export default function ReachOut({ links }: { links?: SocialLinks }) {
  const available = links || {};

  const items: { key: string; label: string; href?: string }[] = [
    { key: 'linkedin', label: 'LinkedIn', href: available.linkedin },
    { key: 'twitter', label: 'Twitter', href: available.twitter },
    { key: 'github', label: 'GitHub', href: available.github },
  ];

  return (
    <section className="w-full bg-white py-12" id="reach-out">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-6">Reach Out</h4>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {items.length === 0 && <p className="text-sm text-muted-foreground">No social links available.</p>}

          {items.map((it) =>
            it.href ? (
              <a
                key={it.key}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-3 bg-gray-100 rounded-md shadow inline-block text-sm sm:text-base"
              >
                {it.label}
              </a>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
