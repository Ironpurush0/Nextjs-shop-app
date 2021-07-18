import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";

const Banner = () => {
	return (
		<div className='relative'>
			<div className='absolute w-full h-full bg-gradient-to-b from-transparent to-white'></div>
			<Carousel
				autoPlay={true}
				interval={3000}
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
				infiniteLoop={true}>
				<div className='h-96'>
					<img
						src='https://image.freepik.com/free-vector/new-season-banner-template_1361-1221.jpg'
						// className='object-contain h-full w-full'
						alt='shop'
						loading='lazy'
					/>
				</div>
				<div className='h-72'>
					<img
						src='banner.jpg'
						alt='shop'
						className='w-full object-contain h-full'
						loading='lazy'
					/>
				</div>
				<div className='h-72'>
					<img
						src='banner.jpg'
						alt='shop'
						className='w-full object-contain h-full'
						loading='lazy'
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
