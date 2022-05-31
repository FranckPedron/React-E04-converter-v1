import './style.scss';
import PropTypes from 'prop-types';

function SingleCurrency({ name, setCurrency }) {
  const handleClick = (e) => {
    e.preventDefault();
    setCurrency(name);
  };

  return (
    <li className="currency">
      <button className="currency__btn" type="button" onClick={handleClick}>{name} </button>
    </li>
  );
}

SingleCurrency.propTypes = {
  name: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default SingleCurrency;
