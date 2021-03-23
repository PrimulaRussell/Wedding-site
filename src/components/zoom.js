import React from 'react';
import '../styles/zoom.css';

const Zoom = () => {
  return (
    <div className="zoom-wrapper">
      <p className="zoom-p">
        Though we would love for everyone to be able to join us on our special
        day, we know not everyone can be there in person. Nor, do we have the
        space! Please, instead join the zoom call, so you can enjoy the event
        from home.
      </p>
      <a href="/zoom" className="zoom-link">
        Please click here to join our zoom
      </a>
    </div>
  );
};

export default Zoom;
