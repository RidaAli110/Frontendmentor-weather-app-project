import { UnitButton, Divider } from './UnitButton';

export default function UnitsMenu({ units, setUnits }) {
  return (
    <div
      id='units-menu'
      className='absolute top-full right-0 mt-2 z-2 flex flex-col items-start
      gap-1 p-1.5 rounded-md bg-(--btn-card-bg) w-44'
    >
      <button
        type='button'
        onClick={() => {
          if (units.temperature === 'Celsius') {
            setUnits({
              ...units,
              temperature: 'Fahrenheit',
              windSpeed: 'mph',
              precipitation: 'in',
            });
          } else {
            setUnits({
              ...units,
              temperature: 'Celsius',
              windSpeed: 'km/h',
              precipitation: 'mm',
            });
          }
        }}
        className='hover:bg-(--hover-btn) p-1.5 w-full rounded-md font-semibold
        text-start text-sm text-(--text-white) border border-(--unit-border)'
      >
        {`Switch To ${units.temperature === 'Celsius' ? 'Imperial' : 'Metric'}`}
      </button>

      {/* Temperature */}
      <Divider>
        <div
          role='group'
          aria-labelledby='temperature-label'
          className='w-full'
        >
          <p
            id='temperature-label'
            className='pl-1.5 text-(--text-grey) text-xs mb-1'
          >
            Temperature
          </p>

          <UnitButton
            onClick={() => setUnits({ ...units, temperature: 'Celsius' })}
            isSelected={units.temperature === 'Celsius'}
          >
            Celsius (°C)
          </UnitButton>

          <UnitButton
            onClick={() => setUnits({ ...units, temperature: 'Fahrenheit' })}
            isSelected={units.temperature === 'Fahrenheit'}
          >
            Fahrenheit (°F)
          </UnitButton>
        </div>
      </Divider>

      {/* Wind Speed */}
      <Divider>
        <div role='group' aria-labelledby='wind-label' className='w-full'>
          <p id='wind-label' className='pl-1.5 text-(--text-grey) text-xs mb-1'>
            Wind Speed
          </p>

          <UnitButton
            onClick={() => setUnits({ ...units, windSpeed: 'km/h' })}
            isSelected={units.windSpeed === 'km/h'}
          >
            km/h
          </UnitButton>

          <UnitButton
            onClick={() => setUnits({ ...units, windSpeed: 'mph' })}
            isSelected={units.windSpeed === 'mph'}
          >
            mph
          </UnitButton>
        </div>
      </Divider>

      {/* Precipitation */}
      <div
        role='group'
        aria-labelledby='precipitation-label'
        className='w-full'
      >
        <p
          id='precipitation-label'
          className='pl-1.5 pt-1 text-(--text-grey) text-xs mb-1'
        >
          Precipitation
        </p>

        <UnitButton
          onClick={() => setUnits({ ...units, precipitation: 'mm' })}
          isSelected={units.precipitation === 'mm'}
        >
          Millimeters (mm)
        </UnitButton>

        <UnitButton
          onClick={() => setUnits({ ...units, precipitation: 'in' })}
          isSelected={units.precipitation === 'in'}
        >
          Inches (in)
        </UnitButton>
      </div>
    </div>
  );
}
