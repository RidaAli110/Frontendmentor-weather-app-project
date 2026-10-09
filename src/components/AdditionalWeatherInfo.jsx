import AdditionalWeatherCard from './AdditionalWeatherCard';

export default function AdditionalWeatherInfo({ weather }) {
  return (
    <section className='  mt-4 lg:mt-8 '>
      <dl
        className='grid grid-cols-2 lg:grid-cols-4
      gap-4 lg:gap-3'
      >
        <AdditionalWeatherCard
          text={'Feels Like'}
          number={Math.round(weather?.current.apparent_temperature)}
        />
        <AdditionalWeatherCard
          text='Humidity'
          number={`${weather?.current.relative_humidity_2m}%`}
        />
        <AdditionalWeatherCard
          text='Wind'
          number={Math.round(weather?.current.wind_speed_10m)}
        />
        <AdditionalWeatherCard
          text='Precipitation'
          number={Math.round(weather?.current.precipitation)}
        />
      </dl>
    </section>
  );
}
