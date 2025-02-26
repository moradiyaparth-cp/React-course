import React, { useState } from 'react';
import axios from 'axios';

function Temperature({ setCity, stats }) {
  const [error, setError] = useState('');
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCityChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=b1ba696253bf4db1b4d71630252402&q=${cityName}&aqi=no`;

    if (cityName === "") {
      alert("Please Enter Any City Name");
      setLoading(false);
      setError('');
      return;
    }
    try {
      const response = await axios.get(apiURL);
      if (response.data.error) {
        setError('No city found');
      } else {
        setError('');
        setCity(cityName);
      }
    } catch (error) {
      setError('City not found');
      setLoading(false);
    }
  };

  const handleCurrentLocation = async () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiURL = `https://api.weatherapi.com/v1/current.json?key=b1ba696253bf4db1b4d71630252402&q=${latitude},${longitude}&aqi=no`;

        const response = await axios.get(apiURL);
        if (response.data.error) {
          setError('Unable to fetch weather on current location');
        } else {
          setError('');
          setCity(response.data.location.name);
        }
      });
    } else {
      setError('Geolocation is not supported on this browser.');
      setLoading(false);
    }
    setLoading(false);
  };


const weatherCondition = () => {
    if (stats.condition == "Clear") {
      return <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" alt="Clear image" />
    } 
    else if (stats.condition == "Sunny") {
      return <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="Sunny image" />
    }
    else if (stats.condition == "Overcast") {
      return <img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="Overcast image" />
    }
    else if (stats.condition == "Partly Cloudy" || stats.condition == "Partly cloudy") {
      return <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="Partly cloudy image" />
    }
    else if (stats.condition == "Light rain") {
      return <img src="//cdn.weatherapi.com/weather/64x64/night/296.png" alt="Light rain image" />
    }
    else if (stats.condition == "Mist") {
      return <img src="//cdn.weatherapi.com/weather/64x64/day/143.png" alt="Mist image" />
    }
    else if (stats.condition == "Moderate rain") {
      return <img src="https://cdn.weatherapi.com/weather/64x64/night/302.png" alt="Moderate rain image" />
    }
    else{
      return <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="Default image" />
    }
  }

 
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="text"
          className="bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-full sm:w-60 p-2 focus:outline-none focus:border-slate-400"
          placeholder="Enter Your City Name"
          value={cityName}
          onChange={handleCityChange}
        />

        <button className="bg-blue-600 text-white p-2 rounded w-full sm:w-auto" onClick={handleSearch}>
          Search
        </button>

        <button className="bg-blue-600 text-white p-2 rounded w-full sm:w-auto" onClick={handleCurrentLocation}>
          Current&nbsp;Location
        </button>
      </div>

      {loading && (
        <div className="flex justify-center mt-4">
          <div className="spinner-border animate-spin border-4 border-t-4 border-blue-600 rounded-full w-8 h-8"></div>
        </div>
      )}

      {error && <div className="flex justify-center mt-4 text-red-500">{error}</div>}

      {!loading && stats && (
        <>

            <div className='flex justify-center mt-8'>
            {stats.condition ? weatherCondition()  : <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="default image" /> }
            </div>

          <div className="flex justify-center mt-8">
            <p className="font-semibold text-[55px] text-white">{stats.temp}°C</p>
          </div>

          <div className="flex justify-center items-center text-slate-300 mt-8 text-[25px]">
            {stats.condition}
          </div>

          <div className="flex justify-center text-slate-400 mt-5 text-[15px]">
            Today {stats.time} | &nbsp; <b>{stats.location}</b>
          </div>
        </>
      )}
    </>
  );
}

export default Temperature;