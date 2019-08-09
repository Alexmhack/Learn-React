import React from 'react'

function Conditional(props) {
  // ternary operator
  // condition ? return if true : return if false

  // child component should only contain the stuff to render
  // the conditional checks should be left with the component which holds
  // the state for checks, this component will only render when told by parent component.

  return (
    <div className='text-center p-5'>
      <h1>The cool stuff has been loaded successfully.</h1>
    </div>
  )

}

export default Conditional
