import Banner from "./Banner";
import ProductItem from "./ProductItem";

const ProductFeed = ({ data }) => {
	console.log(data);

	return (
		<div className='md:container my-10 mx-auto'>
			<div className='my-5 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{data.slice(0, 4).map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</div>

			<img
				className='md:col-span-full'
				src='https://image.freepik.com/free-vector/modern-super-sale-promotion-bright-banner_1055-6985.jpg'
				alt='cloth'
			/>
			<div className='my-5 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{data.slice(4, 5).map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</div>

			<div className='my-5 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{data.slice(5, data.length).map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default ProductFeed;
