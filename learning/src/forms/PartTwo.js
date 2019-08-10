import React, {Component} from 'react'

// react textarea does not have a closing tag.
// instead use value prop to set values

class PartTwo extends Component {
  constructor() {
    super()
    this.state = {
      description: "",
      isFriendly: true,
      gender: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    const {gender} = this.state
    return (
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="form-group mb-3">
              <div className="mb-3">
                <label htmlFor="textarea1">Example textarea</label>
                <textarea
                  className="form-control"
                  id="textarea1"
                  rows="3"
                  name="description"
                  onChange={this.handleChange}
                  // value={"This is the sample value for text area."}
                />
              </div>
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    checked={this.state.isFriendly}
                    name="isFriendly"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="radio"
                    aria-label="Radio button for following text input"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={this.handleChange}
                  /> Male
                </div>
              </div>
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="radio"
                    aria-label="Radio button for following text input"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={this.handleChange}
                  /> Female
                </div>
              </div>
            </div>
            <div>
              <h2>{this.state.description}</h2>
              <h2>{this.state.isFriendly}</h2>
              <h2>{gender ? "You are " + gender : ""}</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PartTwo
