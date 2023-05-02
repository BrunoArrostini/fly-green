import React from 'react'
import { Wrapper, Container, Title, TripWrapper, OneWay, Roundtrip, Form, Departure, Destination, PassengerCounter, FormContainer} from './styles/main.styled' 

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Your trip details</Title>
        <TripWrapper>
          <OneWay></OneWay>
          <Roundtrip></Roundtrip>
        </TripWrapper>
        <FormContainer>
           <Form>
             <Departure></Departure>
             <Destination></Destination>
             <PassengerCounter></PassengerCounter>
           </Form>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default Main