import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const currencyFormatter = require("currency-formatter");

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductItem = ({ item }) => {
	const [ratings] = useState(
		Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
	);

	return (
		<div className='z-30 bg-white hover:cursor-pointer flex flex-col justify-between border w-full p-2'>
			<div className='h-52'>
				<img
					src={item.image}
					className='w-full object-contain h-full'
					alt='item'
					loading='lazy'
				/>
			</div>
			<div className='p-2 h-full'>
				<h1 className='text-2xl font-semibold py-5'>{item.title}</h1>
				<span className='flex justify-between my-4'>
					<p className='flex'>
						{Array(ratings)
							.fill()
							.map((_, i) => (
								<StarIcon className='h-5' />
							))}
					</p>
					<p className='font-semibold'>{item.category}</p>
				</span>
				<p className='text-xl line-clamp-2'>{item.description}</p>
				<p className='text-amazon_blue-priceText text-xl font-bold py-5'>
					{currencyFormatter.format(item.price, { locale: "en-GB" })}
				</p>
			</div>
			<div className='flex flex-col p-2'>
				<button className='button bg-amazon_blue-light p-2 text-white'>
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
