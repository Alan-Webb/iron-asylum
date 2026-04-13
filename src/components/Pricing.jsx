import {useState} from "react";
import {GiMuscleUp} from "react-icons/gi";
import {IoClose} from "react-icons/io5";

const Pricing = () => {
	const [isAnnually, setIsAnnually] = useState(false);

	const plans = [
		{
			name: "Beginner Plan",
			monthly: 25,
			annually: 250,
			description: "Best for beginners to start their strength journey.",
			features: [
				{text: "Access to equipment", available: true},
				{text: "Personal training session", available: true},
				{text: "Dietary consultation", available: false},
				{text: "Access to classes", available: false},
			],
		},
		{
			name: "Premium Plan",
			monthly: 85,
			annually: 850,
			description: "Designed for advanced users with extra perks.",
			features: [
				{text: "Access to premium equipment", available: true},
				{text: "Weekly personal training", available: true},
				{text: "Dietary consultation", available: false},
				{text: "Access to premium classes", available: true},
			],
		},
		{
			name: "Pro Plan",
			monthly: 125,
			annually: 1250,
			description: "Ideal for professionals aiming for peak performance.",
			features: [
				{text: "Unlimited gym access", available: true},
				{text: "Daily personal training", available: true},
				{text: "Advanced dietary consultation", available: true},
				{text: "Exclusive premium classes", available: true},
			],
		},
	];

	return (
		<div className="bg-linear-to-b from-black via-gray-900 to-black py-12 px-4 md:px-8 lg:px-16">
			<div className="text-center mb-10">
				<h2 className="text-5xl font-extrabold  text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200">
					Pricing Plans
				</h2>
				<p className="text-lg text-gray-400 mt-3">
					Select the option that works for you
				</p>
			</div>
			{/* Toggle Btn */}
			<div className="flex justify-center gap-4 mb-12">
				<button
					onClick={() => setIsAnnually(false)}
					className={`px-6 py-3 rounded-full font-semibold text-lg cursor-pointer ${!isAnnually ? "bg-yellow-500 text-black" : "bg-gray-700 text-gray-300"}`}>
					Monthly
				</button>
				<button
					onClick={() => setIsAnnually(true)}
					className={`px-6 py-3 rounded-full font-semibold text-lg cursor-pointer ${isAnnually ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"}`}>
					Annually
				</button>
			</div>
			{/* Pricing Cards*/}
			<div className="flex flex-wrap justify-center gap-6 text-center">
				{plans.map((plan, index) => (
					<div
						key={index}
						className={`relative border-4 hover:border-yellow-500 max-w-sm w-full bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-500 ${index === 1 ? "hover:scale-105 border-4 bg-gray-700" : "border-2"} `}>
						<h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
						<p className="text-lg text-gray-400 mb-6">{plan.description}</p>
						<p className="text-4xl font-extrabold text-white mb-4">
							${isAnnually ? plan.annually : plan.monthly} {""}
							<span className="text-lg font-medium text-gray-400">
								/ {isAnnually ? "Per Year" : "Per Month"}
							</span>
						</p>
						<ul className="space-y-3 mb-6">
							{plan.features.map((feature, i) => (
								<li key={i} className="flex items-center gap-3">
									{feature.available ? (
										<span className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black">
											<GiMuscleUp />
										</span>
									) : (
										<span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
											<IoClose />
										</span>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pricing;
