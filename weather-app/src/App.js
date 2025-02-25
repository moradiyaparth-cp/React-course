import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Highlights from './components/Highlights';
import Temperature from './components/Temprature';

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=b1ba696253bf4db1b4d71630252402&q=${city}&aqi=no`;

  useEffect(() => {
    setLoading(true);
    axios.get(apiURL) 
      .then((response) => {
        // console.log(response.data);
        setWeatherData(response.data); 
        setLoading(false); 
      })
     
  }, [city]);

  return (
    <div className="bg-[#1F213A] h-screen flex justify-center align-top">
      <div className="mt-40 w-1/5 h-1/3">
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
                condition: weatherData.current.condition.text,
                isDay: weatherData.current.is_day,
                location: weatherData.location.name,
                time: weatherData.location.localtime,
              }}
            />
          )
        )}
      </div>

      <div className="mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6">
        <h2 className="text-slate-200 text-2xl col-span-2">Today's Highlights</h2>
        {weatherData && (
          <>
            <Highlights
              stats={{
                title: "Wind Speed",
                value: weatherData.current.wind_mph,
                unit: " mph",
                direction: weatherData.current.wind_dir,
              }}
            />

            <Highlights
              stats={{
                title: "Humidity",
                value: weatherData.current.humidity,
                unit: " %",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;