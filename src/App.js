import './App.css';
import Home from './pages/index';
// import Sidebar from './component/Sidebar/index';
// import { Routes, Route } from "react-router-dom";
 import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Router>
        <Home />
      </Router>
       {/* <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes> */}
      
    </div>
  );
}

export default App;

