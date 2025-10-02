import React from "react";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Card";

export default function WelcomeHomeStrip() {
  return (
    <Container className="px-2">
      <div className="relative z-10 -mt-20 sm:-mt-28">
        <div className="rounded-[28px] sm:rounded-[36px] border border-black/10 dark:border-white/15 bg-white/80 dark:bg-black/30 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">WELCOME HOME</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s. Lorem ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">— Rev. Dr. Robert Ampiah-Kwofi</p>
            </div>
            <div className="min-h-[180px] md:min-h-[220px] bg-gray-200/70 dark:bg-white/10 rounded-[20px] flex items-center justify-center text-gray-500">
              WELCOME IMAGE
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
