import './App.css';
import Navbar from './component/Navbar';
// import { Routes, Route } from "react-router-dom";
 import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
      </Router>
       {/* <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes> */}
      
    </div>
  );
}

export default App;

