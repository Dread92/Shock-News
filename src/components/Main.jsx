import React, { useState, useEffect } from 'react';
import "./Main.scss";
import { ProgressiveImage } from './ProgressiveImage';


export function Main() {
  const [contentLoaded, setContentLoaded] = useState(true);

  useEffect(() => {
    setContentLoaded(true); // Set contentLoaded state to true immediately
  }, []);

  const contentStyle = {
    opacity: contentLoaded ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  };

  const commonSectionStyle = {
    opacity: contentLoaded ? 1 : 0,
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Updated transition property
  };

  const textSectionStyle = {
    ...commonSectionStyle,
    transform: contentLoaded ? 'translateX(0)' : 'translateX(-100px)', // Slide in from left by 100px
  };

  const imageSectionStyle = {
    ...commonSectionStyle,
    transform: contentLoaded ? 'translateX(0)' : 'translateX(100px)', // Slide in from right by 100px
  };

  return (
    <div className='main__container'>
      <div id="banner" className='banner' style={contentStyle}>
        <h2>Enter a world of adrenaline</h2>
      </div>
      <h3 className='whatis' style={contentStyle}>What is Shocknews?</h3>
      <div id="content-wrapper" className="content-wrapper" style={contentStyle}>
        <div className='text-section' style={textSectionStyle}>
          <p className='testpara'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis iusto autem cumque, reprehenderit molestias dicta expedita officiis doloribus ratione animi repellendus architecto ut ad id cum laboriosam veniam a et aut soluta? Explicabo facilis repellendus at doloribus doloremque! Dicta ut suscipit, blanditiis quibusdam minus doloremque aliquid? Qui eligendi aut eaque itaque. Ratione dicta ab fugiat. Facilis, at, deleniti qui facere alias vel, labore accusantium error suscipit dolor quas fugiat aperiam. Quaerat id voluptate quam obcaecati similique odit nesciunt. Labore cum dolorem iusto doloremque ex iste earum. Doloribus saepe deserunt modi est omnis facilis? Tempora dicta error praesentium maxime atque?
          </p>
        </div>
        <div className="image-section" style={imageSectionStyle}>
          <ProgressiveImage
            src="soldier2.png"
            placeholder="soldier2.png"
            alt="Description of the image"
          />
        </div>
      </div>
      <div id="content-wrapper2" className="content-wrapper2" style={contentStyle}>
        <div className="image-section2" style={imageSectionStyle}>
          <ProgressiveImage
            src="press1.png"
            placeholder="press1.png"
            alt="Description of the image"
          />
        </div>
        <div className='text-section2' style={textSectionStyle}>
          <p className='testpara'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis iusto autem cumque, reprehenderit molestias dicta expedita officiis doloribus ratione animi repellendus architecto ut ad id cum laboriosam veniam a et aut soluta? Explicabo facilis repellendus at doloribus doloremque! Dicta ut suscipit, blanditiis quibusdam minus doloremque aliquid? Qui eligendi aut eaque itaque. Ratione dicta ab fugiat. Facilis, at, deleniti qui facere alias vel, labore accusantium error suscipit dolor quas fugiat aperiam. Quaerat id voluptate quam obcaecati similique odit nesciunt. Labore cum dolorem iusto doloremque ex iste earum. Doloribus saepe deserunt modi est omnis facilis? Tempora dicta error praesentium maxime atque?
          </p>
        </div>
      </div>
    </div>
  );
}
