import {Link} from "react-scroll";
import {useState} from "react";
import {
	FaHome,
	FaRegUserCircle,
	FaCommentDots,
	FaEnvelope,
	FaBars,
} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full bg-linear-to-r from-black via-gray-900 to-black border-b border-stone-300 backdrop-blur-md shadow-lg z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
				{/* Logo */}
				<div className="flex space-x-4 cursor-pointer text-2xl font-bold text-yellow-500 uppercase">
					<img
						src="/src/assets/logo.svg"
						alt="iron asylum logo"
						className="bg-white rounded-full border border-white w-8"
					/>
					<span className="text-white">Iron</span>
					Asylum
				</div>
				{/* Desktop Links */}
				<div className="hidden md:flex gap-8 items-center text-white font-semibold">
					{/* Home */}
					<Link
						to="home"
						smooth={true}
						duration={500}
						className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
						<FaHome />
						Home
					</Link>
					{/* Trainers */}
					<Link
						to="trainers"
						smooth={true}
						duration={500}
						className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
						<FaRegUserCircle />
						Trainers
					</Link>
					{/* Opinions */}
					<Link
						to="opinions"
						smooth={true}
						duration={500}
						className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
						<FaCommentDots />
						Opinions
					</Link>
					{/* Contact */}
					<Link
						to="contact"
						smooth={true}
						duration={500}
						className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
						<FaEnvelope />
						Contact
					</Link>
				</div>
				{/* Mobile Toggle */}
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle Menu"
					className="md:hidden text-2xl text-white hover:text-yellow-500 focus:outline-none cursor-pointer">
					{menuOpen ? <IoMdClose /> : <FaBars />}
				</button>
			</div>
			{/* Mobile Links */}
			{menuOpen && (
				<div className="flex flex-col md:hidden h-screen bg-gray-800 text-5xl text-white uppercase items-center gap-8 py-24">
					{/* Home */}
					<Link
						to="home"
						smooth={true}
						duration={500}
						onClick={() => setMenuOpen(false)}
						className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
						Home
					</Link>
					{/* Trainers */}
					<Link
						to="trainers"
						smooth={true}
						duration={500}
						onClick={() => setMenuOpen(false)}
						className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
						Trainers
					</Link>
					{/* Opinions */}
					<Link
						to="opinions"
						smooth={true}
						duration={500}
						onClick={() => setMenuOpen(false)}
						className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
						Opinions
					</Link>
					{/* Contact */}
					<Link
						to="contact"
						smooth={true}
						duration={500}
						onClick={() => setMenuOpen(false)}
						className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
						Contact
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
