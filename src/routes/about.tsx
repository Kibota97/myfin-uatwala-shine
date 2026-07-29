import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Eye, HeartHandshake, ShieldCheck, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

import campusImg from "@/assets/campus.jpg";
import principalImg from "@/assets/principal.jpg";
import libraryImg from "@/assets/library.jpg";
import ictImg from "@/assets/ict.jpg";
import sportsImg from "@/assets/sports.jpg";
import juniorImg from "@/assets/junior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Myfin School Utawala | Our Story, Vision & Values" },
      {
        name: "description",
        content:
          "Discover the history, vision, mission, core values, leadership team and facilities of Myfin School Utawala in Nairobi.",
      },
      { property: "og:title", content: "About Myfin School Utawala" },
      {
        property: "og:description",
        content:
          "Our story, vision, mission, values, leadership team and campus facilities in Utawala, Nairobi.",
      },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "We do the right thing, especially when nobody is watching." },
  { icon: Target, title: "Excellence", text: "We pursue our personal best in every lesson, field and stage." },
  { icon: HeartHandshake, title: "Compassion", text: "We treat every learner, parent and colleague with kindness." },
  { icon: Users, title: "Community", text: "We grow together with families, neighbours and partners." },
  { icon: Compass, title: "Responsibility", text: "We take ownership of our learning, choices and environment." },
  { icon: Eye, title: "Curiosity", text: "We ask questions, explore ideas and never stop wondering." },
];

const leadership = [
  { name: "Mrs. Esther Mwangi", role: "Principal", image: principalImg },
  { name: "Mr. Daniel Kiprotich", role: "Deputy Principal, Academics", image: juniorImg },
  { name: "Ms. Faith Achieng", role: "Head of Early Years", image: libraryImg },
  { name: "Mr. Samuel Njoroge", role: "Head of Co-Curricular", image: sportsImg },
];

const facilities = [
  { title: "Science Laboratory", image: juniorImg },
  { title: "ICT & Robotics Lab", image: ictImg },
  { title: "Library & Reading Corner", image: libraryImg },
  { title: "Sports Field & Courts", image: sportsImg },
];

const timeline = [
  { year: "2009", text: "Myfin School opens in Utawala with 32 Early Years learners and four teachers." },
  { year: "2013", text: "Primary section launched; the first permanent classroom block is completed." },
  { year: "2017", text: "Science laboratory and library open, alongside our first school transport route." },
  { year: "2021", text: "Full CBC transition completed and the Junior School section is introduced." },
  { year: "2026", text: "Over 600 learners, 48 teachers and a brand new ICT & robotics laboratory." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A School Built on Character, Community and Curiosity"
        description="Since 2009, Myfin School Utawala has grown into one of the most trusted private day schools in Nairobi's eastern suburbs."
        image={campusImg}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our History"
              title="From One Classroom to a Thriving Campus"
              description="What began as a small Early Years centre serving a handful of Utawala families has become a full day school with more than 600 learners. Every stage of our growth has been guided by one question: what is best for the child?"
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              We have invested steadily in teachers, facilities and safeguarding, while keeping the
              warm, family feel that first attracted parents to Myfin. Our alumni now study in some
              of Kenya's leading secondary schools.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={campusImg}
              alt="Myfin School Utawala campus buildings"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-[2rem] object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-10 shadow-soft">
                <h2 className="gold-rule text-2xl font-bold text-primary">Our Vision</h2>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  To be a leading centre of holistic education in Kenya, nurturing confident,
                  compassionate leaders who serve their communities with integrity.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-3xl border border-border bg-card p-10 shadow-soft">
                <h2 className="gold-rule text-2xl font-bold text-primary">Our Mission</h2>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  To provide quality, learner-centred education in a safe and nurturing environment,
                  supported by qualified teachers, modern facilities and strong partnership with
                  parents.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <SectionHeading eyebrow="Core Values" title="The Values We Live By" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-soft text-gold-foreground">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <img
              src={principalImg}
              alt="Mrs. Esther Mwangi, Principal of Myfin School Utawala"
              loading="lazy"
              width={768}
              height={768}
              className="w-full rounded-[2rem] object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Principal's Welcome"
              title="“Every child who walks through our gate is known by name.”"
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Choosing a school is one of the most important decisions a family makes. At Myfin,
                we take that trust seriously. Our teachers are here to know your child — their
                strengths, their struggles and their dreams.
              </p>
              <p>
                We combine high academic expectations with genuine care, so that learners leave us
                not only well prepared for national assessments, but also grounded, curious and
                kind. I warmly invite you to visit our campus and see this for yourself.
              </p>
              <p className="font-semibold text-primary">
                Mrs. Esther Mwangi — Principal, Myfin School Utawala
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Meet the Team Guiding Myfin"
              description="Experienced educators who lead our academic, pastoral and co-curricular programmes."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 80}>
                <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-primary">{person.name}</h3>
                    <p className="mt-1 text-xs tracking-wide text-sky uppercase">{person.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Facilities"
              title="Spaces Designed for Modern Learning"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, i) => (
              <Reveal key={facility.title} delay={i * 70}>
                <div className="group relative h-60 overflow-hidden rounded-3xl shadow-card">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="hero-overlay absolute inset-0 opacity-80" />
                  <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-base font-semibold text-primary-foreground">
                    {facility.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <SectionHeading eyebrow="Our Journey" title="Timeline of Growth" />
          </Reveal>
          <ol className="mt-14 space-y-8 border-l border-border pl-8">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 80} as="li">
                <div className="relative">
                  <span className="absolute top-1.5 -left-[2.55rem] h-4 w-4 rounded-full border-4 border-background bg-gold" />
                  <p className="font-display text-xl font-bold text-primary">{item.year}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="mt-14 text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/admissions">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
