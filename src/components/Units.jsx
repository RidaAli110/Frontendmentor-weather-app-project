import unitLogo from '../assets/images/icon-units.svg';
import dropdown from '../assets/images/icon-dropdown.svg';
import UnitsMenu from './UnitsMenu';
import { useState } from 'react';

export default function Units() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative ml-auto'>
      <button
        onClick={() => (setIsOpen(prev => !prev))}
        aria-expanded={isOpen}
        className=' flex items-center gap-2 px-2 py-1.5 rounded-sm
      bg-(--btn-card-bg) text-(--text-white) text-sm'
      >
        <img src={unitLogo} alt='' />
        Units
        <img src={dropdown} alt='' />
      </button>
      {isOpen && <UnitsMenu />}
    </div>
  );
}
