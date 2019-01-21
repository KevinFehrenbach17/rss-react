import React, { Component } from 'react'
import Bed from './Bed';

import PropTypes from 'prop-types';

class Beds extends Component {
  render() {
    return this.props.beds.map((bed) =>(
      <Bed key ={bed.id} bed={bed} />
    ));
  }
}

// PropTypes
Beds.propTypes = {
  beds: PropTypes.array.isRequired
}

export default Beds
