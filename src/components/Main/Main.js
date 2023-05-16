import React from 'react'
import "../../App.css"
import { Wrapper, Container, Title, TripWrapper, OneWay, Roundtrip, Form, Departure, Destination, PassengerCounter, FormContainer, Btn} from './main.styled' 
import { useState, useEffect} from 'react'
import codes from "../../airport.json"
import { useFormik } from 'formik'
import { useNavigate} from 'react-router-dom'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';

const Main = () => {

  const [oneWayisHeld, setOneWayIsHeld] = useState(true);
  const [roundTripIsHeld, setRoundTripIsHeld] = useState(false);
  const [dep, setDep] = useState([]);
  const [des, setDes] = useState([]);
  const [segment, setSegment] = useState(1);
  const [passeng, setPasseng] = useState([]);  
  
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues:{
      departure:"",
      destination:"",
      passnum:""
    },
    onSubmit: values=>{
      navigate("/results/" + values.departure + values.destination + values.passnum + segment)
    }
  })

  const pass = []
  for(let i = 0; i <= 300; i ++){
    pass.push(i);
  }

  useEffect(()=>{
    setPasseng(pass);
    setDep(codes);
    setDes(codes);
     //eslint-disable-next-line
  },[])

  const holdButton = () => {
    setOneWayIsHeld(oneWayisHeld => !oneWayisHeld);
    setRoundTripIsHeld(roundTripIsHeld => !roundTripIsHeld);
    setSegment(oneWayisHeld ? 0 : 1);
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
           <Form onSubmit={formik.handleSubmit}>
             <label htmlFor="departure">Departure <FlightTakeoffIcon /> </label>
             <Departure
             name="departure"
             value={formik.values.departure}
             onChange={formik.handleChange}
             >
              {dep.map((code=> <option value={code.code} key={code.code}>{code.city} ({code.country})</option>))}
             </Departure>  
             <br/>
             <label htmlFor="destination">Destination <FlightLandIcon /> </label>
             <Destination
             name="destination"
             value={formik.values.destination}
             onChange={formik.handleChange}
             >
              {des.map((code=> <option value={code.code} key={code.code}>{code.city} ({code.country}) </option>))}
             </Destination>
             <br/>
             <label htmlFor="passengers">Passengers nr.</label>
             <PassengerCounter
             name="passnum"
             value={formik.values.passnum}
             onChange={formik.handleChange}
             > 
             {passeng.map((pas=> <option value={pas} key={pas}>{pas}</option>))}
             </PassengerCounter>
             <br/>
             <Btn onSubmit={formik.handleSubmit}>Calculate Footprint</Btn>
           </Form>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default Main