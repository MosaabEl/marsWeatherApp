import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css'; 
import LocationPage from './LocationPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';






const api = {
  key: "267acc5e5c8eb80248ece94a933425ac",
  base: "https://api.openweathermap.org/data/2.5/",
  city: 'London'
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const [isOpen, setIsOpen] = useState(false);

  const style = {
    overflow: "hidden",
    height: isOpen ? 230 : 0,
    transition: "1s"
  };



  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  
  
  return (
 


    <div className = "container">
      
      <div className="App">
        <a className="active">Mars Home Colony</a>
        <a className="iconMenu" onClick={() => setIsOpen(prev => !prev)} ></a>
      </div>
      <div id="menuItems" style = {style}>
        <div>
        <Router>
          <Link to = "/" >
            <a>Home Page</a>
          </Link>
          <Link to = "/LocationPage">
            <a >Locations</a>
          </Link>
          <Link to = "/GoogleMars">
            <a>Google Mars</a>
          </Link>
          <Link to = "/GoogleEarth">
            <a>Google Earth</a>
          </Link>
        </Router>
        
      </div>
     
      <div className="dataPanel">
      <h3>Forecast</h3>
        <div>
          <div className="dataSegment" id = "tempH">

          </div>
          <div className="dataSegment" id = "tempL">

          </div>
        </div>
        <div>
          <div className="dataSegment" id = "airP">

          </div>
          <div className="dataSegment" id = "windS">

          </div>
        </div>

       </div>
       {(typeof weather.main != "undefined") ? (
       <div className="dataValCont">
          <div className="dataVal">
            <b>{Math.round(weather.main.temp)}°C</b>
          </div>
          <div className="dataVal">
            <br/><br/><br/>
            <b>{Math.round(weather.main.temp)}°C</b>

          </div>
          <div className="dataVal">
            <br/><br/><br/>
            <b>{weather.main.temp}</b>

          </div>
          <div className ="dataVal">
            <br/><br/><br/>
            <b>{weather.main.temp}</b>

          </div>
       </div>
       ): ('')}
       <div className ="date">{dateBuilder(new Date())}</div>
      </div>
      </div>
   
    
  );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
