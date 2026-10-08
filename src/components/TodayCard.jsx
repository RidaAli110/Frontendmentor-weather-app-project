import desktopCard from '../assets/images/bg-today-large.svg';
import mobileCard from '../assets/images/bg-today-small.svg';
import sunIcon from '../assets/images/icon-sunny.webp';

export default function TodayCard({ weather, location }) {
  return (
    <section className='relative w-full lg:w-fit'>
      <picture className='block'>
        <source media='(min-width: 40rem)' srcSet={desktopCard} />
        <img className=' w-full lg:w-auto  ' src={mobileCard} alt='' />
      </picture>
      <div
        className=' absolute inset-0 flex flex-col items-center justify-center
      gap-3 md:flex-row md:justify-between md:mx-5 '
      >
        <div className='md:flex md:flex-col'>
          <p className='text-(--text-white) text-3xl font-semibold'>
            {`${location?.name}, ${location?.country}`}
          </p>
          <p className='text-(--text-grey) '>
            {weather?.daily?.time?.[0] &&
              new Date(weather.daily.time[0]).toLocaleDateString('en-GB', {
                weekday: 'long',
                day: 'numeric',
                month: 'short', 
                year: 'numeric',
              })}
          </p>
        </div>
        <div className='flex items-center gap-8 mt-4 '>
          <img
            className='w-30'
            src={sunIcon}
            alt='sunny' /* change this dynamically later */
          />
          <p className='text-(--text-white) text-8xl italic font-medium'>
            {Math.round(`${weather?.current.temperature_2m}`)}°
          </p>
        </div>
      </div>
    </section>
  );
}
