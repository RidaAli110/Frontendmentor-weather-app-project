import unitLogo from '../assets/images/icon-units.svg';
import dropdown from '../assets/images/icon-dropdown.svg';
import UnitsMenu from './UnitsMenu';
import { useEffect, useRef, useState } from 'react';

export default function Units() {
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

  return (
    <div ref={unitsRef} className='relative ml-auto'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className=' flex items-center gap-2 px-2 py-1.5 rounded-sm
      bg-(--btn-card-bg) text-(--text-white) text-sm hover:bg-(--hover-btn)'
      >
        <img src={unitLogo} alt='' />
        Units
        <img src={dropdown} alt='' />
      </button>
      {isOpen && <UnitsMenu />}
    </div>
  );
}
