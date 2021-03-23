import './App.css';
import {useState} from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router} from 'react-router-dom'
import Slidebar from './components/Slidebar';
import MainSection from './components/MainSection';
import InfoSection from './components/Infosection';
import { aboutObj } from './components/Infosection/Data';
function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <Router>
      <Slidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <MainSection/>
      <InfoSection {...aboutObj}/>
    </Router>
  );
}

export default App;
