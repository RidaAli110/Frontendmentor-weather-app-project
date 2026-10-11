import { useState } from 'react';
import checkMark from '../../assets/images/icon-checkmark.svg';

export function UnitButton({ children, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-between rounded-md p-1.5 text-left text-sm text-(--text-white)
     hover:bg-(--hover-btn) ${isSelected ? 'bg-(--hover-btn)' : ''} `}
    >
      {children}
      {isSelected && <img className='' src={checkMark} />}
    </button>
  );
}

export function Divider({ children }) {
  return (
    <div className='w-full pb-2 border-b border-b-(--unit-border)'>
      {children}
    </div>
  );
}
