import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Bed extends Component {
  render() {
    return (
      <div>
        <div style={cards}>
            <a href='#'><p style={texts}>{ this.props.bed.name }</p></a>
            <a href='#'><img src= { this.props.bed.url }
              style={cardStyle}/></a>
          </div>
      </div>
    )
  }
}

  // PropTypes
  Bed.proTypes = {
    bed: PropTypes.array.isRequired
  }

  const texts ={
      textAlign: 'center',
      marginRight: '0 auto',
      marginLeft: '0 auto',
      background: 'rgb(107,107,107)',
      background: 'linear-gradient(0deg, rgba(107,107,107,1) 0%, rgba(70,70,70,1) 49%, rgba(33,33,33,1) 100%)',
      marginLeft: '5rem',
      padding: '0.5rem',
      borderRadius: '17px',
      
     
      
  }

  const cards = {
    marginRight: '0 auto',
    marginLeft: '0 auto',
    width: '75%'
  }

  const cardStyle = {
    borderRadius: '17px'
  }


export default Bed
