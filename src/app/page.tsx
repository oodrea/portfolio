import { profile, projects } from "../data/portfolio";

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border px-3 py-1 text-sm">
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
    <section className="py-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-lg">{profile.title}</p>
          <p className="text-sm text-neutral-600">{profile.location}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a className="underline" href={`mailto:${profile.links.email}`}>
              Email
            </a>
            <a className="underline" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="underline" href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="underline" href={profile.links.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>

          <div className="pt-4 space-y-2">
            {profile.summary.map((line) => (
              <p key={line} className="text-neutral-800">
                {line}
              </p>
            ))}
          </div>
        </header>

        <Section title="Projects">
          <div className="grid gap-5">
            {projects.map((p) => (
              <div key={p.name} className="rounded-2xl border p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-neutral-700 mt-1">{p.description}</p>
                  </div>
                  {p.link && (
                    <a className="underline shrink-0" href={p.link} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <Pill key={h} text={h} />
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-sm text-neutral-700">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-neutral-100 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
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

        <Section title="About">
          <p className="text-neutral-800">
            I focus on building efficient vision systems that balance accuracy, latency, and compute.
            I enjoy turning research ideas into clean, testable code and analyzing model errors to improve performance.
          </p>
        </Section>

        <Section title="Contact">
          <p className="text-neutral-800">
            Email me at{" "}
            <a className="underline" href={`mailto:${profile.links.email}`}>
              {profile.links.email}
            </a>
          </p>
        </Section>

        <footer className="py-10 text-sm text-neutral-500">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </main>
  );
}
