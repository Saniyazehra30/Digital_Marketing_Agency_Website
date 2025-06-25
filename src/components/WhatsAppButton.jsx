import React from "react";

export function WhatsAppButton() {
  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappURL}
      className="fixed bottom-5 right-5 bg-green-500 text-white text-xl p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}
