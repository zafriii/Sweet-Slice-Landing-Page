import Image from "next/image";
import { SparkleIcon } from "./icons";

// `plus` marks a running count that has passed the figure shown
const stats = [
  { value: 100, plus: true, label: "Happy customers" },
  { value: 160, plus: true, label: "Cakes served" },
  { value: 2, plus: false, label: "Years of baking" },
];

// A file in /public/images/screenshots, with its pixel size so the card keeps its shape
type Chat = { src: string; width: number; height: number; alt: string };

function shot(file: string, width: number, height: number, alt: string): Chat {
  return { src: `/images/screenshots/${file}`, width, height, alt };
}

// Ordered narrow, wide, narrow, wide… so the row keeps an even rhythm
const chats: Chat[] = [
  shot(
    "1.jpg",
    828,
    1218,
    "Customer chat with a photo of a green rosette anniversary cake: \u201cCake amar baba maa r onek bhallagse! Thankuuu\u201d",
  ),
  shot(
    "4.jpg",
    728,
    616,
    "Customer chat: \u201cCake ta onek moja chilo, sobbai pocondo korse r jemon caiselam amn e hoiche\u201d",
  ),
  shot(
    "3.jpg",
    737,
    965,
    "Customer chat with a photo of a pink and white birthday cake: \u201cThank you sm. Cake ta dekhte nd khete khub e valo chilo!\u201d",
  ),
  shot(
    "5.jpg",
    731,
    596,
    "Customer chat: \u201cCake ta khub e tasty chilo, cream tao valo, kena cake er moto excess oil nai. Design and taste obai onek pochondo koreche\u201d",
  ),
  shot(
    "6.jpg",
    729,
    964,
    "Customer chat: \u201cIt\u2019s beautiful, thank youuu. Actually eita amr ekta friend er order chilo and she said the cake was tastyyy!\u201d",
  ),
  shot(
    "2.jpg",
    738,
    677,
    "Customer chat: \u201cMy niece also loved it. It was so soft and tasty too, yummy. Thank u apu\u201d",
  ),
];

// Each card is pinned up at its own angle
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

// The row is repeated this many times side by side and every copy slides left by
// its own width, so the loop has no seam. Three copies outlast even very wide screens.
const COPIES = 3;

export default function HappyCustomers() {
  return (
    <section id="reviews" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 pt-12 sm:px-10 sm:pt-16 lg:px-24 xl:px-30">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-hand text-3xl leading-none text-brand sm:text-4xl">
            sweet words, straight from our inbox
          </p>
          <h2 className="mt-3 font-display text-4xl text-plum [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-5xl lg:text-6xl">
            Our Happy Customers
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink/90 lg:text-lg">
            Nothing says it better than the messages you send us after the last
            slice is gone. Here are a few real chats from our inbox, with names
            hidden for privacy.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl lg:mt-16">
          <SparkleIcon className="absolute -top-9 left-2 size-7 text-brand sm:-left-8 sm:-top-8" />
          <SparkleIcon className="absolute -bottom-8 right-2 size-5 text-plum sm:-bottom-7 sm:-right-6" />
          <dl className="grid divide-y-2 divide-dashed divide-plum/30 rounded-3xl border-2 border-plum bg-white px-6 shadow-md shadow-plum/15 sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0 sm:px-0 sm:py-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse items-center gap-2 px-4 py-6 text-center sm:py-2"
              >
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-plum/70">
                  {stat.label}
                </dt>
                <dd className="font-display text-5xl leading-none text-brand lg:text-6xl">
                  {stat.value.toLocaleString("en-US")}
                  {/* The display face has no plus sign, so set it in the body face */}
                  {stat.plus && (
                    <span className="ml-0.5 align-[0.15em] font-sans text-[0.6em] font-extrabold text-plum">
                      +
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Endless conveyor of chats running the full width of the page. It pauses
          under the pointer, and the edges fade out so cards drift in and out
          rather than being cut off. Motion rules live in globals.css. */}
      <div className="marquee mt-8 flex pb-16 pt-6 [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)] sm:mt-12 lg:pb-24">
        {Array.from({ length: COPIES }, (_, copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0 || undefined}
            className="marquee-group flex shrink-0 items-center gap-6 pr-6 sm:gap-9 sm:pr-9"
          >
            {chats.map((chat, i) => (
              <li
                key={chat.src}
                className={`relative shrink-0 pt-3 ${tilts[i % tilts.length]}`}
              >
                {/* Strip of tape holding the card up */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 -rotate-3 bg-brand/30"
                />
                <div className="rounded-2xl border-2 border-plum bg-white p-2.5 shadow-lg shadow-plum/15">
                  <Image
                    src={chat.src}
                    alt={copy === 0 ? chat.alt : ""}
                    width={chat.width}
                    height={chat.height}
                    sizes="(min-width: 640px) 30rem, 25rem"
                    // Cards slide in by transform, which lazy loading is slow to notice
                    loading="eager"
                    className="h-80 w-auto max-w-none rounded-lg sm:h-96"
                  />
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Pink page frame rising to meet the contact panel */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-9 w-full fill-brand sm:h-12 lg:h-14"
      >
        <path d="M0 60V28C70 28 96 44 180 44C272 44 290 14 390 14C470 14 486 34 560 34C664 34 672 46 770 46C850 46 868 20 960 20C1046 20 1060 38 1130 38C1226 38 1240 12 1320 12C1384 12 1400 32 1440 32V60Z" />
      </svg>
    </section>
  );
}
