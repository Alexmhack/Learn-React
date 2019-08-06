import React from 'react'
import { Link } from 'react-router-dom'

import products from './vshoolProducts'
import Product from './Product'

function ProductDetail (props) {
	const productId = props.match.params.id
	const index = parseInt(productId, 10) - 1
	const product = products[index]
	console.log(product)

	return (
		<div className='p-5'>
			<Product key={product.id} id={product.id}
				name={product.name} description={product.description} price={product.price} />
			<Link maintainScrollPosition={true} to='/' className="btn btn-secondary">List</Link>
		</div>
	)
}

export default ProductDetail
