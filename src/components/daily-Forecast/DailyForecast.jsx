import DailyForecastCard from './DailyForecastCard';
import getWeatherCodeIcon from '../../utils/getWeatherCodeIcon';
export default function DailyForecast({ weather }) {
  return (
    <>
      <section
        aria-labelledby='daily-forecast-heading'
        className='grid grid-cols-3 lg:grid-cols-7 gap-5 lg:gap-3 mt-5'
      >
        <h2
          id='daily-forecast-heading'
          className='col-span-full text-(--text-white) text-2xl font-medium mt-7 lg:mt-10 lg:mb-3'
        >
          Daily forecast
        </h2>
        {weather?.daily?.time?.map((day, index) => {
          const weatherIcon = getWeatherCodeIcon(
            weather.daily.weather_code[index],
          );
          return (
            <DailyForecastCard
              key={day}
              day={new Date(`${day}T12:00:00`).toLocaleDateString('en-GB', {
                weekday: 'short',
              })}
              img={weatherIcon.image}
              alt={weatherIcon.description}
              high={`${Math.round(weather?.daily.temperature_2m_max[index])}°`}
              low={`${Math.round(weather?.daily.temperature_2m_min[index])}°`}
            />
          );
        })}
      </section>
    </>
  );
}
{
  /* <DailyForecastCard day={'Mon'} img={sunIcon} high={'20'} low={'14'} /> */
}
