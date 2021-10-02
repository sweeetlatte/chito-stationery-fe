import React, { useEffect } from "react";
import Aos from "aos";

import "../../style/Home/intro.css";
import "aos/dist/aos.css";
export const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="intro-main">
        <div data-aos="fade-up" className="intro-title">
          <h2 className="intro-title-name">The modern stationery</h2>
        </div>
        <div data-aos="fade-down" className="intro-content">
          <p className="intro-content-text">
            At Chito Stationery we have stationery that is minimal, understated,
            and extremely good quality. We proudly share every last detail of
            our sustainably-sourced materials, and expert making in the UK and
            Northern Europe.
          </p>
        </div>
      </div>
    </>
  );
};
