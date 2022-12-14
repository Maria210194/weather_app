import React, { useState } from "react";
import { Input } from "antd";
import "../Inputs/Inputs.scss";

const Inputs = ({ setQuery }) => {
  const [city, setCity] = useState("");
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (city !== "") setQuery({ q: city });
      setCity(" ");
    }
  };
  return (
    <div className="inputBox">
      <div className="inputCity">
        <Input
          placeholder="Search..."
          onKeyPress={(event) => handleSearch(event)}
          onChange={(event) => setCity(event.currentTarget.value)}
          value={city}
        />
      </div>
    </div>
  );
};

export default Inputs;
