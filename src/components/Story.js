import React from "react";
import '../styles/Story.css'

//Story Component//
const Story = () => {
  return (
    <div className='mainDiv'>
      <p className='header'>Our Story</p>
      <div className='underline'></div>
      <p className='para'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
        lacinia metus, vel lobortis metus. Mauris erat risus, dictum nec odio
        in, varius commodo ligula. Duis et molestie nulla, at varius lacus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
        mauris finibus pulvinar facilisis. Duis condimentum urna eu diam
        scelerisque, dictum eleifend odio lobortis. Donec vitae tempus dolor.
        Fusce non elit ut sapien interdum varius non et augue. Curabitur mattis
        ultricies odio, ut iaculis ipsum imperdiet eget. Integer in ultricies
        dui, eu sollicitudin lorem. Nulla facilisi.
      </p>
    </div>
  );
};

export default Story;
