import React from 'react'

function FormComponent(props) {
  return (
    <main className="text-center p-5">
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
          value={props.data.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
          value={props.data.lastName}
        />
        <br />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Your age"
          onChange={props.handleChange}
          value={props.data.age}
        />
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={props.data.gender === "other"}
            onChange={props.handleChange}
          />
          Other
        </label>
        <br />
        <br />
        <select
          onChange={props.handleChange}
          name="location"
          value={props.data.location}
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
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.isVegan}
          />
          Vegetarian
        </label>
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.isLactoseFree}
          />
          Lactose free
        </label>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.isKosher}
          />
          Kosher
        </label>
        <br />
      </form>
      <br />
      <hr />
      <br />
      <h2>Entered information:</h2>
      <p>Your name: {props.data.firstName + " " + props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.location}</p>
      <p>
          Your dietary restrictions:
          {props.data.dietaryRestrictions.isVegan ? "Vegetarian, " : ""}
          {props.data.dietaryRestrictions.isKosher ? "Kosher, " : ""}
          {props.data.dietaryRestrictions.isLactoseFree ? "Lactose Free" : ""}
      </p>
    </main>
  )
}

export default FormComponent
