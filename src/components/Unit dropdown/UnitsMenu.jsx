import { UnitButton, Divider } from './UnitButton';

export default function UnitsMenu({ units, setUnits }) {
  return (
    <div
      className='absolute top-full right-0 mt-2 z-2 flex flex-col  items-start 
      gap-1 p-1.5 rounded-md bg-(--btn-card-bg) w-44  '
    >
      <button
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
        className=' bg-(--hover-btn) p-1.5 w-full rounded-md font-semibold
       text-start text-sm text-(--text-white) '
      >
        {` Switch To ${units.temperature === 'Celsius' ? 'Imperial' : 'Metric'}`}
      </button>
      <Divider>
        <span className='pl-1.5 text-(--text-grey) text-xs'>Temperature</span>
        <UnitButton
          onClick={() => {
            setUnits({
              ...units,
              temperature: 'Celsius',
            });
          }}
          isSelected={units.temperature === 'Celsius'}
        >
          Celsius (°C)
        </UnitButton>
        <UnitButton
          onClick={() => {
            setUnits({
              ...units,
              temperature: 'Fahrenheit',
            });
          }}
          isSelected={units.temperature === 'Fahrenheit'}
        >
          Fahrenheit (°F)
        </UnitButton>
      </Divider>
      <Divider>
        <span className='pl-1.5 text-(--text-grey) text-xs'>Wind Speed</span>
        <UnitButton
          onClick={() => {
            setUnits({
              ...units,
              windSpeed: 'km/h',
            });
          }}
          isSelected={units.windSpeed === 'km/h'}
        >
          km/h
        </UnitButton>
        <UnitButton
          onClick={() => {
            setUnits({
              ...units,
              windSpeed: 'mph',
            });
          }}
          isSelected={units.windSpeed === 'mph'}
        >
          mph
        </UnitButton>
      </Divider>
      <span className='pl-1.5 pt-1 text-(--text-grey) text-xs'>
        Precipitation
      </span>
      <UnitButton
        onClick={() => {
          setUnits({
            ...units,
            precipitation: 'mm',
          });
        }}
        isSelected={units.precipitation === 'mm'}
      >
        Millimeters (mm)
      </UnitButton>
      <UnitButton
        onClick={() => {
          setUnits({
            ...units,
            precipitation: 'in',
          });
        }}
        isSelected={units.precipitation === 'in'}
      >
        Inches (in)
      </UnitButton>
    </div>
  );
}
