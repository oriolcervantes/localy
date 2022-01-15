import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapView from "./components/MapView";
import Home from './components/Home'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/map" element={<MapView />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
