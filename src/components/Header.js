import React from "react";
import styled from "styled-components";

//Styled Components//
const MainDiv = styled.div `
  color: #6c0099;
`;
const Title = styled.p `
  text-align: center;
  font-size: 3rem;
  margin: 15px;
`;
const Underline = styled.div `
border-top: 1px solid #6c0099;
width: 25%;
margin: 0 auto;
`
const Info = styled.p `
  text-align: center;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bold;
  margin: 10px;
`;

//Header Component//
const Header = () => {
  return (
    <MainDiv>
      <Title>Marge & Randy</Title>
      <Underline></Underline>
      <Info>August 22nd, 2022</Info>
      <Info>
        8585 El Dorado Rd.
        <br />
        Atascadero, CA 93422
      </Info>
    </MainDiv>
  );
};

export default Header;
