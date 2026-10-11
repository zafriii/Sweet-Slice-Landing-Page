import { MapPinIcon, RiderIcon, WalkIcon } from "./icons";

const steps = [
  { title: "Choose", text: "Pick your favorite cake flavor and design." },
  { title: "Customize", text: "Add personal touches and special requests." },
  { title: "Order", text: "Place your order through our DMs (Facebook, Insta, WhatsApp)." },
  { title: "Enjoy", text: "Your cake is delivered fresh to your door. Pay for your cake & enjoy every slice." },
];

export default function HowToOrder() {
  return (
    <section id="order" className="bg-peach">
      {/* Pink ribbon between the blush section above and this one */}
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-20 w-full sm:h-28 lg:h-32"
      >
        <path className="fill-brand" d="M0 0h1440v120C1340 120 1310 94 1240 94C1189 94 1172 126 1070 126C976 126 968 106 900 106C795 106 795 142 690 142C630 142 614 112 520 112C448 112 442 128 400 128C306 128 295 92 190 92C95 92 66 124 0 124Z" />
        <path className="fill-blush" d="M0 0h1440v40C1396 40 1385 14 1330 14C1264 14 1254 46 1140 46C1060 46 1028 26 980 26C885 26 885 40 790 40C676 40 657 12 600 12C544 12 536 58 440 58C360 58 344 22 280 22C208 22 190 44 100 44C65 44 60 34 0 34Z" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-28 pt-12 sm:px-10 sm:pb-20 sm:pt-16 lg:px-24 lg:pb-24 xl:px-30">
        <h2 className="text-center font-display text-4xl text-plum [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-5xl lg:text-6xl">
          How to Order
        </h2>

        {/* Pills zigzag from sm up: even steps drop down and flip, so their number
            rides the top edge while odd steps carry theirs on the bottom edge. */}
        <ol className="mt-12 grid items-start gap-x-6 gap-y-24 sm:grid-cols-2 sm:gap-y-10 lg:mt-16 lg:grid-cols-4 xl:gap-x-8">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="group mx-auto flex h-[24rem] w-full max-w-[16rem] flex-col items-center rounded-full bg-white px-5 pt-16 text-center sm:h-[28rem] sm:even:mt-24 sm:even:flex-col-reverse sm:even:pb-16 sm:even:pt-0 xl:h-[30rem]"
            >
              <div>
                <h3 className="font-display text-2xl text-plum [word-spacing:-0.18em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/90 xl:text-base">
                  {step.text}
                </p>
              </div>
              <span aria-hidden="true" className="my-6 w-px flex-1 bg-brand/50" />
              <span
                aria-hidden="true"
                className="flex size-28 shrink-0 translate-y-1/2 items-center justify-center rounded-full bg-brand font-display text-5xl text-white shadow-lg shadow-brand/25 sm:group-even:-translate-y-1/2 xl:size-32"
              >
                {i + 1}
              </span>
            </li>
          ))}
        </ol>

        {/* Delivery & Pickup options */}
        <div className="mx-auto mt-20 max-w-3xl sm:mt-24 lg:mt-28">
          <div className="text-center">
            <p className="font-hand text-3xl leading-normal text-brand sm:text-4xl">
              how you get your cake
            </p>
            <h3 className="mt-3 font-display text-2xl text-plum [word-spacing:-0.18em] sm:mt-4 sm:text-3xl">
              Delivery &amp; Pickup Options
            </h3>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Walk-in / Self-Pickup */}
            <div className="group flex items-center gap-4 rounded-3xl border-2 border-plum bg-white p-5 shadow-md shadow-plum/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-plum/15">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-md shadow-brand/25 transition-colors group-hover:bg-brand-dark">
                <WalkIcon className="size-7" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display text-xl text-plum">Self Pickup</h4>
                  <span className="rounded-full bg-peach px-2.5 py-0.5 text-xs font-bold text-plum">
                    Walk-in
                  </span>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-plum/85 sm:text-sm">
                  <MapPinIcon className="size-3.5 shrink-0 text-brand sm:size-4" />
                  Mirer Maidan, Sylhet
                </p>
                <p className="mt-1 text-xs font-bold text-brand sm:text-sm">
                  Free
                </p>
              </div>
            </div>

            {/* Rider Delivery */}
            <div className="group flex items-center gap-4 rounded-3xl border-2 border-plum bg-white p-5 shadow-md shadow-plum/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-plum/15">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-md shadow-brand/25 transition-colors group-hover:bg-brand-dark">
                <RiderIcon className="size-7" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display text-xl text-plum">Home Delivery</h4>
                  <span className="rounded-full bg-peach px-2.5 py-0.5 text-xs font-bold text-plum">
                    Rider
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink/80 sm:text-sm">
                  Delivered fresh to your doorstep
                </p>
                <p className="mt-1 text-xs font-bold text-brand sm:text-sm">
                  ৳100 Delivery charge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cream swell closing the section */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-12 w-full fill-cream sm:h-20"
      >
        <path d="M0 100V52C140 26 300 72 480 48C680 22 840 76 1040 50C1210 28 1330 64 1440 42V100Z" />
      </svg>
    </section>
  );
}
