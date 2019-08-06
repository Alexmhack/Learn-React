import React from 'react'

import Product from './Product'
import products from './vshoolProducts'

function ProductList (props) {
	const productComponents = products.map(product => <Product key={product.id}
		name={product.name} description={product.description} price={product.price} />)

	return (
    <div className="App py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
	    			{productComponents}
					</div>
				</div>
			</div>
    </div>
	)
}

export default ProductList
