import { profile, projects } from "../data/portfolio";

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
      {text}
    </span>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* HEADER */}
        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
            <p className="text-xl text-neutral-700">{profile.title}</p>
            <p className="text-sm text-neutral-500">{profile.location}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Email", href: `mailto:${profile.links.email}` },
              { label: "LinkedIn", href: profile.links.linkedin },
              { label: "GitHub", href: profile.links.github },
              { label: "Resume", href: profile.links.resume },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-neutral-100"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 max-w-3xl">
            {profile.summary.map((line) => (
              <p key={line} className="text-neutral-700 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </header>

        {/* PROJECTS */}
        <Section title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-2 text-neutral-700">{p.description}</p>
                  </div>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-sm underline text-neutral-600 hover:text-neutral-900"
                    >
                      Link
                    </a>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <Pill key={h} text={h} />
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section title="Skills">
          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "PyTorch",
              "Computer Vision",
              "Object Detection",
              "OpenCV",
              "Model Optimization",
              "AWS",
              "SQL",
              "Git",
            ].map((s) => (
              <Pill key={s} text={s} />
            ))}
          </div>
        </Section>

        {/* ABOUT */}
        <Section title="About">
          <p className="max-w-3xl text-neutral-700 leading-relaxed">
            I focus on building efficient vision systems that balance accuracy, latency, and compute.
            I enjoy turning research ideas into clean, testable code and analyzing model errors to
            improve real-world performance.
          </p>
        </Section>

        {/* CONTACT */}
        <Section title="Contact">
          <p className="text-neutral-700">
            You can reach me at{" "}
            <a className="underline" href={`mailto:${profile.links.email}`}>
              {profile.links.email}
            </a>
          </p>
        </Section>

        <footer className="pt-16 text-sm text-neutral-400">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </main>
  );
}
