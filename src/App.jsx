import './App.css'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import React from "react"
import Home from "./Components/Home.jsx"
import Parse from "./Components/Parse.jsx"
import Settings from "./Components/Settings.jsx"
import OragnizationMembers from "./Components/OragnizationMembers.jsx"
import ApiKey from "./Components/ApiKey"

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/parse' element={<Parse />}/>
       <Route path='/settings' element={<Settings />}/>
       <Route path='/settings/Organization/members' element={<OragnizationMembers/>} />
       <Route path='/Project/uuid/ApiKey' element={<ApiKey />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
