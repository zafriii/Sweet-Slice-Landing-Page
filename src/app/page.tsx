import Image from "next/image";
import BestChoice from "@/components/BestChoice";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Signature from "@/components/Signature";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-col p-3 sm:p-5">
        <div className="relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-[2.5rem] bg-blush sm:min-h-[calc(100svh-2.5rem)]">
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
        </div>
      </div>
      <Signature />
      <BestChoice />
    </main>
  );
}
