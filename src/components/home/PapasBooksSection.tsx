import React from "react";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";

export default function PapasBooksSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: flyer placeholder */}
          <div className="min-h-[360px] rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
            BOOKS FLYER
          </div>

          {/* Right: copy and stats */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">PAPA’S BOOKS</h3>
            <p className="mt-3 text-black leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum has been the industry’s standard dummy text ever
              since the 1500s.
            </p>

            {/* Stat cards */}
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
              <div className="rounded-2xl border border-black/10 dark:border-white/15  shadow-sm px-5 py-4 text-center bg-gray-200">
                <div className="text-3xl font-extrabold text-black">100+</div>
                <div className="mt-1 text-xs text-gray-600">books available for purchase</div>
              </div>
              <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-gray-200 shadow-sm px-5 py-4 text-center">
                <div className="text-3xl font-extrabold text-black">3</div>
                <div className="mt-1 text-xs text-gray-600">language translations for the books</div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-600">
              To order a book, contact: <span className="font-medium">+233 20 123 4568</span>
            </div>

            <CTAButton className="mt-6 rounded-full">Purchase from Amazon</CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
