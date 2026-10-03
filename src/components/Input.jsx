import searchIcon from '../assets/images/icon-search.svg';

export default function Input() {
  return (
    <form
      className='flex flex-col min-[30rem]:flex-row justify-center gap-2.5  mt-8
      '
    >
      <div
        className='flex p-3 gap-3 items-center text-(--text-white) 
          bg-(--btn-card-bg) rounded-lg
          focus-within:outline-1 focus-within:outline-(--text-white)
          hover:bg-(--hover-btn)
          '
      >
        <img className='size-5 ml-3' src={searchIcon} alt='' />
        <label className='sr-only' htmlFor='searchInput'>
          Search for a location
        </label>
        <input
          className=' search-input w-full md:w-80 lg:w-110'
          id='searchInput'
          type='text'
          placeholder='Search for a place...'
        />
      </div>
      <button
        className=' w-full md:w-fit p-2 md:px-5 rounded-lg bg-(--search-btn) 
        text-(--text-white) hover:bg-(--search-hover) min-[30rem]:w-fit
      '
      >
        Search
      </button>
    </form>
  );
}
