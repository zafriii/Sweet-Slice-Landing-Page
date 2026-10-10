"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CakeLogoIcon,
  CartIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from "./icons";

const links = [
  { label: "Home", href: "/", active: true },
  { label: "Cakes", href: "#cakes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const cartCount = 2;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 px-6 pt-6 sm:px-10 lg:px-24 lg:pt-10 xl:px-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        {/* Text placeholder until the real logo is added */}
        <Link
          href="/"
          aria-label="Cakes Bakery home"
          className="flex items-center gap-4 font-display text-2xl leading-[0.95] [-webkit-text-stroke:0.008em_currentColor] lg:text-[1.75rem]"
        >
          <CakeLogoIcon className="size-12 shrink-0 lg:size-14" />
          <span>
            <span className="block">Cakes</span>
            <span className="block text-brand">bakery.</span>
          </span>
        </Link>

        <div className="flex items-center gap-5 lg:gap-14 xl:gap-20">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-10 font-medium tracking-wide lg:gap-12 xl:gap-18">
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

          <div className="flex items-center gap-4 lg:gap-8">
            <button
              type="button"
              aria-label="Search"
              className="transition-colors hover:text-brand"
            >
              <SearchIcon className="size-6 lg:size-7" />
            </button>
            <Link
              href="#cart"
              aria-label={`Cart, ${cartCount} items`}
              className="relative transition-colors hover:text-brand"
            >
              <CartIcon className="size-6 lg:size-7" />
              <span className="absolute -right-2 -top-2 flex size-[18px] items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                {cartCount}
              </span>
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
              className="ml-1 transition-colors hover:text-brand md:hidden"
            >
              {open ? (
                <CloseIcon className="size-6" />
              ) : (
                <MenuIcon className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-6 top-full mt-3 rounded-2xl bg-white p-2 shadow-xl shadow-brand/10 sm:inset-x-10 md:hidden"
        >
          <ul className="text-sm font-semibold">
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
