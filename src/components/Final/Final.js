import React from 'react'
import Box from '../Box/Box'
import justice from "../../images/justice.gif"
import {Link} from "react-router-dom"

const Final = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
        <Box style={{alignSelf:"center"}} title={"Let's save the planet..."} text={"Truth is, if we want to save the planet we should travel less"}
        result={"We should walk more and enjoy the planet"} image={justice} sub={<Link style={{textDecoration:"none", color:"black"}} to={"/"}>Home</Link>}/>
    </div>
  )
}

export default Final