import desktopCard from '../assets/images/bg-today-large.svg';
import mobileCard from '../assets/images/bg-today-small.svg';
import sunIcon from '../assets/images/icon-sunny.webp';
export default function TodayCard() {
  return (
    <section className='relative w-full lg:w-fit  mt-5 lg:mt-10 '>
      <picture className='block'>
        <source media='(min-width: 40rem)' srcSet={desktopCard} />
        <img
          className=' w-full lg:w-auto  '
          src={mobileCard}
          alt=''
        />
      </picture>
      <div
        className=' absolute inset-0 flex flex-col items-center justify-center
      gap-3 md:flex-row md:justify-between md:mx-5 '
      >
        <div className='md:flex md:flex-col'>
          <p className='text-(--text-white) text-3xl font-semibold'>
            Berlin, Germany
          </p>
          <p className='text-(--text-grey) '>Tuesday, Aug 5, 2025 </p>
        </div>
        <div className='flex items-center gap-8 mt-4 '>
          <img
            className='w-30 h-30'
            src={sunIcon}
            alt='sunny' /* change this dynamically later */
          />
          <p className='text-(--text-white) text-8xl italic font-medium'>20°</p>
        </div>
      </div>
    </section>
  );
}
