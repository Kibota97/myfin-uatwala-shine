import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NEWS } from "@/lib/site-data";

import eventImg from "@/assets/event.jpg";
import graduationImg from "@/assets/graduation.jpg";
import ictImg from "@/assets/ict.jpg";
import sportsImg from "@/assets/sports.jpg";
import musicImg from "@/assets/music.jpg";
import libraryImg from "@/assets/library.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events | Myfin School Utawala" },
      {
        name: "description",
        content:
          "Read the latest news, achievements and upcoming events from Myfin School Utawala in Nairobi.",
      },
      { property: "og:title", content: "News & Events at Myfin School Utawala" },
      {
        property: "og:description",
        content: "Achievements, celebrations, campus updates and the term calendar.",
      },
    ],
  }),
  component: News,
});

const images = [eventImg, graduationImg, ictImg];

const moreStories = [
  {
    image: sportsImg,
    category: "Sports",
    date: "22 May 2026",
    title: "Myfin Under-13 Team Reaches the County Football Semi-Finals",
    excerpt: "An unbeaten group stage sent our young team through to their best finish yet.",
  },
  {
    image: musicImg,
    category: "Arts",
    date: "09 May 2026",
    title: "Music and Drama Festival Entries Earn Three Distinctions",
    excerpt: "Our choir and drama club impressed adjudicators at the zonal festival in Embakasi.",
  },
  {
    image: libraryImg,
    category: "Learning",
    date: "18 April 2026",
    title: "Reading Challenge Sees Learners Finish 4,200 Books",
    excerpt: "Every class beat its termly reading target in our most successful challenge yet.",
  },
];

const upcoming = [
  { date: "14 Aug 2026", title: "Open Day & Campus Tour", place: "Main Hall, 9:00am" },
  { date: "05 Sep 2026", title: "Inter-House Sports Day", place: "School Field, 8:30am" },
  { date: "26 Sep 2026", title: "Parents' Consultation Day", place: "Classrooms, 8:00am" },
  { date: "21 Nov 2026", title: "Annual Prize Giving & Graduation", place: "Main Hall, 10:00am" },
];

function News() {
  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="What's Happening at Myfin"
        description="Achievements, celebrations and campus news, plus the dates you need for the term ahead."
        image={graduationImg}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading eyebrow="Latest" title="Recent Stories" />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {NEWS.map((item, i) => (
              <Reveal key={item.slug} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <img
                    src={images[i]}
                    alt={item.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-sky-soft px-3 py-1 font-semibold tracking-wide text-primary uppercase">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg leading-snug font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky">
                      Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {moreStories.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-gold-soft px-3 py-1 font-semibold tracking-wide text-gold-foreground uppercase">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg leading-snug font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky">
                      Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <SectionHeading eyebrow="Calendar" title="Upcoming Events" />
          </Reveal>
          <ul className="mt-12 space-y-4">
            {upcoming.map((event, i) => (
              <Reveal key={event.title} delay={i * 70} as="li">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift sm:flex sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-primary">{event.title}</h3>
                    <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {event.place}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold text-primary">
                    {event.date}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book a School Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
