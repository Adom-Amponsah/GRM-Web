import React from "react";
import Image, { ImageProps } from "next/image";

export default function ResponsiveImage(props: ImageProps) {
  return (
    <div className="relative w-full h-auto">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} className={`w-full h-auto ${props.className ?? ""}`} />
    </div>
  );
}
