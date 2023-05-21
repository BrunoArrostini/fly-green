import React from 'react'
import { BoxInfo, Container } from './box.styled'

const Box = ({title, icon, text, result, image}) => {
  return (
    <Container>
        <BoxInfo>
            <h2>{title}</h2>
            <div> {icon}</div>
            <div><p>{text}</p></div>
            <div><p>{result}</p></div>
            <div> <img src={image} alt=""></img></div>
        </BoxInfo>
    </Container>
  )
}

export default Box


