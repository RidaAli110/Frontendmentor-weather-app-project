export function UnitButton({ children }) {
  return (
    <button
      className='w-full rounded-md p-1.5 text-left text-sm text-(--text-white)
     hover:bg-(--hover-btn) '
    >
      {children}
    </button>
  );
}

export function Divider({ children }) {
  return <div className='w-full pb-2 border-b border-b-(--unit-border)'>{children}</div>;
}
