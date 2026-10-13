import errorIcon from '../../assets/images/icon-error.svg';
import retryIcon from '../../assets/images/icon-retry.svg';
export default function ErrorState({onRetry}) {
  return (
    <div className='flex flex-col items-center gap-8 mt-10 md:mt-15 '>
      <img className=' w-10 md:w-15' src={errorIcon} alt='' />
      <div className='flex flex-col items-center gap-5'>
        <h1 className='  text-(--text-white) text-2xl md:text-5xl font-semibold'>
          Something went wrong
        </h1>
        <p className='text-(--text-grey) text-center'>
          We couldn't connect to the server (API error). Please try again in a
          few moments
        </p>
      </div>
      <button onClick={onRetry}
        className='flex gap-2 text-(--text-white) justify-between
       bg-(--btn-card-bg) hover:bg-(--hover-btn) py-1.5 px-3 rounded-sm'
      >
        <img src={retryIcon} alt='' />
        Retry
      </button>
    </div>
  );
}
