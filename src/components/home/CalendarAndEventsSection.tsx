import React from "react";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";

export default function CalendarAndEventsSection() {
  const events = [
    {
      title: "Eagles Ministers Convocation",
      imgAlt: "Eagles event",
      // Placeholder banner block; swap to next/image when assets are ready
      bannerClass: "bg-[url('/eagles-placeholder.jpg')]",
      summary:
        "Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.",
      location: "Revival City, Haatso, Mango Lane, GE-182-6445",
      date: "September, 2024",
    },
    {
      title: "Fresh Oil Conference",
      imgAlt: "Fresh Oil",
      bannerClass: "bg-[url('/fresh-oil-placeholder.jpg')]",
      summary:
        "Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.",
      location: "Revival City, Haatso, Mango Lane, GE-182-6445",
      date: "September, 2024",
    },
    {
      title: "East Meets West Conference",
      imgAlt: "East Meets West",
      bannerClass: "bg-[url('/east-west-placeholder.jpg')]",
      summary:
        "Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.",
      location: "Revival City, Haatso, Mango Lane, GE-182-6445",
      date: "September, 2024",
    },
    {
      title: "Supernatural Encounter",
      imgAlt: "Supernatural Encounter",
      bannerClass: "bg-[url('/super-encounter-placeholder.jpg')]",
      summary:
        "Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.",
      location: "Revival City, Haatso, Mango Lane, GE-182-6445",
      date: "Every Friday",
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        {/* Calendar heading and subtext */}
        <div className="max-w-6xl">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
            OUR CALENDAR: 2025 — OUR YEAR OF MORE THAN YOU CAN CARRY
          </h3>
          <p className="mt-3 text-black/80">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Upcoming Events header */}
        <div className="mt-10 flex items-center justify-between">
          <h4 className="text-xl font-extrabold tracking-tight text-black">UPCOMING EVENTS</h4>
          <a href="#" className="text-sm text-black/70 hover:text-black">See more →</a>
        </div>

        {/* Events grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((ev) => (
            <div
              key={ev.title}
              className="rounded-2xl bg-white border border-black/10 shadow-md overflow-hidden flex flex-col"
            >
              <div className={`h-40 bg-gray-200 ${ev.bannerClass} bg-cover bg-center`} aria-label={ev.imgAlt} />
              <div className="p-4 flex-1 flex flex-col">
                <div className="font-semibold text-black">{ev.title}</div>
                <p className="mt-1 text-sm text-black/70 line-clamp-3">{ev.summary}</p>
                <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-black/70">
                  <div className="flex items-center gap-2">
                    <span className="inline-block size-2 rounded-full bg-[#39C5FD]" />
                    {ev.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block size-2 rounded-full bg-[#021228]" />
                    {ev.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
