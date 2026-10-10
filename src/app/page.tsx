import Image from "next/image";
import BestChoice from "@/components/BestChoice";
import Contact from "@/components/Contact";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import HowToOrder from "@/components/HowToOrder";
import Navbar from "@/components/Navbar";
import Signature from "@/components/Signature";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-col p-3 sm:p-5">
        <div className="relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-t-[2.5rem] bg-blush sm:min-h-[calc(100svh-2.5rem)]">
          <Image
            src="/images/Pastel_Strawberry_Blossom_Border.png"
            alt=""
            fill
            preload
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <Navbar />
          <Hero />
          {/* Pink frame rising into the panel, so the band above Our Signature is wavy on both edges */}
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="block h-9 w-full shrink-0 fill-brand sm:h-12 lg:h-14"
          >
            <path d="M0 60V34C85 34 110 12 170 12C239 12 262 42 400 42C488 42 496 26 560 26C660 26 660 44 760 44C823 44 841 22 940 22C1030 22 1038 36 1090 36C1180 36 1190 10 1290 10C1365 10 1388 30 1440 30V60Z" />
          </svg>
        </div>
      </div>
      <Signature />
      <BestChoice />
      <HowToOrder />
      <HappyCustomers />
      <Contact />
    </main>
  );
}
