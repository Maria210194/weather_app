import React from "react";
import { Button, Menu } from "antd";
import { topCities } from "../assets/data";

import "../style/style.scss";
import "../style/query.scss";

const TopButtons = ({ setQuery }) => (
  <Menu
    theme="light"
    mode="horizontal"
    className="topCities"
    defaultSelectedKeys={["1"]}
    items={topCities.map((city, index) => {
      const key = index + 1;
      return {
        key,
        label: (
          <Button
            onClick={() => setQuery({ q: city.title })}
            className="singleCity"
            type="ghost"
          >
            {city.title}
          </Button>
        ),
      };
    })}
  />
);

export default TopButtons;
