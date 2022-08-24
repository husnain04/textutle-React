// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Forms from './components/Forms';
// import Product from './components/Product';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import Alerts from './components/Alerts';

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert] = useState(null);
  const toggleMode= () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.background='#16368a';
      showAlert('Dark Mode Enabled','Success')
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Enabled','Success')

    }
  }
  const showAlert= (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)

  }

  return (
    <>
     {/* <Router> */}
     <Navbar tital="Haji Traders" about="About us" mode={mode} toggleMode={toggleMode} />
     <Alerts alert={alert} ></Alerts>
     <div className="container">
     <Forms tital_1="Enter Text 01 To Analyze" mode={mode} toggleMode={toggleMode} /*tital_2="Enter Text 02 To Analyze"*/ />
     </div>
     {/* <Switch>
        <Route exect path="/">
        </Route>
        <Route path="/product">
          <Product/>
        </Route>
          <Route path="/about">
        <About/>
        </Route>
      </Switch>
     
     </Router> */}
    </>
  );
}

export default App;
