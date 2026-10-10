// Opens a Messenger chat with the bakery's Facebook page
const MESSENGER_URL = "https://m.me/61575617819549";

// Pre-fills the chat box with a message; the customer still has to press send
export function messengerLink(text: string) {
  return `${MESSENGER_URL}?text=${encodeURIComponent(text)}`;
}
