import Image from "next/image";
import { ImageIcon, SparkleIcon } from "./icons";

const perks = [
  "Quality ingredients",
  "Personalized service",
  "On-time delivery",
  "Affordable prices",
];

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

// Shared by every offset outline in the collage
const outline = "absolute inset-0 border-2";
const note =
  "absolute z-30 rounded-full border-2 border-plum bg-white px-4 py-1 font-hand text-xl leading-none text-plum shadow-md shadow-plum/15 sm:text-2xl";

export default function BestChoice() {
  return (
    <section id="occasions" className="relative overflow-hidden bg-blush">
      {/* Plum ribbon between the peach section above and this one. A few slow,
          lopsided swells per edge, so it reads as a brushstroke rather than a zigzag. */}
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-20 w-full sm:h-28 lg:h-32"
      >
        <path
          className="fill-plum"
          d="M0 0h1440v110C1404 110 1395 132 1350 132C1280 132 1270 98 1150 98C1070 98 1038 120 990 120C920 120 920 104 850 104C724 104 703 142 640 142C580 142 572 108 470 108C405 108 392 126 340 126C256 126 235 90 130 90C84 90 78 112 0 112Z"
        />
        <path
          className="fill-peach"
          d="M0 0h1440v20C1345 20 1316 50 1250 50C1193 50 1174 12 1060 12C978 12 970 32 910 32C835 32 835 18 760 18C683 18 661 56 540 56C456 56 449 30 400 30C324 30 315 48 230 48C115 48 80 22 0 22Z"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12 lg:px-24 lg:py-24 xl:gap-20 xl:px-30">
        <div>
          <h2 className="font-display text-4xl leading-[1.1] text-brand [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-5xl lg:text-[clamp(2.5rem,4.1vw,3.5rem)]">
            <span className="block sm:whitespace-nowrap">Best Choice for</span>
            <span className="block sm:whitespace-nowrap">Every Occasion</span>
          </h2>

          <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-ink/90 lg:text-lg">
            At Sweet Slice, we turn simple ingredients into delectable works of
            edible art. Satisfy your cravings with our irresistible pastries
            and baked goods, delivered fresh from the oven for you to enjoy.
          </p>

          <ul className="mt-10 flex max-w-[36rem] flex-wrap gap-2.5 text-xs font-bold uppercase tracking-wider sm:text-[13px]">
            <li
              aria-hidden="true"
              className="flex items-center rounded-full border-2 border-plum px-6 text-plum"
            >
              <span className="size-1.5 rounded-full bg-current" />
            </li>
            {perks.map((perk) => (
              <li
                key={perk}
                className="rounded-full border-2 border-plum bg-plum px-6 py-3 text-white shadow-md shadow-plum/20"
              >
                {perk}
              </li>
            ))}
            <li className="rounded-full border-2 border-plum px-6 py-3 text-plum">
              &amp; more
            </li>
          </ul>
        </div>

        {/* Collage: every panel is tilted its own way, its outline is knocked off
            register, and the cakes spill past their frames. Sized in percentages so
            the whole arrangement scales as one piece. */}
        <div className="relative mx-auto aspect-[10/11] w-full max-w-md lg:max-w-none">
          <SparkleIcon className="absolute -left-9 top-[46%] hidden size-9 text-brand lg:block xl:-left-14" />
          <SparkleIcon className="absolute left-[40%] top-0 size-6 text-brand" />
          <SparkleIcon className="absolute bottom-[3%] left-[34%] size-5 text-plum" />

          {/* Pink arch */}
          <div className="absolute left-0 top-[14%] h-[62%] w-[56%] -rotate-5">
            <div className={`${outline} -translate-y-3 translate-x-3 rotate-3 rounded-b-[2rem] rounded-t-full border-plum`} />
            <div className="absolute inset-0 rounded-b-[2rem] rounded-t-full bg-brand" />
            <Image
              src="/images/cake1.png"
              alt="Two-tier white birthday cake with purple piping and a gold heart topper"
              width={1370}
              height={1525}
              sizes="(min-width: 1024px) 24rem, 70vw"
              className="absolute bottom-[7%] left-[-14%] h-auto w-[125%] max-w-none rotate-4 drop-shadow-xl"
            />
          </div>

          {/* White circle */}
          <div className="absolute right-0 top-[2%] aspect-square w-[44%]">
            <div className={`${outline} -translate-x-2 translate-y-3 rounded-full border-plum`} />
            <div className="absolute inset-0 rounded-full bg-white" />
            <Image
              src="/images/cake2.png"
              alt="Pink heart-shaped cake trimmed with pearls and a small gold crown"
              width={1149}
              height={1369}
              sizes="(min-width: 1024px) 18rem, 55vw"
              className="absolute left-[6%] top-[-30%] h-auto w-[104%] max-w-none rotate-8 drop-shadow-xl"
            />
          </div>

          {/* Plum tile, overlapping the arch */}
          <div className="absolute bottom-[1%] right-[3%] z-10 aspect-square w-[48%] rotate-6">
            <div className={`${outline} -translate-y-3 translate-x-3 -rotate-5 rounded-[2.5rem] border-brand`} />
            <div className="absolute inset-0 rounded-[2.5rem] bg-plum" />
            <Image
              src="/images/cake3.png"
              alt="Round blue cartoon-themed cake with fondant clouds and stars"
              width={896}
              height={1195}
              sizes="(min-width: 1024px) 19rem, 60vw"
              className="absolute left-[-18%] top-[-50%] h-auto w-[114%] max-w-none -rotate-12 drop-shadow-xl"
            />
          </div>

          <p className={`${note} bottom-[9%] left-[4%] -rotate-6`}>milestones</p>
          <p className={`${note} right-[33%] top-[36%] rotate-5`}>for mum</p>
          <p className={`${note} -right-2 bottom-[40%] -rotate-3 sm:-right-4`}>
            kids&rsquo; parties
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-24 lg:pb-28 xl:px-30">
        <h3 className="text-center font-display text-3xl text-plum [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-4xl lg:text-5xl">
          A Cake for Every Occasion
        </h3>

        {/* Flex rather than grid, so the short last row sits centred. Each card
            repeats the collage's arch, with its outline knocked off register. */}
        <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-12 lg:mt-16 lg:gap-x-8 lg:gap-y-14">
          {occasions.map((occasion) => (
            <li
              key={occasion.name}
              className="group w-[calc(50%-0.75rem)] max-w-[17rem] text-center sm:w-[calc((100%-3rem)/3)] lg:w-[calc(25%-1.5rem)]"
            >
              <div className="relative aspect-[4/5] group-odd:-rotate-2 group-even:rotate-2">
                <div
                  className={`${outline} translate-x-2 translate-y-2 rounded-b-[2rem] rounded-t-full group-odd:border-plum group-even:border-brand`}
                />
                <div className="absolute inset-0 overflow-hidden rounded-b-[2rem] rounded-t-full bg-white">
                  {occasion.image ? (
                    <Image
                      src={occasion.image}
                      alt={occasion.alt ?? `${occasion.name} cake`}
                      fill
                      sizes="(min-width: 1024px) 17rem, (min-width: 640px) 30vw, 45vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-plum/50">
                      <ImageIcon className="size-8 sm:size-10" />
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] sm:text-xs">
                        Photo coming soon
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <h4 className="mt-6 font-display text-xl text-plum [word-spacing:-0.18em] sm:text-2xl">
                {occasion.name}
              </h4>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-ink/90">
                {occasion.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
