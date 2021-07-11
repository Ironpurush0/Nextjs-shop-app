import Banner from "./Banner";
import ProductItem from "./ProductItem";

const ProductFeed = ({ data }) => {
	console.log(data);
	const catData = data.filter((item) => item.category === "men's clothing");
	const catData2 = data.filter((item) => item.category === "women's clothing");
	const catData3 = data.filter((item) => item.category === "jewelery");
	const catData4 = data.filter((item) => item.category === "electronics");

	return (
		<div className='md:container my-10 mx-auto z-30'>
			<h1 className='font-bold text-4xl mb-5'>Men's clothing</h1>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{catData.map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</div>
			<h1 className='font-bold text-4xl my-5'>Jwellery</h1>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{catData3.map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</div>
			<h1 className='font-bold text-4xl my-5'>Electronics</h1>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{catData4.map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</div>

			<h1 className='font-bold text-4xl my-5'>Women's clothing</h1>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
				{catData2.map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default ProductFeed;
