const Hero = () => {
	return (
		<div className="relative h-screen overflow-hidden md:h-100vh">
			{/* BG Image Slider + Overlay */}
			<div className="absolute inset-0 z-0">
				{/* Overlay ?check gradient? */}
				<div className="absolute inset-0 bg-linear-to-br from-black/80 via-black-70 to-black/40 z-10"></div>

				{/* Image Slider */}
				<div
					className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-2000`}></div>

				{/* Subtitle Grid Overlay */}
				<div className="absolute inset-0 z-10 bg-grid-pattern opacity-10"></div>

				{/* Content */}
				<div className="relative z-20 flex items-center justify-center h-full">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
						<div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
							<div
								className={`max-w-2xl transition-all duration-1000 transform`}>
								{/* Heading */}
								<h1 className="text-7xl font-bold text-white mb-8 leading-tight uppercase">
									<span className="block">Upgrade</span>
									<span className="block">
										Your{" "}
										<span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-300">
											Droid
										</span>
									</span>
									<span className="block">Upgrade</span>
									<span className="block">
										Your{" "}
										<span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-300">
											Life
										</span>
									</span>
								</h1>
								{/* Tag Line */}
								<p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
									Join IRON ASYLUM and experience premium droid maintenance with
									state-of-the-art facilities and a support team of specialists
									committed to excellence.
								</p>
								{/* Buttons */}
								<div className="flex flex-col sm:flex-row gap-5">
									{/* Classes Btn */}
									<a
										href="#classes"
										className="group relative overflow-hidden rounded-full bg-red-600 px-8 py-4 text-white font-medium text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:translate-y-0.5 hover:shadow-lg">
										<span className="relative z-10">Explore Classes</span>
										<div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-100 transition-all duration-300 origin-left"></div>
									</a>
									{/* Pricing Btn */}
									<a
										href="#pricing"
										className="group relative overflow-hidden rounded-full border-2 border-white px-8 py-4 text-white font-medium text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:translate-y-0.5 hover:shadow-lg">
										<span className="relative z-10">View Membership</span>
										<div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-100 transition-all duration-300 origin-left"></div>
									</a>
								</div>

								<div className="mt-16 flex items-center space-x-8">
									<div className="flex -space-x-3">
										{/* Map Method */}
										<div className="w-10 h-10 border-2 border-white overflow-hidden ring-2 ring-red-500/20 shadow-lg">
											<img
												src=""
												alt=""
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
