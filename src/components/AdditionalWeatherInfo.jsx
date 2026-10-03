import AdditionalWeatherCard from './AdditionalWeatherCard';

export default function AdditionalWeatherInfo() {
  return (
    <section className='  mt-4 lg:mt-5 '>
      <dl
        className='grid grid-cols-2 lg:grid-cols-[repeat(4,12rem)]
      gap-4 lg:gap-3'
      >
        <AdditionalWeatherCard text='Feels Like' number='18°' />
        <AdditionalWeatherCard text='Humidity' number='46%' />
        <AdditionalWeatherCard text='Wind' number='14 km/h' />
        <AdditionalWeatherCard text='Precipitation' number='0 mm' />
      </dl>
    </section>
  );
}
