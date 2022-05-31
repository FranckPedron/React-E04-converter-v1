import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

function SingleCurrency({ name }) {
  const [isSelected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!isSelected);
  };

  const handleClick = (e) => {
    e.preventDefault();
    toggleSelected();
  };

  return (
    <li className="currency">
      <button className="currency__btn" type="button" onClick={handleClick}>{name} </button>
    </li>
  );
}

SingleCurrency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SingleCurrency;
