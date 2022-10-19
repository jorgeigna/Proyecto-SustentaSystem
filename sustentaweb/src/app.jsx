import React, {Fragment} from "react";
import css from "./css/app.css"
import  {hoja1}  from "./Component/hoja1";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App()  {
    
    return(
    hoja1()   
    )
  }