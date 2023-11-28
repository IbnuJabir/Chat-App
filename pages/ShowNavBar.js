//ShowNavBar.js

import {useLocation} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
export default function ShowNavBar({ children }){
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(true);
  useEffect(() => { 
    if(location.pathname === '/InChat'){
      setIsNavVisible(false)
    }else{
      setIsNavVisible(true)
    }
  },[location])
  
  return (
    <div> {isNavVisible && children} </div>
    );
}