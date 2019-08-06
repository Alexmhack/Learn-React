import React from 'react'

function Product (props) {
	return (
		<div className="card mb-4">
		  <img src="" className="card-img-top" alt={"Product " + props.name} />
		  <div className="card-body">
		    <h5 className="card-title">{props.name}</h5>
		    <h6 className="card-text">{props.price}</h6>
		    <p className="card-text">{props.description}</p>
		    <a href="#" className="btn btn-primary">Details</a>
		  </div>
		</div>
	)
}

export default Product
