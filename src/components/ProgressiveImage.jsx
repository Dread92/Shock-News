import React, { useState, useEffect } from 'react';

export function ProgressiveImage({ src, placeholder, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setTimeout(() => {
        setImageLoaded(true);
      }, 5000); // Delay the image loading state change by 5 seconds
    };
  }, [src]);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 5000); // Show the image after 5 seconds
  }, []);

  const imageStyle = {
    opacity: showImage && imageLoaded ? 1 : 0, // Set opacity to 1 when the image is loaded and after 5 seconds
    transition: 'opacity 1s ease-in-out', // Add transition effect to opacity change
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
