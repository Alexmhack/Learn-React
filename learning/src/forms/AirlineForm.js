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
      diet: ""
    }
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
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
          <select
            onChange={this.handleChange}
            name="diet"
            value={this.state.diet}
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="kosher">Kosher</option>
            <option value="lactose free">Lactose free</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
          </select>
          <br />
        </form>
        <br />
        <hr />
        <br />
        <h2>Entered information:</h2>
        <p>Your name: {/* First and last name here */}</p>
        <p>Your age: {/* Age here */}</p>
        <p>Your gender: {/* Gender here */}</p>
        <p>Your destination: {/* Destination here */}</p>
        <p>
            Your dietary restrictions:
            {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    )
  }
}

export default AirlineForm
