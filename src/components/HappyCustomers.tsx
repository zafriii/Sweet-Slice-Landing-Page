import Image from "next/image";
import { SparkleIcon } from "./icons";

// `plus` marks a running count that has passed the figure shown
const stats = [
  { value: 100, plus: true, label: "Happy customers" },
  { value: 160, plus: true, label: "Cakes served" },
  { value: 2, plus: false, label: "Years of baking" },
];

type Chat = {
  // Leave unset to show the placeholder; point at a file in /public/images/screenshots
  // once the screenshot exists, along with its pixel size so the card keeps its shape
  image?: { src: string; width: number; height: number };
  alt?: string;
};

function shot(file: string, width: number, height: number, alt: string): Chat {
  return { image: { src: `/images/screenshots/${file}`, width, height }, alt };
}

// Ordered tall, short, tall, short… so the columns come out roughly level
const chats: Chat[] = [
  shot(
    "1.jpeg",
    828,
    1218,
    "Customer chat with a photo of a green rosette anniversary cake: \u201cCake amar baba maa r onek bhallagse! Thankuuu\u201d",
  ),
  shot(
    "4.jpeg",
    728,
    616,
    "Customer chat: \u201cCake ta onek moja chilo, sobbai pocondo korse r jemon caiselam amn e hoiche\u201d",
  ),
  shot(
    "3.jpeg",
    737,
    965,
    "Customer chat with a photo of a pink and white birthday cake: \u201cThank you sm. Cake ta dekhte nd khete khub e valo chilo!\u201d",
  ),
  shot(
    "5.jpeg",
    731,
    596,
    "Customer chat: \u201cCake ta khub e tasty chilo, cream tao valo, kena cake er moto excess oil nai. Design and taste obai onek pochondo koreche\u201d",
  ),
  shot(
    "6.jpeg",
    729,
    964,
    "Customer chat: \u201cIt\u2019s beautiful, thank youuu. Actually eita amr ekta friend er order chilo and she said the cake was tastyyy!\u201d",
  ),
  shot(
    "2.jpeg",
    738,
    677,
    "Customer chat: \u201cMy niece also loved it. It was so soft and tasty too, yummy. Thank u apu\u201d",
  ),
];

// Each card is pinned up at its own angle; placeholders also vary in height,
// like the mixed bag of screenshots they stand in for
const tilts = ["sm:-rotate-2", "sm:rotate-1", "sm:-rotate-1", "sm:rotate-2"];
const placeholderShapes = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[9/14]"];

export default function HappyCustomers() {
  return (
    <section id="reviews" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-10 sm:pt-16 lg:px-24 lg:pb-28 xl:px-30">
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

        {/* Swipeable row on phones, so each chat stays wide enough to read;
            a pinboard of uneven columns from sm up. */}
        <ul className="-mx-6 mt-10 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-6 pb-6 pt-5 sm:mx-0 sm:mt-14 sm:block sm:columns-2 sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-16 lg:columns-3">
          {chats.map((chat, i) => (
            <li
              key={chat.image?.src ?? i}
              className={`relative w-[78%] max-w-xs shrink-0 snap-center break-inside-avoid pt-3 sm:mb-7 sm:w-auto sm:max-w-none ${tilts[i % tilts.length]}`}
            >
              {/* Strip of tape holding the card up. It sits inside the item's own
                  box, or the column break would leave it behind in the previous column. */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 -rotate-3 bg-brand/30"
              />
              <div className="overflow-hidden rounded-2xl border-2 border-plum bg-white p-2.5 shadow-lg shadow-plum/15">
                {chat.image ? (
                  <Image
                    src={chat.image.src}
                    alt={chat.alt ?? "Screenshot of a message from a happy customer"}
                    width={chat.image.width}
                    height={chat.image.height}
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 78vw"
                    className="h-auto w-full rounded-lg"
                  />
                ) : (
                  <div
                    className={`flex flex-col gap-3 rounded-lg bg-blush p-4 ${placeholderShapes[i % placeholderShapes.length]}`}
                  >
                    <span className="h-9 w-3/4 rounded-2xl rounded-bl-sm bg-white" />
                    <span className="h-14 w-2/3 rounded-2xl rounded-bl-sm bg-white" />
                    <span className="h-9 w-1/2 self-end rounded-2xl rounded-br-sm bg-brand/25" />
                    <span className="m-auto text-center text-xs font-bold uppercase tracking-[0.2em] text-plum/50">
                      Screenshot coming soon
                    </span>
                    <span className="h-9 w-3/5 rounded-2xl rounded-bl-sm bg-white" />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Pink page frame rising to close the page */}
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
