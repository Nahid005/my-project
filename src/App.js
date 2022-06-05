import './App.css';
import Clock from './component/Clock';
import ClockRunning from './component/ClockRunning';
import ClockChange from './component/ClockChange';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      <Clock local = 'bn-BD'></Clock>
      <ClockRunning></ClockRunning>
      <ClockChange></ClockChange>
      <Form></Form>
    </div>
  );
}

export default App;
