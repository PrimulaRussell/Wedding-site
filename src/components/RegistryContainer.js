import React from 'react'
import styled from 'styled-components';
import RegistryList from './RegistryList';

//Styled Components//
const MainDiv = styled.div `
background-color: #6c0099;
padding: 5%;
`
const Container = styled.div `
border: 1px solid #365f25;
background-color: #fff;
width: 40%;
margin:auto;
`
const Title = styled.p `
font-size: 20px;
color: #365f25;
text-align: center;
`
//RegistryContainer Component//
const RegistryContainer = () => {
    return (
        <MainDiv>
        <Container>
            <Title>Registry</Title>
            <RegistryList></RegistryList>
        </Container>
        </MainDiv>
    );
};

export default RegistryContainer;