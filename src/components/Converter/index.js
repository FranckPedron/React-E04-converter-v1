import './style.scss';
import { useState } from 'react';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Header from '../Header';
import listOfCurrencies from '../../data/currencies';

function Converter() {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState('United States Dollar');

  const makeConversion = () => {
    const currencyData = listOfCurrencies.find((data) => data.name === currency);
    const { rate } = currencyData;
    const result = amount * rate;
    return Math.round(result * 100) / 100;
  };

  const convertedAmount = makeConversion();

  const increment = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="converter">
      <Header amount={amount} increment={increment} />
      <main>
        <Currencies list={listOfCurrencies} setCurrency={setCurrency} />
        <Amount number={convertedAmount} currency={currency} />
      </main>
    </div>
  );
}

export default Converter;
