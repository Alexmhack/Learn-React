import React, {Component} from 'react'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        console.log(data.data.memes)
        this.setState({
          allMemeImgs: data.data.memes
        })
      })
  }

  render() {
    return (
      <div>
        <form className='meme-form'>
          <input
            type="text"
            value={this.state.topText}
            onChange={this.handleChange}
            name="topText"
          />
          <input
            type="text"
            value={this.state.bottomText}
            onChange={this.handleChange}
            name="bottomText"
          />
          <button>Generate</button>
        </form>
      </div>
    )
  }
}

export default MemeGenerator
