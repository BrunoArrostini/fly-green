import React from 'react'
import { Wrapper, Container, Title, TripWrapper, OneWay, Roundtrip, Form, Departure, Destination, PassengerCounter, FormContainer} from './styles/main.styled' 

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Trip details</Title>
        <TripWrapper>
          <OneWay>One way</OneWay>
          <Roundtrip>Roundtrip</Roundtrip>
        </TripWrapper>
        <FormContainer>
           <Form>
             <label htmlFor="departure">Departure</label>
             <Departure></Departure>
             <br/>
             <label htmlFor="destination">Destination</label>
             <Destination></Destination>
             <br/>
             <label htmlFor="passengers">Passengers</label>
             <PassengerCounter 
             type="select"
             ></PassengerCounter>
             <br/>
           </Form>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default Main