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
								<h1 className="text-7xl"></h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
