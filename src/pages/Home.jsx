import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<div className="w-full min-h-screen bg-neutral-950 flex flex-col">
			{/* Hero + Navbar Section*/}
			<div className="w-full md:h-screen h-auto flex flex-col relative space-y-0 bg-cover bg-center bg-[url('./assets/HeroImg.webp')] bg-no-repeat">
				{/* Overlay */}
				<div className="w-full h-full absolute top-0 left-0 bg-linear-to-r from-neutral-950/80 to-neutral-950/50"></div>
				{/* Navbar */}
				<Navbar />
				{/* Hero */}
			</div>
			{/* Other Sections */}
			<div className="md:space-y-24 space-y-14"></div>
		</div>
	);
};

export default Home;
