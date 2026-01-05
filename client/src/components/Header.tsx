/**
 * Header Component - Contemporary Geometric Design
 * Features: Fixed navigation with geometric logo, smooth scroll, Arabic RTL support
 */

import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
  <div className="relative w-12 h-12">
    <img
      src="/images/Logo.png"
      alt="Alrukun Alsakani Logo"
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div>
    <h1 className="text-base md:text-xl font-bold text-[#131212] leading-tight">
      الركن السكني
    </h1>
    <p className="text-xs text-[#050505]">
      للصيانة والتشغيل
    </p>
  </div>
</div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              خدماتنا
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              لماذا نحن
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              اتصل بنا
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://wa.me/966501867025?text=مرحباً%2C%20أود%20الاستفسار%20عن%20خدماتكم" target="_blank" rel="noopener noreferrer">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                <MessageCircle className="w-4 h-4 ml-2" />
                تواصل معنا
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-right text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-right text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-right text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                خدماتنا
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-right text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                لماذا نحن
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-right text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                اتصل بنا
              </button>
              <a href="https://wa.me/966501867025?text=مرحباً%2C%20أود%20الاستفسار%20عن%20خدماتكم" target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  تواصل معنا
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
