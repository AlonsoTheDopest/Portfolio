import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'
import Home from "./Components/Home"
import MechanicalEngineering from "./Components/MechanicalEngineering"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/mechanical-engineering-portfolio" element={ <MechanicalEngineering /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

