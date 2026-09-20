import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Clock3,
  Flag,
  MapPin,
  Menu,
  Plus,
  Trophy,
} from "lucide-react";

import { Countdown } from "@/components/countdown";
import { ThemeToggle } from "@/components/theme-toggle";
import { BnbHero } from "@/components/bnb-hero";
import { FigmaLandingImporter } from "@/components/figma-landing-importer";
import { FigmaIntegration } from "@/components/figma-integration";
import { LofiWireframe } from "@/components/lofi-wireframe";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* --------------------------------------------------------------- helpers */

function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[11px] leading-[1.3] font-bold tracking-[0.02em] uppercase ${className}`}
    >
      {children}
    </p>
  );
}

function Rule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-[2px] w-5 bg-foreground ${className}`} />;
}

/* ------------------------------------------------------------------ page */

export default function Home() {
  const tracks = [
    {
      id: "01",
      title: "Problem",
      copy: "Real briefs from industry, government and the campus — no imaginary homework.",
      tag: "Weeks 1–2",
    },
    {
      id: "02",
      title: "Plan",
      copy: "Research, framing and brutal prioritisation with mentors from the School of Design.",
      tag: "Weeks 3–4",
    },
    {
      id: "03",
      title: "Prototype",
      copy: "Build the ugly version fast. Physical, digital or service — medium never matters.",
      tag: "Weeks 5–8",
    },
    {
      id: "04",
      title: "Proof",
      copy: "Test it with real people, publish the evidence, defend it on stage in December.",
      tag: "December",
    },
  ];

  const faqs = [
    {
      q: "Who can participate?",
      a: "Any enrolled student — design, engineering, sciences, management or the arts. Teams of 2–5, and solo builders are welcome.",
    },
    {
      q: "Is it fully online?",
      a: "No. It opens online in September, but the prototype and proof phases run on campus at IIT Jodhpur through December.",
    },
    {
      q: "What does it cost?",
      a: "Nothing. Registration, mentorship and campus access during the on-ground phases are covered by the School of Design.",
    },
    {
      q: "What do winners take home?",
      a: "Industry internships, a seed grant to keep prototyping, and the questionable glory of being called un-serious by the Dean.",
    },
  ];

  return (
    <div className="flex min-h-full flex-1 flex-col">
      {/* ============================================================ header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-14 items-stretch justify-between">
          {/* logo group */}
          <div className="flex items-center gap-4 pl-4 sm:pl-6">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-extrabold tracking-wide uppercase">
                School of Design
              </span>
              <span aria-hidden className="hidden h-4 w-px bg-foreground sm:block" />
              <span className="hidden text-[11px] font-semibold tracking-wide uppercase sm:block">
                IIT Jodhpur
              </span>
            </div>
          </div>

          {/* nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 lg:flex"
          >
            {["Ideas", "People", "Places", "Possibilities"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-semibold tracking-wide uppercase transition-opacity hover:opacity-60"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* cta group */}
          <div className="flex items-stretch">
            <a
              href="#industry"
              className="hidden items-center border-x border-border px-5 text-[11px] font-bold tracking-wide uppercase transition-colors hover:bg-foreground hover:text-background sm:flex"
            >
              For industry
              <ArrowRight className="ml-1.5 size-3.5" />
            </a>
            <a
              href="#register"
              className="hidden items-center bg-primary px-6 text-[11px] font-extrabold tracking-wide uppercase text-primary-foreground transition-opacity hover:opacity-80 sm:flex"
            >
              Enter
            </a>
            <button
              type="button"
              className="flex items-center border-x border-border px-5 text-[11px] font-bold tracking-wide uppercase"
            >
              Menu
            </button>
            <ThemeToggle />
            <button
              type="button"
              aria-label="Quick actions"
              className="hidden w-14 items-center justify-center border-l border-border transition-colors hover:bg-foreground hover:text-background md:flex"
            >
              <Plus className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================== main */}
      <main className="flex-1">
        {/* ================================================== hero split */}
        <section className="grid border-b border-border lg:min-h-[calc(100vh-3.5rem)] lg:grid-cols-[minmax(0,576fr)_minmax(0,807fr)]">
          {/* left column */}
          <div className="flex flex-col border-b border-border lg:border-r lg:border-b-0">
            {/* title */}
            <div className="flex items-start justify-between gap-6 px-4 pt-8 pb-4 sm:px-6 sm:pt-10">
              <h1 className="font-display text-[clamp(4.5rem,13vw,8.75rem)] leading-[0.88] font-black tracking-[-0.01em] uppercase">
                Beyond
                <br />
                Normal
                <br />
                Beliefs
              </h1>
              <div className="hidden flex-col gap-3 pt-2 sm:flex">
                <Eyebrow className="max-w-[150px]">
                  Real problems. Unexpected thinking.
                </Eyebrow>
                <Rule />
              </div>
            </div>

            {/* volt block with unserious-image */}
            <div className="flex flex-col border-y border-border bg-volt p-4 text-volt-foreground sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-6">
                <p className="font-display text-[clamp(2.75rem,7vw,4rem)] leading-none font-black tracking-[-0.02em] uppercase">
                  Unserious
                </p>
                <figure className="hidden max-w-[200px] flex-col gap-2 sm:flex">
                  <blockquote className="text-[11px] leading-[1.3] font-semibold">
                    &ldquo;Solve something that matters without being precious
                    about it.&rdquo;
                  </blockquote>
                  <Rule className="w-3" />
                </figure>
              </div>

              {/* Unserious Event Poster Image */}
              <div className="relative rounded-xl overflow-hidden border-2 border-slate-900 shadow-xl group">
                <img
                  src="/images/unserious-image.jpg"
                  alt="IIT Jodhpur Unserious Designathon Poster"
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 bg-slate-950/80 text-white font-mono text-[10px] px-2.5 py-1 rounded border border-white/20">
                  IITJ #BNB2026 · 27 SEP - 29 DEC
                </div>
              </div>
            </div>

            {/* description */}
            <div className="flex flex-col justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6">
              <Eyebrow className="max-w-[300px]">
                A multidisciplinary designathon where real-world problems move
                through problem → plan → prototype → proof.
              </Eyebrow>
              <div className="flex flex-col gap-2">
                <Eyebrow className="max-w-[170px]">
                  Same sky. Different questions.
                </Eyebrow>
                <Rule className="w-4" />
              </div>
            </div>

            {/* left footer */}
            <div className="mt-auto flex items-center justify-between gap-4 border-t border-border px-4 py-3 sm:px-6">
              <span className="text-[11px] font-extrabold tracking-wide uppercase">
                IITJ
              </span>
              <span className="border border-border px-4 py-1.5 text-[11px] font-bold tracking-wide uppercase">
                Design &amp; Innovation Challenge —
              </span>
              <span className="text-[11px] font-bold tracking-wide uppercase">
                #BNB2026
              </span>
            </div>
          </div>

          {/* right column */}
          <div className="flex min-w-0 flex-col">
            {/* countdown split */}
            <div className="flex border-b border-border">
              <div className="flex flex-1 flex-col gap-1 border-r border-border py-3 pl-4 sm:pl-5">
                <Eyebrow className="text-[9px]">Countdown to submission</Eyebrow>
                <Countdown />
              </div>
              <div className="flex w-28 flex-col gap-1 px-4 py-3 sm:w-32">
                <Eyebrow className="text-[9px]">Next gate</Eyebrow>
                <p className="text-lg font-black tracking-tight sm:text-xl">
                  11 OCT
                </p>
              </div>
            </div>

            {/* media well */}
            <div className="bg-blueprint relative flex flex-1 items-center justify-center overflow-hidden p-6 sm:p-10">
              <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                <Badge
                  variant="outline"
                  className="w-fit rounded-none border-border bg-background px-2 py-1 text-[10px] font-bold tracking-wide uppercase"
                >
                  Live · Registrations open
                </Badge>
                <div className="hidden items-center gap-2 text-[11px] font-bold tracking-wide uppercase sm:flex">
                  <ArrowDown className="size-3.5" />
                  Scroll for the brief
                </div>
              </div>

              <div className="relative flex max-w-md flex-col items-center gap-5 text-center">
                <Asterisk
                  aria-hidden
                  className="animate-spin-slow size-16 sm:size-20"
                  strokeWidth={1.5}
                />
                <p className="font-display text-4xl leading-[0.95] font-black uppercase sm:text-5xl">
                  Take one belief apart
                  <br />
                  and rebuild it.
                </p>
                <p className="max-w-sm text-[11px] leading-[1.4] font-semibold tracking-wide uppercase">
                  10 weeks · 4 phases · 1 real problem that deserves a better
                  answer
                </p>
                <a
                  id="register"
                  href="#register"
                  className="inline-flex h-12 items-center gap-2 bg-primary px-7 text-[11px] font-extrabold tracking-wide uppercase text-primary-foreground transition-opacity hover:opacity-80"
                >
                  Register a team
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== marquee */}
        <section
          aria-hidden
          className="overflow-hidden border-b border-border bg-foreground py-2.5 text-background"
        >
          <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center gap-8">
                {[
                  "Beyond normal beliefs",
                  "Same sky. Different questions.",
                  "#BNB2026",
                  "27 SEP — 29 DEC",
                  "Unserious by design",
                  "IIT Jodhpur",
                ].map((t) => (
                  <span
                    key={`${dup}-${t}`}
                    className="flex items-center gap-8 text-xs font-extrabold tracking-[0.08em] uppercase"
                  >
                    {t}
                    <Asterisk className="size-4" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ====================================================== manifest */}
        <section id="ideas" className="border-b border-border">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="flex flex-col justify-between gap-8 border-b border-border p-6 sm:p-10 lg:border-r lg:border-b-0">
              <div className="flex items-center justify-between">
                <Eyebrow>The manifesto</Eyebrow>
                <span className="text-[11px] font-bold">01</span>
              </div>
              <p className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.95] font-black uppercase">
                Design is not decoration.
                <br />
                It is <span className="bg-volt px-1 text-volt-foreground">duty</span>,
                done loudly.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {[
                {
                  t: "Real over safe",
                  c: "Every brief comes from somebody who actually owns the problem.",
                },
                {
                  t: "Evidence over taste",
                  c: "Opinions are cheap. We grade what you can prove.",
                },
                {
                  t: "Systems over pieces",
                  c: "One fix that changes the structure beats ten that polish it.",
                },
                {
                  t: "Unserious over precious",
                  c: "The best prototypes start as jokes nobody else dared to test.",
                },
              ].map((item, i) => (
                <div
                  key={item.t}
                  className={`flex flex-col gap-3 border-border p-6 sm:p-8 ${
                    i % 2 === 0 ? "sm:border-r" : ""
                  } ${i < 2 ? "border-b" : ""} ${
                    i === 0 || i === 1 ? "border-b sm:border-b-0" : ""
                  } ${i === 2 ? "sm:border-t-0 border-b sm:border-b-0" : ""}`}
                >
                  <span className="font-display text-3xl font-black">
                    0{i + 1}
                  </span>
                  <Eyebrow>{item.t}</Eyebrow>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.c}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================= process */}
        <section id="places" className="border-b border-border">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
            <Eyebrow>The process — problem → plan → prototype → proof</Eyebrow>
            <span className="text-[11px] font-bold">02</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {tracks.map((track, i) => (
              <article
                key={track.id}
                className={`group flex min-h-72 flex-col justify-between gap-10 border-border p-6 sm:p-8 ${
                  i < tracks.length - 1 ? "border-b xl:border-r xl:border-b-0" : ""
                } ${i % 2 === 0 ? "sm:border-r xl:border-b-0" : ""} ${
                  i < 2 ? "border-b xl:border-b-0" : ""
                } transition-colors hover:bg-volt hover:text-volt-foreground`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl font-black">
                    {track.id}
                  </span>
                  <Badge
                    variant="outline"
                    className="rounded-none border-border px-2 py-1 text-[10px] font-bold uppercase"
                  >
                    {track.tag}
                  </Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-black uppercase">
                    {track.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-volt-foreground/80">
                    {track.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ======================================================== dates */}
        <section className="border-b border-border">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
            <Eyebrow>Key dates</Eyebrow>
            <span className="text-[11px] font-bold">03</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { icon: Clock3, k: "Registrations open", v: "27 SEP", note: "Rolling review" },
              { icon: Flag, k: "Submission gate", v: "11 OCT", note: "Countdown above" },
              { icon: Trophy, k: "On-ground finale", v: "29 DEC", note: "IIT Jodhpur campus" },
            ].map((d, i) => (
              <div
                key={d.k}
                className={`flex flex-col gap-10 border-border p-6 sm:p-10 ${
                  i < 2 ? "md:border-r" : ""
                } ${i < 2 ? "border-b md:border-b-0" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <Eyebrow>{d.k}</Eyebrow>
                  <d.icon className="size-4" />
                </div>
                <p className="font-display text-6xl font-black uppercase sm:text-7xl">
                  {d.v}
                </p>
                <p className="text-[11px] font-bold tracking-wide uppercase text-muted-foreground">
                  {d.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================== faq */}
        <section id="people" className="border-b border-border">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
            <Eyebrow>Questions, answered straight</Eyebrow>
            <span className="text-[11px] font-bold">04</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className={`group border-border px-4 sm:px-6 ${
                  i % 2 === 0 ? "lg:border-r" : ""
                } ${i < faqs.length - 1 - (faqs.length % 2 === 0 ? 1 : 0) ? "" : ""} ${
                  i < faqs.length - 2 ? "border-b" : "border-b lg:border-b-0"
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5">
                  <span className="flex items-baseline gap-4">
                    <span className="text-[11px] font-bold text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="font-display text-xl font-black uppercase sm:text-2xl">
                      {f.q}
                    </span>
                  </span>
                  <Plus className="size-5 shrink-0 transition-transform group-open:rotate-45" />
                </summary>
                <p className="max-w-xl pb-6 pl-9 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ====================================================== industry */}
        <section id="industry" className="border-b border-border">
          <div className="flex flex-col gap-10 p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-6">
              <Eyebrow>For industry — 05</Eyebrow>
              <p className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] font-black uppercase">
                Bring us a problem
                <br />
                you gave up on.
              </p>
              <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                Partner teams hand their real, unsolved briefs to the cohort.
                You get 400+ hungry minds, four weeks of supervised prototyping,
                and public proof at the December showcase.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <a
                href="#industry"
                className="inline-flex h-12 items-center gap-2 bg-primary px-7 text-[11px] font-extrabold tracking-wide uppercase text-primary-foreground transition-opacity hover:opacity-80"
              >
                Partner with us
                <ArrowUpRight className="size-4" />
              </a>
              <span className="text-[11px] font-bold tracking-wide uppercase text-muted-foreground">
                partnerships@design.iitj.ac.in
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================== footer */}
      <footer id="possibilities" className="sticky bottom-0 z-40 border-t border-border bg-background">
        <div className="flex items-stretch justify-between">
          <div className="flex flex-1 items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase">
              <MapPin className="size-3" />
              27 SEP – 29 DEC | IIT Jodhpur
            </span>
            <span className="hidden text-[10px] font-bold tracking-wide uppercase sm:block">
              Ideas for a more interesting tomorrow.
            </span>
          </div>
          <div
            aria-hidden
            className="flex w-10 items-center justify-center border-l border-border bg-primary text-primary-foreground"
          >
            <Asterisk className="size-5" />
          </div>
          <Menu aria-hidden className="hidden" />
        </div>
      </footer>
    </div>
  );
}
