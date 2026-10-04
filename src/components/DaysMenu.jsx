import DaysMenuButton from './DaysMenuButton';

export default function DaysMenu() {
  return (
    <div
      className='absolute top-full right-0 flex flex-col p-2 mt-3 w-40
      border border-(--unit-border) bg-(--btn-card-bg) rounded-md'
    >
      <DaysMenuButton>Monday</DaysMenuButton>
      <DaysMenuButton>Tuesday</DaysMenuButton>
      <DaysMenuButton>Wednesday</DaysMenuButton>
      <DaysMenuButton>Thursday</DaysMenuButton>
      <DaysMenuButton>Friday</DaysMenuButton>
      <DaysMenuButton>Saturday</DaysMenuButton>
      <DaysMenuButton>Sunday</DaysMenuButton>
    </div>
  );
}
