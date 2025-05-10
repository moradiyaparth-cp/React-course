import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Highlights from "./components/Highlights";
import Temperature from "./components/Temprature";

function App() {
  const [city, setCity] = useState("Bhavnagar");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
 
  /* start 5-day weather forecast ----------------------------------------------------------------------  */
  const [forecastData, setForecastData] = useState(null);

  const forecastapiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=274a4aa2515102a49db248030393d0f8`;

  /* end 5-day weather forecast ----------------------------------------------------------------------  */
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=b1ba696253bf4db1b4d71630252402&q=${city}&aqi=no`;

  const fetchWeatherData = () => {
    setLoading(true);
    axios.get(apiURL)
    .then((response) => {
      setWeatherData(response.data);
      // console.log("aaa",response.data)
      setLoading(false);
    });

      /* start 5-day weather forecast ----------------------------------------------------------------------  */

    axios.get(forecastapiURL)
      .then((response) => {
        setForecastData(response.data);
        // console.log("Forecast Data:", response.data);
      });
    };

    /* end 5-day weather forecast ----------------------------------------------------------------------  */

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <div className="wrapper">
      <div className="header text-black">
        {loading ? (
          <div className="flex justify-center">
            <div className="spinner-border animate-spin border-4 border-t-4 border-blue-600 rounded-full w-8 h-8"></div>
          </div>
        ) : (
          weatherData && (
            <Temperature
              setCity={setCity}
              stats={{
                temp: weatherData.current.temp_c,
                fern: weatherData.current.temp_f,
                condition: weatherData.current.condition.text,
                isDay: weatherData.current.is_day,
                location: weatherData.location.name,
                time: weatherData.location.localtime,
              }}/>
          )
        )}
      </div>

      {weatherData && (
        <div className="w-full flex flex-col items-center p-5">
          <h2 className="text-white text-2xl text-center mb-4">Today's Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            <Highlights
              stats={{
                title: "Wind Speed",
                value: weatherData.current.wind_mph,
                unit: " mph",
                direction: weatherData.current.wind_dir,
              }}/>
            <Highlights
              stats={{
                title: "Humidity",
                value: weatherData.current.humidity,
                unit: " %",
              }}/>
          </div>
        </div>
      )}

{ /*  start 5 day weather forecast  ---------------------------------------------------------------------- */}
      {forecastData && forecastData.list && (
        <div className="w-full flex flex-col items-center mt-8 text-white">
          <h1 className="text-2xl text-center font-semibold">5 Day Weather Forecast of: {forecastData.city.name}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-10 mt-10 w-full max-w-6xl px-4">
            {forecastData.list.filter((_, index) => index % 8 === 0) //badhi 8th mi item new day represent karshe 
            // _ unused parameter che value use nathi thati etle _ aa karyu che
              .map((value, index) => (<div key={index} className="forecast-card flex flex-col items-center p-4 w-full sm:w-auto">
                  <p className="date text-white text-center">
                    {new Date(value.dt_txt).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </p>

                  <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} alt={value.weather[0].description} className="w-16 h-16"/>

                  <p className="description text-white text-center">{value.weather[0].description}</p>
                  <p className="temp text-white text-center text-xl font-bold">{Math.round(value.main.temp)}°C</p>
                  <p className="humidity text-white text-center"><b>Humidity:</b> {value.main.humidity}%</p>
                  <p className="wind text-white text-center"><b>Wind:</b> {value.wind.speed} mph</p>
                </div>
              ))}
          </div>
        </div>
      )}

{ /*  end 5 day weather forecast  ---------------------------------------------------------------------- */}

    </div>
  );
}

export default App;