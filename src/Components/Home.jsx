import React from 'react'
import Navbar from "./Navbar.jsx"
import Services from "./Aside/Services.jsx"
import Landing from "./Landing.jsx"
const  Home=()=> {
  return (
    <>
      <Navbar/>
      <section className='flex'>
      <Services/>
      <Landing />
      </section>
    </>
  )
}

export default Home