import React from "react";
import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="bg-[#071a2f] text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand and address */}
          <div>
            <div className="flex items-center gap-3">
              {/* Placeholder logo circle */}
              <div className="size-10 rounded-full bg-white/10 flex items-center justify-center">GRCM</div>
              <div className="text-xl font-extrabold tracking-tight">GLOBAL REVIVAL MINISTRIES</div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 opacity-90"><path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                <span>Haatso, Mango Lane, GE-182-6445</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M3 5a2 2 0 0 1 2-2h1.3a2 2 0 0 1 1.9 1.4l.7 2.1a2 2 0 0 1-.5 2L7.6 10a12.5 12.5 0 0 0 6.4 6.4l1.5-1.8a2 2 0 0 1 2-.5l2.1.7a2 2 0 0 1 1.4 1.9V19a2 2 0 0 1-2 2h-1C9.8 21 3 14.2 3 6V5Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                <a href="tel:+233201234568" className="hover:underline">+233 20 123 4568</a>
              </div>
              <div className="text-xs text-white/60">Global Revival Ministries – © {new Date().getFullYear()} All Rights Reserved</div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <div className="font-semibold mb-3 text-white/90">Useful Links</div>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:underline">Worship with us</a></li>
              <li><a href="#" className="hover:underline">Give to the ministry</a></li>
              <li><a href="#" className="hover:underline">Sermons</a></li>
              <li><a href="#" className="hover:underline">Programs</a></li>
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <div className="font-semibold mb-3 text-white/90">Connect with us</div>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:underline">Youtube</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Tiktok</a></li>
              <li><a href="#" className="hover:underline">Spotify</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
