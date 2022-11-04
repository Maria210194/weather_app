import { DateTime } from "luxon";

const API_KEY = "90b7e8963bf9009eabb8a8a28ece45ea";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log("Fetch problem" + err.message));
};

const deconstructCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: description, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    description,
    icon,
    speed,
    timezone,
  };
};

const formatForecastWeather = (data) => {
  return data.list

    .map((d) => {
      return {
        title: formatDateToLocalTime(d.dt, d.timezone, "ccc"),
        weather: d.weather[0].description,
        temp: d.main.temp,
        icon: d.weather[0].icon,
      };
    })
    .filter(
      (value, i, filt) =>
        i === filt.findIndex((day) => day.title === value.title)
    )
    .slice(1, 6);
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(deconstructCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const forecast = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, forecast };
};

const formatDateToLocalTime = (secs, format = "ccc") =>
  DateTime.fromSeconds(secs).toFormat(format);

const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatDateToLocalTime, iconUrl };