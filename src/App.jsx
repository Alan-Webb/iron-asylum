import {BrowserRouter as Router} from "react-router";
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<Router>
				<main className="w-full min-h-screen flex flex-col bg-neutral-950">
					{/* Home */}
					<Home />
					{/* Footer */}
				</main>
			</Router>
		</>
	);
};

export default App;
