import React from 'react'
import "../App.css"
import { Wrapper, Container, Title, TripWrapper, OneWay, Roundtrip, Form, Departure, Destination, PassengerCounter, FormContainer} from './styles/main.styled' 

const Main = (props) => {

  const [oneWayisHeld, setOneWayIsHeld] = React.useState(true)
  const [roundTripIsHeld, setRoundTripIsHeld] = React.useState(false)

  const holdButton = () => {
    setOneWayIsHeld(oneWayisHeld => !oneWayisHeld);
    setRoundTripIsHeld(roundTripIsHeld => !roundTripIsHeld)
  };

  return (
    <Wrapper>
      <Container>
        <Title>Trip details</Title>
        <TripWrapper>
          <OneWay onClick={holdButton} className={oneWayisHeld ? "held" : "no-held"}>One way</OneWay>
          <Roundtrip onClick={holdButton} className={roundTripIsHeld ? "held" : "no-held"} >Roundtrip</Roundtrip>
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
             ></PassengerCounter>
             <br/>
           </Form>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default Main