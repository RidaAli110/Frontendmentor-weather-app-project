import logo from '../assets/images/logo.svg';
import Units from './Units-dropdown/Units';

export default function Header({ units, setUnits}) {
  return (
    <header>
      <nav className='flex '>
        <img className='w-32 md:w-45 ' src={logo} alt='' />
        <Units units={units} setUnits={setUnits} />
      </nav>
      <h1 className='text-(--text-white) font-(family-name:--bricolage-font) font-semibold
      text-3xl md:text-4xl lg:text-5xl text-center mt-10'>
        How's the sky looking today?
      </h1>
    </header>
  );
}
