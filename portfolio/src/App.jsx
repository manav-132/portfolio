import React, { useEffect, useState } from 'react'
import {BallTriangle} from 'react-loader-spinner'
import Nav from './components/Nav'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },5000)
  },[])
  return (
    <>
    {
      loading
      ?
      <div className='bg-slate-900 h-[100vh] flex justify-center items-center'>
      <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#D97706"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
      </div>
      :
      <div className="bg-slate-900">
        <Nav/>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
    }
    </>
  )
}

export default App