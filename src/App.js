import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import banner from './images/banner.jpg';
import Menu from './Components/Menu/Menu';
import Course from './Components/Course/Course';
import data from './data/data.json'

  export const CoursePrice = createContext();
function App() {
  const [price, setPrice] = useState(0);
  
  
  return (
    
    <CoursePrice.Provider value={[price, setPrice]}>
      <div className="App">
   
     
        
      <div className="header">
      <img src={banner} alt=""/>
        
        <Menu></Menu>
        <Course></Course>
      </div>

    
      
      </div>
    </CoursePrice.Provider>
    
  );
}

export default App;
