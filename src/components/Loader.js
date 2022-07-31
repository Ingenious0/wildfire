import React from 'react'
import spinner from './spinner.gif';

export const Loader = () => {
  return (
    <div className='loader'>

        <img src={spinner} alt="Loading"/>
        <div className='loader-text'>Fetching Data..</div>

    </div>
  )
}
