import React from "react";
import Story from "./Story";

const Home = () => {
  return (
    <div className="inline-wrapper">
      <Story></Story>
      <p className="Info">August 13th, 2022</p>
      <p className="Info">
        8585 El Dorado Rd.
        <br />
        Atascadero, CA 93422
      </p>
    </div>
  );
};

export default Home;
