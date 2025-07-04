import React from "react";
import Image from "next/image";
import { cn } from "fumadocs-ui/utils/cn";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  className?: string;
}

export default function CustomImage({
  src,
  alt,
  width,
  height,
  maxWidth,
  maxHeight,
  className = "",
}: CustomImageProps) {
  const imageStyle: React.CSSProperties = {
    maxWidth: maxWidth ? `${maxWidth}px` : undefined,
    maxHeight: maxHeight ? `${maxHeight}px` : undefined,
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
    objectFit: "contain",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <ImageZoom
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        style={imageStyle}
      />
      <div className="text-center text-sm text-gray-500">{alt}</div>
    </div>
  );
}
