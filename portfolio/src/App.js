import './App.css';
import AcademicJourney from './Components/education';
import Footer from './Components/footer';
import HomePage from './Components/homepage';
import TopBar from './Components/NavBar';
import Projects from './Components/projects';

function App() {
  return (
    <div>
      <TopBar/>
      <HomePage/>
      <AcademicJourney/>
      <Projects/>
      {/* <TechStack/> */}
      <Footer/>
    </div>
  );
}

export default App;
