import './style.scss';
import PropTypes from 'prop-types';

function SingleCurrency({ name }) {
  return (
    <li className="currency">
      <button className="currency__btn" type="button">{name}</button>
    </li>
  );
}

SingleCurrency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SingleCurrency;
