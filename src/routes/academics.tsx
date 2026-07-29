import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  ClipboardCheck,
  Cpu,
  FlaskConical,
  LifeBuoy,
  Library,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

import primaryImg from "@/assets/primary.jpg";
import earlyYearsImg from "@/assets/early-years.jpg";
import juniorImg from "@/assets/junior.jpg";
import ictImg from "@/assets/ict.jpg";
import libraryImg from "@/assets/library.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics at Myfin School Utawala | CBC Curriculum in Nairobi" },
      {
        name: "description",
        content:
          "Explore the CBC curriculum, learning approach, assessment, digital learning, library, science, ICT and academic support at Myfin School Utawala.",
      },
      { property: "og:title", content: "Academics at Myfin School Utawala" },
      {
        property: "og:description",
        content:
          "Curriculum, learning approach, assessment, digital learning and academic support at our Nairobi campus.",
      },
    ],
  }),
  component: Academics,
});

const stages = [
  {
    title: "Early Years (PP1 – PP2)",
    image: earlyYearsImg,
    text: "Play-based literacy, numeracy, language and psychomotor development in small, joyful classes.",
  },
  {
    title: "Primary School (Grades 1 – 6)",
    image: primaryImg,
    text: "Core CBC learning areas with daily reading, project work and structured skills practice.",
  },
  {
    title: "Junior School (Grades 7 – 9)",
    image: juniorImg,
    text: "Specialist subject teachers, laboratory science, pre-technical studies and pathway guidance.",
  },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Curriculum",
    text: "We deliver the Kenyan Competency Based Curriculum in full, enriched with reading, life skills and values education.",
  },
  {
    icon: Lightbulb,
    title: "Learning Approach",
    text: "Enquiry-led, hands-on lessons where learners collaborate, present and apply knowledge to real situations.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    text: "Continuous formative assessment, termly summative exams and detailed reports shared with parents.",
  },
  {
    icon: Cpu,
    title: "Digital Learning",
    text: "Coding, digital literacy and safe-internet practice from Grade 3, supported by our new ICT lab.",
  },
  {
    icon: Library,
    title: "Library",
    text: "A stocked library with a levelled reading scheme, weekly library lessons and take-home borrowing.",
  },
  {
    icon: FlaskConical,
    title: "Science",
    text: "A fully equipped laboratory where Junior School learners run practical experiments every week.",
  },
  {
    icon: Sparkles,
    title: "ICT & Innovation",
    text: "Robotics, design thinking and an annual innovation fair that showcases learner-built projects.",
  },
  {
    icon: LifeBuoy,
    title: "Academic Support",
    text: "Remedial clinics, gifted-learner extension work and individual mentorship for every child who needs it.",
  },
];

function Academics() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A Curriculum That Builds Skills, Not Just Scores"
        description="Competency Based Curriculum delivered by specialist teachers, supported by modern laboratories, a rich library and personalised academic support."
        image={primaryImg}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Our Stages"
              title="Learning Pathways at Myfin"
              description="Three stages, one continuous journey from first words to junior secondary."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {stages.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-8">
                    <h3 className="text-lg font-semibold text-primary">{stage.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {stage.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="How We Teach"
              title="The Pillars of a Myfin Education"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 60}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-soft text-primary">
                    <pillar.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-primary">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={ictImg}
                alt="Students in the Myfin ICT laboratory"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-64 w-full rounded-3xl object-cover shadow-card"
              />
              <img
                src={libraryImg}
                alt="Children reading in the school library"
                loading="lazy"
                width={1024}
                height={1024}
                className="mt-10 h-64 w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Results"
              title="High Expectations, Personal Support"
              description="Our learners consistently place among the top performers in the sub-county, and just as importantly, they enjoy learning."
            />
            <dl className="mt-8 grid grid-cols-2 gap-6">
              {[
                ["1 : 25", "Teacher to learner ratio"],
                ["98%", "Transition to first-choice schools"],
                ["3", "Reading books per learner each term"],
                ["Weekly", "Practical science lessons"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-muted p-5">
                  <dt className="font-display text-2xl font-bold text-primary">{value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
            <Button variant="hero" className="mt-9" asChild>
              <Link to="/admissions">Apply for a Place</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
