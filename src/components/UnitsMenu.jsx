import { UnitButton, Divider } from './UnitButton';

export default function UnitsMenu() {
  return (
    <div
      className='absolute top-full right-0 mt-2 z-1 flex flex-col  items-start 
      gap-1 p-1.5 rounded-md bg-(--btn-card-bg) w-44  '
    >
      <button
        className=' bg-(--hover-btn) p-1.5 w-full rounded-md font-semibold
       text-start text-sm text-(--text-white) '
      >
        Switch To Imperial
      </button>
      <Divider>
        <span className='pl-1.5 text-(--text-grey) text-xs'>Temperature</span>
        <UnitButton>Celsius (°C)</UnitButton>
        <UnitButton>Fahrenheit (°F)</UnitButton>
      </Divider>
      <Divider>
        <span className='pl-1.5 text-(--text-grey) text-xs'>Wind Speed</span>
        <UnitButton>km/h</UnitButton>
        <UnitButton>mph</UnitButton>
      </Divider>
      <span className='pl-1.5 pt-1 text-(--text-grey) text-xs'>
        Precipitation
      </span>
      <UnitButton>Millimeters (mm)</UnitButton>
      <UnitButton>Inches (in)</UnitButton>
    </div>
  );
}
