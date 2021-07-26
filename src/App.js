import logo from './logo.svg';
import './App.css';
import CurrencyRates from './CurrencyRates';
import CurrencyRatesManual from './CurrencyRatesManual';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <h1>Currency Exchange</h1>
      <CurrencyRates/>
      {/* <CurrencyRatesManual/> */}

      <h1>Posts</h1>
      <Posts/>
    </div>
  );
}

export default App;
