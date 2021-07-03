import './App.css';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Technologies from './Components/Technologies';
import WelcomeMsg from './Components/WelcomeMsg';

function App() {
  return (
    <div className='App'>
      <Header />
      <WelcomeMsg />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
