import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'

import PartOne from './PartOne'
import PartTwo from './PartTwo'
import AirlineForm from './AirlineForm'

function FormRoutes() {
  return (
    <Fragment>
      <Route exact path='/forms/one' component={PartOne} />
      <Route exact path='/forms/two' component={PartTwo} />
      <Route exact path='/forms/book' component={AirlineForm} />
    </Fragment>
  )
}

export default FormRoutes
