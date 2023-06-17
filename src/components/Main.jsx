import React, { useState, useEffect, useRef } from 'react';
import './Main.scss';
import { ProgressiveImage } from './ProgressiveImage';


export function Main() {
  const [contentLoaded, setContentLoaded] = useState(false);
  const imageSection2Ref = useRef(null);
  const textSection2Ref = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1100; // Check if the screen width is less than or equal to 1100px

    if (isMobile) {
      // No effect on mobile
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Intersection threshold (50% of the section visible)
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setContentLoaded(true);
        }
      });
    };

    const imageSection2Observer = new IntersectionObserver(observerCallback, observerOptions);
    const textSection2Observer = new IntersectionObserver(observerCallback, observerOptions);

    if (imageSection2Ref.current) {
      imageSection2Observer.observe(imageSection2Ref.current);
    }
    if (textSection2Ref.current) {
      textSection2Observer.observe(textSection2Ref.current);
    }

    // Clean up the observers
    return () => {
      if (imageSection2Ref.current) {
        imageSection2Observer.unobserve(imageSection2Ref.current);
      }
      if (textSection2Ref.current) {
        textSection2Observer.unobserve(textSection2Ref.current);
      }
    };
  }, []);

  const contentStyle = {
    opacity: 1,
    transition: 'opacity 1s ease-in-out',
  };

  const textSectionStyle = {
    opacity: contentLoaded || window.innerWidth <= 1100 ? 1 : 0, // Show on mobile devices as well
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
    transform: contentLoaded || window.innerWidth <= 1100 ? 'translateX(0)' : 'translateX(-100px)', // Show on mobile devices as well
  };

  const imageSectionStyle = {
    opacity: contentLoaded || window.innerWidth <= 1100 ? 1 : 0, // Show on mobile devices as well
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
    transform: contentLoaded || window.innerWidth <= 1100 ? 'translateX(0)' : 'translateX(100px)', // Show on mobile devices as well
  };

  return (
    <div className="main__container">
      
      <div id="banner" className="banner" style={contentStyle}>
        <h2>Enter a world of adrenaline</h2>
      </div>

      <h3 className="whatis" style={contentStyle}>
        What is Shocknews?
      </h3>

      <div id="content-wrapper" className="content-wrapper" style={contentStyle}>
        <div className="text-section" style={contentStyle}>
          <p className="testpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis iusto
            autem cumque, reprehenderit molestias dicta expedita officiis doloribus ratione animi
            repellendus architecto ut ad id cum laboriosam veniam a et aut soluta? Explicabo
            facilis repellendus at doloribus doloremque! Dicta ut suscipit, blanditiis quibusdam
            minus doloremque aliquid? Qui eligendi aut eaque itaque. Ratione dicta ab fugiat.
            Facilis, at, deleniti qui facere alias vel, labore accusantium error suscipit dolor
            quas fugiat aperiam. Quaerat id voluptate quam obcaecati similique odit nesciunt.
            Labore cum dolorem iusto doloremque ex iste earum. Doloribus saepe deserunt modi est
            omnis facilis? Tempora dicta error praesentium maxime atque?
          </p>
        </div>
       
        <div className="image-section" style={contentStyle}>
 
          <ProgressiveImage
            src="cyberpunk1.png"
            placeholder="cyberpunk1.png"
            alt="Description of the image"
          />
          
        </div>
      </div>

      <div id="content-wrapper2" className="content-wrapper2" style={contentStyle}>
        <div ref={imageSection2Ref} className="image-section2" style={imageSectionStyle}>
          <ProgressiveImage
            src="cyberpunk2.png"
            placeholder="cyberpunk2.png"
            alt="Description of the image"
          />
        </div>
        <div ref={textSection2Ref} className="text-section2" style={textSectionStyle}>
          <p className="testpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis iusto
            autem cumque, reprehenderit molestias dicta expedita officiis doloribus ratione animi
            repellendus architecto ut ad id cum laboriosam veniam a et aut soluta? Explicabo
            facilis repellendus at doloribus doloremque! Dicta ut suscipit, blanditiis quibusdam
            minus doloremque aliquid? Qui eligendi aut eaque itaque. Ratione dicta ab fugiat.
            Facilis, at, deleniti qui facere alias vel, labore accusantium error suscipit dolor
            quas fugiat aperiam. Quaerat id voluptate quam obcaecati similique odit nesciunt.
            Labore cum dolorem iusto doloremque ex iste earum. Doloribus saepe deserunt modi est
            omnis facilis? Tempora dicta error praesentium maxime atque?
          </p>
        </div>
      </div>

      <div id="content-wrapper3" className="content-wrapper3" style={contentStyle}>
        <div className="text-section3" style={contentStyle}>
          <p className="testpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis iusto
            autem cumque, reprehenderit molestias dicta expedita officiis doloribus ratione animi
            repellendus architecto ut ad id cum laboriosam veniam a et aut soluta? Explicabo
            facilis repellendus at doloribus doloremque! Dicta ut suscipit, blanditiis quibusdam
            minus doloremque aliquid? Qui eligendi aut eaque itaque. Ratione dicta ab fugiat.
            Facilis, at, deleniti qui facere alias vel, labore accusantium error suscipit dolor
            quas fugiat aperiam. Quaerat id voluptate quam obcaecati similique odit nesciunt.
            Labore cum dolorem iusto doloremque ex iste earum. Doloribus saepe deserunt modi est
            omnis facilis? Tempora dicta error praesentium maxime atque?
          </p>
        </div>
        <div className="image-section3" style={contentStyle}>
          <ProgressiveImage
            src="cyberpunk3.png"
            placeholder="cyberpunk3.png"
            alt="Description of the image"
          />
        </div>
      </div>
    </div>
  );
}
