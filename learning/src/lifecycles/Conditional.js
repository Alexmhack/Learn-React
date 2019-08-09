import React from 'react'

function Conditional(props) {
  // ternary operator
  // condition ? return if true : return if false

  return (
    <div className='text-center p-5'>
      <h1>Header</h1>
      {props.isLoading === true ?
        <h1>Temp</h1>
        : <h1>The cool stuff has been loaded successfully.</h1>
      }
      <h1>Footer</h1>
    </div>
  )

}

export default Conditional
