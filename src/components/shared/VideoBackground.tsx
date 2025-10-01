import React from "react";

type Props = {
  src: string;
  poster?: string;
  children?: React.ReactNode;
  overlayClassName?: string;
};

export default function VideoBackground({ src, poster, children, overlayClassName = "bg-black/40" }: Props) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
      >
        <source src={src} />
      </video>
      <div className={`relative z-10 ${overlayClassName}`}>
        {children}
      </div>
    </div>
  );
}
