import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Signin from "./signin";
import Signup from "./signup";
import Postajob from "./users/Postajob";
import Clothes  from "./users/Clothes";
import Makerslist from "./users/Makerslist";
import  Jobreq from "./Makers/Jobreq";
import Adddesign from "./Makers/Adddesign";
import { Aftersigninmaker } from "./Aftersigninmaker";
import Aftersigninuser from "./Aftersigninuser";
import Orders from "./Makers/Orders";





const Routing = () =>{
    return(
        <BrowserRouter>
        
           <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Signin/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/postajob" element={<Postajob/>}/>
                <Route path="/clothes" element={<Clothes/>}/>
                <Route path="/jobreq" element={<Jobreq/>}/>
                <Route path="/adddesign" element={<Adddesign/>}/>
                <Route path="/maker" element={<Aftersigninmaker/>}/>
                <Route path="/makers" element={<Aftersigninuser/>}/>
                <Route path="/user" element={<Aftersigninuser/>}/>
                <Route path="/logout" element={<Signin/>}/>
                <Route path="/orders" element={<Orders/>}/>


            </Routes>
        </BrowserRouter>
    )
}
export default Routing;