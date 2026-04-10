const Pricing = () => {
	const plans = [
		{
			name: "Beginner Plan",
			monthly: 500,
			yearly: 5000,
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
			monthly: 800,
			yearly: 8500,
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
			monthly: 1000,
			yearly: 10800,
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
			</div>
		</div>
	);
};

export default Pricing;
