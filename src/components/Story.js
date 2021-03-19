import React from "react";
import styled from "styled-components";

//Styled Components//
const MainDiv = styled.div `
height:40vh;
position:relative;
`
const Header = styled.p`
  text-align: center;
  font-size: 2.5rem;
  margin: 20px auto 5px auto;
  color: #f7533e;
`;
const Underline = styled.div`
  border-top: 1px solid #f7533e;
  width: 25%;
  margin: 0 auto;
`;
const Para = styled.p`
  text-align: center;
  font-size: 1em;
  margin: 10px auto;
  color: #f7533e;
  width: 60%;
`;
//Story Component//
const Story = () => {
  return (
    <MainDiv>
      <Header>Our Story</Header>
      <Underline></Underline>
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
        lacinia metus, vel lobortis metus. Mauris erat risus, dictum nec odio
        in, varius commodo ligula. Duis et molestie nulla, at varius lacus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
        mauris finibus pulvinar facilisis. Duis condimentum urna eu diam
        scelerisque, dictum eleifend odio lobortis. Donec vitae tempus dolor.
        Fusce non elit ut sapien interdum varius non et augue. Curabitur mattis
        ultricies odio, ut iaculis ipsum imperdiet eget. Integer in ultricies
        dui, eu sollicitudin lorem. Nulla facilisi.
      </Para>
    </MainDiv>
  );
};

export default Story;
