import React from "react";
import "../TemperatureDetails/TemperatureDetails.scss";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind, FiSunset } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";

import { formatDateToLocalTime, iconUrl } from "../../services/weatherServices";

function TemperatureDetails({
  weather: {
    description,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    humidity,
    feels_like,
    speed,
  },
}) {
  return (
    <>
      <div className="detailsBox">
        <p>{description}</p>
      </div>
      <div className="bigDetails">
        <img src={iconUrl(icon)} alt="meteo" />
        <p className="gradesToday">{`${temp.toFixed()}°`}</p>
        <div className="todayBox">
          <div className="todayInfo">
            <FaTemperatureHigh />
            Real feel:
            <span className="realFeel">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="todayInfo">
            <WiHumidity />
            Humidity:
            <span className="realFeel"> {humidity}%</span>
          </div>

          <div className="todayInfo">
            <FiWind />
            Wind:
            <span className="realFeel"> {speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>
      <div className="sunRise">
        <BsFillSunFill />
        <p style={{ margin: "0", paddingLeft: "1%" }} className="">
          Sunrise: <span>{formatDateToLocalTime(sunrise, "hh:mm a")}</span>
        </p>
        <p className="separator">|</p>

        <FiSunset />
        <p>
          Sunset: <span>{formatDateToLocalTime(sunset, "hh:mm a")}</span>
        </p>
        <p className="separator">|</p>

        <ArrowUpOutlined />
        <p>
          High: <span>{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="separator">|</p>

        <ArrowDownOutlined />
        <p>
          Low: <span>{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </>
  );
}

export default TemperatureDetails;
