import Link from "next/link";
import HeroShowcase from "./HeroShowcase";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./icons";

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Twitter", href: "https://twitter.com", Icon: TwitterIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
];

export default function Hero() {
  return (
    <section className="relative flex flex-1 items-center px-6 py-12 sm:px-10 lg:px-24 lg:py-10 xl:px-30">
      {/* Left rail */}
      <div className="absolute left-12 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-12 lg:flex">
        <ul className="flex flex-col gap-10">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="block transition-colors hover:text-brand"
              >
                <Icon className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>
        <p className="rotate-180 text-[11px] font-bold uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
          Any type of cake you need
        </p>
      </div>

      <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-10 xl:gap-16">
        <div>
          <p className="flex items-end gap-3 font-hand text-4xl leading-none sm:text-5xl xl:text-6xl">
            <span>
              Every One <span className="text-brand">Love&rsquo;s</span>
            </span>
            <span className="mb-2 h-0.5 w-12 bg-ink xl:mb-3" />
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.1rem,5.6vw,5.6rem)] leading-[1.05] [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em]">
            <span className="relative block w-fit">
              Natural and
              <svg
                viewBox="0 0 70 90"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.500"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute bottom-1/2 left-full -ml-[0.25em] hidden w-[0.85em] text-brand sm:block"
              >
                <path d="M7 7c2-4 8-3 9 1l3 33c0 2-2 3-3 1L7 7ZM40 15c3-3 8-1 7 3L36 47c-1 2-3 1-3-1l7-31ZM50 54l6 5M56 76l5-4 1 7 5-4" />
              </svg>
            </span>
            <span className="block whitespace-nowrap text-brand">healthy Cakes.</span>
          </h1>

          <p className="mt-6 max-w-[33rem] text-base leading-relaxed text-ink/90 lg:text-lg xl:text-[1.35rem] xl:font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit
            magna aliqua.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium uppercase xl:text-[1.05rem]">
            <Link
              href="#order"
              className="rounded-full border-2 border-brand bg-brand px-8 py-3.5 xl:px-10 xl:py-4.5 text-white shadow-lg shadow-brand/30 transition-colors hover:border-brand-dark hover:bg-brand-dark"
            >
              Order now
            </Link>
            <Link
              href="#cakes"
              className="rounded-full border-2 border-brand bg-white px-8 py-3.5 xl:px-10 xl:py-4.5 text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Explore more
            </Link>
          </div>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}
