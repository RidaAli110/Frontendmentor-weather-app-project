export default function HourlyForecastCard({ img, time, temp }) {
  return (
    <div
      className='flex items-center justify-between   pr-5
    bg-(--light-grey-card-bg) border border-(--unit-border) rounded-md'
    >
      <div className='flex items-center'>
        <img className='w-15' src={img} alt='' />
        <p className='text-(--text-white)'>{time}</p>
      </div>
      <p className='text-(--light-text)'>{temp}</p>
    </div>
  );
}
