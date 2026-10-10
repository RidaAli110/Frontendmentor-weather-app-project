import DaysMenuButton from './DaysMenuButton';

export default function DaysMenu({
  weather,
  setSelectedDay,
  selectedDay,
  setIsOpen,
}) {
  return (
    <div
      className='absolute top-full sm:right-0  flex flex-col gap-2 p-2 mt-3 w-40
      border border-(--unit-border) bg-(--btn-card-bg) rounded-md'
    >
      {weather?.daily?.time.map((day) => {
        return (
          <DaysMenuButton key={day}
            setIsOpen={setIsOpen}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          >
            {new Date(day).toLocaleDateString('en-GB', {
              weekday: 'long',
            })}
          </DaysMenuButton>
        );
      })}
    </div>
  );
}
