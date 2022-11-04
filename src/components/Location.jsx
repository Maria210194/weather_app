import React from "react";

import "../style/style.scss";
import "../style/query.scss";

function Location({ weather: { dt, timezone, name, country } }) {
  return (
    <>
      <div className="location">
        <p className="city">{`${name}, ${country}`}</p>
      </div>
    </>
  );
}

export default Location;
