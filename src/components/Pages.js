import React from 'react'
import {Routes, Route} from "react-router-dom"
import Compared from './Compared/Compared'
import Main from './Main/Main'
import Results from './Results/Results'




const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route> 
      <Route path="/results/:result" element={<Results />}></Route> 
      <Route path="/compared/" element={<Compared />}></Route> 
    </Routes>
  )
}

export default Pages