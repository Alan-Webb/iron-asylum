import {
	FaDumbbell,
	FaFacebook,
	FaInstagramSquare,
	FaThumbsUp,
	FaUsers,
} from "react-icons/fa";
import {GiWeight, GiDiploma} from "react-icons/gi";
import {FaHeartCirclePlus, FaSquareXTwitter} from "react-icons/fa6";
import {PiMedalFill} from "react-icons/pi";
import BannerImage from "../assets/BannerImage.webp";

const Hero = () => {
	return (
		<div>
			{/* BANNER */}
			<div
				id="home"
				className="h-[80vh] bg-black overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between">
				{/* CONTENT */}
				<div className="relative z-10 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white bg-linear-to-r from-black via-transparent h-full w-full lg:w-1/2">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6 animate-slideInLeft text-center lg:text-left">
						Turn grit into <span className="text-yellow-500">greatness</span>
					</h1>
					<p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 animate-slideInLeft delay-200 text-center lg:text-left">
						Focused on strength and power, our platform delivers focused
						training programs, expert guidance, and proven methods to help you
						succeed.
					</p>
					{/* ICONS */}
					<div className="flex flex-wrap sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fadeIn delay-400">
						{/* Strength */}
						<div className="flex items-center gap-3 group">
							<FaDumbbell className="text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
							<span className="text-sm sm:text-lg font-medium">Strength</span>
						</div>
						{/* Power */}
						<div className="flex items-center gap-3 group">
							<GiWeight className="text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
							<span className="text-sm sm:text-lg font-medium">Power</span>
						</div>
						{/* Endurance */}
						<div className="flex items-center gap-3 group">
							<FaHeartCirclePlus className="text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
							<span className="text-sm sm:text-lg font-medium">Endurance</span>
						</div>
					</div>
					{/* SOCIAL MEDIA ICONS */}
					<div className="flex gap-6 mt-4 mb-8 animate-fadeIn delay-400 justify-center lg:justify-start">
						{/* Facebook */}
						<a
							href="#"
							aria-label="Facebook"
							className="text-blue-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110">
							<FaFacebook />
						</a>
						{/* Instagram */}
						<a
							href="#"
							aria-label="Instagram"
							className="text-red-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110">
							<FaInstagramSquare />
						</a>
						{/* Twitter */}
						<a
							href="#"
							aria-label="Twitter"
							className="text-blue-600 text-2xl sm:text-3xl transition-transform transform hover:scale-110">
							<FaSquareXTwitter />
						</a>
					</div>
				</div>
				{/* BACKGROUND IMAGE */}
				<div className="h-full lg:w-1/2">
					<img
						src={BannerImage}
						alt="bodybuilder flexing"
						className="h-full w-full object-contain opacity-80 animate-zoomInSlow"
					/>
				</div>
			</div>
			{/* STATS */}
			<div className="bg-black py-8 text-white border-y border-yellow-500">
				<div className="container mx-auto px-4 sm:px-8 text-center">
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12">
						{/* Experience */}
						<div className="flex flex-col items-center gap-4 animate-fadeIn delay=200">
							<PiMedalFill className="text-yellow-500 text-3xl sm:text-4xl" />
							<span className="text-sm sm:text-lg md:text-xl font-semibold">
								15+ Years of Experience
							</span>
						</div>
						{/* Trainers */}
						<div className="flex flex-col items-center gap-4 animate-fadeIn delay=400">
							<GiDiploma className="text-yellow-500 text-3xl sm:text-4xl" />
							<span className="text-sm sm:text-lg md:text-xl font-semibold">
								100+ Certified Trainers
							</span>
						</div>
						{/* Clients */}
						<div className="flex flex-col items-center gap-4 animate-fadeIn delay=800">
							<FaUsers className="text-yellow-500 text-3xl sm:text-4xl" />
							<span className="text-sm sm:text-lg md:text-xl font-semibold">
								2500 + Satisfied Clients
							</span>
						</div>
						{/* Feedback */}
						<div className="flex flex-col items-center gap-4 animate-fadeIn delay=600">
							<FaThumbsUp className="text-yellow-500 text-3xl sm:text-4xl" />
							<span className="text-sm sm:text-lg md:text-xl font-semibold">
								98% Positive Feedback
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
