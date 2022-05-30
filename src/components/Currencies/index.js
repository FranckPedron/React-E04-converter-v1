import './style.scss';
import PropTypes from 'prop-types';
import SingleCurrency from 'src/components/SingleCurrency';

function Currencies({ list }) {
  return (
    <section className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        {
          list.map((currency) => <SingleCurrency key={currency.name} {...currency} />)
        }
      </ul>
    </section>
  );
}

Currencies.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Currencies;
