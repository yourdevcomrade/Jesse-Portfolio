import { motion } from "framer-motion";

export function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/2348000000000?text=Hi%20Jesse%2C%20I%27d%20love%20to%20talk%20about%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)]">
        <svg
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.39c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.26-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.48l-.55-.01c-.19 0-.5.07-.76.36-.26.28-1 .98-1 2.39 0 1.41 1.03 2.78 1.17 2.97.14.19 2.02 3.08 4.89 4.32.68.29 1.22.46 1.63.59.69.22 1.32.19 1.81.12.55-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33zM16.02 5.33C10.16 5.33 5.4 10.09 5.4 15.95c0 1.87.49 3.7 1.43 5.31L5.33 26.67l5.53-1.45a10.6 10.6 0 0 0 5.16 1.31h.01c5.86 0 10.62-4.76 10.62-10.62S21.88 5.33 16.02 5.33zm6.18 16.79a8.78 8.78 0 0 1-6.18 2.55h-.01a8.78 8.78 0 0 1-4.47-1.22l-.32-.19-3.28.86.88-3.2-.21-.33a8.74 8.74 0 0 1-1.34-4.64c0-4.83 3.93-8.77 8.77-8.77 2.34 0 4.54.91 6.19 2.57a8.71 8.71 0 0 1 2.57 6.2c0 4.83-3.93 8.77-8.77 8.77z" />
        </svg>
      </span>
      <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-black/80 backdrop-blur border border-white/10 px-3.5 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
