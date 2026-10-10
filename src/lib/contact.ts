import { messengerLink } from "./messenger";

// WhatsApp number in international format, digits only (e.g. 8801XXXXXXXXX).
// While it is empty the link still opens WhatsApp, but without a chat selected.
const WHATSAPP_NUMBER = "";

const INSTAGRAM_HANDLE = "__sweet.slice__";

const GREETING = "Hi! I'd like to ask about a cake.";

export const contactLinks = {
  facebook: messengerLink(GREETING),
  // ig.me opens a direct message with the account instead of its profile
  instagram: `https://ig.me/m/${INSTAGRAM_HANDLE}`,
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING)}`,
};

export const instagramHandle = `@${INSTAGRAM_HANDLE}`;
