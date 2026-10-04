import Header from './components/Header';
import Input from './components/Input';
import TodayCard from './components/TodayCard';
import AdditionalWeatherInfo from './components/AdditionalWeatherInfo';
import DailyForecast from './components/DailyForecast';
import HourlyForecast from './components/HourlyForecast';

function App() {
  return (
    <div className='mx-5 my-5  md:mx-8 lg:mx-13'>
      <Header />
      <main>
        <h1 className='sr-only'>Today's Weather</h1>
        <Input />
        <div className='grid lg:grid-cols-[2fr_1fr] lg:gap-8 '>
          <div>
            <TodayCard />
            <AdditionalWeatherInfo />
            <DailyForecast />
          </div>
          <div>
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

// add some sr-only headers
