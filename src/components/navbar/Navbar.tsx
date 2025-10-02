"use client";
import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/branches", label: "Branches" },
    { href: "/events", label: "Events" },
    { href: "/sermons", label: "Sermons" },
    { href: "/akwo", label: "AKWO" },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <Container className="py-3">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] px-3 sm:px-4 py-2">
          <div className="flex items-center gap-3 text-white">
            <Link href="/" className="font-bold tracking-tight whitespace-nowrap">
              Global Revival Ministries
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors relative ${
                  (l.href === "/" ? pathname === "/" : pathname.startsWith(l.href))
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <CTAButton className="rounded-full px-5 py-2">Support Us</CTAButton>
          </div>
          <div className="md:hidden">
            <button
              aria-label={open ? "Close Menu" : "Open Menu"}
              onClick={() => setOpen((v) => !v)}
              className="rounded-full border border-white/20 text-white/90 p-2"
            >
              {/* Hamburger icon */}
              {!open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>
      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-all duration-200 ease-out overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <Container className="py-2">
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl text-white/90">
            <ul className="py-2">
              {links.map((l) => {
                const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 text-sm ${active ? "text-black font-semibold" : "text-black"}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li className="px-4 pb-3 pt-1">
                <CTAButton className="w-full rounded-full px-5 py-2">Support Us</CTAButton>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
}
