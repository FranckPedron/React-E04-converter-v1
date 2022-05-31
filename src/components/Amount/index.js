import './style.scss';
import PropTypes from 'prop-types';

function Amount({ currency }) {
  return (
    <section className="amount">
      <p className="amount__rate">{currency.rate}</p>
      <p className="amount__name">{currency.name}</p>
    </section>
  );
}

Amount.propTypes = {
  currency: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Amount;
