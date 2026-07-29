import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

import primaryImg from "@/assets/primary.jpg";
import earlyYearsImg from "@/assets/early-years.jpg";
import juniorImg from "@/assets/junior.jpg";
import sportsImg from "@/assets/sports.jpg";
import musicImg from "@/assets/music.jpg";
import ictImg from "@/assets/ict.jpg";
import artImg from "@/assets/art.jpg";
import libraryImg from "@/assets/library.jpg";
import graduationImg from "@/assets/graduation.jpg";
import eventImg from "@/assets/event.jpg";
import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Myfin School Utawala, Nairobi" },
      {
        name: "description",
        content:
          "Browse photos of classrooms, events, sports, graduation, learning activities and facilities at Myfin School Utawala.",
      },
      { property: "og:title", content: "Myfin School Utawala Photo Gallery" },
      {
        property: "og:description",
        content: "Classrooms, events, sports, graduation and facilities at our Nairobi campus.",
      },
    ],
  }),
  component: Gallery,
});

const categories = [
  "All",
  "Classrooms",
  "Events",
  "Sports",
  "Graduation",
  "Learning Activities",
  "Facilities",
] as const;

const photos = [
  { src: primaryImg, alt: "Pupils raising hands in class", category: "Classrooms", tall: false },
  { src: eventImg, alt: "Science fair exhibition day", category: "Events", tall: true },
  { src: sportsImg, alt: "Football match on the school field", category: "Sports", tall: false },
  { src: graduationImg, alt: "Graduating class with certificates", category: "Graduation", tall: true },
  { src: earlyYearsImg, alt: "Early years learners building with blocks", category: "Learning Activities", tall: false },
  { src: ictImg, alt: "Pupils working in the ICT lab", category: "Facilities", tall: false },
  { src: artImg, alt: "Children painting in the art room", category: "Learning Activities", tall: true },
  { src: libraryImg, alt: "Reading time in the school library", category: "Facilities", tall: false },
  { src: musicImg, alt: "Music lesson with drums and recorders", category: "Learning Activities", tall: false },
  { src: juniorImg, alt: "Junior school science practical", category: "Classrooms", tall: true },
  { src: campusImg, alt: "The Myfin School campus", category: "Facilities", tall: false },
];

function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments From Life at Myfin"
        description="Classrooms, celebrations, sport, graduation and everyday learning at our Utawala campus."
        image={eventImg}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading eyebrow="Explore" title="Browse by Category" />
          </Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
                  active === category
                    ? "border-transparent bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-card text-muted-foreground hover:border-sky/50 hover:text-primary",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {visible.map((photo, i) => (
              <Reveal key={photo.alt} delay={(i % 6) * 60}>
                <figure className="group break-inside-avoid overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className={cn(
                      "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                      photo.tall ? "h-96" : "h-64",
                    )}
                  />
                  <figcaption className="bg-card px-5 py-4 text-sm text-muted-foreground">
                    {photo.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
