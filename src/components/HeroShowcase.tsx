"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

const slides = [
  {
    name: "Two Tier",
    image: "/images/cake1.png",
    scale: "scale-135",
    alt: "Pink heart-shaped cake with piped borders and purple butterflies",
  },
  {
    name: "Heart Shape",
    image: "/images/cake2.png",
    scale: "scale-110",
    alt: "Two-tier lilac and cream cake topped with pastel balloons",
  },
  {
    name: "Fondent Special",
    image: "/images/cake3.png",
    scale: "scale-120",
    alt: "Round chocolate cake with pink butterflies and silver pearls",
  },
];

const pad = (value: number) => String(value).padStart(2, "0");

function BrandBadge() {
  return (
    // The artwork only fills ~70% of the PNG, so the box is oversized to compensate
    <Image
      src="/images/sweet-slice-badge.png"
      alt="Sweet Slice Home Bakery"
      width={500}
      height={500}
      sizes="(min-width: 1280px) 13rem, (min-width: 640px) 12rem, 9rem"
      className="absolute -left-10 top-4 z-10 size-36 drop-shadow-lg sm:-left-22 sm:top-8 sm:size-48 xl:size-52"
    />
  );
}

export default function HeroShowcase() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const total = slides.length;

  const go = (step: number) =>
    setIndex((current) => (current + step + total) % total);

  return (
    <div className="mx-auto flex w-full max-w-md items-stretch gap-6 lg:mx-0 lg:ml-auto lg:max-w-lg">
      <div className="min-w-0 flex-1">
        <div className="relative">
          {/* Offset pink arch peeking out behind the frame */}
          <div className="absolute inset-0 -translate-y-3 translate-x-3 rounded-t-full bg-brand" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-white">
            {slides.map((item, i) => (
              <Image
                key={item.image}
                src={item.image}
                alt={i === index ? item.alt : ""}
                aria-hidden={i !== index}
                fill
                preload={i === 0}
                sizes="(min-width: 1024px) 28rem, 90vw"
                className={`object-contain p-4 pb-12 transition-opacity duration-500 sm:p-6 sm:pb-14 ${item.scale} ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blush to-transparent" />

            <p
              aria-live="polite"
              className="absolute bottom-3 left-6 font-display text-2xl text-brand/15 sm:text-3xl lg:text-2xl xl:bottom-4 xl:text-4xl"
            >
              {slide.name}
            </p>
          </div>

          <BrandBadge />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Previous cake"
            onClick={() => go(-1)}
            className="flex size-11 items-center justify-center rounded-full border-2 border-brand bg-white text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <ArrowLeftIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next cake"
            onClick={() => go(1)}
            className="flex size-11 items-center justify-center rounded-full border-2 border-brand bg-brand text-white transition-colors hover:border-brand-dark hover:bg-brand-dark"
          >
            <ArrowRightIcon className="size-4" />
          </button>
        </div>
      </div>

      {/* Vertical slide indicator; from lg up it sits on the hero's right rail (positioned against the section) */}
      <div
        aria-hidden="true"
        className="hidden flex-col items-center gap-3 pb-16 pt-12 text-xs font-bold sm:flex lg:absolute lg:right-14 lg:top-1/2 xl:right-18 lg:h-88 lg:-translate-y-1/2 lg:p-0"
      >
        <span className="text-brand">{pad(index + 1)}</span>
        <span className="relative w-px flex-1 bg-ink/15">
          <span
            className="absolute -left-px top-0 w-[3px] rounded-full bg-brand transition-[height] duration-300"
            style={{ height: `${((index + 1) / total) * 100}%` }}
          />
        </span>
        <span>{pad(total)}</span>
      </div>
    </div>
  );
}
