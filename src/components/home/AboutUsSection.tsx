import React from "react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";

export default function AboutUsSection() {
  return (
    <Section className="bg-white">
      <Container className="text-black">
      <h3 className="text-6xl  tracking-tight mb-10">ABOUT US</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <p className="mt-3 text-black l`eading-relaxed">
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book." Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="mt-4">
                <CTAButton className="rounded-full">Learn more</CTAButton>
              </div>
            </div>

            {/* Our Vision */}
            <div className="space-y-2">
              <h4 className="text-xl font-bold tracking-tight">OUR VISION</h4>
              <div className="flex gap-4">
                <div className="w-4 rounded bg-[#39C5FD]" />
                <p className="text-black leading-relaxed">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer."
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="space-y-2">
              <h4 className="text-xl font-bold tracking-tight">OUR MISSION</h4>
              <div className="flex gap-4">
                <div className="w-4 rounded bg-red-500" />
                <p className="text-black leading-relaxed">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer."
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="min-h-[480px] rounded-lg bg-gray-200/70 dark:bg-gray/10" />
        </div>
      </Container>
    </Section>
  );
}
