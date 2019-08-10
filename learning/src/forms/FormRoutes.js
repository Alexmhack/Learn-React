import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'

import PartOne from './PartOne'
import PartTwo from './PartTwo'

function FormRoutes() {
  return (
    <Fragment>
      <Route exact path='/forms/one' component={PartOne} />
      <Route exact path='/forms/two' component={PartTwo} />
    </Fragment>
  )
}

export default FormRoutes
