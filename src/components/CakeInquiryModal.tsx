"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getInstagramLink,
  getMessengerLink,
  getWhatsAppLink,
  whatsappDisplayNumber,
} from "@/lib/contact";
import {
  CartIcon,
  CheckIcon,
  CloseIcon,
  CopyIcon,
  FacebookIcon,
  ImageIcon,
  InstagramIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "./icons";

export type Product = {
  name: string;
  price: number;
  unit: "pound" | "piece";
  image?: string;
  alt?: string;
};

export type InquiryMode = "buy" | "details";

type CakeInquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  mode: InquiryMode;
};

export default function CakeInquiryModal({
  isOpen,
  onClose,
  product,
  mode,
}: CakeInquiryModalProps) {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  // Initialize pre-filled message whenever product or mode changes
  useEffect(() => {
    if (!product) return;

    if (mode === "buy") {
      setMessage(
        `Hi Sweet Slice! I want to buy the ${product.name} (Starts from ৳${product.price}/${product.unit}). Please let me know how to order!`
      );
    } else {
      setMessage(
        `Hi Sweet Slice! I'd like to know more details about the ${product.name}.`
      );
    }
    setCopied(false);
    setStatusNotice(null);
  }, [product, mode, isOpen]);

  // Lock body scroll and handle Escape key while open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const copyToClipboard = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(message);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        return true;
      }
    } catch {
      // Fallback below
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = message;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand("copy");
      textarea.remove();
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        return true;
      }
    } catch {
      // Ignore
    }
    return false;
  };

  const handleOpenPlatform = async (
    platform: "whatsapp" | "facebook" | "instagram"
  ) => {
    await copyToClipboard();

    if (platform === "whatsapp") {
      setStatusNotice("Opening WhatsApp with your message ready!");
      const url = getWhatsAppLink(message);
      window.open(url, "_blank", "noopener,noreferrer");
    } else if (platform === "facebook") {
      setStatusNotice("Opening Messenger with your message ready!");
      const url = getMessengerLink(message);
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      setStatusNotice(
        "Copied message to clipboard! Please paste it in Instagram chat."
      );
      const url = getInstagramLink(message);
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const isBuy = mode === "buy";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-md scale-100 overflow-hidden rounded-3xl border-2 border-plum bg-white p-5 shadow-2xl shadow-plum/25 transition-all sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                isBuy
                  ? "bg-brand text-white"
                  : "bg-peach text-plum"
              }`}
            >
              {isBuy ? (
                <>
                  <CartIcon className="size-3.5" />
                  <span>Order Request</span>
                </>
              ) : (
                <>
                  <SparkleIcon className="size-3.5" />
                  <span>Details Inquiry</span>
                </>
              )}
            </span>
            <h3
              id="inquiry-modal-title"
              className="mt-2 font-display text-2xl text-plum [word-spacing:-0.18em] sm:text-3xl"
            >
              {isBuy ? "Want to Buy?" : "Cake Details"}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-peach/70 text-plum transition-colors hover:bg-brand hover:text-white"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        {/* Product mini info */}
        <div className="mt-4 flex items-center gap-3.5 rounded-2xl border border-plum/15 bg-blush/40 p-3">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-blush">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.alt ?? product.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-plum/50">
                <ImageIcon className="size-6" />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="truncate font-display text-lg text-plum">
              {product.name}
            </h4>
            <p className="text-xs font-bold text-plum/70">
              Starts from <span className="text-brand">৳{product.price}</span> / {product.unit}
            </p>
          </div>
        </div>

        {/* Pre-filled Message input */}
        <div className="mt-4">
          <div className="flex items-center justify-between pb-1.5">
            <label
              htmlFor="inquiry-message"
              className="text-xs font-bold uppercase tracking-wider text-plum/75"
            >
              Your Message
            </label>
            <button
              type="button"
              onClick={copyToClipboard}
              className="flex cursor-pointer items-center gap-1 text-xs font-bold text-brand hover:underline"
            >
              {copied ? (
                <>
                  <CheckIcon className="size-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <CopyIcon className="size-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <textarea
            id="inquiry-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-2xl border-2 border-plum/20 bg-cream/70 p-3 text-sm leading-relaxed text-plum placeholder:text-plum/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="Type your message..."
          />
          <p className="mt-1 text-[0.7rem] text-plum/60">
            You can customize this message before sending.
          </p>
        </div>

        {/* Status Notice Toast */}
        {statusNotice && (
          <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-2.5 text-center text-xs font-semibold text-emerald-800">
            {statusNotice}
          </div>
        )}

        {/* Compact Contact us section with smaller icons */}
        <div className="mt-4 border-t border-plum/10 pt-3 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-plum/70">
            Click below to continue with your preferred platform
          </p>

          <div className="mt-2.5 flex items-center justify-center gap-4">
            {/* WhatsApp */}
            <button
              type="button"
              onClick={() => handleOpenPlatform("whatsapp")}
              aria-label={`Contact us on WhatsApp (${whatsappDisplayNumber})`}
              title={`WhatsApp (${whatsappDisplayNumber})`}
              className="group flex size-11 cursor-pointer items-center justify-center rounded-full border-2 border-plum bg-brand text-white shadow-md shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg active:scale-95 sm:size-12"
            >
              <WhatsAppIcon className="size-5 transition-transform group-hover:scale-110" />
            </button>

            {/* Facebook Messenger */}
            <button
              type="button"
              onClick={() => handleOpenPlatform("facebook")}
              aria-label="Contact us on Facebook"
              title="Facebook Messenger"
              className="group flex size-11 cursor-pointer items-center justify-center rounded-full border-2 border-plum bg-brand text-white shadow-md shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg active:scale-95 sm:size-12"
            >
              <FacebookIcon className="size-5 transition-transform group-hover:scale-110" />
            </button>

            {/* Instagram */}
            <button
              type="button"
              onClick={() => handleOpenPlatform("instagram")}
              aria-label="Contact us on Instagram"
              title="Instagram Direct Message"
              className="group flex size-11 cursor-pointer items-center justify-center rounded-full border-2 border-plum bg-brand text-white shadow-md shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg active:scale-95 sm:size-12"
            >
              <InstagramIcon className="size-5 transition-transform group-hover:scale-110" />
            </button>
          </div>

          <p className="mt-2.5 text-xs font-medium text-plum/75">      
            <button
              type="button"
              onClick={() => handleOpenPlatform("whatsapp")}
              className="cursor-pointer font-bold text-brand hover:underline"
              title={`Chat on WhatsApp (${whatsappDisplayNumber})`}
            >              
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
