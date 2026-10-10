export default function DaysMenuButton({
  children,
  setSelectedDay,
  selectedDay,
  setIsOpen,
}) {
  return (
    <button
      onClick={() => {
        setSelectedDay(children);
        setIsOpen(false);
      }}
      className={`w-full p-1 text-(--light-text) text-start font-medium
       hover:bg-(--hover-btn) rounded-sm ${selectedDay === children ? 'bg-(--hover-btn)' : ''} `}
    >
      {children}
    </button>
  );
}
