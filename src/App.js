import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DuoProvider } from './components/DuolingoContext';
import LandingPage from './components/LandingPage';
import WantToLearn from './components/WantToLearn';
function App() {
  return (
    <DuoProvider>
    <div className="App">
      <Router>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/learnpage" element={<WantToLearn />} /> */}
         
        </Routes>
   
      </Router>
    </div>
    </DuoProvider>
  );
}

export default App;
