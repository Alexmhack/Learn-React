import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import EventHandling from './EventHandling'
import ChangingState from './ChangingState'

function SamplesRoutes () {
	return (
    <Fragment>
  		<Route path='/samples/event' component={EventHandling} />
      <Route path='/samples/change-state' component={ChangingState} />
    </Fragment>
	)
}

export default SamplesRoutes
