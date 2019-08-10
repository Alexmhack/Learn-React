import React, {Component} from 'react'

class AirlineForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    }
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target
    let {dietaryRestrictions} = this.state
    type === "checkbox" ? this.setState({ [dietaryRestrictions.name]: checked })
      : this.setState({ [name]: value })
  }

  render() {
    console.log(this.state.dietaryRestrictions)

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
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={this.state.gender === "other"}
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
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isVegan}
            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isLactoseFree}
            />
            Lactose free
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isKosher}
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
            Your dietary restrictions: {this.state.dietaryRestrictions.isVegan}
        </p>
      </main>
    )
  }
}

export default AirlineForm
