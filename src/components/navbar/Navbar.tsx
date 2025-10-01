import React from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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
            <button aria-label="Open Menu" className="rounded-full border border-white/20 text-white/90 px-3 py-2 text-sm">Menu</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
