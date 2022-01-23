import "./App.css";
import Header from "./Components/Header/Header";
import WelcomeMsg from "./Components/WelcomeMsg";
import Projects from "./Components/Projects/Projects";
import Art from "./Components/Art/Art";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className='App'>
			<Header />
			<WelcomeMsg />
			<Projects />
			<Art />
			<Footer />
		</div>
	);
}

export default App;
