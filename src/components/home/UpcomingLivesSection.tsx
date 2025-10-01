import React from "react";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";

export default function UpcomingLivesSection() {
  const items = [
    { title: "Eagles Gathering" },
    { title: "Couples Night" },
    { title: "Youth Revival" },
    { title: "Special Service" },
  ];
  return (
    <Section>
      <Container>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Upcoming Lives</h3>
          <a className="text-sm underline" href="#">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <Card key={it.title} className="overflow-hidden">
              <div className="h-36 bg-gray-200/70 dark:bg-white/10" />
              <div className="p-4 text-sm font-medium">{it.title}</div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
