import React from "react";
import "../Location/location.scss";

function Location({ weather: { name, country } }) {
  return (
    <>
      <div className="location">
        <p className="city">{`${name}, ${country}`}</p>
      </div>
    </>
  );
}

export default Location;
