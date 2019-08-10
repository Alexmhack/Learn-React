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
    this.handleChange = this.handleChange.bind(this)
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

  render() {
    const {allMemeImgs} = this.state
    const random = Math.floor(Math.random() * allMemeImgs.length)
    const memeImg = allMemeImgs[random]

    return (
      <div>
        <form className='meme-form'>
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
        <div className="meme">
          <img src={memeImg ? memeImg.url : ""} alt="Random meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
