import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Training from "./components/Training";
import Pricing from "./components/Pricing";
import Community from "./components/Community";
import Faq from "./components/Faq";
import Join from "./components/Join";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="max-w-360 mx-auto bg-page overflow-hidden relative">
			<Header />
			<Banner />
			<About />
			<Training />
			<Pricing />
			<Community />
			<Faq />
			<Join />
			<Footer />
		</div>
	);
};

export default App;
