import React from 'react'
import {Routes, Route} from "react-router-dom"
import Compared from './Compared/Compared'
import Final from './Final/Final'
import Main from './Main/Main'
import Results from './Results/Results'
import TrainCompared from './TrainCompared/TrainCompared'




const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route> 
      <Route path="/results/:result" element={<Results />}></Route> 
      <Route path="/compared/:pass" element={<Compared />}></Route> 
      <Route path="/train/:each" element={<TrainCompared />}></Route>
      <Route path="/final/" element={<Final/>}></Route> 
    </Routes>
  )
}

export default Pages