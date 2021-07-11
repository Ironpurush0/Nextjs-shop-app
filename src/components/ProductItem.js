const ProductItem = ({ item }) => {
	return (
		<div className='flex flex-col justify-between border w-full p-2'>
			<div className='h-52'>
				<img
					src={item.image}
					className='w-full object-contain h-full'
					alt='item'
					loading='lazy'
				/>
			</div>
			<div className='p-2 h-full'>
				<h1 className='text-2xl font-semibold py-5 text-justify'>
					{item.title}
				</h1>
				<p className='text-xl'>{item.description}</p>
				<p className='text-amazon_blue-priceText text-xl font-bold py-5'>
					$ {item.price}
				</p>
			</div>
			<div className='flex flex-col p-2'>
				<button className='bg-amazon_blue-light p-2 text-white'>
					Add to cart
				</button>
				<button className='bg-amazon_blue-orange p-2 mt-2 text-white'>
					Buy now
				</button>
			</div>
		</div>
	);
};

export default ProductItem;