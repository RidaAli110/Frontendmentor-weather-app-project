import { useEffect, useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodayCard from './components/TodayCard';
import AdditionalWeatherInfo from './components/AdditionalWeatherInfo';
import DailyForecast from './components/DailyForecast';
import HourlyForecast from './components/HourlyForecast';

function App() {
  const [location, setLocation] = useState({
    name: 'London',
    country: 'England',
    latitude: 51.5074,
    longitude: -0.1278,
  });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (location === null) return;

    const latitude = location.latitude;
    const longitude = location.longitude;
    async function fetchWeather(latitude, longitude) {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation&timezone=auto`,
        );
        if (!res.ok) {
          throw new Error('Failed to fetch weather');
        }
        const weatherData = await res.json();
        setWeather(weatherData);
        console.log(weatherData);
      } catch (error) {
        console.log(error);
      }
      console.log(location)
    }

    fetchWeather(latitude, longitude);
  }, [location]);

  return (
    <div className='mx-5 my-5  md:mx-8 lg:mx-13'>
      <Header />
      <main>
        <h1 className='sr-only'>Today's Weather</h1>
        <Input setLocation={setLocation} />
        <div className='grid lg:grid-cols-[2fr_1fr] lg:gap-8'>
          <div>
            <TodayCard location={location} weather={weather} />
            <AdditionalWeatherInfo />
            <DailyForecast />
          </div>
          <div>
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

// add some sr-only headers
