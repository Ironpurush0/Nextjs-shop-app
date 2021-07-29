import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const currencyFormatter = require("currency-formatter");

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductItem = ({ image, title, category, description, price }) => {
	const dispatch = useDispatch();

	const [ratings] = useState(
		Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
	);

	const addItemToBasket = () => {
		const product = {
			image,
			title,
			category,
			description,
			price,
		};

		dispatch(addToBasket(product));
	};

	return (
		<div className='z-30 bg-white hover:cursor-pointer flex flex-col justify-between border w-full p-2'>
			<div className='h-52'>
				<img
					src={image}
					className='w-full object-contain h-full'
					alt='item'
					loading='lazy'
				/>
			</div>
			<div className='p-2 h-full'>
				<h1 className='text-2xl font-semibold py-5'>{title}</h1>
				<span className='flex justify-between my-4'>
					<p className='flex'>
						{Array(ratings)
							.fill()
							.map((_, i) => (
								<StarIcon className='h-5' />
							))}
					</p>
					<p className='font-semibold'>{category}</p>
				</span>
				<p className='text-xl line-clamp-2'>{description}</p>
				<p className='text-amazon_blue-priceText text-xl font-bold py-5'>
					{currencyFormatter.format(price, { locale: "en-GB" })}
				</p>
			</div>
			<div className='flex flex-col p-2'>
				<button
					onClick={addItemToBasket}
					className='button bg-amazon_blue-light p-2 text-white'>
					Add to cart
				</button>
				<button className='button bg-amazon_blue-orange p-2 mt-2 text-white'>
					Buy now
				</button>
			</div>
		</div>
	);
};

export default ProductItem;
