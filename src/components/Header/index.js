import './style.scss';
import PropTypes from 'prop-types';

function Header({ amount, increment }) {
  const unit = (amount > 1 ? 'euros' : 'euro');
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__amount">{amount} {unit}
        <button type="button" onClick={increment}>Add 1</button>
      </p>
    </header>
  );
}

Header.propTypes = {
  amount: PropTypes.number,
  increment: PropTypes.func.isRequired,
};

Header.defaultProps = {
  amount: 1,
};

export default Header;
