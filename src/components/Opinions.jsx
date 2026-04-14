import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";

const Opinions = () => {
	const reviews = [
		{
			name: "IronForge",
			text: "From day one, the trainers pushed me past limits I didn’t know I had. Every session feels purposeful, and the results speak for themselves.",
			stars: 5,
			color: "text-blue-500",
		},
		{
			name: "Titan Strength",
			text: "Top-tier equipment and an atmosphere that just fuels intensity. You walk in focused and leave feeling unstoppable.",
			stars: 4.7,
			color: "text-purple-500",
		},
		{
			name: "Core Elite",
			text: "Great coaching and solid programming. I’ve seen real progress, though peak hours can get a bit busy.",
			stars: 4.2,
			color: "text-green-500",
		},
		{
			name: "Powerhouse",
			text: "Hands down the best gym I’ve trained at. The energy, the people, the results — everything just clicks.",
			stars: 5,
			color: "text-yellow-500",
		},
		{
			name: "Steel Nation",
			text: "The community here keeps me coming back. Everyone’s locked in, supportive, and pushing for more.",
			stars: 4.6,
			color: "text-red-500",
		},
		{
			name: "Alpha Lab",
			text: "Clean, modern, and built for serious training. It’s not just a gym, it’s where progress is expected.",
			stars: 4.8,
			color: "text-indigo-500",
		},
	];

	return (
		<div
			id="opinions"
			className="bg-linear-to-b from-black via-gray-900 to-black min-h-screen py-12 px-6">
			{/* HEADING */}
			<div className="text-center mb-10">
				<h2 className="text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200">
					Community Opinion
				</h2>
				<p className="text-gray-400 text-lg mt-2">What Our Clients Say</p>
			</div>
			{/* REVIEWS */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
				{reviews.map((review, index) => (
					<div
						key={index}
						className="bg-linear-to-br from-gray-800 to-gray-900 border border-yellow-500 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
						<ImQuotesLeft className={`${review.color} text-3xl`} />
						<h3 className="text-xl font-semibold text-white mt-4">
							{review.name}
						</h3>
						<div className="flex items-center mt-2 mb-4 text-yellow-400 text-xl">
							{Array.from({length: Math.floor(review.stars)}).map((_, i) => (
								<FaStar key={i} />
							))}
							{review.stars % 1 !== 0 && <FaStarHalfAlt />}
						</div>
						<p className="text-gray-400 text-sm italic">{review.text}</p>
						<ImQuotesRight
							className={`${review.color} text-3xl float-right mt-4`}
						/>
					</div>
				))}
			</div>
			{/* NAVIGATE REVIEWS */}
			<div className="mt-10 flex flex-col items-center space-y-6">
				<div className="flex items-center space-x-4">
					<button className="p-3 bg-linear-to-r from-gray-700 to-gray-800 text-yellow-500 rounded-full shadow hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-900 transition-transform duration-300 transform hover:scale-110 cursor-pointer">
						<CircleChevronLeft />
					</button>
					<button className="p-3 bg-linear-to-r from-gray-700 to-gray-800 text-yellow-500 rounded-full shadow hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-900 transition-transform duration-300 transform hover:scale-110 cursor-pointer">
						<CircleChevronRight />
					</button>
				</div>
				{/* ADD REVIEW */}
				<button className="bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full shadow-xl transform hover:scale-110 transition-transform duration-300 cursor-pointer">
					Add A Review
				</button>
			</div>
		</div>
	);
};

export default Opinions;
