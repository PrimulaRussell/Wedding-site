import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

//Styled Components//
const StyledUl = styled.ul `
display:grid;
grid-template-columns: repeat(3, 1fr);
justify-content: space-evenly;
padding:0;
`
const StyledLi = styled.li `
text-decoration: none;
list-style-type:none;
text-align:center;
color: #365f25;
font-size: 1.2rem;
padding-top: 5px;

`

const StyledForm = styled.form `
text-align: center;
`

const StyledInput = styled.input `
border: 1px solid #365f25;
margin: 10px 2px;
border-radius: 3px;
background-color: transparent;
color: #365f25;
font-family: 'Dancing Script';
font-size: 1rem;
outline:none;
`
//RegistryList Component//
const RegistryList = () => {
    const [list] = useState([])
    const [text, setText] = useState("")

    const addListItem = event => {
        event.preventDefault();
        list.push(text);
        setText("");
    }

    const listItems = list.map((item, index) =>
  <StyledLi key={index}>{item}</StyledLi>
);

    return (
        <div>
            <StyledUl>
         {listItems}
            </StyledUl>

        <StyledForm onSubmit={addListItem}>
        <StyledInput 
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <StyledInput type="submit" value="Submit"/>
    </StyledForm>

        </div>
    )
}

export default RegistryList;