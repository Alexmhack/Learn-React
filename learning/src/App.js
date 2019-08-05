import React from 'react';

// import VideoRecorderSample from './thirdparty/VideoRecorderSample'
// <VideoRecorderSample />

import Joke from './jokes/Joke'
import JokesData from './jokes/JokesData'

function App() {
	// const jokeComponents = JokesData.map(function(joke) {
	// 	return <Joke question={joke.question} punchline={joke.punchLine} />
	// })

	// short form of above code
	const jokeComponents = JokesData.map(joke => <Joke question={joke.question}
		punchline={joke.punchLine} />)

  return (
    <div className="App">
    	{jokeComponents}
    </div>
  );
}

export default App;
