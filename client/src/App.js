import './App.css';
import { LandingPage, Signup } from './pages';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import NewListing from './pages/content/NewListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/create-listing' element={<NewListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
