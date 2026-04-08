import Mot1 from "../assets/Mot1.webp";
import Mot2 from "../assets/Mot2.webp";
import Mot3 from "../assets/Mot3.webp";
import Mot4 from "../assets/Mot4.webp";
import Mot5 from "../assets/Mot5.webp";
import Mot6 from "../assets/Mot6.webp";

const trainers = [Mot1, Mot2, Mot3, Mot4, Mot5, Mot6];

const MeetOurTrainers = () => {
	return (
		<div
			className="bg-linear-to-b from-black via-gray-900 to-black py-12"
			id="trainers">
			{/* HEADING */}
			<div className="text-center mb-10 px-4">
				<h2 className="text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200">
					Meet Our Trainers
				</h2>
				<p className="text-sm md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
					Behind every breakthrough is a coach who knows how to unlock it. Our
					trainers are here to guide, challenge, and elevate you at every stage.
				</p>
			</div>
			{/* IMAGE GRID */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20">
				{trainers.map((imgSrc, index) => (
					<div
						key={index}
						className="group relative overflow-hidden rounded-xl shadow-lg bg-linear-to-br from-gray-800 to-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl">
						<img
							src={imgSrc}
							alt={`trainer ${index + 1}`}
							className="w-full aspect-3/2 object-cover transition-transform duration-200 ease-out group-hover:scale-110"
						/>
						{/* OVERLAY CONTENT */}
						<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
							<h3 className="text-lg md:text-xl font-bold text-white mb-1">
								Trainer {index + 1}
							</h3>
							<p className="text-xs md:text-sm text-gray-300">
								Certified Strength, Power & Endurance Coach
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MeetOurTrainers;
