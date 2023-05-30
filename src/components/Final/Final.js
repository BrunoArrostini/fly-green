import React from 'react'
import { Container, Title, SubText } from './final.styled'
import BasicGrid from '../Grid'
import { BtnLearn } from '../Results/results.styled'
import { Link } from 'react-router-dom'
import Chart from '../Chart'
import rafs from "../../images/rafs.gif"

const Final = () => {
  return (
    <Container>
        <img src={rafs} alt="" style={{width:"100px"}}></img>
        <Title>Airline companies emissions</Title>
        <Chart/>
        <SubText>Type on Pie chart to see emisisons</SubText>
        <Title>Overview</Title>
        <BasicGrid/>
        <SubText>This list shows which destination countries pollute less, <br/>
        Romania is on the top with 59 tones
        </SubText>
        <BtnLearn style={{marginBottom:"10px"}}><Link style={{textDecoration:"none", color:"black"}} to={"/"}>Home</Link></BtnLearn>
    </Container>
  )
}

export default Final