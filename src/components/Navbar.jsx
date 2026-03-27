import {Link} from "react-router";
import {GiCyborgFace} from "react-icons/gi";

const Navbar = () => {
	return (
		<nav className="w-full h-auto bg-transparent backdrop-blur-lg shadow-none lg:px-24 md:px-16 sm:px-6 px-4 z-50">
			<div className="justify-between mx-auto lg:w-full md:items-center md:flex">
				{/* Navbar & Toggle */}
				<div>
					<div className="flex items-center justify-between py-1 md:py-1 md:block">
						{/* Logo */}
						<Link
							to="/"
							className="text-4xl text-red-600 font-semibold tracking-[o.1rem] flex items-end gap-x-1 relative">
							IR
							<span className=" text-neutral-100">
								<GiCyborgFace className="h-10 w-8" />
							</span>
							N<span className="text-neutral-400">ASYLUM</span>
						</Link>

						{/* Toggle */}
						<div className="md:hidden">
							<button className="p-2 text-neutral-700 outline-none focus:outline-none border-none cursor-pointer"></button>
						</div>
					</div>
				</div>
				{/* Navbar Items & Btn */}
			</div>
		</nav>
	);
};

export default Navbar;
