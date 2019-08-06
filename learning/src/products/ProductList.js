import React from 'react'

function ProductList (props) {
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
