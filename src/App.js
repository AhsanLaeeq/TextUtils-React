import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, Setalert] = useState();
  const showalert =(message,type)=>{
    Setalert({
      type:type,
      message:message
  
  })
   setTimeout(() => {
    Setalert(null);
 
   }, 2000);
  }



    const togglemode=() =>{
      if (mode=== 'light') {
        setMode('dark');
        document.body.style.backgroundColor="#00416A"
        showalert('Success','Darkmode Activated');
      }
      else{
        setMode('light');
        document.body.style.backgroundColor="white"
        showalert('Success','Lightmode Activated');
      }
    }

    
  








  return (
   <>
   {/* <Router> */}
  <Navbar aq='Home' mode={mode} togglemode={togglemode} />
  <Alert alert={alert}/>
  <div className='container  my-3'>
  <Textform heading = 'Analyze Youe Text' showalert={showalert} mode={mode} togglemode={togglemode}/>
  {/* <Routes> */}
    {/* <Route path="/About" element={<About/>} />  */}
    {/* <Route path="/*" element={ */}
    
      {/* // } />  */}
    {/* </Routes>   */}
  </div>
  {/* </Router> */}

  
  
  
 


   </>
  );
}
export default App;
