import React from 'react'
import { Container, Title, SubText } from './final.styled'
import BasicGrid from '../Charts/Grid'
import { BtnLearn } from '../Results/results.styled'
import { Link } from 'react-router-dom'
import Chart from '../Charts/Chart'
import rafs from "../../images/rafs.gif"

const Final = () => {
  return (
    <Container>
        <img src={rafs} alt="" style={{width:"100px"}}></img>
        <Title>Airline companies emissions in 2022</Title>
        <Chart/>
        <SubText>Type on Pie chart to see emisisons</SubText>
        <Title>Overview</Title>
        <BasicGrid/>
        <SubText>This list shows which destination pollute less, <br/>
        Romania is on the top with 59 tones
        </SubText>
        <Link style={{textDecoration:"none", color:"black"}} to={"/"}><BtnLearn style={{marginBottom:"10px"}}>Home</BtnLearn></Link>
    </Container>
  )
}

export default Final