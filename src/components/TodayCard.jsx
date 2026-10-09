import desktopCard from '../assets/images/bg-today-large.svg';
import mobileCard from '../assets/images/bg-today-small.svg';
import getWeatherCodeIcon from '../utils/getWeatherCodeIcon';

export default function TodayCard({ weather, location }) {
  const weatherIcon = getWeatherCodeIcon(weather?.current.weather_code);
  return (
    <section className='relative w-full lg:w-fit'>
      <picture className='block'>
        <source media='(min-width: 40rem)' srcSet={desktopCard} />
        <img className=' w-full lg:w-auto  ' src={mobileCard} alt='' />
      </picture>
      <div
        className=' absolute inset-0 flex flex-col items-center justify-center
      gap-3 sm:flex-row sm:justify-between sm:mx-10 '
      >
        <div className='flex flex-col gap-3 '>
          <p className='text-(--text-white) text-3xl font-semibold'>
            {`${location?.name}, ${location?.country}`}
          </p>
          <p className='text-(--text-grey) '>
            {weather?.daily?.time?.[0] &&
              new Date(`${weather.daily.time[0]}T12:00:00`).toLocaleDateString(
                'en-GB',
                {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                },
              )}
          </p>
        </div>
        <div className='flex items-center gap-8 mt-4 '>
          <img
            className='w-30'
            src={weatherIcon.image}
            alt={weatherIcon.description}
          />
          <p className='text-(--text-white) text-8xl italic font-medium'>
            {Math.round(weather?.current.temperature_2m)}
          </p>
        </div>
      </div>
    </section>
  );
}
