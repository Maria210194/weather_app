import { useState, useEffect } from "react";

import "antd/dist/antd.css";
import { Layout } from "antd";
const { Content } = Layout;

import Cities from "./components/Cities";
import Inputs from "./components/Inputs";
import Location from "./components/Location";
import TemperatureDetails from "./components/TemperatureDetails";
import Forecast from "./components/Forecast";

import getFormattedWeatherData from "./services/weatherServices";

function App() {
  const [query, setQuery] = useState({ q: "barcellona" });
  const units = "metric";
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <Layout className="App">
      <Content>
        <div className="container">
          <Cities setQuery={setQuery} />
          <Inputs setQuery={setQuery} />

          {weather && (
            <div>
              <Location weather={weather} />
              <TemperatureDetails weather={weather} />
              <Forecast items={weather.forecast} title="Daily forcast " />
            </div>
          )}
        </div>
      </Content>
    </Layout>
  );
}

export default App;
