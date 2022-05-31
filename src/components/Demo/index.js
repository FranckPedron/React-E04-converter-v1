import React from 'react';
import PropTypes from 'prop-types';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  render() {
    return (
      <div>{this.state.isOpen}</div>
    );
  }
}

export default Demo;
