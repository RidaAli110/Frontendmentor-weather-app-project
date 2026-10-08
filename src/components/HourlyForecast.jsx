import { useEffect, useRef, useState } from 'react';
import dropdownIcon from '../assets/images/icon-dropdown.svg';
import DaysMenu from './DaysMenu';
import HourlyForecastCard from './HourlyForecastCard';
import sunIcon from '../assets/images/icon-sunny.webp';

export default function HourlyForecast() {
  const [isOpen, setIsOpen] = useState(false);

  const daysRef = useRef(null);
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function handleClick(e) {
      if (!daysRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return (
    <section className=' h-175 overflow-y-auto p-5 mt-10 lg:mt-0  bg-(--btn-card-bg) rounded-2xl'>
      <div className='flex justify-between'>
        <h5 className='text-(--text-white) text-2xl font-medium'>
          Hourly forecast
        </h5>
        <div ref={daysRef} className='relative'>
          <button aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className=' flex items-center gap-3 px-4 py-1 text-(--text-white)
          font-medium bg-(--light-grey-card-bg) rounded-md'
          >
            Monday
            <img className='w-4' src={dropdownIcon} alt='' />
          </button>
          {isOpen && <DaysMenu />}
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4 mt-5'>
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'4pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
         <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
         <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        <HourlyForecastCard img={sunIcon} time={'3pm'} temp={'20'} />
        
      </div>
    </section>
  );
}
