import React from 'react'

import Joke from './Joke'

function App () {
  return (
    <div>
      <Joke punchline="First Punchline" />
      <Joke question="Second Question" punchline="Second Punchline" />
      <Joke question="Third Question" punchline="Third Punchline" />
      <Joke question="Fourth Question" punchline="Fourth Punchline" />
    </div>
  )
}

export default App
