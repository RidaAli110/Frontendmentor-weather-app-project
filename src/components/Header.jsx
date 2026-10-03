import logo from '../assets/images/logo.svg';
import Units from './Units';

export default function Header() {
  return (
    <header>
      <nav className='flex '>
        <img className='w-28 md:w-45 ' src={logo} alt='' />
        <Units />
      </nav>
      <h2 className='text-(--text-white) font-(family-name:--bricolage-font) font-semibold
      text-3xl md:text-4xl lg:text-5xl text-center mt-10 md:mt-5'>
        How's the sky looking today?
      </h2>
    </header>
  );
}
