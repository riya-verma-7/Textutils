import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from  "react-router-dom" ;

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
        setAlert(null)
    },2000)
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey ";
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils-Dark Mode"

      // setInterval(()=>{
      //   document.title="TestUtils is Amazing "
      // },2000)
      // setInterval(()=>{
      //   document.title=" Install TestUtils "
      // },1500)

    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils-Light Mode"
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} about="about" />
      <Alert alert={alert} />
      <div className="container" my-3>
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
        {/* switch from react router site  */}
        {/* exact: exact matching , prevents partial matching  */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
