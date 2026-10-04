import DailyForecastCard from './DailyForecastCard';
import sunIcon from '../assets/images/icon-sunny.webp';

export default function DailyForecast() {
  return (
    <>
      <h3 className='text-(--text-white) text-2xl font-medium mt-8 lg:mt-13'>
        Daily forecast
      </h3>
      <section className='grid grid-cols-3 lg:grid-cols-7 gap-5 lg:gap-3 mt-5'>
        <DailyForecastCard day={'Mon'} img={sunIcon} high={'20'} low={'14'} />
        <DailyForecastCard day={'tue'} img={sunIcon} high={'20'} low={'14'} />
        <DailyForecastCard day={'Mon'} img={sunIcon} high={'20'} low={'14'} />
        <DailyForecastCard day={'Mon'} img={sunIcon} high={'20'} low={'14'} />
        <DailyForecastCard day={'Mon'} img={sunIcon} high={'20'} low={'14'} />
        <DailyForecastCard day={'Mon'} img={sunIcon} high={'20'} low={'14'} />
        <DailyForecastCard day={'Mon'} img={sunIcon} high={'20'} low={'14'} />
      </section>
    </>
  );
}
