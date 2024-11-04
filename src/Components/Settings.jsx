import React from "react"
import Navbar from "./Navbar.jsx";
import Services from "./Aside/Services.jsx";
import { useState } from "react";
import {useNavigate } from "react-router-dom"
const Settings = () =>{
    
    return(
          <>
        <Navbar />
        <section className="flex">
          <Services />
          <SettingPageFunctionalities />
        </section>
      </>
    )
}

export default Settings;

const SettingPageFunctionalities =()=>{
        const navigate=useNavigate();
        function handleMemberButton(){
            navigate("/settings/Organization/members")
        }
    return(
        <>
        <div className="w-full">
        <div className="h-20 border-b-slate-100 border-b-2 w-full ">
            <h5 className="font-semibold text-xl ml-10 mt-1">Settings</h5>
        <p className="ml-5">Manage organization settings and members.</p>
        </div>
        <br/>
        <div>
            <div className="flex  ml-10 mr-10 bg-slate-100 h-11  rounded-md">
            <div className="rounded-md w-1/2 flex bg-white items-center m-1">  <button className=" w-full ">Organization</button></div> 
               <div className="rounded-md w-1/2 flex  m-1 items-center"> <button className=" w-full" onClick={handleMemberButton}>Members</button></div>
            </div>
            <div className="min-h-40 border mt-3 ml-10 mr-10 rounded-md">
            <div className="flex gap-72 mt-3 items-center border-b-2 h-11 border-b-slate-100 rounded-md">

                <div className="ml-10 mr-10   ">
                    Organization ID
                </div>
                <div className="ml-10 mr-10">
                    Organization Name
                </div>
            </div>
                <div className="flex justify-center items-center font-bold h-28">API ID GOES HERE </div>
            </div>
        </div>
        </div>
        </>
    )
}