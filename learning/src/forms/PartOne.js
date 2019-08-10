import React, {Component} from 'react'

class PartOne extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // DRY method to store values in state
  handleChange(event) {
    this.setState({
      // JS notation for settings keys in a object
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                name="firstName"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                name="lastName"
                onChange={this.handleChange}
              />
            </div>
            <div className='pt-5'>
              <h1>{this.state.firstName} {this.state.lastName}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PartOne
