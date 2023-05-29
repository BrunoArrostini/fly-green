import React from 'react'
import Chart from '../Chart'
import { Container, Title, SubText, View } from './final.styled'
import BasicGrid from '../Grid'

const Final = () => {
  return (
    <Container>
        <Title></Title>
        <Chart/>
        <SubText>This Pie chart shows the companies that polluted more in 2022</SubText>
        <View></View>
        <BasicGrid/>
    </Container>
  )
}

export default Final