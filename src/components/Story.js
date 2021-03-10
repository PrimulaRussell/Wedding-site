import React from 'react';
import styled from 'styled-components';

//Styled Components//

const Header = styled.p `
text-align: center;
font-size: 3rem;
margin: 20px auto 5px auto;
color: #6c0099;
`
const Underline = styled.div `
border-top: 1px solid #6c0099;
width: 25%;
margin: 0 auto;
`
const Para = styled.p `
text-align: center;
font-size: 1.5rem;
margin: 15px 5% 10%;
color: #6c0099;
`
//Story Component//
const Story = () => {
    return (
        <div>
            <Header>Our Story</Header>
            <Underline></Underline>
            <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacinia metus, vel lobortis metus. Mauris erat risus, dictum nec odio in, varius commodo ligula. Duis et molestie nulla, at varius lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit mauris finibus pulvinar facilisis. Duis condimentum urna eu diam scelerisque, dictum eleifend odio lobortis. Donec vitae tempus dolor. Fusce non elit ut sapien interdum varius non et augue. Curabitur mattis ultricies odio, ut iaculis ipsum imperdiet eget. Integer in ultricies dui, eu sollicitudin lorem. Nulla facilisi.

Sed venenatis eget turpis id lacinia. Nullam nec libero sem. Maecenas iaculis vel lacus pharetra vestibulum. Pellentesque at enim commodo, commodo ipsum nec, finibus quam. Aliquam augue velit, sodales ac maximus sit amet, sollicitudin et ligula. Sed tristique diam lectus, at varius leo iaculis quis. Nunc vehicula suscipit consequat. Pellentesque purus justo, ullamcorper at mauris sed, tristique pharetra sapien. Cras turpis ex, malesuada vitae sollicitudin at, vulputate vel purus. Ut quis dignissim libero, ac dignissim diam. In ultricies eget orci eu ultrices. In aliquam, purus sed luctus tincidunt, diam felis fringilla est, ac ultricies urna odio et diam. Praesent ac viverra eros. Morbi dignissim mauris nisi, ut varius quam convallis a. Etiam lacus nibh, malesuada ut convallis sit amet, feugiat vel sapien. Praesent ac fermentum mauris, ac pellentesque eros.

Proin tristique bibendum ante at porttitor. In hac habitasse platea dictumst. Nam nec luctus augue, vel finibus ante. Integer auctor, sapien in efficitur laoreet, quam eros accumsan sapien, a molestie dolor dui ut magna. Sed tincidunt nulla vel tellus pretium malesuada non eu nisl. Nunc interdum feugiat mollis. Ut eu leo et lectus ornare aliquet. Etiam rutrum libero ac vulputate tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sodales lacus velit, sed congue nunc pulvinar fermentum.
            </Para>
        </div>
    )
}

export default Story;
