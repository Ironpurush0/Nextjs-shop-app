import Head from "next/head";
import Banner from "../components/Banner";

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
		<div className='bg-gray-100 h-full'>
			<Head>
				<title>Shirtz</title>
			</Head>
			<Banner />
			<ProductFeed data={data} />
		</div>
	);
}
