import React from 'react'
import { BoxInfo } from './box.styled'

const Box = ({title, icon, text, result, image}) => {
  return (
    <div>
        <BoxInfo>
            <div style={{padding:"10px", display:"flex", alignItems:"center"}}> <h2>{title}</h2> {icon}</div>
            <div style={{padding:"10px"}}><p>{text}</p></div>
            <div style={{padding:"10px"}}><p>{result}</p></div>
            <div> <img src={image} style={{width:"300px", height:"150px", borderRadius:"15px"}} alt=""></img></div>
        </BoxInfo>
    </div>
  )
}

export default Box


