import React from "react";
import Navbar from "./Navbar.jsx";
import Services from "./Aside/Services.jsx";
import { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom"; 
const History = () => { 
    return(
        <>
      <Navbar />
      <section className="flex">
        <Services />
       <HistorySection/>
      </section>
    </>
    )
}
const HistorySection = () => {
    return(
        <>
        <div>Say my name</div>
        </>
    )
}