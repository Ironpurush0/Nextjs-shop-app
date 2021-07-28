import Image from "next/image";

const Checkout = () => {
	return (
		<div className='h-screen bg-gray-100'>
			<main className='lg:flex max-w-screen-2xl mx-auto'>
				<div className='flex-grow m-5 shadow-sm'>
					<Image
						src='/assets/189.jpg'
						alt='banner'
						width='1020'
						height='250'
						objectFit='contain'
					/>
				</div>
				<div className='flex flex-col p-5 space-y-10 bg-white'>
					<h1 className='text-3xl p-2 font-semibold'>The cart is empty.</h1>
				</div>
			</main>
		</div>
	);
};

export default Checkout;
