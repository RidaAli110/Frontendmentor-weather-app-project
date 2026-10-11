export default function WeatherSkeletonLoading() {
  return (
    <div className='grid lg:grid-cols-[2fr_1fr] lg:gap-8'>
      {/* Left area*/}
      <div className='flex flex-col gap-6'>
        {/* Today's weather */}
        <div className='h-64  rounded-xl bg-(--btn-card-bg)' />

        {/* Additional weather */}
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className='h-28  rounded-xl bg-(--btn-card-bg)' />
          ))}
        </div>

        {/* Daily forecast */}
        <div className='grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7'>
          {Array.from({ length: 7 }, (_, index) => (
            <div key={index} className='h-36 rounded-xl bg-(--btn-card-bg)' />
          ))}
        </div>
      </div>

      {/*Hourly forecast */}
      <div className='h-full min-h-96 mt-5 rounded-xl bg-(--btn-card-bg)' />
    </div>
  );
}
