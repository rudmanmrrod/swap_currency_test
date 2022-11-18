import './App.css';
import CurrencyForm from './views/CurrencyForm';
import { moneyList } from './constants'

function App() {

  return (
    <div className="App">
      <CurrencyForm currencyList={moneyList}  />
    </div>
  );
}

export default App;
