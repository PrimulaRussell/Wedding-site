import React from "react";
import styled from "styled-components";
import '../styles/Carousel.css'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image1 from "../img/image_1.jpg";
import Image2 from "../img/image_2.jpg";
import Image3 from "../img/image_3.jpg";
import Image4 from "../img/image_4.jpg";
import Image5 from "../img/image_5.jpg";

//Styled Components//

const MainDiv = styled.div `
background-color: #365F25;
padding-bottom: 20px;
`
const Img = styled.img`
  width: auto;
  height: 500px;
  object-fit: fit;
  position: relative;
  display: block;
  margin: 2% auto auto;
  border: 1px solid #6c0099;
  border-radius: 5px;
`;
const Carousel = () => {
  return (
    <MainDiv>
      <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
        <Img src={Image1} alt="image1 of Randy and Marge" />
        <Img src={Image2} alt="image2 of Randy and Marge" />
        <Img src={Image3} alt="image3 of Randy and Marge" />
        <Img src={Image4} alt="image4 of Randy and Marge" />
        <Img src={Image5} alt="image5 of Randy and Marge" />
      </AliceCarousel>
    </MainDiv>
  );
};

export default Carousel;
