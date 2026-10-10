import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M3 9h18l-1.6 9.2a2 2 0 0 1-2 1.8H6.6a2 2 0 0 1-2-1.8L3 9Z" />
      <path d="m8 9 3-6m5 6-3-6M9 13v3m3-3v3m3-3v3" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M19 12H5m6-6-6 6 6 6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="m12 2.5 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6-5.9-3.2-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9L12 2.5Z" />
    </svg>
  );
}

export function CakeLogoIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      stroke="#1d1317"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 7v3M7.500 8.500h3M39 7v3m-1.500-1.500h3M15 4v.01M33 4v.01" fill="none" strokeWidth="1.500" />
      <path d="M24 2.500c1.600 1.500 1.600 3 0 3.800-1.600-.8-1.600-2.300 0-3.800Z" fill="#ffc93c" strokeWidth="1.500" />
      <rect x="22.500" y="7.500" width="3" height="6.500" fill="#ee2463" strokeWidth="1.500" />
      <rect x="16" y="14" width="16" height="8" rx="1" fill="#ffc93c" />
      <rect x="11" y="22" width="26" height="9" rx="1" fill="#35c6c0" />
      <rect x="7" y="31" width="34" height="10" rx="1" fill="#ee2463" />
      <path
        d="M13.500 26c1.600 0 1.600 1.500 3.200 1.500s1.600-1.500 3.200-1.500 1.600 1.500 3.200 1.500 1.600-1.500 3.200-1.500 1.600 1.500 3.200 1.500 1.600-1.500 3.200-1.500M10 35.500c1.800 0 1.800 1.500 3.500 1.500s1.800-1.500 3.500-1.500 1.800 1.500 3.500 1.500 1.800-1.500 3.500-1.500 1.800 1.500 3.500 1.500 1.800-1.500 3.500-1.500 1.800 1.500 3.500 1.500 1.800-1.500 3.500-1.500"
        fill="none"
        stroke="#fff"
        strokeWidth="1.500"
      />
      <rect x="3" y="41" width="42" height="4" rx="2" fill="#ffc93c" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.200-.1-2.300-.1-2.300 0-3.800 1.400-3.800 3.900v2.300H8v3h2.500V21h3Z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M21 6.200c-.7.3-1.400.5-2.100.6.800-.5 1.300-1.200 1.600-2-.7.4-1.500.7-2.300.9a3.700 3.700 0 0 0-6.300 3.300A10.400 10.400 0 0 1 4.300 5.200a3.700 3.700 0 0 0 1.100 4.900c-.6 0-1.200-.2-1.700-.5 0 1.800 1.300 3.300 3 3.700-.5.1-1.100.2-1.700.1.500 1.500 1.900 2.500 3.500 2.600A7.400 7.400 0 0 1 3 17.500a10.400 10.400 0 0 0 5.700 1.700c6.800 0 10.500-5.600 10.500-10.500v-.5c.7-.5 1.300-1.200 1.800-2Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.700" cy="7.300" r=".6" fill="currentColor" />
    </svg>
  );
}
