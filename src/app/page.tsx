import Image from "next/image";
import HeroVideoSection from "@/components/home/HeroVideoSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import OneChurchManyHomesSection from "@/components/home/OneChurchManyHomesSection";
import PapasImageSection from "@/components/home/PapasImageSection";
import MediaAccessSection from "@/components/home/MediaAccessSection";
import PapasBooksSection from "@/components/home/PapasBooksSection";
import CalendarAndEventsSection from "@/components/home/CalendarAndEventsSection";
import AssociatedMinistriesSection from "@/components/home/AssociatedMinistriesSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroVideoSection />
      <AboutUsSection />
      <OneChurchManyHomesSection />
      <PapasImageSection />
      <MediaAccessSection />
      <PapasBooksSection />
      <CalendarAndEventsSection />
      <AssociatedMinistriesSection />
    </div>
  );
}
