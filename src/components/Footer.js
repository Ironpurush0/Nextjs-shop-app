const Footer = () => {
	return (
		<div className='h-52 bg-amazon_blue-light text-white'>
			<div class='grid grid-cols-3 gap-4'>
				<div className='flex flex-col items-center justify-center h-full m-5'>
					<h1 className='font-bold  text-xl'>Get to know us</h1>
					<ul className='p-5 font-medium'>
						<li>About us</li>
						<li>Careers</li>
						<li>Gift a smile</li>
					</ul>
				</div>
				<div className='flex flex-col items-center justify-center h-full m-5'>
					<h1 className='font-bold text-xl'>Connect with us</h1>
					<ul className='p-5 font-medium'>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Twitter</li>
					</ul>
				</div>

				<div className='flex flex-col items-center justify-center h-full m-5'>
					<h1 className='font-bold text-xl'>Let us help you</h1>
					<ul className='p-5 font-medium'>
						<li>COVID-19 and Shop</li>
						<li>Return Center</li>
						<li>App download</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
