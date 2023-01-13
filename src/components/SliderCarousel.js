import React from "react";
import Carousel from "react-elastic-carousel";

import "./style/slider.css";

const customersReview = [
  {
    id: 1,
    name: "John Doe",
    imgSrc:
      "https://images.pexels.com/photos/7543641/pexels-photo-7543641.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate assumenda optio qui est libero labore cum nemo odio accusantium impedit.Card 1",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Katy Doe",
    imgSrc:
      "https://images.pexels.com/photos/6474814/pexels-photo-6474814.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Amazing cleaning service, top notch delivary would definately recommend a great service like this to a friend",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Katy Doe",
    imgSrc:
      "https://images.pexels.com/photos/6474814/pexels-photo-6474814.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Amazing cleaning service, top notch delivary would definately recommend a great service like this to a friend",
    rating: 5.0,
  },
  {
    id: 4,
    name: "John Doe",
    imgSrc:
      "https://images.pexels.com/photos/7543641/pexels-photo-7543641.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate assumenda optio qui est libero labore cum nemo odio accusantium impedit.Card 1",
    rating: 5.0,
  },
];
function SliderCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    {
      width: 550,
      itemsToShow: 2,
      itemsToScroll: 2,
      pagination: true,
    },
    { width: 850, itemsToShow: 3 },
    {
      width: 1150,
      itemsToShow: 3,
      itemsToScroll: 2,
    },
    { width: 1450, itemsToShow: 3 },
    { width: 900, itemsToShow: 3 },
  ];

  return (
    <>
      <div className="sliderContainer">
        <div className="reviewShadowBox"></div>
        <h3 className="reviewText">
          Here is what some of our customers have to say
        </h3>

        <Carousel breakPoints={breakPoints}>
          {customersReview.map((item, index) => {
            const { text, imgSrc, name, rating, id } = item;
            return (
              <div key={index} className="textContainer">
                <div className="cardContentWrapper" key={id}>
                  <div className="avatarWrapper">
                    <div className="avatar">
                      <img src={imgSrc} alt="profile" />
                    </div>
                  </div>
                  <div className="nameAndRatingContainer">
                    <div className="nameContainer">{name}</div>
                    <div className="rating" id="rating ">
                      {rating}
                    </div>
                  </div>
                  <div className="customerReviewContext">
                    <h3 className="texts">{text}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
export default SliderCarousel;
