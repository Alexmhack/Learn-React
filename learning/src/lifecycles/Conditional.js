import React from 'react'

function Conditional(props) {
  // ternary operator
  // condition ? return if true : return if false

  return (
    props.isLoading === true ?
      <div className='text-center p-5'>
        <h1>Temp</h1>
      </div>
      :
      <div className='text-center p-5'>
        <h1>The cool stuff has been loaded successfully.</h1>
      </div>
  )

}

export default Conditional
