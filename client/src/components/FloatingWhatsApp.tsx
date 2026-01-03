/**
 * Floating WhatsApp Button Component
 * Features: Fixed position button in bottom-left corner, smooth animations, responsive
 */

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Animated background pulse */}
      <div className="absolute inset-0 bg-secondary rounded-full animate-pulse opacity-30" />

      {/* Main Button */}
      <a
        href="https://wa.me/966501867025?text=مرحباً%2C%20أود%20الاستفسار%20عن%20خدماتكم"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
      >
        {/* Icon */}
        <MessageCircle className="w-7 h-7 transition-transform group-hover:scale-125" />

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute left-full ml-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg animate-in fade-in slide-in-from-left-2 duration-200">
            تواصل معنا عبر واتساب
            <div className="absolute right-full mr-1 top-1/2 -translate-y-1/2 border-8 border-transparent border-l-primary" />
          </div>
        )}
      </a>

      {/* Mobile version - simpler */}
      <style>{`
        @media (max-width: 640px) {
          .floating-whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
