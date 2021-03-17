import React from 'react'
import styled from 'styled-components';
import RegistryList from './RegistryList';

//Styled Components//
const MainDiv = styled.div `
padding: 5%;
`
const Container = styled.div `
border: 1px solid #365f25;
background-color: #fff;
width: 60%;
height: 70%;
margin:auto;
`
const Title = styled.p `
font-size: 2rem;
color: #365f25;
text-align: center;
`
//RegistryContainer Component//
const Registry = () => {
    return (
            <MainDiv>
        <Container>
            <Title>Registry</Title>
            <RegistryList></RegistryList>
        </Container>
        </MainDiv>
    );
};

export default Registry;