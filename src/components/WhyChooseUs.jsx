import Wcu1 from "../assets/Wcu1.webp";

const businessInfo = [
	{
		title: "Expert Trainers",
		text: "Where knowledge meets grit and consistency, our elite coaches sculpt more than muscle, they refine technique, sharpen mindset, and turn ambition into measurable progress.",
	},
	{
		title: "Modern Equipment",
		text: "Our gym is engineered for progress, where cutting-edge machines and premium free weights become the tools that build strength, power and endurance.",
	},
	{
		title: "Award Winning",
		text: "Recognized for excellence and built on results, our reputation is earned through the transformations we deliver and the standards we refuse to lower.",
	},
	{
		title: "Community Driven",
		text: "More than a gym, together we are a tribe, a relentless clan of power lifters, bodybuilders, and go-getters who push harder, lift heavier, and rise together.",
	},
];

const WhyChooseUs = () => {
	return (
		<div className="bg-linear-to-b from-black via-gray-800 to-black py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* HEADING */}
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200 text-transparent bg-clip-text">
						Why Choose Us
					</h2>
					<p className="mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-light">
						Build the strength and power to shatter limits, backed by a
						community that won’t let you settle for average.
					</p>
				</div>
				{/* CONTENT */}
				<div className="flex flex-col lg:flex-row items-start gap-12">
					{/* Left Section */}
					<div className="lg:w-1/2 w-full">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 sm:-ml-4 lg:-ml-6 xl:-ml-8">
							{businessInfo.map((item, index) => (
								<div
									key={index}
									className="flex flex-col justify-center items-center space-x-4 p-6 bg-linear-to-r from-gray-200 via-gray-300 to-gray-100 text-gray-800 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
									<h4 className="font-extrabold text-lg sm:text-xl text-center pb-2">
										{item.title}
									</h4>
									<p className="text-sm sm:text-md font-light text-center">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
					{/* Right Section */}
					<div className="lg:w-1/2 w-full">
						<img
							src={Wcu1}
							alt="Endurance training"
							loading="lazy"
							className="w-full h-full object-cover rounded-lg shadow-lg border border-gray-700"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
