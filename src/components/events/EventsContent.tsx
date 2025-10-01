import React from "react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

type EventCard = {
  title: string;
  summary: string;
  location: string;
  date: string;
};

const events: EventCard[] = [
  {
    title: "Eagles Ministers Convocation",
    summary:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    location: "Revival City, Haatso, Mango Lane, GE-182-6445",
    date: "September, 2024",
  },
  {
    title: "Fresh Oil Conference",
    summary:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    location: "Revival City, Haatso, Mango Lane, GE-182-6445",
    date: "September, 2024",
  },
  {
    title: "East Meets West Conference",
    summary:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    location: "Revival City, Haatso, Mango Lane, GE-182-6445",
    date: "September, 2024",
  },
  {
    title: "Supernatural Encounter",
    summary:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    location: "Revival City, Haatso, Mango Lane, GE-182-6445",
    date: "Every Friday",
  },
];

export default function EventsContent() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="h-[40vh] sm:h-[50vh] w-full bg-[url('https://i.ibb.co/TSZ40GB/aboutUs.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <Container className="pt-28 sm:pt-36 pb-14 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">UPCOMING EVENTS</h1>
        </Container>
      </div>

      {/* Year banner and intro */}
      <Section className="bg-white">
        <Container className="text-black">
          <h3 className="text-2xl font-extrabold tracking-tight">
            2025 — OUR YEAR OF MORE THAN YOU CAN CARRY
          </h3>
          <p className="mt-3 text-black/80 max-w-4xl">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer.
          </p>
        </Container>
      </Section>

      {/* Events grid */}
      <div className="bg-white pt-0 py-10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((ev) => (
              <div
                key={ev.title}
                className="rounded-2xl bg-white border border-black/10 shadow-md overflow-hidden flex flex-col"
              >
                {/* Placeholder image */}
                <div className="h-40 bg-gray-200" />
                <div className="p-4 flex-1 flex flex-col">
                  <div className="font-semibold text-black">{ev.title}</div>
                  <p className="mt-1 text-sm text-black/70 line-clamp-3">{ev.summary}</p>
                  <div className="mt-3 grid gap-2 text-xs text-black/70">
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
      </div>
    </main>
  );
}
