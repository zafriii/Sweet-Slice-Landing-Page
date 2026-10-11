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

export function ShoppingBagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" />
    </svg>
  );
}

export function ImageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.500" cy="9.500" r="1.500" />
      <path d="m4 18 5-5 4 4 3-3 4 4" />
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

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M7.900 20A9 9 0 1 0 4 16.100L2 22Z" />
      <path
        transform="translate(8.300 6.300) scale(.39)"
        fill="currentColor"
        stroke="none"
        d="M22 16.920v3a2 2 0 0 1-2.180 2 19.790 19.790 0 0 1-8.630-3.070 19.500 19.500 0 0 1-6-6 19.790 19.790 0 0 1-3.070-8.670A2 2 0 0 1 4.110 2h3a2 2 0 0 1 2 1.720 12.840 12.840 0 0 0 .7 2.810 2 2 0 0 1-.45 2.110L8.090 9.910a16 16 0 0 0 6 6l1.270-1.270a2 2 0 0 1 2.110-.45 12.840 12.840 0 0 0 2.810.7A2 2 0 0 1 22 16.920Z"
      />
    </svg>
  );
}

export function WalkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="13" cy="4" r="1.8" />
      <path d="M7 21l3-4 1.5-1.5 2 2.5 3.5 5" />
      <path d="M10 11l2-4 3 2 2-1" />
      <path d="M9 13l2.5-2" />
    </svg>
  );
}

export function RiderIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="18" cy="17" r="3" />
      <circle cx="6" cy="17" r="3" />
      <path d="M6 17h5l2-7h4" />
      <path d="M15 6h3" />
      <path d="M16 10l2 7" />
      <rect x="3.5" y="10" width="4.5" height="4" rx="0.8" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 21.500c4.500-4.300 7-7.900 7-11.500a7 7 0 0 0-14 0c0 3.600 2.500 7.200 7 11.500Z" />
      <circle cx="12" cy="10" r="2.500" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.5} {...props}>
      <path d="M12 2c.8 5.600 4.400 9.200 10 10-5.600.8-9.200 4.400-10 10-.8-5.600-4.400-9.200-10-10 5.600-.8 9.200-4.400 10-10Z" />
    </svg>
  );
}

export function MessengerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.512 3.736 7.181V22l3.418-1.876c.905.251 1.861.386 2.846.386 5.523 0 10-4.145 10-9.252C22 6.145 17.523 2 12 2Zm1.004 12.443-2.56-2.73-5 2.73 5.498-5.836 2.623 2.73 4.939-2.73-5.5 5.836Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

