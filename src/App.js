import './App.css';
import Header from './Components/Header';
import WelcomeMsg from './Components/WelcomeMsg';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

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
