import Mot1 from "../assets/Mot1.webp";
import Mot2 from "../assets/Mot2.webp";
import Mot3 from "../assets/Mot3.webp";
import Mot4 from "../assets/Mot4.webp";
import Mot5 from "../assets/Mot5.webp";
import Mot6 from "../assets/Mot6.webp";

const trainerProfiles = [
	{
		name: "Amanda Lang",
		description: "Power and Strength",
		imgSrc: Mot1,
	},
	{
		name: "Asim Patel",
		description: "Power and Strength",
		imgSrc: Mot2,
	},
	{
		name: "Chris McKenzie",
		description: "Endurance",
		imgSrc: Mot3,
	},
	{
		name: "Brendon Williams",
		description: "Strength",
		imgSrc: Mot4,
	},
	{
		name: "Clair Maeda",
		description: "Strength and Endurance",
		imgSrc: Mot5,
	},
	{
		name: "Peter O'Reilly",
		description: "Strength and Power",
		imgSrc: Mot6,
	},
];

const Trainers = () => {
	return (
		<div
			className="bg-linear-to-b from-black via-gray-900 to-black py-12"
			id="trainers">
			{/* HEADING */}
			<div className="text-center mb-10 px-4">
				<h2 className="text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200 mt-14">
					Meet Our Trainers
				</h2>
				<p className="text-sm md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto py-4">
					Behind every breakthrough is a coach who knows how to unlock it. Our
					trainers are here to guide, challenge, and elevate you at every stage.
				</p>
			</div>
			{/* IMAGE GRID */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 px-4 md:px-10 lg:px-20">
				{trainerProfiles.map((trainer, index) => (
					<div
						key={index}
						className="group relative overflow-hidden rounded-xl shadow-lg bg-linear-to-br from-gray-800 to-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl">
						<img
							src={trainer.imgSrc}
							alt={trainer.name}
							className="w-full aspect-3/2 object-cover transition-transform duration-200 ease-out group-hover:scale-110"
						/>
						{/* OVERLAY CONTENT */}
						<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
							<h3 className="text-lg md:text-xl font-bold text-white mb-1">
								{trainer.name}
							</h3>
							<p className="text-xs md:text-sm text-gray-300">
								{trainer.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Trainers;
