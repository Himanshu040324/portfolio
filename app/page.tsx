import type { ReactNode } from "react";
import { achievements, education, profile, projects, skills, type Project } from "@/lib/data";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-line py-12 sm:grid-cols-[9rem_1fr] sm:gap-10 sm:py-14">
      <h2 className="text-sm text-muted sm:pt-2">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Pipeline({ steps }: { steps: NonNullable<Project["pipeline"]> }) {
  return (
    <ol className="my-7 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4" aria-label="Pipeline overview">
      {steps.map((s) => (
        <li
          key={s.name}
          className="relative border-t border-line pt-3 before:absolute before:-top-[3px] before:left-0 before:size-[5px] before:rounded-full before:bg-accent"
        >
          <p className="text-sm font-medium">{s.name}</p>
          <p className="mt-0.5 text-xs leading-snug text-muted">{s.note}</p>
        </li>
      ))}
    </ol>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-serif text-2xl tracking-tight">{p.name}</h3>
        <p className="text-sm text-muted">{p.period}</p>
      </div>
      <p className="mt-2 text-muted">{p.summary}</p>
      {p.pipeline && <Pipeline steps={p.pipeline} />}
      <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-muted">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-muted">{p.stack}</p>
      {(p.repo || p.live) && (
        <p className="mt-3 flex gap-5 text-sm">
          {p.repo && <ExtLink href={p.repo}>Source on GitHub</ExtLink>}
          {p.live && <ExtLink href={p.live}>Live site</ExtLink>}
        </p>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-16">
      <header className="pb-16 pt-20 sm:pb-20 sm:pt-32">
        <h1 className="rise font-serif text-6xl leading-none tracking-tight sm:text-8xl">{profile.name}</h1>
        <p className="rise rise-2 mt-8 max-w-xl font-serif text-2xl leading-snug text-muted sm:text-3xl">
          {profile.headline}
        </p>
        <div className="rise rise-3">
          <p className="mt-8 max-w-xl text-muted">{profile.bio}</p>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <a className="link" href={`mailto:${profile.email}`}>
              Email
            </a>
            {profile.links.map((l) => (
              <ExtLink key={l.label} href={l.href}>
                {l.label}
              </ExtLink>
            ))}
          </p>
        </div>
      </header>

      <Section title="Projects">
        <div className="space-y-14">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <dl className="space-y-4">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <dt className="text-muted">{s.group}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Achievements">
        <ul className="space-y-6">
          {achievements.map((a) => (
            <li key={a.title}>
              <p className="font-serif text-xl">{a.title}</p>
              <p className="mt-1 text-muted">{a.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <p className="font-serif text-xl">{education.school}</p>
        <p className="mt-1 text-muted">
          {education.degree}, {education.period}
        </p>
      </Section>

      <Section title="Contact">
        <p className="max-w-md text-muted">
          I’m looking for software engineering roles in backend and full-stack work. Email is the quickest way to reach me.
        </p>
        <a
          className="link mt-4 inline-block font-serif text-2xl tracking-tight sm:text-3xl"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </a>
      </Section>
    </main>
  );
}
