import React, {Component} from 'react'

class AirlineForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      location: "",
      diet: []
    }
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    console.log(this.state.diet)

    return (
      <main className="text-center p-5">
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <br />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <br />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Your age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <br />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={this.handleChange}
            />
            Other
          </label>
          <br />
          <br />
          <select
            onChange={this.handleChange}
            name="location"
            value={this.state.location}
          >
            <option value="indore">Indore</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="goa">Goa</option>
          </select>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="vegetarian"
              onChange={this.handleChange}

            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              onChange={this.handleChange}

            />
            Lactose free
          </label>
          <label>
            <input
              type="checkbox"
              name="kosher"
              onChange={this.handleChange}

            />
            Kosher
          </label>
          <br />
        </form>
        <br />
        <hr />
        <br />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName + " " + this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
            Your dietary restrictions: {this.state.diet}
        </p>
      </main>
    )
  }
}

export default AirlineForm
