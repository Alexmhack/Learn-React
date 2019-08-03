import React from 'react'

import ContactCard from './props/ContactCard'

// import Footer from './components/Footer'
// import Header from './components/Header'
// import Main from './components/Main'

function App () {
  return (
    <div className='contact-card'>
    	<ContactCard contact={{name:"Mr. Whiskerson", imgUrl:"http://placekitten.com/300/200",
    		phone:"(212) 555-1234", email:"mr.whiskaz@catnap.meow" }} />
    	<ContactCard contact={{name:"Fluffykins", imgUrl:"http://placekitten.com/300/200",
    		phone:"(212) 555-1234", email:"fluff@me.com" }} />
    	<ContactCard contact={{name:"Destroyer", imgUrl:"http://placekitten.com/300/200",
    		phone:"(212) 555-1234", email:"ofworlds@yahoo.com" }} />
    	<ContactCard contact={{name:"Felix", imgUrl:"http://placekitten.com/300/200",
    		phone:"(212) 555-1234", email:"thecat@hotmail.com" }} />
    </div>
  )
}

export default App

// <Header />
// <Main />
// <Footer />
