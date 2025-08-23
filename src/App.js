import { BrowserRouter, Routes, Route, Link } from "react-router"
import './App.css'
import MechanicalEngineering from "./Components/MechanicalEngineering"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mechanical-engineering-portfolio" element={ <MechanicalEngineering /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

