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
    if (cityName == "") {
      alert("Plese Enter City Name")
      setLoading(false)
      setError('')
      return;
    }
    try {
      const response = await axios.get(apiURL);
      // console.log("aaa",response)
      if (response.data.error) {
        setError('No city found');
      } 
      else {
        setError('');
        setCity(cityName);
      }
    } 
    catch (error) {
      setError('City is not found');
      setLoading(false)
    } 
  };


  return (
    <>
      <div className="flex justify-end">
        <input type="text" className="bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 p-2 
        focus:outline-none focus:border-slate-400" placeholder="Enter Your City Name" value={cityName} onChange={handleCityChange}/>

        <button className="bg-blue-600 text-white p-2 ml-2 rounded" onClick={handleSearch}>Search</button>


      </div>

      {loading && (
        <div className="flex justify-center mt-4">
          <div className="spinner-border animate-spin border-4 border-t-4 border-blue-600 rounded-full w-8 h-8"></div>
        </div>
      )}

      {error && (
        <div className="flex justify-center mt-4 text-red-500">
          <p>{error}</p>
        </div>
      )}

      {!loading && stats && (
        <>
          <div className="flex justify-center mt-8">
            {stats.isDay !== 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 text-yellow-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-slate-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </div>

          <div className="flex justify-center items-center text-slate-200 mt-8">
            <p className="font-semibold text-[55px]">{stats.temp}</p>
            <span className="text-[33px]">&#176;C</span>
          </div>

          <div className="flex justify-center items-center text-slate-300 mt-8 text-[25px]">
            {stats.condition}
          </div>

          <div className="flex justify-center text-slate-400 mt-5 text-[15px]">
            Today {stats.time} | &nbsp; <b> { stats.location } </b>
          </div>
        </>
      )}
    </>
  );
}

export default Temperature;
