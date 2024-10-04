import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DuoProvider } from './components/DuolingoContext';
import Landing_page from './components/Landing_page';
import Want_to_learn from './components/Want_to_learn';
function App() {
  return (
    <DuoProvider>
    <div className="App">
      <Router>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing_page />} />
          {/* <Route path="/learnpage" element={<Want_to_learn />} /> */}
         
        </Routes>
   
      </Router>
    </div>
    </DuoProvider>
  );
}

export default App;
