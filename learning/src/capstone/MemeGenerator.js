import React, {Component} from 'react'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "You are just rubbish",
      bottomText: "Same to you",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const {allMemeImgs} = this.state
    const random = Math.floor(Math.random() * allMemeImgs.length)
    const memeImg = allMemeImgs[random]
    this.setState({
      randomImg: memeImg.url
    })
  }

  render() {
    return (
      <div>
        <form className='meme-form' onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.topText}
            onChange={this.handleChange}
            name="topText"
            placeholder="Top Text"
          />
          <input
            type="text"
            value={this.state.bottomText}
            onChange={this.handleChange}
            name="bottomText"
            placeholder="Bottom Text"
          />
          <button>Generate</button>
        </form>
        {this.state.randomImg ?
          <div className="meme">
            <img src={this.state.randomImg} alt="Random meme" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
          : ""
        }
      </div>
    )
  }
}

export default MemeGenerator
