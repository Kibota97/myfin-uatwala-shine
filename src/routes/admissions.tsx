import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Download, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FAQS, SCHOOL } from "@/lib/site-data";

import graduationImg from "@/assets/graduation.jpg";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | Apply to Myfin School Utawala, Nairobi" },
      {
        name: "description",
        content:
          "Admission process, requirements, fee information and online application for Myfin School Utawala. Places available in Early Years, Primary and Junior School.",
      },
      { property: "og:title", content: "Admissions at Myfin School Utawala" },
      {
        property: "og:description",
        content:
          "Four simple steps to join Myfin School Utawala. Apply online or book a campus tour today.",
      },
    ],
  }),
  component: Admissions,
});

const steps = [
  { step: "01", title: "Enquire", text: "Call, WhatsApp or complete the online form and tell us about your child." },
  { step: "02", title: "Visit", text: "Tour the campus, meet the teachers and see a live lesson in progress." },
  { step: "03", title: "Assess", text: "A friendly placement assessment helps us understand your child's level." },
  { step: "04", title: "Enrol", text: "Receive your offer, settle the fees and collect the uniform and book list." },
];

const requirements = [
  "Completed application form",
  "Birth certificate or notification copy",
  "Two passport-size photographs",
  "Immunisation / clinic card (Early Years)",
  "Most recent school report (Grade 1 and above)",
  "Transfer or leaving certificate where applicable",
];

const fees = [
  { level: "Early Years (PP1 – PP2)", tuition: "Available on request", extras: "Meals & transport optional" },
  { level: "Primary (Grades 1 – 6)", tuition: "Available on request", extras: "Meals, transport & clubs optional" },
  { level: "Junior School (Grades 7 – 9)", tuition: "Available on request", extras: "Labs, meals & transport optional" },
];

function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join the Myfin Family This Term"
        description="A simple, transparent admissions process for Early Years, Primary and Junior School. Limited places remain for the coming intake."
        image={graduationImg}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="Four Steps to Enrolment"
              description="From your first enquiry to your child's first day, our admissions team walks with you."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="font-display text-4xl font-bold text-gold">{item.step}</span>
                  <h3 className="mt-4 text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="Requirements" title="What to Bring" />
            <ul className="mt-8 space-y-4">
              {requirements.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="hero" asChild>
                <a href="#apply">
                  <FileText className="h-4 w-4" /> Apply Online
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={SCHOOL.whatsapp} target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" /> Download Application Form
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading align="left" eyebrow="Fees" title="Fee Information" />
            <p className="mt-4 text-sm text-muted-foreground">
              Fees are payable per term, with flexible instalment plans available. Request the
              current structure and we will send it the same day.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <table className="w-full text-left text-sm">
                <thead className="deep-gradient text-primary-foreground">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Level</th>
                    <th className="px-5 py-4 font-semibold">Tuition</th>
                    <th className="hidden px-5 py-4 font-semibold sm:table-cell">Optional</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((row) => (
                    <tr key={row.level} className="border-t border-border">
                      <td className="px-5 py-4 font-medium text-primary">{row.level}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.tuition}</td>
                      <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">
                        {row.extras}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button variant="gold" className="mt-6" asChild>
              <a href={SCHOOL.phoneHref}>
                <Phone className="h-4 w-4" /> Request Fee Structure
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <SectionHeading
              eyebrow="Apply Online"
              title="Start Your Application"
              description="Complete the form below and our admissions office will contact you within one working day."
            />
          </Reveal>
          <Reveal delay={100}>
            <form
              className="mt-12 space-y-6 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                toast.success("Application received. Our admissions team will call you shortly.");
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="parent">Parent / Guardian name</Label>
                  <Input id="parent" name="parent" required placeholder="Jane Wanjiku" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="child">Child's name</Label>
                  <Input id="child" name="child" required placeholder="Amani Wanjiku" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="phone" required placeholder="07XX XXX XXX" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="grade">Class applying for</Label>
                  <Select name="grade" required>
                    <SelectTrigger id="grade">
                      <SelectValue placeholder="Select a class" />
                    </SelectTrigger>
                    <SelectContent>
                      {["PP1", "PP2", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9"].map(
                        (grade) => (
                          <SelectItem key={grade} value={grade}>
                            {grade}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Anything we should know?</Label>
                  <Textarea id="message" name="message" rows={4} placeholder="Tell us about your child" />
                </div>
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Admissions Questions, Answered" />
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="mt-12 space-y-4">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
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
          <div className="mt-12 text-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
