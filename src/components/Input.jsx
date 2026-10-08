import { useEffect, useRef, useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';

export default function Input({ setLocation }) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  // This state is for whichever search suggestion is clicked. 
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Close suggestions when clicking outside
  const [isOpen, setIsOpen] = useState(false);
  const suggestionsRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (!isOpen) return;

      if (!suggestionsRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  useEffect(() => {
    async function fetchLocation() {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(input)}&count=5&language=en&format=json`,
      );
      const data = await res.json();
      setSuggestions(data.results || []);
    }

    if (input.trim() !== '') {
      fetchLocation(input);
    }

  }, [input]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!selectedLocation) return;
          setLocation(selectedLocation);
        }}
        className='flex flex-col min-[30rem]:flex-row justify-center gap-2.5 mt-10 mb-10'
      >
        <div
          ref={suggestionsRef}
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
            onChange={(e) => {
              const value = e.target.value;
              setInput(value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className='search-input w-full md:w-80 lg:w-110'
            id='searchInput'
            type='text'
            placeholder='Search for a place...'
          />

          {isOpen && suggestions.length > 0 && (
            <div
              className='absolute top-full left-0 z-1 p-2 mt-2 border border-(--unit-border)
              w-full flex flex-col bg-(--light-grey-card-bg) rounded-md'
            >
              {suggestions.map((location) => {
                return (
                  <div className='md:text-[1.1rem]' key={location.id}>
                    <button
                      type='button'
                      onClick={() => {
                        setInput(
                          `${location.name}, ${location.country}, ${location.country_code} `,
                        );
                        setSelectedLocation(location);
                        setSuggestions([]);
                        setIsOpen(false);
                      }}
                      className='w-full text-white text-start p-3
                      hover:bg-(--hover-btn) rounded-md'
                    >
                      {location.name}, {location.country},{' '}
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
