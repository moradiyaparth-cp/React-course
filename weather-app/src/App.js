import { useEffect, useState } from 'react';
import './App.css';
import Highlights from './components/Highlights';
import Temprature from './components/Temprature';

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=b1ba696253bf4db1b4d71630252402&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <div className="bg-[#1F213A] h-screen flex justify-center align-top">
      <div className="mt-40 w-1/5 h-1/3">
        {weatherData && (
          <Temprature
            setCity={setCity}
            stats={{
              temp: weatherData.current.temp_c,
              condition: weatherData.current.condition.text,
              isDay: weatherData.current.is_day,
              location: weatherData.location.name,
              time: weatherData.location.localtime,
            }}
          />
        ) }
      </div>

      <div className="mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6">
        <h2 className="text-slate-200 text-2xl col-span-2">Today's Highlights</h2>
        {
          weatherData && 
          (
            <>
              <Highlights stats={{
                title: "Wind Speed",
                value: weatherData.current.wind_mph,
                unit: " mph",
                direction: weatherData.current.wind_dir
              }} />

              <Highlights stats={{
                title: "Humidity",
                value: weatherData.current.humidity,
                unit: " %"
              }}/>
            </>
          )
        }
        
      </div>
    </div>
  );
}

export default App;