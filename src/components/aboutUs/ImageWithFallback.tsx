"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageWithFallbackProps = ImageProps & {
  fallback?: string;
};

const ImageWithFallback = ({
  fallback = "/images/placeholder.svg",
  alt,
  src,
  ...rest
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  return (
    <Image
      alt={alt}
      src={error ? fallback : src}
      {...rest}
      onError={() => setError(true)}
    />
  );
};

export default ImageWithFallback; 