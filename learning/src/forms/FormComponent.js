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
          value={props.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
          value={props.lastName}
        />
        <br />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Your age"
          onChange={props.handleChange}
          value={props.age}
        />
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={props.gender === "other"}
            onChange={props.handleChange}
          />
          Other
        </label>
        <br />
        <br />
        <select
          onChange={props.handleChange}
          name="location"
          value={props.location}
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
            checked={props.dietaryRestrictions.isVegan}
          />
          Vegetarian
        </label>
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.dietaryRestrictions.isLactoseFree}
          />
          Lactose free
        </label>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.dietaryRestrictions.isKosher}
          />
          Kosher
        </label>
        <br />
      </form>
      <br />
      <hr />
      <br />
      <h2>Entered information:</h2>
      <p>Your name: {props.firstName + " " + props.lastName}</p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.location}</p>
      <p>
          Your dietary restrictions:
          {props.dietaryRestrictions.isVegan ? "Vegetarian, " : ""}
          {props.dietaryRestrictions.isKosher ? "Kosher, " : ""}
          {props.dietaryRestrictions.isLactoseFree ? "Lactose Free" : ""}
      </p>
    </main>
  )
}

export default FormComponent
