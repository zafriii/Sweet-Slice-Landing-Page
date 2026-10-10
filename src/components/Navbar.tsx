"use client";

import Link from "next/link";
import { useState } from "react";
import { CakeLogoIcon, CloseIcon, MenuIcon } from "./icons";

const links = [
  { label: "Home", href: "/", active: true },
  { label: "Cakes", href: "#cakes" },
  { label: "Occasions", href: "#occasions" },
  { label: "How to Order", href: "#order" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 px-6 pt-6 sm:px-10 lg:px-24 lg:pt-10 xl:px-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        {/* Text placeholder until the real logo is added */}
        <Link
          href="/"
          aria-label="Sweet Slice home"
          className="flex items-center gap-4 font-display text-2xl leading-[0.95] [-webkit-text-stroke:0.008em_currentColor] lg:text-[1.75rem]"
        >
          <CakeLogoIcon className="size-12 shrink-0 lg:size-14" />
          <span className="whitespace-nowrap [word-spacing:-0.18em]">
            Sweet <span className="text-brand">Slice</span>
          </span>
        </Link>

        <div className="flex items-center gap-5 lg:gap-14 xl:gap-20">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-10 font-bold tracking-wide lg:gap-12 xl:gap-18">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={link.active ? "page" : undefined}
                    className={`transition-colors hover:text-brand ${
                      link.active ? "text-brand" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="transition-colors hover:text-brand md:hidden"
          >
            {open ? (
              <CloseIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-6 top-full mt-3 rounded-2xl bg-white p-2 shadow-xl shadow-brand/10 sm:inset-x-10 md:hidden"
        >
          <ul className="text-sm font-bold">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 hover:bg-blush ${
                    link.active ? "text-brand" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
