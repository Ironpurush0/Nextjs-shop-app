import Head from "next/head";

import Hero from "../components/Hero";
import ProductFeed from "../components/ProductFeed";

export const getServerSideProps = async (ctx) => {
	const res = await fetch("https://fakestoreapi.com/products");
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
};

export default function Home({ data }) {
	return (
		<div className='bg-gray-100'>
			<Head>
				<title>Shirtz</title>
			</Head>
			<Hero />
			<ProductFeed data={data} />
		</div>
	);
}
