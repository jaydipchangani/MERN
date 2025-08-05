import React, { useEffect, useState } from "react";
import axios from "axios";

function WeatherForcast() {
  const [city, setCity] = useState("");
  const[finalCity,setFinalCity] = useState("")
  const [weatherData, setWeatherData] = useState("");
    const apiKey="ae12db7c526451955228b97699ad1b30"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${finalCity}&appid=${apiKey}&units=metric`;
 
  useEffect(() => {
    if(!finalCity) return
    axios.get(url)
    .then(res =>setWeatherData(res.data))
    .catch(err => console.log(err))
  }, [finalCity]);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <h2>City: {city}</h2>
        <button onClick={()=>setFinalCity(city)}>Check Weather</button>
{weatherData && (
        <div>
          <h2>City: {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}    </div>
  );
}

export default WeatherForcast;
