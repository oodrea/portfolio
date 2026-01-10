"use client";
import React, { useState } from "react";
import { profile, projects, experiences } from "../data/portfolio";
import { Mail, Linkedin, Github, FileText, ArrowUpRight, MapPin } from "lucide-react";

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
      {text}
    </span>
  );
}

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function LinkButton({
  href,
  label,
  icon,
  variant = "secondary",
  external = true,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2";
  const primary = "bg-neutral-900 text-white hover:bg-neutral-800";
  const secondary =
    "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100";

  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      // Mailto should not open a new tab
      target={!isMail && external ? "_blank" : undefined}
      rel={!isMail && external ? "noreferrer" : undefined}
      className={`${base} ${variant === "primary" ? primary : secondary}`}
    >
      <span className="inline-flex items-center justify-center">{icon}</span>
      <span>{label}</span>
      {!isMail && external ? (
        <ArrowUpRight className="h-4 w-4 opacity-70" />
      ) : null}
    </a>
  );
}

// collapsible tech stack
function StackCard({
  title,
  items,
  wide = false,
}: {
  title: string;
  items: string[];
  wide?: boolean;
}) {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-md ${wide ? "md:col-span-2" : ""}`}>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <Pill key={s} text={s} />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const [showAll, setShowAll] = useState(false);

  const core = [
    {
      title: "Core ML & Computer Vision",
      items: ["PyTorch", 
              "YOLOv8", 
              "SSD", 
              "OpenCV", 
              "Object Detection", 
              "Object Classification", 
              "Model Compression", 
              "Backbone Replacement"],
    },
    {
      title: "Data & Modeling",
      items: ["NumPy", 
              "Pandas", 
              "Data Annotation", 
              "Dataset Preprocessing", 
              "Model Training", 
              "Fine-Tuning", 
              "Model Evaluation", 
              "Error Analysis"],
    },
    {
      title: "Frontend & Web",
      items: ["Next.js", 
              "React", 
              "TypeScript", 
              "Tailwind CSS", 
              "HTML", 
              "CSS"],
    },
  ];

  const more = [
    { title: "Backend & Systems", 
        items: [
          "Python",
          "SQL",
          "Java",
          "C++",
          "C",
          "Firebase",
          "REST APIs",
          "Serverless Functions",
          "Vercel",
        ],
            },
    {
      title: "Data Engineering & Analytics",
      items: ["MySQL", "Apache NiFi (ETL)", "Tableau", "Flourish", "Statistical Analysis"],
      wide: true,
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Jupyter Notebook", "Figma"],
      wide: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* HEADER */}
        <header className="space-y-6">
          <div className="flex items-center gap-8">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-2 border-white shadow-lg"

            />

            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">
                {profile.name}
              </h1>
              <p className="text-xl text-neutral-700">
                {profile.title}
              </p>
              <div className="flex items-center gap-1 text-sm text-neutral-500">
                <MapPin size={14} className="text-neutral-400" />
                <span>{profile.location}</span>
              </div>


              <p className="text-sm text-neutral-600 italic">
                hi there! welcome :D
              </p>
            </div>
            </div>


          {/* LINKS */}
          <div className="flex flex-wrap gap-3">
            <LinkButton
              label="rjaemi@gmail.com"
              href={`mailto:${profile.links.email}`}
              icon={<Mail className="h-4 w-4" />}
              variant="primary"
              external={false}
            />
            <LinkButton
              label="LinkedIn"
              href={profile.links.linkedin}
              icon={<Linkedin className="h-4 w-4" />}
            />
            <LinkButton
              label="GitHub"
              href={profile.links.github}
              icon={<Github className="h-4 w-4" />}
            />
            <LinkButton
              label="Resume"
              href={profile.links.resume}
              icon={<FileText className="h-4 w-4" />}
            />
          </div>
        </header>

        {/* ABOUT */}
        <Section title="About">
          <div className="max-w-4xl rounded-2xl bg-white p-8 shadow-md">
            <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
              {profile.about.split("\n\n").map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}      
        <Section title="Experience">
          <div className="grid gap-6">
            {experiences.map((e) => (
              <div
                key={`${e.title}-${e.company}`}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{e.title}</h3>
                    <p className="text-sm text-neutral-600">{e.company}</p>
                  </div>

                  <div className="text-sm text-neutral-500 sm:text-right">
                    <div>{e.period}</div>
                    <div>{e.location}</div>
                  </div>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {e.link ? (
                  <div className="mt-4">
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm underline text-neutral-600 hover:text-neutral-900"
                    >
                      Link
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Section>


        {/* PROJECTS */}
        <Section title="Some Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-2 text-neutral-700">{p.description}</p>
                  </div>

                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-sm text-neutral-600 underline hover:text-neutral-900"
                    >
                      Link <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
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

        {/* SKILLS / TECH STACK */}
        <Section
          title="Tech Stack"
          action={
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-neutral-100"
            >
              {showAll ? "Show less" : "View all"}
            </button>
          }
        >
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <div className="grid gap-8 md:grid-cols-2">
            {/* Core stacks (always visible) */}
            {core.map((group, i) => (
              <div key={group.title} className={i === 2 ? "md:col-span-2" : ""}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Pill key={s} text={s} />
                  ))}
                </div>
              </div>
            ))}

            {/* Expandable stacks */}
            {showAll &&
              more.map((group) => (
                <div key={group.title} className={group.wide ? "md:col-span-2" : ""}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <Pill key={s} text={s} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
          </div>


        </Section>



        <footer className="pt-16 text-sm text-neutral-400">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </main>
  );
}
