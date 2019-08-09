import React from 'react'

function Conditional(props) {
  if (props.isLoading === true) {
    return (
      <div className='text-center p-5'>
        <h1>Temp</h1>
      </div>
    )
  }

  return (
    <div className='text-center p-5'>
      <h1>The cool stuff has been loaded successfully.</h1>
    </div>
  )

}

export default Conditional
