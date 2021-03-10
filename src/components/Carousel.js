import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image1 from "../img/image_1.jpg";
import Image2 from "../img/image_2.jpg";
import Image3 from "../img/image_3.jpg";
import Image4 from "../img/image_4.jpg";
import Image5 from "../img/image_5.jpg";

//Styled Components//y
const Img = styled.img`
  width: auto;
  height: 500px;
  object-fit: fit;
  position: relative;
  margin-top: 2%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Carousel = () => {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <Img src={Image1} alt="image1 of Randy and Marge" />
        <Img src={Image2} alt="image2 of Randy and Marge" />
        <Img src={Image3} alt="image3 of Randy and Marge" />
        <Img src={Image4} alt="image4 of Randy and Marge" />
        <Img src={Image5} alt="image5 of Randy and Marge" />
      </AliceCarousel>
    </div>
  );
};

export default Carousel;
