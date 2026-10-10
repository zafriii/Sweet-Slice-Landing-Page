import Image from "next/image";
import Link from "next/link";
import { ImageIcon, ShoppingBagIcon } from "./icons";

type Product = {
  name: string;
  price: number;
  href: string;
  // Leave unset to show the placeholder; point at a file in /public/images once the photo exists
  image?: string;
  alt?: string;
};

const products: Product[] = [
  { name: "Decadent Choco Chips", price: 15, href: "#" },
  { name: "Classic Vanilla Chiffon Cake", price: 25, href: "#" },
  { name: "Choco Mousse Extravaganza", price: 35, href: "#" },
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

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-10 sm:pt-16 lg:px-24 lg:pb-28 xl:px-30">
        <h2 className="text-center font-display text-4xl text-plum [-webkit-text-stroke:0.008em_currentColor] [word-spacing:-0.18em] sm:text-5xl lg:text-6xl">
          Our Signature
        </h2>

        <ul className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:gap-x-14">
          {products.map((product) => (
            <li key={product.name} className="mx-auto w-full max-w-sm">
              <div className="stamp p-5 sm:p-6">
                <div className="relative aspect-[4/5] overflow-hidden bg-blush">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.alt ?? product.name}
                      fill
                      sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 90vw"
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
                <h3 className="min-h-[2.5em] text-balance font-display text-xl leading-tight text-teal [word-spacing:-0.18em] xl:text-2xl">
                  {product.name}
                </h3>
                <button
                  type="button"
                  aria-label={`Add ${product.name} to bag`}
                  className="flex size-12 shrink-0 items-center justify-center rounded-md bg-teal text-white transition-colors hover:bg-teal-dark"
                >
                  <ShoppingBagIcon className="size-5" />
                </button>
              </div>

              <div className="mt-3 flex items-end justify-between gap-4">
                <p className="font-display text-2xl text-plum">
                  ${product.price}
                </p>
                <Link
                  href={product.href}
                  className="border-b border-teal pb-0.5 text-xs font-bold text-teal transition-colors hover:border-plum hover:text-plum"
                >
                  More Details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
