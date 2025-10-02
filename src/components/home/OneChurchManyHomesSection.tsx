import React from "react";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";

export default function OneChurchManyHomesSection() {
  return (
    <Section className="bg-[url('https://i.ibb.co/Lhq50H0W/africa-bg.png')] bg-contain bg-white min-h-[500px] flex items-center justify-center px-2">
  <Container className="text-center">
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className="mt-4 text-2xl font-bold text-black">One Church, Many Homes</h3>
      <CTAButton className="mt-4">Find a Branch</CTAButton>
    </div>
  </Container>
</Section>

  );
}
