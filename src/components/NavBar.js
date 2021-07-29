import Image from "next/image";
import Link from "next";
import { signin, signout, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const NavBar = () => {
	const [session] = useSession();
	const router = useRouter();
	const items = useSelector(selectItems);

	return (
		<header className='py-6'>
			<div className='flex items-center justify-between w-full'>
				<svg
					onClick={() => router.push("/")}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					className='h-10 w-10 ml-7 hover:cursor-pointer'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path d='M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' />
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
					/>
				</svg>
				<div className='hidden md:block'>
					<input className='border w-72 p-2' placeholder='Search...' />
					<button className='bg-black p-2 text-gray-50'>Search</button>
				</div>
				<div className='flex items-center justify-center'>
					<span
						onClick={!session ? signin : signout}
						className='mr-4 hidden md:block font-semibold cursor-pointer'>
						<p className='font-bold'>{!session ? "Sign in" : "Sign out"}</p>
						<p>{session && `${session.user.name}`}</p>
					</span>
					<span className=''>
						<div className='right-7 top-4 flex items-center justify-center w-7 h-7 rounded-full absolute bg-black text-white'>
							<p className='p-2'>{items.length}</p>
						</div>
						<svg
							onClick={() => router.push("/checkout")}
							xmlns='http://www.w3.org/2000/svg'
							className='h-12 w-12 mr-7 hidden md:block hover:cursor-pointer'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
							/>
						</svg>
					</span>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-10 w-10 mr-7 block md:hidden'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4 6h16M4 12h16M4 18h7'
					/>
				</svg>
			</div>
		</header>
	);
};

export default NavBar;
