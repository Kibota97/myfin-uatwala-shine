import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SCHOOL } from "@/lib/site-data";

import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Myfin School Utawala | Visit, Call or WhatsApp Us" },
      {
        name: "description",
        content:
          "Contact Myfin School Utawala: campus address on the Eastern Bypass, phone, email, WhatsApp, office hours and enquiry form.",
      },
      { property: "og:title", content: "Contact Myfin School Utawala" },
      {
        property: "og:description",
        content: "Address, phone, email, WhatsApp and office hours for our Utawala campus.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const details = [
    { icon: MapPin, label: "Campus", value: SCHOOL.address },
    { icon: Phone, label: "Telephone", value: SCHOOL.phone, href: SCHOOL.phoneHref },
    { icon: Mail, label: "Email", value: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
    { icon: Clock, label: "Office Hours", value: SCHOOL.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd Love to Hear From You"
        description="Call, email, WhatsApp or simply drop by. Our admissions office is open six days a week."
        image={campusImg}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading align="left" eyebrow="Reach Us" title="Contact Details" />
            <ul className="mt-8 space-y-5">
              {details.map((detail) => (
                <li
                  key={detail.label}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-soft text-primary">
                    <detail.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-sm font-medium break-words text-primary hover:text-sky"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {detail.value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <Button variant="gold" size="lg" className="mt-8" asChild>
              <a href={SCHOOL.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                toast.success("Thank you — your message has been sent. We'll reply shortly.");
              }}
            >
              <h2 className="text-2xl font-bold text-primary">Send Us a Message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete the form and we will respond within one working day.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Jane Wanjiku" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cemail">Email</Label>
                  <Input id="cemail" name="email" type="email" required placeholder="you@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cphone">Phone</Label>
                  <Input id="cphone" name="phone" placeholder="07XX XXX XXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Admissions enquiry" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="cmessage">Message</Label>
                  <Textarea id="cmessage" name="message" rows={5} required placeholder="How can we help?" />
                </div>
              </div>
              <Button type="submit" variant="hero" size="lg" className="mt-8 w-full">
                Send Message
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="Map showing Myfin School Utawala, Nairobi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.95%2C-1.30%2C37.02%2C-1.25&layer=mapnik"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
