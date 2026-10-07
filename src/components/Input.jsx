import { useEffect, useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';

export default function Input({ setLocation }) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (input === '') {
      setSuggestions([]);
      return;
    }

    fetchLocation();
  }, [input]);

  async function fetchLocation() {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=5&language=en&format=json`,
    );

    const data = await res.json();

    setSuggestions(data.results || []);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='flex flex-col min-[30rem]:flex-row justify-center gap-2.5 mt-10 mb-10'
      >
        <div
          className='relative flex p-3 gap-3 items-center text-(--text-white)
          bg-(--btn-card-bg) rounded-lg
          focus-within:outline-1 focus-within:outline-(--text-white)
          hover:bg-(--hover-btn)'
        >
          <img className='size-5 ml-3' src={searchIcon} alt='' />

          <label className='sr-only' htmlFor='searchInput'>
            Search for a location
          </label>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='search-input w-full md:w-80 lg:w-110'
            id='searchInput'
            type='text'
            placeholder='Search for a place...'
          />

          {suggestions.length > 0 && (
            <div
              className='absolute top-full left-0 z-1 p-2 mt-2 border border-(--unit-border)
              w-full flex flex-col bg-(--light-grey-card-bg) rounded-md'
            >
              {suggestions.map((location) => {
                return (
                  <div className='text-[1.1rem]' key={location.latitude}>
                    <button
                      type='button'
                      onClick={() => setLocation(location)}
                      className='w-full text-white text-start p-3
                      hover:bg-(--hover-btn) rounded-md'
                    >
                      {location.name}, {location.admin1},{' '}
                      {location.country_code}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button
          type='submit'
          className='w-full md:w-fit p-2 md:px-5 rounded-lg bg-(--search-btn)
          text-(--text-white) hover:bg-(--search-hover) min-[30rem]:w-fit'
        >
          Search
        </button>
      </form>
    </>
  );
}