import Image from "next/image";
import BestChoice from "@/components/BestChoice";
import Hero from "@/components/Hero";
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
            <path d="M0 60V40C51 40 51 10 103 10C154 10 154 44 206 44C257 44 257 14 309 14C360 14 360 38 411 38C463 38 463 8 514 8C566 8 566 42 617 42C669 42 669 12 720 12C771 12 771 46 823 46C874 46 874 10 926 10C977 10 977 40 1029 40C1080 40 1080 14 1131 14C1183 14 1183 44 1234 44C1286 44 1286 8 1337 8C1389 8 1389 38 1440 38V60Z" />
          </svg>
        </div>
      </div>
      <Signature />
      <BestChoice />
    </main>
  );
}
