import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from './NotFound'

// import VideoRecorderSample from './thirdparty/VideoRecorderSample'
// <VideoRecorderSample />

// import Joke from './jokes/Joke'
// import JokesData from './jokes/JokesData'

import ProductList from './products/ProductList'
import ProductDetail from './products/ProductDetail'
import ToDo from './todolist/ToDo'
import statesInReact from './statesInReact/statesInReact'
import LoggedUser from './classBased/LoggedUser'
import LoginButton from './classBased/LoginButton'
import AndOperator from './classBased/AndOperator'
import SamplesRoutes from './samples/SamplesRoutes'
import FakeApiCall from './lifecycles/FakeApiCall'

function App() {
	// const jokeComponents = JokesData.map(function(joke) {
	// 	return <Joke question={joke.question} punchline={joke.punchLine} />
	// })

	// short form of above code
	// const jokeComponents = JokesData.map(joke => <Joke key={joke.id} question={joke.question}
	// 	punchline={joke.punchLine} />)
	// {jokeComponents}

	const supportsHistory = 'pushstate' in window.history
	console.log(supportsHistory)

  return (
  	<BrowserRouter>
  		<Switch>
        <Route path='/samples/' component={SamplesRoutes} />
  			<Route exact path='/' component={ProductList} />
  			<Route exact path='/product/:id' component={ProductDetail} />
  			<Route exact path='/todos' component={ToDo} />
        <Route exact path='/states' component={statesInReact} />
        <Route exact path='/user' component={LoggedUser} />
        <Route exact path='/login' component={LoginButton} />
        <Route exact path='/and-operator' component={AndOperator} />
        <Route exact path='/lifecyles' component={FakeApiCall} />
  			<Route component={NotFound} />
  		</Switch>
  	</BrowserRouter>
  );
}

export default App;
