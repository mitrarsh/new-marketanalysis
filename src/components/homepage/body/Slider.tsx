import { useRef } from "react";
import SliderOption from "./SliderOption";

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -50, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 50, behavior: "smooth" });
    }
  };
  return (
    <div className="slider-container flex">
      <button className="arrow left" onClick={scrollLeft}>
        <img src="/assets/icons/arrow-slide.svg" alt="" />
      </button>

      <div ref={sliderRef} className="slider">
        <SliderOption image="business">
          <h3>Market Trends Analysis</h3>
          <p>
            With NEW, Protect your asset and reputation in the increasing
            complexities of the business environment.
          </p>
        </SliderOption>
        <SliderOption image="predict">
          <h3>Risk Management</h3>
          <p>
            Mapping market trends can be a game-changer for any business.
            Monitoring changes in the market will help you to identify patterns
            and opportunities.
          </p>
        </SliderOption>
        <SliderOption image="ml">
          <h3>Advanced Machine learning in market and business</h3>
          <p>
            NEW is a platform leverages machine learning and statistical models
            to make changes in the mineral trade industry.
          </p>
        </SliderOption>
      </div>
      <button className="arrow right" onClick={scrollRight}>
        <img src="/assets/icons/arrow-slide.svg" alt="" />
      </button>
    </div>
  );
};

export default Slider;
