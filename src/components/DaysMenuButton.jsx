export default function DaysMenuButton({ children }) {
  return (
    <button
      className=' w-full px-1 py-1.5 text-(--light-text) text-start font-medium
       hover:bg-(--hover-btn) rounded-md '
    >
      {children}
    </button>
  );
}
