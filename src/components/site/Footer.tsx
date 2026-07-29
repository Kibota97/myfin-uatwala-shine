import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { NAV_LINKS, SCHOOL } from "@/lib/site-data";

const admissionsLinks = [
  { label: "Admission Process", to: "/admissions" },
  { label: "Requirements", to: "/admissions" },
  { label: "Fee Information", to: "/admissions" },
  { label: "Apply Online", to: "/admissions" },
  { label: "Book a School Tour", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="deep-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-foreground/15">
                <GraduationCap className="h-6 w-6 text-gold" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold">Myfin School</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
              Myfin School Utawala is a private day school offering Early Years, Primary and Junior
              School education in a safe, nurturing and academically ambitious environment.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
              Admissions
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {admissionsLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {SCHOOL.address}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={SCHOOL.phoneHref} className="hover:text-gold">
                  {SCHOOL.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${SCHOOL.email}`} className="break-all hover:text-gold">
                  {SCHOOL.email}
                </a>
              </li>
            </ul>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                toast.success("Thank you! You are subscribed to the Myfin newsletter.");
              }}
            >
              <label htmlFor="newsletter" className="text-sm font-medium">
                Newsletter
              </label>
              <div className="mt-2 flex gap-2">
                <Input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="h-11 rounded-full border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button type="submit" variant="gold" size="icon" aria-label="Subscribe">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-primary-foreground/15">
          <iframe
            title="Map of Myfin School Utawala"
            src="https://www.openstreetmap.org/export/embed.html?bbox=36.95%2C-1.30%2C37.02%2C-1.25&layer=mapnik"
            className="h-64 w-full"
            loading="lazy"
          />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Myfin School Utawala. All rights reserved.</p>
          <p>Nurturing character, curiosity and confidence since 2009.</p>
        </div>
      </div>
    </footer>
  );
}
