import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Header from './Components/Header'
import ProjectsSection from './Components/ProjectsSection/'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mechanical-engineering-portfolio" element={ <> <Header /><ProjectsSection /><Footer /></> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

