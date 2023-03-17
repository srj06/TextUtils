 
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes
} from "react-router-dom";
 
function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=>{
            setAlert(null);
        }, 1000)
  }
  const toggleMode = ()=>{
    if(mode ==='light'){
    setMode('dark')
    document.body.style.backgroundColor = "#07312f";
    showAlert("Dark mode enabled", "success");
  }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");


    }

  }
  return (
     <>
      {/* /* <Navbar title= "TextUtils" aboutUs="About TextUtils"/>  */}
   
    {/* <About/>  */}
    
    
    <Router> 
    <Navbar title ="TextUtils" mode ={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/> 
    

    <div className='container my-3'>
    <Routes>
          <Route exact path="/about" element={<About />} />
            
        
          
          <Route exact path="/" element={<TextForm heading = "Enter the text to analyze below" mode ={mode}/>} />
          {/* <TextForm heading = "Enter the text to analyze below" mode ={mode}/> */}
         
          {/* <TextForm heading = "Enter the text to analyze below" mode ={mode}/> */}
        </Routes>
        </div>
      </Router>



     
      </>
       
     
  );
  }
  export default App;

 
