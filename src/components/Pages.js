import React from 'react'
import {Routes, Route} from "react-router-dom"
import Main from './Main/Main'
import Results from './Results/Results'



const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route> 
      <Route path="/results/:result" element={<Results />}></Route> 
    </Routes>
  )
}

export default Pages