import './style.scss';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Header from '../Header';
import listOfCurrencies from '../../data/currencies';

function Converter() {
  return (
    <div className="converter">
      <Header amount={2} />
      <main>
        <Currencies list={listOfCurrencies} />
        <Amount name="Dollar" rate={1.09} />
      </main>
    </div>
  );
}

export default Converter;
