export default function AdditionalWeatherCard({ text, number }) {
  return (
    <div className="bg-(--btn-card-bg) rounded-xl p-5">
      <dt className="text-[1.25rem] text-(--text-grey)">{text}</dt>
      <dd className="text-3xl text-(--light-text) mt-5">{number}</dd>
    </div>
  );
}
