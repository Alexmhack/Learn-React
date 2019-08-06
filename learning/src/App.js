import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import VideoRecorderSample from './thirdparty/VideoRecorderSample'
// <VideoRecorderSample />

// import Joke from './jokes/Joke'
// import JokesData from './jokes/JokesData'

import products from './products/vshoolProducts'
import Product from './products/Product'
import ProductList from './products/ProductList'

function App() {
	// const jokeComponents = JokesData.map(function(joke) {
	// 	return <Joke question={joke.question} punchline={joke.punchLine} />
	// })

	// short form of above code
	// const jokeComponents = JokesData.map(joke => <Joke key={joke.id} question={joke.question}
	// 	punchline={joke.punchLine} />)
	// {jokeComponents}

	const productComponents = products.map(product => <Product key={product.id}
		name={product.name} description={product.description} price={product.price} />)

  return (
  	<ProductList />
  );
}

export default App;
