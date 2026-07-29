import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SCHOOL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-soft backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-colors",
              scrolled ? "deep-gradient" : "bg-primary-foreground/15 backdrop-blur",
            )}
          >
            <GraduationCap
              className={cn("h-6 w-6", scrolled ? "text-primary-foreground" : "text-gold")}
              aria-hidden="true"
            />
          </span>
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display text-base leading-tight font-bold sm:text-lg",
                scrolled ? "text-primary" : "text-primary-foreground",
              )}
            >
              Myfin School
            </span>
            <span
              className={cn(
                "block truncate text-[11px] tracking-[0.18em] uppercase",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/75",
              )}
            >
              Utawala, Nairobi
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground hover:text-sky"
                  : "text-primary-foreground/90 hover:text-gold",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SCHOOL.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled ? "text-muted-foreground hover:text-primary" : "text-primary-foreground/85",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SCHOOL.phone}
          </a>
          <Button variant="gold" size="sm" asChild>
            <Link to="/admissions">Apply Now</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors lg:hidden",
            scrolled
              ? "border-border text-primary"
              : "border-primary-foreground/30 text-primary-foreground",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 pt-3 pb-6 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-sky" }}
                className="border-b border-border/70 py-3 text-sm font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button variant="gold" className="mt-5 w-full" asChild>
            <Link to="/admissions" onClick={() => setOpen(false)}>
              Apply Now
            </Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
