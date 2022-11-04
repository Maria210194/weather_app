import React from "react";
import { Row, Col } from "antd";
import { iconUrl } from "../services/weatherServices";

function Forecast({ title, items }) {
  return (
    <>
      <div className="forecastTitle">
        <p>{title}</p>
      </div>
      <hr style={{ margin: "0.2rem 0" }} />
      <Row className="rowForecast">
        {items.map((item, index) => (
          <Col className="singleForecast" key={index} span={4}>
            <div className="forecastTitle">
              <p>{item.title}</p>
            </div>
            <div className="icon-container">
              <img className="imgWeather" src={iconUrl(item.icon)} alt="icon" />
            </div>
            <p className="degreeForecast">{`${item.temp.toFixed()}°`}</p>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Forecast;
