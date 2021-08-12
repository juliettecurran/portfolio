import "./App.css";
import Header from "./Components/Header";
import WelcomeMsg from "./Components/WelcomeMsg";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeMsg />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
