import React from 'react'
import { Route } from 'react-router-dom'

import EventHandling from './EventHandling'

function SamplesRoutes () {
	return (
		<Route path='/samples/event' component={EventHandling} />
	)
}

export default SamplesRoutes
