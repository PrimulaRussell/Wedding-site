import React from 'react';
import './styles/App.css';
import styled from 'styled-components';

//Styled Components//

//Title//
const MainDiv = styled.div `
  color: #6c0099;
  background-color: #fff;
`;
const Title = styled.a `
  color:#6c0099;
  text-align: center;
  font-size: 3rem;
  margin: 15px;
  text-decoration: none;
  display:block;
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

//Navbar//
const MainNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: #365f25;
`;
const UlLinks = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 5px;
  padding-left: 10px;
  margin-top: 0;
`;
const UlRegister = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 5px;
  padding-right: 10px;
  margin-top: 0;
`;
const A = styled.button `
  text-decoration: none;
  padding: 0;
font-size: 20px;
  &:hover {
    color: #365f25;
  }
`;
const ASignUp = styled.a`
  text-decoration: none;
  padding: 0;
  font-size: 20px;
  color: #fff;
`;
const LiLinks = styled.li`
  padding: 0 10px;
`;
const LiRegister = styled.li`
  padding: 10px;
  margin: -20px 10px 0;
  background-color: #365f25;
  border-radius: 5px;
  &:hover {
    border: 1px solid #6c0099;
    padding: 9px;
  }
  &:hover ${ASignUp} {
    color: #6c0099;
  }
`;

const LiLogOn = styled.li`
  padding: 10px;
  margin: -20px 10px 0;
  border: 1px solid #6c0099;
  border-radius: 5px;
  &:hover {
    border: 1px solid #365f25;
  }
  &:hover ${A} {
    color: #365f25;
  }
`;
const Hr = styled.hr`
  background-color: #6c0099;
  height: 1px;
  border: none;
  margin: 0;
`;
//Main App//
const App = () => {
  return (
    <div className="Static-Header">
      <MainDiv>
      <Title href="/">Marge & Randy</Title>
      <Underline></Underline>
      <Info>August 13nd, 2022</Info>
      <Info>
        8585 El Dorado Rd.
        <br />
        Atascadero, CA 93422
      </Info>
    </MainDiv>
    <div>
      <MainNavDiv>
        <UlLinks>
          <LiLinks>
           <A href="/Registry">Registry</A>
          </LiLinks>
          <LiLinks>
            <A href="https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344">
              Photos
            </A>
          </LiLinks>
          <LiLinks>
            <A href="https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344">
              Updates
            </A>
          </LiLinks>
          <LiLinks>
            <A href="https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344">
              Facebook Page
            </A>
          </LiLinks>
          <LiLinks>
            <A href="https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344">
              Zoom
            </A>
          </LiLinks>
        </UlLinks>

        <UlRegister>
          <LiRegister>
            {" "}
            <ASignUp href="https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344">
              Sign Up
            </ASignUp>
          </LiRegister>
          <LiLogOn>
            {" "}
            <A href="https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344">
              Log In
            </A>
          </LiLogOn>
        </UlRegister>
      </MainNavDiv>
      <Hr></Hr>
    </div>
    </div>
  );
};

export default App;
