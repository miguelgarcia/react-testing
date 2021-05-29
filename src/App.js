import './App.css';
import { PriceDisplay } from './components/PriceDisplay';
import { useBtcPrice } from './hooks/useBtcPrice';

function App() {
  const { price, isLoading } = useBtcPrice();
  return (
    <div className="App">
      { isLoading ? 'Loading...' :
        (<PriceDisplay price={price} crypto='BTC' />)
      }
    </div>
  );
}

export default App;
