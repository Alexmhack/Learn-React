import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'

import PartOne from './PartOne'

function FormRoutes() {
  return (
    <Fragment>
      <Route exact path='/forms/one' component={PartOne} />
    </Fragment>
  )
}

export default FormRoutes
