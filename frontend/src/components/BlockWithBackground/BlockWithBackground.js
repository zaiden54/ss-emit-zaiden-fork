import React from "react";
import "./BlockWithBackground.css"
import { Navbar } from "../Navbar";

export const BlockWithBackground = () => {
  return (
    <div className="wrapper" >
        <Navbar className='navBar' />
        <div className="gradient"></div>
    </div>
  );  
};