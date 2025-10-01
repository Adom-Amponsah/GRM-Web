import React from "react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

type Branch = {
  name: string;
  address: string;
  phone: string;
  schedule?: string;
};

const branches: Branch[] = [
  { name: "Revival City", address: "Mango Lane, Haatso, GE-182-6445", phone: "+233 20 123 4568", schedule: "Sun 8:30am" },
  { name: "East Legon", address: "Lagos Ave, East Legon", phone: "+233 20 123 4568", schedule: "Sun 9:00am" },
  { name: "Legon Campus Chapter", address: "University of Ghana", phone: "+233 20 123 4568", schedule: "Fri 6:00pm" },
  { name: "Achimota Branch", address: "Achimota", phone: "+233 20 123 4568", schedule: "Sun 8:30am" },
  { name: "Labone Branch", address: "Labone", phone: "+233 20 123 4568", schedule: "Sun 9:00am" },
  { name: "Santase Branch", address: "Kumasi - Santase", phone: "+233 20 123 4568", schedule: "Sun 9:00am" },
  { name: "Taasco Branch", address: "Tema Community 7", phone: "+233 20 123 4568", schedule: "Sun 8:00am" },
  { name: "Revival City (2)", address: "Mango Lane, Haatso, GE-182-6445", phone: "+233 20 123 4568", schedule: "Sun 8:30am" },
];

export default function BranchesContent() {
  return (
    <main className="flex flex-col">
      {/* Hero with same background as About */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="h-[40vh] sm:h-[50vh] w-full bg-[url('https://i.ibb.co/TSZ40GB/aboutUs.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <Container className="pt-28 sm:pt-36 pb-14 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">FIND A BRANCH NEAR YOU</h1>
        </Container>
      </div>

      {/* Branches filter/search placeholder */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-xl">
            <label className="block text-sm text-gray-600 mb-2">Select your region to find a branch near you</label>
            <div className="rounded-full border border-black/10 px-4 py-2 bg-white shadow-sm text-sm text-gray-700">Search or select a region…</div>
          </div>
        </Container>
      </Section>

      {/* Branches grid */}
      <div className="bg-white pt-0 py-10">
        <Container>
          <h3 className="text-xl font-extrabold tracking-tight mb-4 text-black">BRANCHES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branches.map((b) => (
              <div key={b.name} className="rounded-2xl bg-white border border-black/10 shadow-sm p-4">
                <div className="font-semibold text-black">{b.name}</div>
                <div className="mt-1 text-sm text-gray-600">{b.address}</div>
                <div className="mt-1 text-sm text-gray-600">{b.phone}</div>
                {b.schedule && (
                  <div className="mt-2 inline-flex items-center gap-2 text-xs text-gray-500">
                    <span className="inline-block size-2 rounded-full bg-[#39C5FD]" />
                    {b.schedule}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </main>
  );
}
