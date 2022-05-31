import './style.scss';
import { useState } from 'react';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Header from '../Header';
import listOfCurrencies from '../../data/currencies';

function Converter() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState({
    name: 'Australian Dollar',
    rate: 1.665247,
  });



  const increment = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="converter">
      <Header amount={amount} increment={increment} />
      <main>
        <Currencies list={listOfCurrencies} />
        <Amount currency={currency} />
      </main>
    </div>
  );
}

export default Converter;
