import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="loading" style={{height:'35px', width:'35px', filter:'invert(1)'}} />
      </div>
    )
  }
}
