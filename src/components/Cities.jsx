import React from "react";
import { Button, Menu } from "antd";
import { cities } from "../assets/data";

const Cities = ({ setQuery }) => (
  <Menu
    theme="light"
    mode="horizontal"
    className="cities"
    defaultSelectedKeys={["1"]}
    items={cities.map((city, index) => {
      return {
        key: index,
        label: (
          <Button
            onClick={() => setQuery({ q: city })}
            className="singleCity"
            type="ghost"
          >
            {city}
          </Button>
        ),
      };
    })}
  />
);

export default Cities;
