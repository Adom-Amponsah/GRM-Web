import React from "react";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";

export default function MediaAccessSection() {
  const platforms = [
    {
      name: "YouTube",
      handle: "@RobertAmpiahKwofi",
      color: "#FF0000",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
          <path fill="currentColor" d="M23.5 6.2s-.2-1.7-.9-2.5c-.8-.9-1.7-.9-2.1-1C16.9 2.3 12 2.3 12 2.3h0s-4.9 0-8.5.4c-.4 0-1.3.1-2.1 1-.7.8-.9 2.5-.9 2.5S0 8.3 0 10.4v1.1c0 2.1.2 4.2.2 4.2s.2 1.7.9 2.5c.8.9 1.8.9 2.3 1 1.7.2 7.3.4 7.3.4s4.9 0 8.5-.4c.4-.1 1.3-.1 2.1-1 .7-.8.9-2.5.9-2.5s.2-2.1.2-4.2v-1.1c0-2.1-.2-4.2-.2-4.2Zm-14 8.1V7.6l6.1 3.4-6.1 3.3Z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      handle: "@Rev. Robert Ampiah-Kwofi",
      color: "#1877F2",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
          <path fill="currentColor" d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.407.595 24 1.326 24H12.82V14.706h-3.17V11.08h3.17V8.41c0-3.137 1.915-4.847 4.71-4.847 1.34 0 2.49.099 2.826.144v3.276l-1.94.001c-1.52 0-1.815.723-1.815 1.783v2.333h3.63l-.473 3.626h-3.157V24h6.195C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/>
        </svg>
      ),
    },
    {
      name: "Spotify",
      handle: "@Rev. Robert Ampiah-Kwofi",
      color: "#1DB954",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
          <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.45 17.4a.9.9 0 0 1-1.24.3c-3.4-2.08-7.68-2.55-12.73-1.41a.9.9 0 0 1-.39-1.75c5.5-1.23 10.2-.7 14 1.61.43.26.57.83.36 1.25Zm1.73-3.08a1.12 1.12 0 0 1-1.54.37c-3.89-2.38-9.82-3.08-14.4-1.7A1.12 1.12 0 0 1 2.8 11.2c5.18-1.57 11.63-.79 16 1.88.53.33.7 1.03.38 1.56Zm.16-3.21c-4.42-2.63-11.13-2.87-15.13-1.73a1.33 1.33 0 1 1-.74-2.56c4.64-1.33 12.12-1.04 17.2 1.96a1.33 1.33 0 0 1-1.33 2.33Z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      handle: "@robertampiahkwofi",
      color: "#E1306C",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
          <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7.1 4.8.2 4.1.5c-.8.3-1.5.7-2.2 1.4S.9 3 0 3.9C-.3 4.6-.4 5.5-.5 6.8-.6 8.1-.6 8.5-.6 12s0 3.9.1 5.2c.1 1.3.2 2.2.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.7.3 1.6.4 2.9.5C8.3 24 8.7 24 12 24s3.9 0 5.2-.1c1.3-.1 2.2-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.7.4-1.6.5-2.9.1-1.3.1-1.7.1-5.2s0-3.9-.1-5.2c-.1-1.3-.2-2.2-.5-2.9-.3-.8-.7-1.5-1.4-2.2C21 1.6 20.3 1.2 19.5.9 18.8.6 17.9.5 16.6.4 15.3.3 14.9.3 12 .3Z"/>
        </svg>
      ),
    },
    {
      name: "TikTok",
      handle: "@revrobertampiahkwofi",
      color: "#000000",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
          <path fill="currentColor" d="M16.7 1.9c1 1.5 2.5 2.6 4.2 3v3.1c-1.6-.1-3.2-.6-4.6-1.5v6.8c0 3.8-3.1 6.8-6.9 6.8S2.5 17.1 2.5 13.3s3.1-6.8 6.9-6.8c.4 0 .8 0 1.2.1v3.2c-.4-.1-.8-.1-1.2-.1-2.1 0-3.8 1.7-3.8 3.7s1.7 3.7 3.8 3.7 3.8-1.7 3.8-3.7V1.9h2.5Z"/>
        </svg>
      ),
    },
    {
      name: "Amazon",
      handle: "@Rev Robert Ampiah-Kwofi",
      color: "#FF9900",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
          <path fill="currentColor" d="M20.6 18.2c-3.7 2.7-9.1 3.3-13.5 1.6-.5-.2-1 .2-.7.6 2.2 3.6 7.6 4.6 11.5 2.2.8-.5 1.9-1.3 2.7-2.2.4-.4-.2-1-.7-.6-.5.3-.9.5-1.3.7l-.5-.3c.7-.6 1.3-1.2 2-2 0 0 .2-.1.5 0 .8.2 1.1-.7.5-1ZM18.4 6.3c-.9-1.3-2.2-2-3.8-2-2.9 0-5.2 2.6-5.2 6.1 0 3.8 2.2 6 5 6 1.6 0 2.8-.7 3.3-1.9.2-.4 0-.9-.4-1.1-.4-.2-.9 0-1.1.4-.3.6-.9 1-1.8 1-1.3 0-2.3-1.2-2.6-2.9h5.6c.5 0 .9-.3.9-.8 0-1.1-.2-2.5-.9-3.6Zm-6.1 2.3c.2-1.5 1.2-2.5 2.4-2.5 1.2 0 2 .9 2.2 2.5h-4.6Z"/>
        </svg>
      ),
    },
  ];
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: heading and subtext */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">LISTEN TO THE LIFE-GIVING WORD</h3>
            <p className="mt-3  max-w-prose text-black">
              Follow the messages and content of God’s servant, Rev. Robert Ampiah-Kwofi on any of these platforms.
            </p>
          </div>

          {/* Right: platform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {platforms.map(({ name, handle, color, Icon }) => (
              <a
                key={name}
                href="#"
                className="rounded-2xl bg-white border border-black/10 p-4 shadow-md hover:shadow-lg transition flex items-center gap-3"
              >
                <div
                  className="size-9 flex items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: color }}
                >
                  <Icon />
                </div>
                <div className="leading-tight">
                  <div className="font-semibold text-sm text-black">{name}</div>
                  <div className="text-xs text-gray-600">{handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
