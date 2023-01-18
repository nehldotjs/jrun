import React from "react";
import SliderCarousel from "./SliderCarousel";

// style component
import "./style/reviews.css";

function reviews() {
  return (
    <>
      <div className="customerReviews">
        <SliderCarousel />
      </div>
    </>
  );
}

export default reviews;