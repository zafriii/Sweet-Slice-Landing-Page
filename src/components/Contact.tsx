import type { ComponentType, SVGProps } from "react";
import { contactLinks, instagramHandle, whatsappDisplayNumber } from "@/lib/contact";
import {
  ArrowRightIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "./icons";

type Channel = {
  name: string;
  text: string;
  cta: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const channels: Channel[] = [
  {
    name: "Facebook",
    text: "Message our page on Messenger, where most of our orders begin.",
    cta: "Open Messenger",
    href: contactLinks.facebook,
    Icon: FacebookIcon,
  },
  {
    name: "Instagram",
    text: `Slide into our DMs at ${instagramHandle} and send us your inspiration.`,
    cta: "Send a DM",
    href: contactLinks.instagram,
    Icon: InstagramIcon,
  },
  {
    name: "WhatsApp",
    text: `Prefer a quick chat? Text us with your date, flavour and design ideas.`,
    cta: "Start a chat",
    href: contactLinks.whatsapp,
    Icon: WhatsAppIcon,
  },
];


export default function Contact() {
  return (
    // Closing panel set inside the pink page frame, mirroring the hero at the top
    <section id="contact" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="overflow-hidden rounded-b-[2.5rem] bg-blush">
        {/* Pink page frame dripping into the panel */}
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="block h-14 w-full fill-brand sm:h-20 lg:h-24"
        >
          <path d="M0 0h1440v50C1390 50 1376 76 1320 76C1240 76 1226 40 1130 40C1060 40 1046 66 960 66C868 66 850 34 770 34C672 34 664 82 560 82C486 82 470 56 390 56C290 56 272 88 180 88C96 88 70 58 0 58Z" />
        </svg>

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 sm:px-10 sm:pt-16 lg:px-24 lg:pb-24 xl:px-30">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-hand text-3xl leading-none text-brand sm:text-4xl">
              your cake is one message away
            </p>
            <h2 className="mt-3 font-display text-4xl text-plum [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-5xl lg:text-6xl">
              Let&rsquo;s Talk Cake
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink/90 lg:text-lg">
              Got a date in mind, a design saved on your phone, or just a
              question? Message us on whichever app you like best and
              we&rsquo;ll take it from there.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-5xl lg:mt-16">
            <SparkleIcon className="absolute -top-9 left-2 size-7 text-brand sm:-left-8 sm:-top-8" />
            <SparkleIcon className="absolute -bottom-8 right-2 size-5 text-plum sm:-bottom-7 sm:-right-6" />
            <ul className="grid gap-6 md:grid-cols-3 lg:gap-8">
              {channels.map(({ name, text, cta, href, Icon }) => (
                <li key={name} className="flex">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full flex-col items-center rounded-3xl border-2 border-plum bg-white px-6 py-8 text-center shadow-md shadow-plum/15 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-plum/20"
                  >
                    <span className="flex size-16 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/25 transition-colors group-hover:bg-brand-dark">
                      <Icon className="size-8" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl text-plum [word-spacing:-0.18em]">
                      {name}
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-ink/90">
                      {text}
                    </p>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">
                      {cta}
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 lg:mt-20">
            <div className="flex flex-col items-center gap-x-6 gap-y-3 rounded-3xl border-2 border-dashed border-plum/30 bg-white/60 px-6 py-5 text-center sm:flex-row sm:px-10 sm:text-left">
              <ClockIcon className="size-9 shrink-0 text-brand" />
              <p className="text-pretty font-medium text-plum">
                <span className="mr-2 font-hand text-3xl leading-none text-brand">
                  Advance notice:
                </span>
                For any occasion, please let us know at least{" "}
                <span className="font-bold text-brand">a day in advance</span> (not
                on the event day) so we can bake fresh and serve you best!
              </p>
            </div>

            <div className="flex flex-col items-center gap-x-6 gap-y-3 rounded-3xl border-2 border-dashed border-plum/30 bg-white/60 px-6 py-5 text-center sm:flex-row sm:px-10 sm:text-left">
              <MapPinIcon className="size-9 shrink-0 text-brand" />
              <p className="text-pretty font-medium text-plum">
                <span className="mr-2 font-hand text-3xl leading-none text-brand">
                  Where we bake:
                </span>
                a home bakery based in{" "}
                <span className="font-bold text-brand">Sylhet, Bangladesh</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
