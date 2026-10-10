import Image from "next/image";
import { SparkleIcon } from "./icons";

const perks = [
  "Quality ingredients",
  "Personalized service",
  "On-time delivery",
  "Affordable prices",
];

// Shared by every offset outline in the collage
const outline = "absolute inset-0 border-2";
const note =
  "absolute z-30 rounded-full border-2 border-teal bg-white px-4 py-1 font-hand text-xl leading-none text-teal shadow-md shadow-teal/15 sm:text-2xl";

export default function BestChoice() {
  return (
    <section id="occasions" className="relative overflow-hidden bg-cream">
      {/* Teal ribbon between the mint section above and this one */}
      <svg
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-16 w-full sm:h-24 lg:h-28"
      >
        <path
          className="fill-teal"
          d="M0 0h1440v92C1395 92 1395 120 1350 120C1305 120 1305 88 1260 88C1215 88 1215 116 1170 116C1125 116 1125 94 1080 94C1035 94 1035 122 990 122C945 122 945 90 900 90C855 90 855 118 810 118C765 118 765 86 720 86C675 86 675 120 630 120C585 120 585 92 540 92C495 92 495 116 450 116C405 116 405 88 360 88C315 88 315 122 270 122C225 122 225 94 180 94C135 94 135 118 90 118C45 118 45 90 0 90Z"
        />
        <path
          className="fill-mint"
          d="M0 0h1440v18C1380 18 1380 40 1320 40C1260 40 1260 14 1200 14C1140 14 1140 36 1080 36C1020 36 1020 20 960 20C900 20 900 42 840 42C780 42 780 16 720 16C660 16 660 38 600 38C540 38 540 12 480 12C420 12 420 40 360 40C300 40 300 18 240 18C180 18 180 36 120 36C60 36 60 22 0 22Z"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12 lg:px-24 lg:py-24 xl:gap-20 xl:px-30">
        <div>
          <h2 className="font-display text-4xl leading-[1.1] text-brand [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-5xl lg:text-[clamp(2.5rem,4.1vw,3.5rem)]">
            <span className="block sm:whitespace-nowrap">Best Choice for</span>
            <span className="block sm:whitespace-nowrap">Every Occasion</span>
          </h2>

          <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-teal lg:text-lg">
            At Sweet Slice, we turn simple ingredients into delectable works of
            edible art. Satisfy your cravings with our irresistible pastries
            and baked goods, delivered fresh from the oven for you to enjoy.
          </p>

          <ul className="mt-10 flex max-w-[36rem] flex-wrap gap-2.5 text-xs font-bold uppercase tracking-wider sm:text-[13px]">
            <li
              aria-hidden="true"
              className="flex items-center rounded-full border-2 border-teal px-6 text-teal"
            >
              <span className="size-1.5 rounded-full bg-current" />
            </li>
            {perks.map((perk) => (
              <li
                key={perk}
                className="rounded-full border-2 border-teal bg-teal px-6 py-3 text-white shadow-md shadow-teal/20"
              >
                {perk}
              </li>
            ))}
            <li className="rounded-full border-2 border-teal px-6 py-3 text-teal">
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
          <SparkleIcon className="absolute bottom-[3%] left-[34%] size-5 text-teal" />

          {/* Teal arch */}
          <div className="absolute left-0 top-[14%] h-[62%] w-[56%] -rotate-5">
            <div className={`${outline} -translate-y-3 translate-x-3 rotate-3 rounded-b-[2rem] rounded-t-full border-brand`} />
            <div className="absolute inset-0 rounded-b-[2rem] rounded-t-full bg-teal" />
            <Image
              src="/images/cake1.png"
              alt="Two-tier white birthday cake with purple piping and a gold heart topper"
              width={1370}
              height={1525}
              sizes="(min-width: 1024px) 24rem, 70vw"
              className="absolute bottom-[7%] left-[-14%] h-auto w-[125%] max-w-none rotate-4 drop-shadow-xl"
            />
          </div>

          {/* Blush circle */}
          <div className="absolute right-0 top-[2%] aspect-square w-[44%]">
            <div className={`${outline} -translate-x-2 translate-y-3 rounded-full border-teal`} />
            <div className="absolute inset-0 rounded-full bg-blush" />
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

      {/* Blush swell closing the section */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-12 w-full fill-blush sm:h-20"
      >
        <path d="M0 100V58C160 18 330 70 520 50C720 28 860 80 1060 54C1220 34 1340 60 1440 38V100Z" />
      </svg>
    </section>
  );
}
