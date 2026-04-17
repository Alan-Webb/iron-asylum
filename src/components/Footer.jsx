import {Link} from "react-scroll";
import {FaFacebook, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-linear-to-b from-black via-gray-900 to-black text-white">
			<div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* BRAND SECTION */}
				<div>
					<h1 className="text-3xl bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200 font-extrabold tracking-wider">
						Iron Asylum
					</h1>
					<p className="text-gray-400 mt-4 leading-relaxed">
						Turning grit into greatness for over 25 years. Join us to achieve
						your strength and power goals.
					</p>
				</div>
				{/* NAVIGATION LINKS */}
				<div>
					<h2 className="text-2xl bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200 font-semibold">
						Quick Links
					</h2>
					<ul className="mt-4 space-y-2">
						{/* Home */}
						<li>
							<Link
								to="home"
								className="cursor-pointer hover:underline hover:text-yellow-500">
								Home
							</Link>
						</li>
						{/* Trainers */}
						<li>
							<Link
								to="trainers"
								className="cursor-pointer hover:underline hover:text-yellow-500">
								Trainers
							</Link>
						</li>
						{/* Opinions */}
						<li>
							<Link
								to="opinions"
								className="cursor-pointer hover:underline hover:text-yellow-500">
								Opinions
							</Link>
						</li>
						{/* Contact */}
						<li>
							<Link
								to="contact"
								className="cursor-pointer hover:underline hover:text-yellow-500">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				{/* SOCIAL LINKS */}
				<div>
					<h2 className="text-2xl bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200 font-semibold">
						Follow Us
					</h2>
					<div className="flex mt-4 space-x-4">
						{/* Facebook */}
						<a href="#">
							<FaFacebook className="w-8 h-8 text-blue-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110" />
						</a>
						{/* Twitter */}
						<a href="#">
							<FaSquareXTwitter className="w-8 h-8 text-blue-600 text-2xl sm:text-3xl transition-transform transform hover:scale-110" />
						</a>
						{/* Instagram */}
						<a href="#">
							<FaInstagramSquare className="w-8 h-8 text-red-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110" />
						</a>
						{/* Linkedin */}
						<a href="#">
							<FaLinkedin className="w-8 h-8 text-blue-700 text-2xl sm:text-3xl transition-transform transform hover:scale-110" />
						</a>
					</div>
				</div>
			</div>
			{/* COPYRIGHT */}
			<div className="bg-gray-900 text-gray-500 text-center py-4">
				<p>&#169; 2025 Iron Asylum. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
