import React from 'react'
import "../../App.css"
import { Wrapper, Container, Title, TripWrapper, OneWay, Roundtrip, Form, Departure, Destination, PassengerCounter, FormContainer, Btn} from './main.styled' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import codes from "../../airport.json"

const Main = () => {

  const [oneWayisHeld, setOneWayIsHeld] = useState(true);
  const [roundTripIsHeld, setRoundTripIsHeld] = useState(false);
  const [segment, setSegment] = useState(1);

  const holdButton = () => {
    setOneWayIsHeld(oneWayisHeld => !oneWayisHeld);
    setRoundTripIsHeld(roundTripIsHeld => !roundTripIsHeld);
    setSegment(oneWayisHeld ? 0 : 1);
  };

  //const fetchFootprint = async () => {
   // const res = await axios.get(`https://api.goclimate.com/v1/flight_footprint/YOUR_API_KEY:${process.env.REACT_APP_API_KEY}/'segments[${segment}][origin]=${Departure}'/'segments[${segment}][destination]=${Destination}`)
    //console.log(res.data.code)
  //}

 
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
             <Departure> 
                {codes.map(code =>{
                  return(
                    <option value={code.code}>{code.city} ({code.country})</option>
                  )
                })}
             </Departure>
             <br/>
             <label htmlFor="destination">Destination</label>
             <Destination>
             {codes.map(code =>{
                  return(
                    <option value={code.code}>{code.city} ({code.code})</option>
                  )
                })}
             </Destination>
             <br/>
             <label htmlFor="passengers">Passengers nr.</label>
             <PassengerCounter ></PassengerCounter>
             <br/>
             <Btn>Calculate Footprint</Btn>
           </Form>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default Main