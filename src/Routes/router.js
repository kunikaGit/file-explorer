import React from "react";
import config from "../config/config";
import Home from "../components/home";
import 'bootstrap/dist/css/bootstrap.min.css';


 import { BrowserRouter, Route, Routes } from "react-router-dom";


 const RouterComponent =()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path={`${config.baseUrl}`} element={<Home/>}/>
        </Routes>
     </BrowserRouter>
    )
 }
 export default RouterComponent;
