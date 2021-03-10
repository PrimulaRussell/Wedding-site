import React from "react";
import styled from "styled-components";

//Styled Components//
const MainNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: #2d9900;
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
const A = styled.a`
  text-decoration: none;
  padding: 0;
  &:hover {
    color: #2d9900;
  }
`;
const LiLinks = styled.li`
  padding: 0 10px;
`;
const LiRegister = styled.li`
  padding: 10px;
  margin: -20px 10px 0;
  border: 1px solid #2d9900;
  border-radius: 5px;
  &:hover ${A} {
    color: #2d9900;
  }
`;
const Hr = styled.hr`
  background-color: #6c0099;
  height: 1px;
  border: none;
  margin: 0;
`;

//Navbar Component//
const Navbar = () => {
  return (
    <div>
      <MainNavDiv>
        <UlLinks>
          <LiLinks>
            <A href="https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344">
              Registry
            </A>
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
            <A href="https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344">
              Sign Up
            </A>
          </LiRegister>
          <LiRegister>
            {" "}
            <A href="https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344">
              Log In
            </A>
          </LiRegister>
        </UlRegister>
      </MainNavDiv>
      <Hr></Hr>
    </div>
  );
};
export default Navbar;
