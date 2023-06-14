import React, { useState, useEffect } from 'react';

export function ProgressiveImage({ src, placeholder, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  useEffect(() => {
    setShowImage(true);
  }, []);

  const imageStyle = {
    opacity: showImage && imageLoaded ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  };

  return (
    <img
      src={placeholder}
      data-src={src}
      alt={alt}
      style={imageStyle}
      className="progressive-image"
    />
  );
}
