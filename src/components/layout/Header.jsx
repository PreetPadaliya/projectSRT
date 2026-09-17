import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logoImage from "@/assets/logo/WhatsApp Image 2026-09-14 at 10.48.30 AM (2).jpeg";

import { navLinks, PHONE, PHONE_HREF } from "@/data/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || window.location.pathname !== "/" ? "bg-primary/90 backdrop-blur shadow-card" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="Shree Radhe Thal"
            className="h-12 w-32 rounded-md bg-white object-contain object-center p-1 shadow-card sm:h-16 sm:w-48"
          />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/90 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2.5 text-sm font-medium text-white shadow-card transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/40 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`${mobileMenuOpen ? "block" : "hidden"} border-t border-cream/20 bg-primary px-5 py-4 lg:hidden`}
      >
        <div className="mx-auto flex max-w-6xl flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-cream/10 py-3 text-sm font-medium text-cream/90 transition-colors last:border-b-0 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
