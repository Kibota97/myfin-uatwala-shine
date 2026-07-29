import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-sky-soft/90">
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-primary-foreground/80">{eyebrow}</span>
        </nav>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
