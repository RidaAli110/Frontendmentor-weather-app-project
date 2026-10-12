import { useEffect, useRef, useState } from 'react';
import unitLogo from '../../assets/images/icon-units.svg';
import dropdown from '../../assets/images/icon-dropdown.svg';
import UnitsMenu from './UnitsMenu';

export default function Units({units, setUnits}) {
  const [isOpen, setIsOpen] = useState(false);

  // This is for closing the menu when clicking anywhere else outside
  const unitsRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (!isOpen) return;
      if (!unitsRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    // cleanup function
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  // This is for closing the menu when pressing escape
  useEffect(() => {
  function handleEscape(e) {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  document.addEventListener('keydown', handleEscape);

  return () => {
    document.removeEventListener('keydown', handleEscape);
  };
}, []);

  return (
    <div ref={unitsRef} className='relative ml-auto'>
      <button
      type='button'
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="units-menu"
        className=' flex items-center gap-2 px-2 py-1.5 rounded-sm
      bg-(--btn-card-bg) text-(--text-white) text-sm hover:bg-(--hover-btn)'
      >
        <img src={unitLogo} alt='' />
        Units
        <img src={dropdown} alt='' />
      </button>
      {isOpen && <UnitsMenu units={units} setUnits={setUnits} />}
    </div>
  );
}
