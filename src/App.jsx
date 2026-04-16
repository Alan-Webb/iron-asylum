import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import MeetOurTrainers from "./components/MeetOurTrainers";
import Pricing from "./components/Pricing";
import Opinions from "./components/Opinions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<WhyChooseUs />
			<MeetOurTrainers />
			<Pricing />
			<Opinions />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
