import React, { useState, useEffect } from "react";
import "./Cart.css";
import Product from "./Product";

function Cart() {
	const [products, setProducts] = useState([
		{
			imgURL:
				"https://www.writersdigest.com/.image/t_share/MTcxMDY0NzcxMzIzNTY5NDEz/image-placeholder-title.jpg",
			title: "Rework",
			description:
				"Lorem ipsum dolor sit amet elit sit ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 15,
			quantity: 8,
		},
		{
			imgURL:
				"https://assets.visme.co/templates/banners/thumbnails/i_Bedtime-Story-Book-Cover_full.jpg",
			title: "Getting real",
			description:
				"Lorem ipsum dolor sit amet elit sit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 25,
			quantity: 5,
		},
	]);
	let subTotal = 0;
	let PnP = 8;
	let total = 0;
	useEffect(() => {}, [products]);
	return (
		<div className="cart">
			<div className="cart__headings">
				<h4 className="cart__left-heading">Product</h4>
				<div className="cart__right-headings">
					<h4>Quantity</h4>
					<h4>Price</h4>
					<h4>Total</h4>
				</div>
			</div>
			{products.map((product, index) => {
				subTotal = subTotal + product.price * product.quantity;
				total = subTotal + PnP;
				return (
					<Product
						product={product}
						key={index}
						index={index}
						products={products}
						setProducts={setProducts}
					/>
				);
			})}
			<div className="cart__details">
				<div className="cart__details-left">
					<h4>Sub Total</h4>
					<h4>P&P</h4>
					<h4>Total</h4>
				</div>
				<div className="cart__details-right">
					<h4>{`$${subTotal}`}</h4>
					<h4>{`$${PnP}`}</h4>
					<h4>{`$${total}`}</h4>
				</div>
			</div>
			<div className="cart__buttons">
				<button className="button cart__button-continue">
					Continue Shopping
				</button>
				<button className="button cart__button-checkout">Checkout</button>
			</div>
		</div>
	);
}

export default Cart;
