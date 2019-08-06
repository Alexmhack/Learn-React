import React from 'react';

// import VideoRecorderSample from './thirdparty/VideoRecorderSample'
// <VideoRecorderSample />

// import Joke from './jokes/Joke'
// import JokesData from './jokes/JokesData'

import products from './products/vshoolProducts'
import Product from './products/Product'

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
    <div className="App py-5">
    	{jokeComponents}
    </div>
  );
}

export default App;
