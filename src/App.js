import "./App.css";
import Home from "./pages/index";
import Signin from "./pages/signin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/Dolla_react" element={<Home />} exact/>
      <Route path="/signin" element={<Signin />}  exact/> 
      </Routes>
    </div>
  );
}

export default App;
