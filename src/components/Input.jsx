import { useEffect, useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';

export default function Input({ setLocation }) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (input === '') {
      setSuggestions([])
      return;
    }

    fetchLocation();
  }, [input]);

  async function fetchLocation() {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`,
    );
    const data = await res.json();

    setSuggestions(data.results || []);
  }
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='flex flex-col min-[30rem]:flex-row justify-center gap-2.5  mt-10 mb-10
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=' search-input w-full md:w-80 lg:w-110'
          id='searchInput'
          type='text'
          placeholder='Search for a place...'
        />
      </div>
      <button
        type='submit'
        className=' w-full md:w-fit p-2 md:px-5 rounded-lg bg-(--search-btn) 
        text-(--text-white) hover:bg-(--search-hover) min-[30rem]:w-fit
      '
      >
        Search
      </button>
      <div className='bg-red-300'>
        {suggestions.map((location) => {
          return (
            <div key={location.latitude}>
              <button  onClick={() => setLocation(location)} className='text-white'>
                {location.name}, {location.admin1}, {location.country_code}
              </button>
            </div>
          );
        })}
      </div>
    </form>
  );
}
