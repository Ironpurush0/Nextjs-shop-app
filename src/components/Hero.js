import React, { useEffect } from "react";
import Banner from "./Banner";
import ProductFeed from "./ProductFeed";

const Hero = ({ data }) => {
	return (
		<div className='border h-full w-full'>
			<Banner />
		</div>
	);
};

export default Hero;
