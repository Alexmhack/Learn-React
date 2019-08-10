import React, {Component} from 'react'

import FormComponent from './FormComponent'

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
    type === "checkbox" ? this.setState(prevState => {
      return {
        dietaryRestrictions: {
          ...prevState.dietaryRestrictions,
          [name]: checked
        }
      }
    })
      : this.setState({ [name]: value })
  }

  render() {
    return <FormComponent handleChange={this.handleChange}
      data={this.state} />
  }
}

export default AirlineForm
