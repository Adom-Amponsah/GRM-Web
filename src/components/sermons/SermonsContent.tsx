import React from "react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const sermonTitles = [
  "The Power and Necessity of Sacrifice",
  "Timetables of Life",
  "Spiritual Balance",
  "Adapting to God’s Change"
];

const books = [
  { title: "Judah Prevailed", author: "Robert Ampiah-Kwofi", blurb: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  { title: "The Little Maid", author: "Robert Ampiah-Kwofi", blurb: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  { title: "The Mercies of God", author: "Robert Ampiah-Kwofi", blurb: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  { title: "The Little Maid", author: "Robert Ampiah-Kwofi", blurb: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  { title: "The Mercies of God", author: "Robert Ampiah-Kwofi", blurb: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  { title: "The Little Maid", author: "Robert Ampiah-Kwofi", blurb: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
];

export default function SermonsContent() {
  return (
    <main className="flex flex-col">
      {/* Hero with shared background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="h-[40vh] sm:h-[50vh] w-full bg-[url('https://i.ibb.co/TSZ40GB/aboutUs.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <Container className="pt-28 sm:pt-36 pb-14 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">TEACHINGS</h1>
        </Container>
      </div>

      {/* Sermons */}
      <div className="bg-white py-10">
        <Container>
          <h3 className="text-xl font-extrabold tracking-tight text-black">SERMONS</h3>
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Featured sermon placeholder */}
            <div className="lg:col-span-2">
                <div className="w-full rounded-lg bg-gray-200 min-h-[260px] md:min-h-[320px] lg:min-h-[360px]" />
                <div className="mt-4 flex items-center gap-3">
                  {/* <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs">
                    <span className="inline-block size-2 rounded-full bg-emerald-500" />
                    On the Pulpit
                  </span> */}
                </div>
            </div>
            {/* Main sermons list */}
            <div className="h-full flex flex-col min-h-[260px] md:min-h-[320px] lg:min-h-[360px]">
              <div className="font-semibold text-black mb-3">More sermons</div>
              <ul className="space-y-4 flex-1">
                {sermonTitles.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-md bg-[#0B1221] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-white" aria-hidden="true">
                        <path fill="currentColor" d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-black/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm text-black">
              <svg viewBox="0 0 168 168" className="w-5 h-5" aria-hidden="true">
                <path fill="#1DB954" d="M84 0a84 84 0 1 0 0 168A84 84 0 0 0 84 0Z"/>
                <path fill="#fff" d="M121.5 114.6c-1.4 2.3-4.4 3-6.7 1.6-18.4-11.2-41.6-13.7-68.9-7.3-2.6.6-5.2-1.1-5.8-3.7-.6-2.6 1.1-5.2 3.7-5.8 29.9-6.9 55.7-4.1 76.1 8.4 2.3 1.4 3 4.4 1.6 6.8Zm8.9-19.8c-1.8 2.9-5.6 3.7-8.5 1.9-21.1-13-53.3-16.8-78.4-9-3.3 1-6.8-.9-7.8-4.2-1-3.3.9-6.8 4.2-7.8 28.7-8.9 64.5-4.6 88.7 10.3 2.9 1.8 3.7 5.6 1.8 8.8Zm.8-21.1c-25.3-15.1-67.2-16.5-91.5-9.1-4 1.2-8.2-1-9.5-5-1.2-4 1-8.2 5-9.5 28.5-8.6 74.1-6.9 103.8 10.7 3.7 2.2 4.9 7 2.7 10.6-2.2 3.7-6.9 4.9-10.5 2.7Z"/>
              </svg>
              Go to Podcast
            </button>
          </div>
        </Container>
      </div>

      {/* Books */}
      <div className="bg-white pt-0 py-10">
        <Container>
          <h3 className="text-xl font-extrabold tracking-tight text-black">BOOKS</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((b, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-32 md:w-36 h-28 md:h-36 rounded-lg bg-[#0B1221]" />
                <div>
                  <a className="font-semibold text-[#0B1221] hover:underline" href="#">{b.title}</a>
                  <div className="text-xs text-black/60 mt-1">{b.author}</div>
                  <p className="mt-2 text-sm text-black/70 leading-relaxed">
                    {b.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* simple pager dots placeholder */}
          <div className="mt-6 flex justify-center items-center gap-2">
            <span className="size-2 rounded-full bg-[#0B1221]" />
            <span className="size-2 rounded-full bg-black/20" />
            <span className="size-2 rounded-full bg-black/20" />
            <span className="size-2 rounded-full bg-black/20" />
          </div>
          <div className="mt-6 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm text-black">
              <svg viewBox="0 0 400 400" className="w-5 h-5 contain" aria-hidden="true">
                <path fill="#FF9900" d="M0 200a200 200 0 1 0 400 0A200 200 0 0 0 0 200Z"/>
                <path fill="#111" d="M311 289c-63 45-168 63-247 29-7-3-4-14 3-12 71 33 172 24 230-18 9-7 19 4 14 11zM329 268c-5-6-32-3-58 5-4 1-5-3-1-5 28-12 52-15 59-8 4 4 2 9 0 8zM214 141c0-23 13-41 40-41 8 0 15 2 22 5l-5 22c-6-3-11-4-16-4-12 0-18 7-18 18v18h35v22h-35v83h-27v-83h-23v-22h23v-18z"/>
              </svg>
              Go to Amazon
            </button>
          </div>
        </Container>
      </div>
    </main>
  );
}
