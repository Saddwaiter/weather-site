import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocations from './components/TimeAndLocations';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons/>
      <Inputs/>
      <TimeAndLocations/>
      <TemperatureAndDetails/>
      <Forecast title="HOURLY FORECAST"/>
      <Forecast title="DAYLY FORECAST"/>
    </div>
  );
}

export default App;
