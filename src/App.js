import Entertainment from "./Component/Entertainment";
import Home from "./Component/Home";
import Lifestyle from "./Component/Lifestyle";
import Navbar from "./Component/Navbar";
import Politics from "./Component/Politics";
import Sports from "./Component/Sports";
import Tech from "./Component/Tech";
import Topstories from "./Component/Topstories";
import World from "./Component/World";

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { BrowserRouter , Routes , Route } from "react-router-dom";




function App() {
  return (
    <div className="App">

      <BrowserRouter>
    <Navbar/>  

    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/Topstories" element={<Topstories/>}/>
    <Route path="/World" element={<World/>}/>
    <Route path="/Politics" element={<Politics/>}/>
    <Route path="/Tech" element={<Tech/>}/>
    <Route path="/Sports" element={<Sports/>}/>
    <Route path="/Entertainment" element={<Entertainment/>}/>
    <Route path="/Lifestyle" element={<Lifestyle/>}/>
  

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
