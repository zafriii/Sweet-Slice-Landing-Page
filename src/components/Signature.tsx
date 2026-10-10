import Image from "next/image";
import { ImageIcon, ShoppingBagIcon } from "./icons";

type Product = {
  name: string;
  price: number;
  unit: "pound" | "piece";
  // Leave unset to show the placeholder; point at a file in /public/images once the photo exists
  image?: string;
  alt?: string;
};

// Opens a Messenger chat with the bakery's Facebook page
const MESSENGER_URL = "https://m.me/61575617819549";

const products: Product[] = [
  {
    name: "Simple Vanilla Cake",
    price: 700,
    unit: "pound",
    image: "/images/vanilla_cake.png",
  },
  {
    name: "Simple Chocolate Cake",
    price: 850,
    unit: "pound",
    image: "/images/chocolate_cake.png",
  },
  {
    name: "Butter Scotch",
    price: 900,
    unit: "pound",
    image: "/images/butter_scotch_cake.png",
  },
  {
    name: "Cupcakes",
    price: 80,
    unit: "piece",
    image: "/images/cupcakes.png",
  },
];

export default function Signature() {
  return (
    <section id="cakes" className="bg-peach">
      {/* Pink page frame dripping into the section */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-14 w-full fill-brand sm:h-20 lg:h-24"
      >
        <path d="M0 0h1440v62C1408 62 1400 84 1360 84C1294 84 1284 48 1170 48C1085 48 1051 72 1000 72C930 72 930 56 860 56C752 56 734 90 680 90C624 90 616 64 520 64C445 64 430 80 370 80C278 80 255 44 140 44C91 44 84 60 0 60Z" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-10 sm:pt-16 lg:px-12 lg:pb-28 xl:px-16">
        <h2 className="text-center font-display text-4xl text-plum [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-5xl lg:text-6xl">
          Our Signature
        </h2>

        <ul className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-8">
          {products.map((product) => (
            <li key={product.name} className="mx-auto flex w-full max-w-sm flex-col">
              <div className="stamp p-5 sm:p-6 lg:p-4 xl:p-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-blush">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.alt ?? product.name}
                      fill
                      sizes="(min-width: 1024px) 17rem, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-plum/50">
                      <ImageIcon className="size-10" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">
                        Photo coming soon
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="min-h-[2.5em] text-balance font-display text-xl leading-tight text-plum [word-spacing:-0.18em] lg:text-lg xl:text-xl">
                  {product.name}
                </h3>
                <button
                  type="button"
                  aria-label={`Add ${product.name} to bag`}
                  className="flex size-12 shrink-0 items-center lg:size-10 xl:size-12 justify-center rounded-md bg-brand text-white transition-colors hover:bg-brand-dark"
                >
                  <ShoppingBagIcon className="size-5" />
                </button>
              </div>

              <div className="mt-auto flex items-end justify-between gap-4 pt-3">
                <p className="font-display text-2xl leading-none text-plum">
                  <span className="mb-1.5 block font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-plum/60">
                    Starts from
                  </span>
                  <span className="mr-1">৳</span>
                  {product.price}
                  <span className="ml-1.5 font-sans text-xs font-bold text-plum/60">
                    / {product.unit}
                  </span>
                </p>
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-plum pb-0.5 text-xs font-bold text-plum transition-colors hover:border-brand hover:text-brand"
                >
                  More Details
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center gap-x-8 gap-y-3 rounded-3xl border-2 border-dashed border-plum/30 bg-white/60 px-6 py-6 text-center sm:px-10 lg:mt-20 lg:flex-row lg:text-left">
          <p className="shrink-0 font-hand text-3xl leading-none text-brand sm:text-4xl">
            Want it your way?
          </p>
          <p className="text-pretty font-medium text-plum">
            Prices shown are for the basic cake.{" "}
            <span className="font-bold text-brand">
              Custom designs and extra decorations
            </span>{" "}
            cost a little more, and we&rsquo;ll confirm your total before we
            start baking.
          </p>
        </div>
      </div>
    </section>
  );
}
