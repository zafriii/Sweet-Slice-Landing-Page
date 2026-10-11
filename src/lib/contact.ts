import { messengerLink } from "./messenger";

// WhatsApp number in international format, digits only (e.g. 8801XXXXXXXXX).
export const WHATSAPP_NUMBER = "8801647822038";
export const whatsappDisplayNumber = "+880 1647-822038";

const INSTAGRAM_HANDLE = "__sweet.slice__";

const GREETING = "Hi! I'd like to ask about a cake.";

export const contactLinks = {
  facebook: messengerLink(GREETING),
  // ig.me opens a direct message with the account instead of its profile
  instagram: `https://ig.me/m/${INSTAGRAM_HANDLE}`,
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING)}`,
};

export const instagramHandle = `@${INSTAGRAM_HANDLE}`;

export function getMessengerLink(text: string) {
  return messengerLink(text);
}

export function getInstagramLink(text?: string) {
  const base = `https://ig.me/m/${INSTAGRAM_HANDLE}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function getWhatsAppLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}


