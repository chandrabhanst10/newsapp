import React from 'react'
import loading from '../gif/spinner.gif'

const Spinner = () => {
  return (
    <div className='text-center mt-2'>
    <img src={loading} alt="loding" />
    </div>
  )
}

export default Spinner