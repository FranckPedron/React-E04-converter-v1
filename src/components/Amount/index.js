import './style.scss';
import PropTypes from 'prop-types';

function Amount({ rate, name }) {
  return (
    <section className="amount">

      <p className="amount__rate">{rate}</p>
      <p className="amount__name">{name}</p>

    </section>
  );
}

Amount.propTypes = {
  rate: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Amount;
