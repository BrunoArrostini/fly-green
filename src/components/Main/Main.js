import React from 'react'
import "../../App.css"
import { Wrapper, Container, Title, TripWrapper, OneWay, Roundtrip, Form, Departure, Destination, PassengerCounter, FormContainer, Btn} from './main.styled' 
import { useState, useEffect} from 'react'
//import axios from 'axios'
import codes from "../../airport.json"
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'


const Main = () => {

  const [oneWayisHeld, setOneWayIsHeld] = useState(true);
  const [roundTripIsHeld, setRoundTripIsHeld] = useState(false);
  //const [segment, setSegment] = useState(1);
  const [passeng, setPasseng] = useState([]);  
  
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      departure:"",
      destination:"",
      passnum:""
    },
    onSubmit: values=>{
      navigate(+values.departure + values.destination)
    }
  })

  const pass = []
  for(let i = 0; i <= 300; i ++){
    pass.push(i);
  }

  useEffect(()=>{
    setPasseng(pass)
    // eslint-disable-next-line
  },[])

  const holdButton = () => {
    setOneWayIsHeld(oneWayisHeld => !oneWayisHeld);
    setRoundTripIsHeld(roundTripIsHeld => !roundTripIsHeld);
    //setSegment(oneWayisHeld ? 0 : 1);
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
           <Form onSubmit={formik.handleSubmit}>
             <label htmlFor="departure">Departure</label>
             <Departure
             name="departure"
             value={formik.values.departure}
             onChange={formik.handleChange}
             >
              {codes.map((code=> <option value={code.code}>{code.city} ({code.country})</option>))}
             </Departure>  
             <br/>
             <label htmlFor="destination">Destination</label>
             <Destination
             name="passnum"
             value={formik.values.passnum}
             onChange={formik.handleChange}
             >
              {codes.map((code=> <option value={code.code}>{code.city} ({code.country}) </option>))}
             </Destination>
             <br/>
             <label htmlFor="passengers">Passengers nr.</label>
             <PassengerCounter
             name="passnum"
             value={formik.values.passnum}
             onChange={formik.handleChange}
             > 
             {passeng.map((pas=> <option value={pas}>{pas}</option>))}
             </PassengerCounter>
             <br/>
             <Btn onClick={formik.handleSubmit}>Calculate Footprint</Btn>
           </Form>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default Main