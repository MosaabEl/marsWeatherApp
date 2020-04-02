import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css'; 
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Iframe from 'react-iframe'




const api = {
  key: "267acc5e5c8eb80248ece94a933425ac",
  base: "https://api.openweathermap.org/data/2.5/",
  city: 'London'
}

function GoogleMars() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const [isOpen, setIsOpen] = useState(false);

  const style = {
    overflow: "hidden",
    height: isOpen ? 216 : 0,
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
 


    <div className="container">
      <div className="menunav">
      <a className="active">Google Mars</a>
      <a className="iconBack" onclick=""></a>
      <div>
        
      <Iframe url="https://www.google.com/mars/"
      width="412px"
      height="656px"
      display="initial"
      position="relative"/>
      </div>
    </div>
    </div>
   
    
  );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<GoogleMars />, rootElement);
export default GoogleMars;
