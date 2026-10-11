import { useEffect, useRef, useState } from 'react';
import dropdownIcon from '../../assets/images/icon-dropdown.svg';
import DaysMenu from './DaysMenu';
import HourlyForecastCard from './HourlyForecastCard';
import getWeatherCodeIcon from '../../utils/getWeatherCodeIcon';

export default function HourlyForecast({ weather }) {
  const [isOpen, setIsOpen] = useState(false);
  // This sets the day to the current day
  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleString('en-GB', {
      weekday: 'long',
    }),
  );

  // This combines the arrays for the time, temp and weatherCode into an array of objects that are for the same hour
  const hourData = weather?.hourly?.time.map((time, index) => {
    const hourlyWeather = {
      time,
      temperature: weather?.hourly?.temperature_2m[index],
      weatherCode: weather?.hourly?.weather_code[index],
    };

    return hourlyWeather;
  });

  // This filters the objects to keep the ones that belong to the selected day.
  // This only contains the hour data for the selected day
  const selectedDayHourlyData = hourData?.filter((day) => {
    // This extracts the date and removes the time since we only need to check the date to see if it matches the selected day
    const hourDate = day.time.slice(0, 10);
    // Converts it from 2026-10-11 to 'Sunday'
    const dateFormatted = new Date(`${hourDate}T12:00:00`).toLocaleDateString(
      'en-GB',
      {
        weekday: 'long',
      },
    );

    /*This only keeps the hourly data that matches the selectedDay. So if a different day is selected
      on the menu, react wil re-render since the selectedDay state changed.
     and this filter runs again using the updated selectedDay. */
    return selectedDay === dateFormatted;
  });

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
      <div className='flex gap-1 flex-col sm:flex-row  justify-between'>
        <h5 className='text-(--text-white) text-2xl font-medium '>
          Hourly forecast
        </h5>
        <div ref={daysRef} className='relative'>
          <button
            aria-expanded={isOpen}
            aria-label={`Select a day, currently it is ${selectedDay}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className=' flex items-center gap-3 px-4 py-1 text-(--text-white)
          font-medium bg-(--light-grey-card-bg) rounded-md'
          >
            {selectedDay}
            <img className='w-3' src={dropdownIcon} alt='' />
          </button>
          {isOpen && (
            <DaysMenu
              weather={weather}
              setIsOpen={setIsOpen}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          )}
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4 mt-5'>
        {/* This creates a hourlyForecastCard for every matching hour */}
        {selectedDayHourlyData?.map((hour) => {
          // Each hour object contains its own weather_code
          const weatherIcon = getWeatherCodeIcon(hour.weatherCode);
          return (
            <HourlyForecastCard
              key={hour.time}
              img={weatherIcon.image}
              alt={weatherIcon.description}
              time={new Date(`${hour.time}`).toLocaleTimeString('en-GB', {
                hour: 'numeric',
                hour12: true,
              })}
              temp={Math.round(hour?.temperature)}
            />
          );
        })}
      </div>
    </section>
  );
}
