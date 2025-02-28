import React, { useState } from 'react';
import axios from 'axios';
import { Country, State, City } from 'country-state-city';

function Temperature({ setCity, stats }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // start Country, State, City -----------------------------------------------------------------------------------
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedState, setSelectedState] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null); // selectedCity ma select thayelu city store karshe

  const handleCountryChange = (country) => {
    setSelectedCountry(country)
    setStates(State.getStatesOfCountry(country.isoCode))
    setCities([])
  }

  const handleStateChange = (state) => {
    setSelectedState(state)
    setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode))
  }

  // end Country, State, City -----------------------------------------------------------------------------------

  const handleSearch = async () => {
    setLoading(true);
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=b1ba696253bf4db1b4d71630252402&q=${selectedCity}&aqi=no`;
  
    try {
      const response = await axios.get(apiURL);
      if (response.data.error) {
        setError('No city found');
      } 
      else {
        setCity(selectedCity);
        console.log("City: ", selectedCity);
      }
    } 
    catch (error) {
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
    } 
    else {
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
    else if (stats.condition == "Cloudy") {
      return <img src="https://cdn.weatherapi.com/weather/64x64/day/119.png" alt="Cloudy image" />
    }
    else if (stats.condition == "Overcast") {
      return <img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="Overcast image" />
    }
    else if (stats.condition == "Partly Cloudy" || stats.condition == "Partly cloudy") {
      return <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="Partly cloudy image" />
    }
    else if (stats.condition == "Light rain" || stats.condition == "Moderate rain") {
      return <img src="//cdn.weatherapi.com/weather/64x64/night/296.png" alt="Light rain image" />
    }
    else if (stats.condition == "Mist") {
      return <img src="//cdn.weatherapi.com/weather/64x64/day/143.png" alt="Mist image" />
    }
    else if (stats.condition == "Light snow") {
      return <img src="https://cdn.weatherapi.com/weather/64x64/night/326.png" alt="Light snow" />
    }
    else if (stats.condition == "Thundery outbreaks in nearby") {
      return <img src="https://cdn.weatherapi.com/weather/64x64/day/200.png" alt="Thundery outbreaks in nearby" />
    }
    else{
      return <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="Default image" />
    }
  }

  return (
    <div className="p-5 w-full max-w-lg mx-auto">
    
      {/* start Country, State, City ----------------------------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <select className="p-2 border rounded" onChange={(e) => handleCountryChange(countries.find((c) => c.isoCode === e.target.value))}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          disabled={!selectedCountry}
          className="p-2 border rounded" onChange={(e) => handleStateChange(states.find((s) => s.isoCode === e.target.value))}>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>

        <select
          disabled={!selectedState}
          className="p-2 border rounded" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      {/* end Country, State, City ----------------------------------------------------------------------------------- */}
    
      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        <button className="bg-blue-600 text-white p-2 rounded w-full sm:w-auto" disabled={!selectedCity} onClick={handleSearch}>
          Search
        </button>

        <button className="bg-blue-600 text-white p-2 rounded w-full sm:w-auto" onClick={handleCurrentLocation}>
          Current Location
        </button>
      </div>

      {loading && (
        <div className="flex justify-center mt-4">
          <div className="spinner-border animate-spin border-4 border-t-4 border-blue-600 rounded-full w-8 h-8"></div>
        </div>
      )}
     
      {error && <div className="text-red-500 mt-4 text-center">{error}</div>}

      {!loading && stats && (
        <>
          <div className='flex justify-center mt-8'>
            {stats.condition ? weatherCondition()  : <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="default image" /> }
          </div>

          <div className="flex justify-center mt-8">
            <p className="font-semibold text-[55px] text-white">{stats.temp}°C</p>
          </div>

          <div className="condition text-white text-center mt-3">{stats.condition}</div>

          <div className="condition text-white text-center mt-3">Today {stats.time} | <b>{stats.location}</b></div>
        </>
      )}

      
    </div>
  );
}

export default Temperature;