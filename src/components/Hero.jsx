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
								<h1 className="text-7xl font-bold text-white mb-8 leading-tight uppercase mt-26">
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

										<div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden ring-2 ring-red-500/20 shadow-lg">
											<img
												src=""
												alt=""
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
									<div className="text-white font-bold text-lg">
										1000 + members
									</div>
									<div className="text-red-300 text-sm">
										Join Our Droid Symbiosis Community
									</div>
								</div>
							</div>
						</div>
						{/* Animated Stats */}
						<div
							className={`w-full max-w-md transition-all duration-100 delay-500 transform`}>
							<div className="bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden hidden lg:block">
								{/* Decorative Elements */}
								<div className="absolute top-0 right-0 w-40 h-40 bg-red-60/20 rounded-full blur-2xl transform translate-x-20 -translate-y-20"></div>
								<div className="absolute bottom-0 left-0 w-32 h-32 bg-red-400/20 rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>

								{/* Content */}
								<div className="relative z-10">
									<div className="flex items-center justify-between mb-8">
										<h3 className="text-2xl font-bold text-white">
											Why Choose Us?
										</h3>
										<div className="flex space-x-1">
											<span className="h-2 w-2 rounded-full bg-red-400"></span>
											<span className="h-2 w-2 rounded-full bg-white/50"></span>
											<span className="h-2 w-2 rounded-full bg-white/50"></span>
										</div>
									</div>

									<div className="space-y-8">
										{/* Bullet Point 1 */}
										<div className="flex items-start gap-4">
											{/* Bullet Point 1 */}
											<div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
												<svg
													className="w-6 h-6 text-red-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
													/>
												</svg>
											</div>
											<div>
												<h3 className="text-white font-semibold text-lg">
													Cutting Edge Equipment
												</h3>
												<p className="text-gray-300 text-sm mt-1">
													Access to the latest in Droid maintenance and upgrade
													tools in the industry
												</p>
											</div>
										</div>

										{/* Bullet Point 2 */}
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
												<svg
													className="w-6 h-6 text-red-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
													/>
												</svg>
											</div>
											<div>
												<h3 className="text-white font-semibold text-lg">
													Expert Trainers
												</h3>
												<p className="text-gray-300 text-sm mt-1">
													Have your droid experience the best code upgrades and
													cleaners in the industry
												</p>
											</div>
										</div>

										{/* Bullet Point 3 */}
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
												<svg
													className="w-6 h-6 text-red-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
													/>
												</svg>
											</div>
											<div>
												<h3 className="text-white font-semibold text-lg">
													Bonding Classes
												</h3>
												<p className="text-gray-300 text-sm mt-1">
													Be in harmony with you beloved droid. Make them feel
													like family
												</p>
											</div>
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
