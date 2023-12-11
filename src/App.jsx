import "./App.css";
import {Route,Routes } from "react-router-dom";
import Home from "./components/Home";   
import Header from "./header";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <div>

    <Header/>
    
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/browse jobs" element={<Jobs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
   
    </div>

  
  )
}

export default App;
