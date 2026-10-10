"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon, ImageIcon, SparkleIcon } from "./icons";

type Occasion = {
  name: string;
  text: string;
  // Leave unset to show the placeholder; point at a file in /public/images once the photo exists
  image?: string;
  alt?: string;
};

const occasions: Occasion[] = [
  {
    name: "Birthday",
    text: "Candles, wishes and their favourite flavour.",
    image: "/images/birthday_cake.jpg",
  },
  {
    name: "Engagement",
    text: "For the ring, the yes and the photos.",
  },
  {
    name: "Paan Chini",
    text: "Sweets shared as two families say yes.",
  },
  {
    name: "Haldi / Mehendi",
    text: "Bright florals to match the celebration.",
    image: "/images/haldi_ceremony_cake.jpeg",
  },
  {
    name: "Wedding / Akht",
    text: "Elegant tiers for the big day.",
  },
  {
    name: "Anniversary",
    text: "Another year together, worth celebrating.",
  },
  {
    name: "Class Party",
    text: "Big enough for the whole batch to share.",
    image: "/images/class_party_cake.jpg",
  },
  {
    name: "Teachers Day",
    text: "A sweet thank-you for a favourite teacher.",
    image: "/images/teachers_day_cake.jpeg",
  },
  {
    name: "Friendship Day",
    text: "Made for the ones who feel like family.",
    image: "/images/friendship_day_cake.jpg",
  },
  {
    name: "Reunion Cakes",
    text: "Old friends, new memories, one cake.",
    image: "/images/reunion_cake.jpg",
  },
  {
    name: "Date Night",
    text: "A little something sweet, just for two.",
    image: "/images/Date_Night_Cake.jpeg",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function OccasionPicker() {
  const [active, setActive] = useState(0);
  const current = occasions[active];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-24 lg:pb-28 xl:px-30">
      <div className="text-center lg:text-left">
        <p className="font-hand text-3xl leading-none text-brand sm:text-4xl">
          what are we celebrating?
        </p>
        <h3 className="mt-5 font-display text-3xl text-plum [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-4xl lg:text-5xl">
          Pick Your Occasion
        </h3>
      </div>

      {/* The whole list is on show at once, like a bakery menu, and the arch
          previews whichever line is picked. The menu comes first in the source so
          that on a phone it sits above the arch it controls. */}
      <div className="mt-10 grid items-center gap-x-12 gap-y-12 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] xl:gap-x-20">
        <ul className="grid grid-cols-2 gap-x-5 border-t-2 border-plum/15 sm:gap-x-10 lg:order-last lg:grid-cols-1">
          {occasions.map((occasion, i) => (
            <li key={occasion.name} className="border-b-2 border-plum/15">
              <button
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="group flex w-full items-center gap-3 py-3.5 text-left text-plum outline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-brand aria-pressed:text-brand sm:gap-5 lg:py-3"
              >
                <span className="hidden w-6 text-xs font-bold tracking-wider opacity-50 group-aria-pressed:opacity-100 sm:block">
                  {pad(i + 1)}
                </span>
                <span className="font-display text-[0.95rem] leading-tight transition-transform duration-300 [word-spacing:-0.18em] group-aria-pressed:translate-x-1 motion-reduce:transition-none sm:text-xl lg:text-2xl lg:group-aria-pressed:translate-x-2">
                  {occasion.name}
                </span>
                <span className="ml-auto hidden size-8 shrink-0 scale-50 items-center justify-center rounded-full bg-brand text-white opacity-0 transition duration-300 group-aria-pressed:scale-100 group-aria-pressed:opacity-100 motion-reduce:transition-none lg:flex">
                  <ArrowRightIcon className="size-3.5" />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mx-auto w-full max-w-[19rem] text-center sm:max-w-sm lg:max-w-[25rem]">
          {/* Same arch as the collage above: leaning, outline knocked off register */}
          <div className="relative aspect-[4/5] -rotate-2">
            <SparkleIcon className="absolute -left-8 top-[30%] size-7 rotate-2 text-brand sm:-left-12 sm:size-9" />
            <SparkleIcon className="absolute -right-7 bottom-[18%] size-5 text-plum sm:-right-10" />
            <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-b-[2rem] rounded-t-full border-2 border-plum" />
            <div className="absolute inset-0 overflow-hidden rounded-b-[2rem] rounded-t-full bg-white">
              {/* Every photo stays mounted so switching is a crossfade, not a load */}
              {occasions.map((occasion, i) => (
                <div
                  key={occasion.name}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${i === active ? "opacity-100" : "opacity-0"}`}
                >
                  {occasion.image ? (
                    <Image
                      src={occasion.image}
                      alt={occasion.alt ?? `${occasion.name} cake`}
                      fill
                      sizes="(min-width: 1024px) 25rem, (min-width: 640px) 24rem, 19rem"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-plum/50">
                      <ImageIcon className="size-10" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">
                        Photo coming soon
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="absolute -right-3 top-[20%] z-10 rotate-8 rounded-full border-2 border-plum bg-white px-4 py-1 font-hand text-xl leading-none text-plum shadow-md shadow-plum/15 sm:-right-6 sm:text-2xl">
              {pad(active + 1)} of {occasions.length}
            </p>
          </div>

          <div aria-live="polite" className="mt-10">
            <h4 className="font-display text-2xl text-plum [word-spacing:-0.18em] sm:text-3xl">
              {current.name}
            </h4>
            <p className="mt-2 text-pretty leading-relaxed text-ink/90">
              {current.text}
            </p>
          </div>
          <Link
            href="#order"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark"
          >
            Order this cake
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
