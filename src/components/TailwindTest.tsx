import React from "react";

export default function TailwindTest() {
  return (
    <section className="w-full max-w-xl rounded-2xl border p-6 shadow-sm bg-white/70 dark:bg-black/30 backdrop-blur-md border-black/10 dark:border-white/15">
      <h2 className="text-2xl font-bold tracking-tight">
        TailwindCSS Test Component
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        If Tailwind is working, you should see styled elements, hover effects,
        dark mode colors, and responsive utilities below.
      </p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-lg p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          Gradient Box
        </div>
        <div className="rounded-lg p-4 border border-dashed hover:border-solid transition-all duration-200">
          Hover the border
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
          badge
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200">
          colors
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
          tokens
        </span>
      </div>

      <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium shadow hover:shadow-md active:scale-[.99]">
        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
        Tailwind OK
      </button>
    </section>
  );
}
