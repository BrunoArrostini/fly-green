import React from 'react'
import { BoxInfo, Container } from './box.styled'
import { BtnLearn } from '../Results/results.styled'

const Box = ({title, text, result, image, func, resultTot, sub}) => {
  return (
    <Container>
        <BoxInfo>
            <h2>{title}</h2>
            <div><p>{text}</p></div>
            <div><p>{result}</p></div>
            <div><p>{resultTot}</p></div>
            <div> <img src={image} alt=""></img></div>
        </BoxInfo>
        <BtnLearn onClick={func}>{sub}</BtnLearn>
    </Container>
  )
}

export default Box


