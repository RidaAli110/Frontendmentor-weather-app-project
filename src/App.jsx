import { useEffect, useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodayCard from './components/TodayCard';
import AdditionalWeatherInfo from './components/AdditionalWeather/AdditionalWeatherInfo';
import DailyForecast from './components/Daily Forecast/DailyForecast';
import HourlyForecast from './components/Hourly Forecast and Day Select Button/HourlyForecast';
import WeatherSkeletonLoading from './components/WeatherSkeletonLoading';
import ErrorState from './components/ErrorState';

function App() {
  const [location, setLocation] = useState({
    name: 'London',
    country: 'England',
    latitude: 51.5074,
    longitude: -0.1278,
  });
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState({
    temperature: 'Celsius',
    windSpeed: 'km/h',
    precipitation: 'mm',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // This are the units converted to match the units requires for the api URL
  let apiTemperatureUnit = units.temperature.toLowerCase();
  let apiWindSpeedUnit = units.windSpeed === 'km/h' ? 'kmh' : 'mph';
  let apiPrecipitationUnit = units.precipitation === 'in' ? 'inch' : 'mm';

  useEffect(() => {
    if (location === null) return;

    const latitude = location.latitude;
    const longitude = location.longitude;

    async function fetchWeather(latitude, longitude) {
      try {
        setIsLoading(true);
        
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&timezone=auto&temperature_unit=${apiTemperatureUnit}&wind_speed_unit=${apiWindSpeedUnit}&precipitation_unit=${apiPrecipitationUnit}`,
        );
        if (!res.ok) {
          throw new Error('Failed to fetch weather');
        }
        const weatherData = await res.json();
        setWeather(weatherData);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather(latitude, longitude);
  }, [
    location,
    apiTemperatureUnit,
    apiWindSpeedUnit,
    apiPrecipitationUnit,
    retryCount,
  ]);

  return (
    <div className='mx-5 my-5  md:mx-8 lg:mx-15 '>
      <Header units={units} setUnits={setUnits} />
      {error ? (
        <ErrorState
          onRetry={() => {
            setRetryCount((count) => count + 1);
          }}
        />
      ) : (
        <main>
          <h1 className='sr-only'>Today's Weather</h1>
          <Input setLocation={setLocation} />
          <div className='grid lg:grid-cols-[2fr_1fr] lg:gap-8'>
            {isLoading ? (
              <WeatherSkeletonLoading />
            ) : (
              <>
                <div>
                  <TodayCard location={location} weather={weather} />
                  <AdditionalWeatherInfo weather={weather} />
                  <DailyForecast weather={weather} />
                </div>
                <div>
                  <HourlyForecast weather={weather} />
                </div>
              </>
            )}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;

// add some sr-only headers
