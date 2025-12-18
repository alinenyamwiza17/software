import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Home from './include/Home.jsx';
import About from './include/About.jsx';
import NavBar from './include/NavBar.jsx';
import Contact from './include/Contact.jsx';
import Login from './include/Login.jsx';
import Registration from './include/Registration.jsx';
import './App.css';

const App=()=>{
  return(
    <div ClassName="App">
    ALINE

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />}/>
         <Route path="/About" element={<About />} /> 
           <Route path="/Contact" element={<Contact />} />
           <Route path="/Registration" element={<Registration />}/>
           <Route path="/NavBar" element={<NavBar />}/>
           </Routes>
           </Router>
           </div>
  )
}
export default App;
