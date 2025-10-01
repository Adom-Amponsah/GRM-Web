import React from "react";
import Container from "@/components/shared/Container";

export default function AkwoContent() {
  return (
    <main className="flex flex-col">
      {/* Hero with shared background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="h-[40vh] sm:h-[50vh] w-full bg-[url('https://i.ibb.co/TSZ40GB/aboutUs.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <Container className="pt-28 sm:pt-36 pb-14 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">AMPIAH-KWOFI WORLD OUTREACH (AKWO)</h1>
        </Container>
      </div>

      {/* Carousel + Intro */}
      <div className="bg-white py-10">
        <Container className="text-black">
          {/* Carousel placeholder */}
          <div className="rounded-xl bg-gray-200/80 h-[260px] md:h-[320px] lg:h-[360px] flex items-center justify-center text-3xl font-bold text-gray-400">
            AKWO IMAGES CAROUSEL
          </div>
          {/* dots */}
          <div className="mt-3 flex justify-center items-center gap-2">
            <span className="size-1.5 rounded-full bg-black/40" />
            <span className="size-1.5 rounded-full bg-black/20" />
            <span className="size-1.5 rounded-full bg-black/20" />
          </div>

          {/* Text blocks */}
          <div className="mt-6 space-y-4 text-black/80 leading-relaxed">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Button centered */}
          <div className="mt-6 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#0B1221] text-white px-5 py-2.5 text-sm">
              Give to the ministry
            </button>
          </div>
        </Container>
      </div>

      {/* Local Missions */}
      <div className="bg-white py-10">
        <Container className="text-black">
          <h3 className="text-xl font-extrabold tracking-tight">LOCAL MISSIONS</h3>
          <p className="mt-3 text-black/80 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <div className="mt-5 rounded-xl bg-gray-200/80 h-[240px] md:h-[300px] flex items-center justify-center text-2xl font-bold text-gray-400">
            AKWO IMAGE
          </div>
        </Container>
      </div>

      {/* International Missions */}
      <div className="bg-white py-10">
        <Container className="text-black">
          <h3 className="text-xl font-extrabold tracking-tight">INTERNATIONAL MISSIONS</h3>
          <p className="mt-3 text-black/80 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <div className="mt-5 rounded-xl bg-gray-200/80 h-[240px] md:h-[300px] flex items-center justify-center text-2xl font-bold text-gray-400">
            AKWO IMAGE
          </div>
        </Container>
      </div>
    </main>
  );
}
