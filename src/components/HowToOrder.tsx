const steps = [
  { title: "Choose", text: "Pick your favorite cake flavor and design." },
  { title: "Customize", text: "Add personal touches and special requests." },
  { title: "Order", text: "Place and pay for your order online." },
  { title: "Enjoy", text: "Your cake is delivered fresh to your door." },
];

export default function HowToOrder() {
  return (
    <section id="order" className="bg-butter">
      {/* Teal ribbon between the blush section above and this one */}
      <svg
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-16 w-full sm:h-24 lg:h-28"
      >
        <path className="fill-teal" d="M0 0h1440v92C1388 92 1388 120 1337 120C1286 120 1286 88 1234 88C1182 88 1182 116 1131 116C1080 116 1080 94 1029 94C978 94 978 122 926 122C874 122 874 90 823 90C772 90 772 118 720 118C668 118 668 86 617 86C566 86 566 114 514 114C462 114 462 92 411 92C360 92 360 120 309 120C258 120 258 88 206 88C154 88 154 116 103 116C52 116 52 92 0 92Z" />
        <path className="fill-blush" d="M0 0h1440v40C1388 40 1388 18 1337 18C1286 18 1286 36 1234 36C1182 36 1182 14 1131 14C1080 14 1080 42 1029 42C978 42 978 20 926 20C874 20 874 38 823 38C772 38 772 16 720 16C668 16 668 40 617 40C566 40 566 12 514 12C462 12 462 36 411 36C360 36 360 18 309 18C258 18 258 42 206 42C154 42 154 14 103 14C52 14 52 40 0 40Z" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-28 pt-12 sm:px-10 sm:pb-20 sm:pt-16 lg:px-24 lg:pb-24 xl:px-30">
        <h2 className="text-center font-display text-4xl text-brand [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-5xl lg:text-6xl">
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
                <h3 className="font-display text-2xl text-brand [word-spacing:-0.18em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-teal xl:text-base">
                  {step.text}
                </p>
              </div>
              <span aria-hidden="true" className="my-6 w-px flex-1 bg-brand/50" />
              <span
                aria-hidden="true"
                className="flex size-28 shrink-0 translate-y-1/2 items-center justify-center rounded-full bg-teal font-display text-5xl text-white shadow-lg shadow-teal/25 sm:group-even:-translate-y-1/2 xl:size-32"
              >
                {i + 1}
              </span>
            </li>
          ))}
        </ol>
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
