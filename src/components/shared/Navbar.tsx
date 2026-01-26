"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/whatsapp", label: "WhatsApp", color: "#25D366" },
  { href: "/facebook", label: "Messenger", color: "#0084FF" },
  { href: "/instagram", label: "Instagram", color: "#E1306C" },
  { href: "/twitter", label: "X (Twitter)", color: "#1D9BF0" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <MessageSquare className="h-7 w-7 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900">ChatReplica</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
              style={{
                color: pathname === link.href ? link.color : "#4B5563",
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                  style={{ backgroundColor: link.color }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center border-b border-gray-100 px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-50"
              style={{
                color: pathname === link.href ? link.color : "#4B5563",
                borderLeftWidth: pathname === link.href ? "3px" : "0",
                borderLeftColor: link.color,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
