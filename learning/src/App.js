import React from 'react';

// import VideoRecorderSample from './thirdparty/VideoRecorderSample'
// <VideoRecorderSample />

import Joke from './jokes/Joke'
import JokesData from './jokes/JokesData'

function App() {
	const JokesComponent = JokesData.map(function(joke) {
		return <Joke question={joke.question} punchline={joke.punchLine} />
	})

  return (
    <div className="App">
    	{JokesComponent}
    </div>
  );
}

export default App;
