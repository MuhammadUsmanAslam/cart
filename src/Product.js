import React from "react";
import "./Product.css";

function Product({ product, setProducts, products, index }) {
	return (
		<div className="product">
			<div className="product__left">
				<img className="product__image" src={product.imgURL} alt="Image" />
				<div className="product__deatils">
					<h3 className="product__heading">{product.title}</h3>
					<p className="product__paragraph">{product.description}</p>
				</div>
			</div>
			<div className="product__right">
				<input
					className="product__input"
					type="number"
					min="0"
					placeholder="0"
					value={product.quantity}
					onChange={(e) => {
						let newProducts = products;
						newProducts[index].quantity = e.target.value;
						setProducts([...newProducts]);
					}}
				/>
				<h4>{`$${product.price}`}</h4>
				<h4>{`$${product.quantity * product.price}`}</h4>
				<button
					className="button"
					onClick={() => {
						setProducts(
							products.filter((p, ind) => {
								return ind !== products.indexOf(product);
							})
						);
					}}
				>
					Remove
				</button>
			</div>
		</div>
	);
}

export default Product;
