import React from 'react'

import Joke from './Joke'
import jokesData from './jokesData'

function App () {
  return const jokesComponent = jokesData.map(joke => <Joke question={joke.question} punchline={joke.punchline} />)
}

export default App
