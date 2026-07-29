import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  Cpu,
  HeartHandshake,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";
import { FAQS, NEWS, TESTIMONIALS } from "@/lib/site-data";

import heroImg from "@/assets/hero.jpg";
import campusImg from "@/assets/campus.jpg";
import earlyYearsImg from "@/assets/early-years.jpg";
import primaryImg from "@/assets/primary.jpg";
import juniorImg from "@/assets/junior.jpg";
import sportsImg from "@/assets/sports.jpg";
import musicImg from "@/assets/music.jpg";
import ictImg from "@/assets/ict.jpg";
import artImg from "@/assets/art.jpg";
import libraryImg from "@/assets/library.jpg";
import graduationImg from "@/assets/graduation.jpg";
import eventImg from "@/assets/event.jpg";
import parent1 from "@/assets/parent-1.jpg";
import parent2 from "@/assets/parent-2.jpg";
import parent3 from "@/assets/parent-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Myfin School Utawala | Premium Private School in Nairobi" },
      {
        name: "description",
        content:
          "Myfin School Utawala shapes future leaders through excellence in education — Early Years, Primary and Junior School in a safe, nurturing Nairobi campus.",
      },
      { property: "og:title", content: "Myfin School Utawala | Premium Private School in Nairobi" },
      {
        property: "og:description",
        content:
          "Myfin School Utawala shapes future leaders through excellence in education — Early Years, Primary and Junior School in a safe, nurturing Nairobi campus.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: Users,
    title: "Qualified Teachers",
    text: "TSC-registered, CBC-trained educators who mentor every learner with patience and expertise.",
  },
  {
    icon: UsersRound,
    title: "Small Class Sizes",
    text: "A maximum of 25 learners per class so every child is seen, known and supported daily.",
  },
  {
    icon: Building2,
    title: "Modern Learning Environment",
    text: "Bright classrooms, science and ICT labs, a stocked library and safe outdoor play spaces.",
  },
  {
    icon: HeartHandshake,
    title: "Holistic Development",
    text: "Academics balanced with character, faith, service, sport and the creative arts.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Campus",
    text: "Gated compound, CCTV, vetted staff, controlled pick-up and GPS-tracked school transport.",
  },
  {
    icon: Trophy,
    title: "Strong Academic Performance",
    text: "Consistent top-tier sub-county results and a proven record of confident, curious learners.",
  },
];

const programmes = [
  {
    icon: Sparkles,
    image: earlyYearsImg,
    title: "Early Years",
    ages: "Ages 3 – 5 · PP1 & PP2",
    text: "Play-based, language-rich learning that builds curiosity, confidence and school readiness.",
  },
  {
    icon: BookOpen,
    image: primaryImg,
    title: "Primary School",
    ages: "Grades 1 – 6",
    text: "A firm foundation in literacy, numeracy and enquiry, delivered through the CBC framework.",
  },
  {
    icon: Cpu,
    image: juniorImg,
    title: "Junior School",
    ages: "Grades 7 – 9",
    text: "Specialist subject teaching, science and ICT labs, and structured pathway guidance.",
  },
];

const schoolLife = [
  { title: "Sports", image: sportsImg },
  { title: "Music", image: musicImg },
  { title: "ICT & Robotics", image: ictImg },
  { title: "Art & Design", image: artImg },
  { title: "Clubs & Societies", image: libraryImg },
  { title: "Leadership & Service", image: graduationImg },
];

const stats = [
  { value: 620, suffix: "+", label: "Students" },
  { value: 48, suffix: "", label: "Qualified Teachers" },
  { value: 17, suffix: "", label: "Years of Excellence" },
  { value: 24, suffix: "", label: "Co-Curricular Activities" },
];

const testimonialImages = [parent1, parent2, parent3];
const newsImages = [eventImg, graduationImg, ictImg];
const galleryImages = [
  { src: primaryImg, alt: "Pupils answering questions in class" },
  { src: sportsImg, alt: "Pupils playing football on the school field" },
  { src: artImg, alt: "Children painting in the art room" },
  { src: libraryImg, alt: "Children reading in the school library" },
  { src: ictImg, alt: "Students working in the ICT lab" },
  { src: graduationImg, alt: "Graduation ceremony at Myfin School" },
];

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Myfin School pupils and their teacher outside the Utawala campus"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/12 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-gold uppercase backdrop-blur">
              <Award className="h-4 w-4" aria-hidden="true" /> Utawala, Nairobi · Est. 2009
            </span>
            <h1 className="mt-6 text-4xl leading-[1.08] font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
              Shaping Future Leaders Through Excellence in Education
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              We deliver quality education in a safe, nurturing and inspiring learning environment
              where every child can reach their full potential.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="gold" size="lg" asChild>
                <Link to="/admissions">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="onDark" size="lg" asChild>
                <Link to="/contact">Book a School Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Why Myfin"
              title="Why Parents Choose Myfin School"
              description="Six reasons families across Utawala, Ruai and Embakasi trust us with their children's education."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 70}>
                <article className="group h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:shadow-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-soft text-primary transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                    <feature.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-primary">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={campusImg}
                alt="The Myfin School Utawala campus"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full rounded-[2rem] object-cover shadow-card"
              />
              <div className="absolute -right-4 -bottom-8 hidden rounded-3xl bg-gold px-8 py-6 text-gold-foreground shadow-lift sm:block">
                <p className="font-display text-3xl font-bold">17</p>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase">
                  Years of Excellence
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                align="left"
                eyebrow="About Us"
                title="A Welcoming School Where Every Child Belongs"
                description="Founded in 2009, Myfin School Utawala grew from a single Early Years class into a thriving day school of more than 600 learners. Our approach blends academic rigour with warmth, discipline and character formation."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Competency Based Curriculum delivered by specialist teachers",
                  "Daily reading, mentorship and remedial support programmes",
                  "Open-door communication with parents and termly progress reviews",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="hero" className="mt-9" asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Academics"
              title="Our Academic Programmes"
              description="Three carefully structured stages that carry your child from first steps to junior secondary with confidence."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {programmes.map((programme, i) => (
              <Reveal key={programme.title} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={programme.image}
                      alt={programme.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-background/95 text-primary shadow-soft">
                      <programme.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="text-xs font-semibold tracking-[0.14em] text-sky uppercase">
                      {programme.ages}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-primary">{programme.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {programme.text}
                    </p>
                    <Button variant="ghost" className="mt-6 self-start px-0 text-sky" asChild>
                      <Link to="/academics">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
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
              eyebrow="School Life"
              title="Learning That Goes Beyond the Classroom"
              description="Sport, music, ICT, art, clubs, leadership and community service — every learner finds their spark."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {schoolLife.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="group relative h-64 overflow-hidden rounded-3xl shadow-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="hero-overlay absolute inset-0 opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-lg font-semibold text-primary-foreground">
                      {item.title}
                    </h3>
                    <span className="mt-2 block h-0.5 w-8 rounded-full bg-gold transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="deep-gradient py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="text-center">
                <p className="font-display text-5xl font-bold text-gold">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium tracking-[0.14em] text-primary-foreground/80 uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What Parents Say About Myfin"
              description="Real voices from the families who make up the Myfin community."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item, i) => (
              <Reveal key={item.name} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-lift">
                  <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    “{item.quote}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-1" aria-label="Five star rating">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                    ))}
                  </div>
                  <figcaption className="mt-5 flex items-center gap-4 border-t border-border pt-5">
                    <img
                      src={testimonialImages[i]}
                      alt={item.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <span>
                      <span className="block text-sm font-semibold text-primary">{item.name}</span>
                      <span className="block text-xs text-muted-foreground">{item.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Life at Myfin, in Pictures"
              description="A glimpse into our classrooms, fields, labs and celebrations."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <Reveal key={img.alt} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl shadow-soft">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-56 w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/gallery">
                View Gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="News & Events"
              title="Latest From the Myfin Community"
              description="Achievements, celebrations and campus updates from this term."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {NEWS.map((item, i) => (
              <Reveal key={item.slug} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <img
                    src={newsImages[i]}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3 text-xs font-semibold tracking-wide text-sky uppercase">
                      <span className="rounded-full bg-sky-soft px-3 py-1">{item.category}</span>
                      <span className="flex items-center gap-1 text-muted-foreground normal-case">
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
                    <Button variant="ghost" className="mt-5 self-start px-0 text-sky" asChild>
                      <Link to="/news">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Admissions, fees, curriculum, uniforms, transport and school hours — answered."
            />
          </Reveal>
          <Reveal delay={120}>
            <Accordion type="single" collapsible className="mt-12 space-y-4">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-card px-6 shadow-soft"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to Join the Myfin Family?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/85">
              Places for the coming term are filling quickly. Start your application or speak with
              our admissions team today.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button variant="gold" size="lg" asChild>
                <Link to="/admissions">Apply Today</Link>
              </Button>
              <Button variant="onDark" size="lg" asChild>
                <Link to="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
