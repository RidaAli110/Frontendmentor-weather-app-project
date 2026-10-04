export default function DailyForecastCard({ day, img, high, low }) {
  return (
    <article className=' p-4 bg-(--btn-card-bg) rounded-xl'>
        <div className='flex flex-col items-center'>
          <h4 className='text-(--light-text) text-2xl'>{day}</h4>
          <img className='w-25' src={img} alt='' />
        </div>
      <dl>
        <div className='flex justify-between '>
          <dt className='sr-only'>High</dt>
          <dd className=' text-[1.25rem] text-(--light-text)'>{high}</dd>
          <dt className='sr-only'>Low</dt>
          <dd className=' text-[1.25rem] text-(--light-text)'>{low}</dd>
        </div>
      </dl>
    </article>
  );
}
