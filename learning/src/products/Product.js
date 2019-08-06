import React from 'react'

import { Link } from 'react-router-dom'

function Product (props) {
	return (
		<div className="card mb-4">
		  <img height="500" width="100" src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06017872.png" className="card-img-top" alt={"Product " + props.name} />
		  <div className="card-body">
		    <h5 className="card-title">{props.name}</h5>
		    <h5 className="card-title">ID: {props.id}</h5>
		    <h6 className="card-text">Price: {props.price}</h6>
		    <p className="card-text">{props.description}</p>
		    <Link maintainScrollPosition={true} to={`/product/${props.id}/`} className="btn btn-primary">
		    	Details
		    </Link>
		  </div>
		</div>
	)
}

export default Product
